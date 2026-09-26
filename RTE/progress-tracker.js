
/* PulmoLearn RTE progress tracker + lesson shell v2.0 */
(function(g){
'use strict';
const V='2.0.0', FLUSH=30, IDLE=60000;
const S={id:'',bridge:null,pending:0,last:Date.now(),lastInteraction:Date.now(),timer:null,completed:false,progress:0,returnUrl:'',returnLabel:'Dashboard'};
const $=s=>document.querySelector(s);
function id(){const m=(document.body?.dataset.lessonId||location.pathname||document.title).toUpperCase().match(/\b([A-Z0-9]+-\d{2})\b/);return m?m[1]:''}
function registry(){return g.RTE_LESSON_REGISTRY||g.PulmoRTERegistry||g.RTERegistry||null}
function lesson(){return registry()?.lessons?.find(x=>x.id===S.id)||null}
function safeReturn(u){try{const x=new URL(u,location.origin);return x.origin===location.origin&&x.pathname.startsWith('/RTE')?x.pathname+x.search+x.hash:'/RTE/'}catch(e){return '/RTE/'}}
function captureReturn(){const q=new URLSearchParams(location.search), from=q.get('from')||sessionStorage.getItem('rte:return:url')||document.referrer;S.returnUrl=safeReturn(from);const view=q.get('view')||sessionStorage.getItem('rte:return:label');S.returnLabel=view?('Back to '+view):'Back to RTE';}
function shell(){
 document.body.classList.add('rte-shell-mounted');
 const h=document.createElement('div');h.className='rte-shell';h.innerHTML=`<div class="rte-shell__row"><div class="rte-shell__brand">Pulmo<span>Learn</span> RTE</div><div class="rte-shell__meta" id="rteShellMeta"></div><div class="rte-shell__spacer"></div><button class="rte-shell__btn" id="rteBack" type="button">← <span class="rte-wide">${S.returnLabel.replace(/^Back to /,'')}</span><span class="rte-mobile">Back</span></button><button class="rte-shell__btn" id="rteMenuBtn" type="button" aria-expanded="false" aria-controls="rteShellMenu">☰</button></div><div class="rte-shell__progress"><div id="rteShellBar"></div></div>`;
 document.body.prepend(h);
 const menu=document.createElement('div');menu.id='rteShellMenu';menu.className='rte-shell__menu';menu.innerHTML=`<a href="/RTE/">RTE dashboard</a><a href="/RTE/?view=progress">My progress</a><button type="button" id="rteRestart">Restart this lesson</button>`;document.body.append(menu);
 const toast=document.createElement('div');toast.id='rteToast';toast.className='rte-toast';toast.setAttribute('aria-live','polite');document.body.append(toast);
 $('#rteBack').onclick=()=>{flush();location.href=S.returnUrl};
 $('#rteMenuBtn').onclick=()=>{menu.classList.toggle('open');$('#rteMenuBtn').setAttribute('aria-expanded',menu.classList.contains('open'))};
 $('#rteRestart').onclick=()=>{const old=document.getElementById('resetBtn')||document.getElementById('reset'); if(old){old.click()}else location.reload()};
 const l=lesson(); $('#rteShellMeta').textContent=l?l.topic:'';
}
function toast(msg){const t=$('#rteToast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(t._x);t._x=setTimeout(()=>t.classList.remove('show'),3200)}
function report(seconds){seconds=Math.max(0,Math.round(+seconds||0));if(!seconds)return;S.pending+=seconds;if(S.pending>=FLUSH)flush()}
function flush(){if(!S.pending||!S.id||!g.PulmoRTE)return;const n=S.pending;S.pending=0;g.PulmoRTE.recordActivity({lessonId:S.id,activeSeconds:n});g.PulmoRTE.evaluateCurrentGoal?.()}
function setProgress(p){p=Math.max(0,Math.min(100,Math.round(+p||0)));S.progress=Math.max(S.progress,p);$('#rteShellBar')?.style.setProperty('width',S.progress+'%');if(g.PulmoRTE)g.PulmoRTE.setLessonProgress(S.id,S.progress)}
function complete(){if(S.completed)return;S.completed=true;setProgress(100);flush();if(g.PulmoRTE){g.PulmoRTE.awardTopicMilestones?.(registry());const pts=g.PulmoRTE.totalPoints?.();toast('Lesson complete'+(Number.isFinite(pts)?' • '+pts+' total points':'')+'. Progress saved.')}else toast('Lesson complete.');document.dispatchEvent(new CustomEvent('pulmolearn:rte-lesson-complete',{detail:{lessonId:S.id}}))}
function infer(){
 const old=document.querySelector('header.top #bar, header.top .bar, #bar');
 if(old){const w=parseFloat(old.style.width);if(Number.isFinite(w))setProgress(w)}
 const finish=$('#finish');
 if(finish){const cs=getComputedStyle(finish),visible=cs.display!=='none'&&cs.visibility!=='hidden'&&!finish.classList.contains('gated')&&!finish.hidden;if(visible)setProgress(100)}
 // common local state completion is detected by visible finish panel, avoiding interference with lesson logic.
}
function timer(){
 ['pointerdown','touchstart','keydown','scroll'].forEach(ev=>document.addEventListener(ev,()=>S.lastInteraction=Date.now(),{passive:true}));
 S.last=Date.now();S.timer=setInterval(()=>{const n=Date.now(),dt=n-S.last;S.last=n;if(!document.hidden&&!S.completed&&n-S.lastInteraction<IDLE)report(dt/1000);infer()},1000);
 document.addEventListener('visibilitychange',()=>{S.last=Date.now();if(document.hidden)flush()});addEventListener('pagehide',flush);addEventListener('beforeunload',flush);
}
function observe(){new MutationObserver(infer).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class','style','hidden']})}
function init(){S.id=id();if(!S.id)return;document.body.dataset.lessonId=S.id;captureReturn();try{S.bridge=g.PulmoRTELesson?.init?.({lessonId:S.id,fallbackTimer:false})||null}catch(e){console.warn('RTE bridge init:',e)}shell();timer();observe();infer()}
g.RTEProgress={version:V,init,reportActiveSeconds:report,setProgress,complete,flush,get lessonId(){return S.id}};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})(window);
