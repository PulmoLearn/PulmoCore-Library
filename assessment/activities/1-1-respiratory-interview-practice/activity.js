(()=>{
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const state={step:0,typeDone:false,guided:{asked:new Set(),data:{},reviewed:false,complete:false},complex:{asked:new Set(),data:{},reviewed:false,complete:false},lockedAttempts:0};
const steps=$$('.activity-step'), nav=$$('.step-btn');
function showStep(n){state.step=n;steps.forEach((s,i)=>s.classList.toggle('active',i===n));nav.forEach((b,i)=>b.classList.toggle('active',i===n));window.scrollTo({top:0,behavior:'smooth'});updateProgress();}
nav.forEach((b,i)=>b.onclick=()=>{if(i===0||i<=maxUnlocked())showStep(i);else alert('Complete the current section before moving ahead.');});
function maxUnlocked(){if(state.complex.complete)return 3;if(state.guided.complete)return 2;if(state.typeDone)return 1;return 0;}
function updateProgress(){let p=0;if(state.typeDone)p+=15;if(state.guided.complete)p+=30;if(state.complex.complete)p+=45;if(state.step===3&&state.complex.complete)p=100;$('#overallProgress').textContent=p+'%';$('#overallProgressBar').style.width=p+'%';}

$$('#typeCheck button').forEach(btn=>btn.onclick=()=>{const ok=btn.dataset.answer==='focused';$$('#typeCheck button').forEach(b=>b.classList.remove('correct','incorrect'));btn.classList.add(ok?'correct':'incorrect');const f=$('#typeFeedback');f.className='feedback '+(ok?'good':'warn');f.innerHTML=ok?'<strong>Correct.</strong> A focused follow-up clarifies onset, change, triggers, severity, or functional effect without assuming the cause.':'<strong>Try again.</strong> The patient has given a vague respiratory complaint. Your next question should clarify the complaint before moving to unrelated details or documentation.';if(ok){state.typeDone=true;$('#startGuided').disabled=false;updateProgress();}});
$('#startGuided').onclick=()=>showStep(1);

const guidedQuestions=[
 {group:'Opening & current status',items:[
  {id:'g_current',text:'Are you having any trouble with your breathing right now?',answer:'No. My breathing feels normal.',fills:{current:'Denies current shortness of breath or breathing difficulty.'}},
  {id:'g_cough',text:'Have you been coughing?',answer:'No.',fills:{cough:'Denies cough.'}},
 ]},
 {group:'Respiratory history & home therapies',items:[
  {id:'g_lungdx',text:'Have you ever been diagnosed with asthma, COPD, or another lung condition?',answer:'No.',fills:{history:'No known chronic respiratory diagnosis.'}},
  {id:'g_meds',text:'Do you use inhalers, nebulizers, or other breathing medications at home?',answer:'No.',fills:{meds:'No home respiratory medications reported.'}},
  {id:'g_oxygen',text:'Do you use oxygen or any breathing equipment at home?',answer:'No.',fills:{home:'No home oxygen or respiratory equipment reported.'}},
  {id:'g_oxygen_flow',text:'What oxygen flow rate do you use at home?',requires:['g_oxygen_yes'],lockedMessage:'First establish whether the patient uses home oxygen before asking for a flow rate.'},
 ]},
 {group:'Tobacco, vaping & exposure history',items:[
  {id:'g_smoke',text:'Have you ever smoked cigarettes?',answer:'No.',fills:{smoke:'Never smoked cigarettes.'}},
  {id:'g_smoke_amount',text:'About how many packs per day did you smoke?',requires:['g_smoke_yes'],lockedMessage:'First establish whether the patient has ever smoked cigarettes.'},
  {id:'g_vape',text:'Have you ever used vaping or electronic-cigarette products?',answer:'No.',fills:{vape:'No vaping/e-cigarette use reported.'}},
  {id:'g_exposure',text:'Do you have regular exposure to dust, fumes, smoke, chemicals, or other respiratory irritants at work or home?',answer:'No significant exposures that I know of.',fills:{exposure:'No significant occupational/environmental respiratory exposure reported.'}},
 ]},
 {group:'Baseline function',items:[
  {id:'g_function',text:'What activities can you normally do without becoming short of breath?',answer:'I exercise a few times a week and can climb stairs without stopping because of my breathing.',fills:{baseline:'Normal activity tolerance; exercises and climbs stairs without respiratory limitation.'}},
 ]},
 {group:'Current objective respiratory data',items:[
  {id:'g_rr',text:'Measure the respiratory rate.',answer:'Respiratory rate is 14/min, regular and unlabored.',fills:{rr:'14/min, regular and unlabored.'},objective:true},
  {id:'g_spo2',text:'Measure pulse oximetry and verify oxygen support.',answer:'SpO₂ is 98% on room air.',fills:{spo2:'98% on room air.'},objective:true},
  {id:'g_bs',text:'Listen to breath sounds.',answer:'Breath sounds are clear bilaterally.',fills:{bs:'Clear bilaterally.'},objective:true},
 ]}
];
const guidedRequired=['current','cough','history','meds','home','smoke','vape','exposure','baseline','rr','spo2','bs'];

const complexQuestions=[
 {group:'Current symptoms',items:[
  {id:'c_current',text:'Are you having any trouble with your breathing right now?',answer:'Not right now. I feel okay sitting here.',fills:{current:'Denies dyspnea at rest.'}},
  {id:'c_change',text:'Has your breathing been different from usual recently?',answer:'A little. My asthma has been acting up more this week.',fills:{change:'Reports increased asthma symptoms this week.'},unlocks:['c_change_when','c_change_trigger','c_change_function']},
  {id:'c_change_when',text:'When did you first notice the change?',requires:['c_change'],answer:'About five days ago.',fills:{change_onset:'Change began about 5 days ago.'}},
  {id:'c_change_trigger',text:'What seems to bring the symptoms on or make them worse?',requires:['c_change'],answer:'Mostly being outside around pollen and when I hurry up the stairs.',fills:{change_triggers:'Worse with pollen exposure and exertion.'}},
  {id:'c_change_function',text:'Is the change affecting what you can normally do?',requires:['c_change'],answer:'A little. I pause at the top of the stairs now, but I can still do my normal activities.',fills:{function_change:'Mild decline from usual stair tolerance this week.'}},
 ]},
 {group:'Cough & sputum',items:[
  {id:'c_cough',text:'Have you been coughing?',answer:'A little more than usual, mostly dry.',fills:{cough:'Mild increase in mostly dry cough.'},unlocks:['c_sputum']},
  {id:'c_sputum',text:'Are you coughing up any mucus or sputum?',requires:['c_cough'],answer:'No, it is dry.',fills:{sputum:'Denies sputum production.'}},
  {id:'c_sputum_color',text:'What color is the sputum?',requires:['c_sputum_positive'],lockedMessage:'First establish whether the cough is productive before asking about sputum color.'},
 ]},
 {group:'Asthma verification & follow-up',items:[
  {id:'c_asthma_verify',text:'I see asthma listed in your chart. Is that correct?',answer:'Yes.',fills:{asthma_verified:'Asthma history verified.'},unlocks:['c_asthma_symptoms','c_asthma_frequency','c_asthma_trigger','c_asthma_night','c_asthma_recent']},
  {id:'c_asthma_symptoms',text:'What symptoms do you usually notice when your asthma bothers you?',requires:['c_asthma_verify'],answer:'Usually chest tightness and a little wheezing.',fills:{asthma_symptoms:'Typical symptoms: chest tightness and wheezing.'}},
  {id:'c_asthma_frequency',text:'How often do you usually have asthma symptoms?',requires:['c_asthma_verify'],answer:'Usually only once or twice a month.',fills:{asthma_baseline:'Baseline symptoms about 1–2 times/month.'}},
  {id:'c_asthma_trigger',text:'What usually triggers your asthma symptoms?',requires:['c_asthma_verify'],answer:'Seasonal allergies and sometimes exercise.',fills:{asthma_triggers:'Seasonal allergies and exercise.'}},
  {id:'c_asthma_night',text:'Do your breathing symptoms wake you at night?',requires:['c_asthma_verify'],answer:'Not usually. Maybe once this week.',fills:{asthma_night:'Usually no nocturnal symptoms; woke once this week.'}},
  {id:'c_asthma_recent',text:'Have your asthma symptoms been more frequent than usual recently?',requires:['c_asthma_verify'],answer:'Yes, definitely this week.',fills:{asthma_change:'Asthma symptoms more frequent than baseline this week.'}},
 ]},
 {group:'Home respiratory medications',items:[
  {id:'c_rescue',text:'Do you currently use a rescue inhaler?',answer:'Yes.',fills:{rescue_confirmed:'Uses a rescue inhaler.'},unlocks:['c_med_name','c_med_dose','c_med_rx','c_med_actual','c_med_last','c_med_response']},
  {id:'c_med_name',text:'What is the name of the rescue inhaler?',requires:['c_rescue'],answer:'Albuterol.',fills:{med_name:'Albuterol inhaler.'}},
  {id:'c_med_dose',text:'How many puffs do you take when you use it?',requires:['c_rescue'],answer:'Two puffs.',fills:{med_dose:'2 puffs per use.'}},
  {id:'c_med_rx',text:'How often are you supposed to use it?',requires:['c_rescue'],answer:'Every four to six hours as needed for wheezing.',fills:{med_rx:'Every 4–6 hours as needed for wheezing.'}},
  {id:'c_med_actual',text:'How often do you actually use it?',requires:['c_rescue'],answer:'Usually once or twice a month, but I have used it about once a day for the last five days.',fills:{med_actual:'Baseline 1–2 times/month; about once daily for the past 5 days.'}},
  {id:'c_med_last',text:'When did you last use the inhaler?',requires:['c_rescue'],answer:'Last night.',fills:{med_last:'Last albuterol use: last night.'}},
  {id:'c_med_response',text:'Does the inhaler usually relieve your symptoms?',requires:['c_rescue'],answer:'Yes, the tightness and wheezing usually improve within a few minutes.',fills:{med_response:'Reports usual relief after albuterol.'}},
 ]},
 {group:'Sleep apnea & CPAP',items:[
  {id:'c_cpap_verify',text:'Your chart says you use CPAP at night. Is that still correct?',answer:'Yes.',fills:{cpap_verified:'Uses nasal CPAP at night.'},unlocks:['c_cpap_use','c_cpap_tolerance','c_cpap_brought']},
  {id:'c_cpap_use',text:'Do you use your CPAP every night?',requires:['c_cpap_verify'],answer:'Pretty much every night.',fills:{cpap_use:'Reports near-nightly CPAP use.'}},
  {id:'c_cpap_tolerance',text:'Are you usually able to tolerate the CPAP?',requires:['c_cpap_verify'],answer:'Yes, I sleep better with it.',fills:{cpap_tolerance:'Tolerates CPAP and reports benefit.'}},
  {id:'c_cpap_brought',text:'Did you bring your CPAP with you?',requires:['c_cpap_verify'],answer:'Yes, my wife brought it with my bag.',fills:{cpap_brought:'Home CPAP is available at the hospital.'}},
 ]},
 {group:'Smoking history',items:[
  {id:'c_smoke_ever',text:'Have you ever smoked cigarettes?',answer:'Yes.',fills:{smoke_status:'Positive cigarette-smoking history.'},unlocks:['c_smoke_current','c_smoke_amount','c_smoke_years']},
  {id:'c_smoke_current',text:'Do you currently smoke cigarettes?',requires:['c_smoke_ever'],answer:'No, I quit.',fills:{smoke_current:'Former smoker.'},unlocks:['c_smoke_quit']},
  {id:'c_smoke_amount',text:'About how many packs per day did you smoke?',requires:['c_smoke_ever'],answer:'About one pack a day.',fills:{smoke_amount:'About 1 pack/day.'}},
  {id:'c_smoke_years',text:'About how many years did you smoke?',requires:['c_smoke_ever'],answer:'About 20 years.',fills:{smoke_years:'About 20 years.'}},
  {id:'c_smoke_quit',text:'When did you quit smoking?',requires:['c_smoke_current'],answer:'Eight years ago.',fills:{smoke_quit:'Quit 8 years ago.'}},
  {id:'c_packyears',text:'Calculate the smoking pack-year history.',requires:['c_smoke_amount','c_smoke_years'],answer:'1 pack/day × 20 years = 20 pack-years.',fills:{packyears:'20 pack-years.'}},
 ]},
 {group:'Vaping & environmental exposure',items:[
  {id:'c_vape',text:'Have you ever used vaping or electronic-cigarette products?',answer:'No.',fills:{vape:'No vaping/e-cigarette use reported.'}},
  {id:'c_exposure',text:'Do you have regular exposure to dust, fumes, smoke, chemicals, mold, or other respiratory irritants at work or home?',answer:'I work in an office. Nothing unusual at work. Pollen outside definitely bothers me.',fills:{exposure:'No significant occupational exposure; seasonal pollen is a respiratory trigger.'}},
 ]},
 {group:'Baseline respiratory function',items:[
  {id:'c_baseline',text:'What can you normally do before becoming short of breath?',answer:'Normally I can walk several blocks and climb a flight of stairs without stopping.',fills:{baseline:'Usually walks several blocks and climbs one flight of stairs without stopping.'}},
  {id:'c_oxygen',text:'Do you normally use oxygen at home?',answer:'No.',fills:{oxygen:'No home oxygen use reported.'}},
 ]},
 {group:'Verify charted information',items:[
  {id:'c_allergy',text:'I see allergies to eggs and penicillin listed. Is that correct?',answer:'Yes.',fills:{allergies:'Egg and penicillin allergies verified.'}},
 ]},
 {group:'Current objective respiratory data',items:[
  {id:'c_rr',text:'Measure the respiratory rate.',answer:'Respiratory rate is 18/min, regular, with no accessory-muscle use at rest.',fills:{rr:'18/min, regular; no accessory-muscle use at rest.'},objective:true},
  {id:'c_hr',text:'Measure the pulse.',answer:'Heart rate is 82/min, regular.',fills:{hr:'82/min, regular.'},objective:true},
  {id:'c_spo2',text:'Measure pulse oximetry and verify oxygen support.',answer:'SpO₂ is 96% on room air.',fills:{spo2:'96% on room air.'},objective:true},
  {id:'c_bs',text:'Listen to breath sounds.',answer:'Breath sounds are clear at rest with a faint end-expiratory wheeze after a deep breath.',fills:{bs:'Mostly clear; faint end-expiratory wheeze with deep breath.'},objective:true},
 ]}
];
const complexRequired=['current','change','change_onset','change_triggers','function_change','cough','sputum','asthma_verified','asthma_symptoms','asthma_baseline','asthma_triggers','asthma_change','rescue_confirmed','med_name','med_dose','med_rx','med_actual','med_last','med_response','cpap_verified','cpap_use','smoke_status','smoke_current','smoke_amount','smoke_years','smoke_quit','packyears','vape','exposure','baseline','oxygen','allergies','rr','hr','spo2','bs'];

function renderQuestions(containerId,defs,which){const c=$(containerId);c.innerHTML='';defs.forEach(g=>{const wrap=document.createElement('section');wrap.className='question-group';wrap.innerHTML=`<h4>${g.group}</h4><div class="question-list"></div>`;const list=$('.question-list',wrap);g.items.forEach(q=>{const b=document.createElement('button');b.className='question-btn';b.dataset.id=q.id;b.innerHTML=`${q.text}<span class="lock" aria-hidden="true"></span>`;b.onclick=()=>askQuestion(q,b,which);list.appendChild(b);});c.appendChild(wrap);});updateLocks(which,defs);}
function requirementsMet(q,which){return !q.requires||q.requires.every(id=>state[which].asked.has(id));}
function updateLocks(which,defs){defs.flatMap(g=>g.items).forEach(q=>{const b=$(`#${which}Questions [data-id="${q.id}"]`);if(!b)return;const asked=state[which].asked.has(q.id);const unlocked=requirementsMet(q,which);b.classList.toggle('asked',asked);b.classList.toggle('locked',!unlocked&&!asked);$('.lock',b).textContent=!unlocked&&!asked?'🔒':'';});}
function askQuestion(q,b,which){const st=state[which];const defs=which==='guided'?guidedQuestions:complexQuestions;const fb=$(`#${which}Feedback`);if(st.asked.has(q.id)){fb.className='feedback info sticky-feedback';fb.innerHTML='<strong>Already asked.</strong> '+(q.answer||'This question did not add new information.');return;}if(!requirementsMet(q,which)){state.lockedAttempts++;fb.className='feedback warn sticky-feedback';fb.innerHTML='<strong>Ask another question first.</strong> '+(q.lockedMessage||'This follow-up becomes appropriate only after the earlier question establishes that the topic is relevant.');return;}st.asked.add(q.id);if(q.answer){fb.className='feedback good sticky-feedback';fb.innerHTML=`<strong>Patient:</strong> “${q.answer}”`;}else{fb.className='feedback info sticky-feedback';fb.textContent='Question asked.';}if(q.fills)Object.assign(st.data,q.fills); // dynamic branch flags
if(q.id==='g_oxygen'&&q.answer.startsWith('Yes'))st.asked.add('g_oxygen_yes');
if(q.id==='g_smoke'&&q.answer.startsWith('Yes'))st.asked.add('g_smoke_yes');
if(q.id==='c_sputum'&&q.answer.toLowerCase().includes('yes'))st.asked.add('c_sputum_positive');
updateLocks(which,defs);renderChart(which);updateProgress();}

function chartSections(which){if(which==='guided')return [
 ['Current respiratory status',[['current','Current breathing'],['cough','Cough']]],
 ['History & home therapy',[['history','Respiratory history'],['meds','Respiratory medications'],['home','Home oxygen/equipment']]],
 ['Exposure history',[['smoke','Cigarette history'],['vape','Vaping'],['exposure','Occupational/environmental exposure']]],
 ['Baseline',[['baseline','Usual activity tolerance']]],
 ['Objective data',[['rr','Respiratory rate'],['spo2','SpO₂ + oxygen support'],['bs','Breath sounds']]]
];return [
 ['Current problem',[['current','Dyspnea at rest'],['change','Recent respiratory change'],['change_onset','Onset'],['change_triggers','Triggers'],['function_change','Functional change'],['cough','Cough'],['sputum','Sputum']]],
 ['Asthma',[['asthma_verified','History verified'],['asthma_symptoms','Typical symptoms'],['asthma_baseline','Usual frequency'],['asthma_triggers','Triggers'],['asthma_change','Recent change']]],
 ['Home respiratory medications',[['rescue_confirmed','Rescue medication use'],['med_name','Medication'],['med_dose','Dose'],['med_rx','Prescribed frequency'],['med_actual','Actual use'],['med_last','Last use'],['med_response','Usual response']]],
 ['Sleep therapy',[['cpap_verified','CPAP verified'],['cpap_use','Use/adherence']]],
 ['Tobacco & exposure',[['smoke_status','Smoking history'],['smoke_current','Current/former'],['smoke_amount','Amount'],['smoke_years','Duration'],['smoke_quit','Quit date'],['packyears','Pack-years'],['vape','Vaping'],['exposure','Occupational/environmental exposure']]],
 ['Baseline & other verification',[['baseline','Usual activity tolerance'],['oxygen','Home oxygen'],['allergies','Allergies']]],
 ['Current objective respiratory data',[['rr','Respiratory rate'],['hr','Heart rate'],['spo2','SpO₂ + oxygen support'],['bs','Breath sounds']]]
];}
function renderChart(which){const out=$(`#${which}Chart`),data=state[which].data;out.innerHTML='';chartSections(which).forEach(([title,rows])=>{const s=document.createElement('section');s.className='chart-section';s.innerHTML=`<h4>${title}</h4>`;rows.forEach(([key,label])=>{const val=data[key];const r=document.createElement('div');r.className='chart-row';r.innerHTML=`<div class="chart-label">${label}</div><div class="chart-value ${val?'complete':'missing'}">${val||'Not yet documented'}</div>`;s.appendChild(r);});out.appendChild(s);});}
function review(which,required){const st=state[which],missing=required.filter(k=>!st.data[k]);const fb=$(`#${which}Review`);st.reviewed=true;if(missing.length===0){fb.className='feedback good';fb.innerHTML='<strong>Complete respiratory interview.</strong> You gathered the required history and current assessment data without forcing irrelevant branches.';st.complete=true;if(which==='guided')$('#startComplex').disabled=false;else $('#finishComplex').disabled=false;}else{fb.className='feedback warn';const labels=[];chartSections(which).forEach(([t,rows])=>rows.forEach(([k,l])=>{if(missing.includes(k))labels.push(l);}));fb.innerHTML=`<strong>Assessment incomplete.</strong> Return to the patient and clarify: <ul class="checklist">${labels.map(x=>`<li class="missing-item">${x}</li>`).join('')}</ul>`;}updateProgress();}
$('#guidedCheck').onclick=()=>review('guided',guidedRequired);$('#complexCheck').onclick=()=>review('complex',complexRequired);
$('#startComplex').onclick=()=>showStep(2);$('#finishComplex').onclick=()=>{showStep(3);$('#finalStats').innerHTML=`<strong>Interview branches completed:</strong> guided + complex<br><strong>Locked follow-up attempts:</strong> ${state.lockedAttempts}<br><strong>Key idea:</strong> prerequisite questions protect the interview from collecting details before relevance is established.`;updateProgress();};
$('#restart').onclick=()=>location.reload();

renderQuestions('#guidedQuestions',guidedQuestions,'guided');renderQuestions('#complexQuestions',complexQuestions,'complex');renderChart('guided');renderChart('complex');showStep(0);
})();
