/* PulmoLearn RTE Learner Engine v1.0
   Goal/activity/streak/points layer. Browser-safe, Supabase-adapter ready.
*/
(function (global) {
  'use strict';
  const VERSION='1.0.0';
  const STORE='pulmolearn:rte:learner:v1';
  const MIN_DAILY_DAYS=3;
  const POINTS={
    // normalized to ~84 base points per 28 days when cadence is fully met
    dailyGoal:3, weeklyGoal:21, monthlyGoal:84,
    activeMinutesBlock:15, activeMinutesPoint:1, activeMinutesMonthlyCap:20,
    topicCompleteDefault:75, nbrcSectionCompleteDefault:50,
    allLessonsComplete:500
  };
  const nowISO=()=>new Date().toISOString();
  const uid=()=> (crypto&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const blank=()=>({version:VERSION,goal:null,goalHistory:[],activity:[],goalAwards:[],pointEvents:[],lessonProgress:{},leaderboard:{optIn:false,initials:''}});
  function load(){try{return {...blank(),...JSON.parse(localStorage.getItem(STORE)||'{}')}}catch(e){return blank()}}
  function save(s){localStorage.setItem(STORE,JSON.stringify(s));return s}
  function validateGoal(g){
    const errors=[]; const cadence=g?.cadence;
    if(!['daily','weekly','monthly'].includes(cadence)) errors.push('Choose Daily, Weekly, or Monthly.');
    if(!Number.isFinite(+g?.targetMinutes)||+g.targetMinutes<1) errors.push('Choose at least 1 active-learning minute.');
    if(cadence==='daily' && (!Array.isArray(g.studyDays)||new Set(g.studyDays).size<MIN_DAILY_DAYS)) errors.push('Daily goals require at least 3 study days each week.');
    return {valid:!errors.length,errors};
  }
  function setGoal(goal){
    const v=validateGoal(goal); if(!v.valid) throw new Error(v.errors.join(' '));
    const s=load(); if(s.goal) s.goalHistory.push({...s.goal,endedAt:nowISO()});
    s.goal={id:uid(),cadence:goal.cadence,targetMinutes:+goal.targetMinutes,studyDays:[...new Set(goal.studyDays||[])],startedAt:nowISO(),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone};
    return save(s).goal;
  }
  function recordActivity({lessonId,activeSeconds=0,occurredAt=nowISO(),sessionId=uid()}){
    const s=load(); const seconds=Math.max(0,Math.round(+activeSeconds||0));
    if(!seconds) return s;
    s.activity.push({id:uid(),sessionId,lessonId:String(lessonId||''),activeSeconds:seconds,occurredAt}); save(s); return s;
  }
  function setLessonProgress(lessonId,percent){
    const s=load(), p=Math.max(0,Math.min(100,Math.round(+percent||0))); const prior=s.lessonProgress[lessonId]||{};
    s.lessonProgress[lessonId]={percent:p,completed:p>=100,updatedAt:nowISO(),completedAt:p>=100?(prior.completedAt||nowISO()):null}; save(s); return s.lessonProgress[lessonId];
  }
  const localDate=d=>{const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`};
  const monday=d=>{let x=new Date(d);x.setHours(0,0,0,0);let day=(x.getDay()+6)%7;x.setDate(x.getDate()-day);return localDate(x)};
  const monthKey=d=>localDate(d).slice(0,7);
  function periodKey(cadence,d=new Date()){return cadence==='daily'?localDate(d):cadence==='weekly'?monday(d):monthKey(d)}
  function periodMinutes(cadence,key,s=load()){
    return Math.floor(s.activity.filter(a=>periodKey(cadence,new Date(a.occurredAt))===key).reduce((n,a)=>n+a.activeSeconds,0)/60);
  }
  function scheduledToday(goal,d=new Date()){return goal?.cadence!=='daily'||goal.studyDays.includes(d.getDay())}
  function basePoints(c){return c==='daily'?POINTS.dailyGoal:c==='weekly'?POINTS.weeklyGoal:POINTS.monthlyGoal}
  function award(type,points,meta={}){
    const s=load(); const dedupe=meta.dedupeKey;
    if(dedupe && s.pointEvents.some(e=>e.dedupeKey===dedupe)) return null;
    const e={id:uid(),type,points,createdAt:nowISO(),...meta}; s.pointEvents.push(e); save(s); return e;
  }
  function evaluateCurrentGoal(d=new Date()){
    let s=load(), g=s.goal; if(!g) return {status:'no-goal'};
    const key=periodKey(g.cadence,d), minutes=periodMinutes(g.cadence,key,s), met=minutes>=g.targetMinutes;
    const eligible=g.cadence!=='daily'||scheduledToday(g,d);
    const dedupeKey=`goal:${g.id}:${g.cadence}:${key}`;
    let event=null;
    if(eligible&&met&&!s.goalAwards.includes(dedupeKey)){
      event=award('goal_met',basePoints(g.cadence),{dedupeKey,cadence:g.cadence,period:key});
      s=load(); s.goalAwards.push(dedupeKey); save(s);
    }
    return {status:met?'met':'in-progress',cadence:g.cadence,key,minutes,targetMinutes:g.targetMinutes,remaining:Math.max(0,g.targetMinutes-minutes),eligible,award:event};
  }
  function totalPoints(){return load().pointEvents.reduce((n,e)=>n+(+e.points||0),0)}
  function setLeaderboard({optIn,initials}){const s=load();s.leaderboard={optIn:!!optIn,initials:String(initials||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,3)};save(s);return s.leaderboard}
  function milestoneProgress(registry){
    const s=load(), lessons=registry?.lessons||[], topics=registry?.topics||[];
    const byTopic=topics.map(t=>{const ids=lessons.filter(l=>l.topicCode===t.code).map(l=>l.id);const done=ids.filter(id=>s.lessonProgress[id]?.completed).length;return {code:t.code,title:t.title,total:ids.length,completed:done,percent:ids.length?Math.round(done/ids.length*100):0};});
    return byTopic;
  }
  function awardTopicMilestones(registry){
    const events=[]; for(const t of milestoneProgress(registry)){if(t.total&&t.completed===t.total){const e=award('topic_complete',POINTS.topicCompleteDefault,{dedupeKey:`topic:${t.code}:complete`,topicCode:t.code});if(e)events.push(e)}}
    const s=load(); if((registry?.lessons||[]).length && (registry.lessons||[]).every(l=>s.lessonProgress[l.id]?.completed)){const e=award('all_lessons_complete',POINTS.allLessonsComplete,{dedupeKey:'rte:all-lessons:complete'});if(e)events.push(e)} return events;
  }
  function summary(registry){const s=load();return {goal:s.goal,currentGoal:evaluateCurrentGoal(),points:totalPoints(),lessonProgress:s.lessonProgress,leaderboard:s.leaderboard,topics:registry?milestoneProgress(registry):[]}}
  global.PulmoRTE={VERSION,POINTS,MIN_DAILY_DAYS,load,setGoal,validateGoal,recordActivity,setLessonProgress,evaluateCurrentGoal,totalPoints,award,awardTopicMilestones,milestoneProgress,setLeaderboard,summary};
})(window);
