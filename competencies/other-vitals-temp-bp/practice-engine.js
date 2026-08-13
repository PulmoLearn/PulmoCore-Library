(() => {
  "use strict";
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const STORAGE_KEY = "pulmolearn.otherVitalsTempBP.v1";
  const STICKY_HEADER_OFFSET = 130;
  const state = {
    section:0, unlockedThrough:0, patientIndex:0, completedPatients:[],
    equipment:[], connectOrder:[], ids:[], arm:null, cuff:null, cuffWrapped:false,
    palpated:false, inflationCorrect:false, stethoscopePlaced:false, systolicMark:null, diastolicMark:null,
    site:null, sheath:false, tempCollected:false, interpret:null, closeActions:[], doc:null
  };

  const patients = [
    {
      firstName:"Nora", displayName:"Nora B., 54 years", fullName:"Nora Bennett", dob:"03/18/1972", support:"Guided", patientNumber:"Patient 1 of 4",
      caseText:"Postoperative day 1 after uncomplicated abdominal surgery. Awake, cooperative, and comfortable. A manual blood pressure and temperature are ordered with routine vital signs. No isolation order is present.",
      bedsideText:"Nora is awake and agrees to have her blood pressure and temperature measured. She can sit upright comfortably.",
      orderText:"Manual blood pressure + temperature · routine vital-sign assessment",
      prepareCue:"Review the chart first, then choose only the equipment needed to obtain a manual blood pressure and temperature, clean the equipment, and document the findings.",
      connectCue:"Put the bedside opening steps in order. Use two patient-specific identifiers before touching the patient.",
      bpCue:"Use the right arm. Nora has no arm restriction. Choose a cuff that fits a typical adult upper arm, wrap it snugly, palpate the brachial pulse, then inflate 30 mmHg above the point where the pulse disappears.",
      armContext:"Both arms are available. Nora has no IV infusion, limb alert, fistula, or other documented arm restriction.",
      armCorrect:"right", cuffCorrect:"adult", bp:[118,72], pulseGone:118,
      tempCue:"Choose an appropriate site based on the patient and current circumstances, then apply a disposable probe sheath before taking the measurement.",
      tempContext:"Nora is alert, cooperative, breathing comfortably, and has not eaten or had a hot/cold drink recently. An oral temperature is appropriate for this practice encounter.",
      siteCorrect:"oral", temp:98.6, tempSiteLabel:"oral", baseline:"Earlier BP 120/74 mmHg · Temp 98.4 °F",
      contextSummary:"Comfortable postoperative patient; no acute change",
      interpretationCorrect:"routine",
      interpretationChoices:[
        ["routine","Document the values, compare them with the earlier measurements, and continue routine monitoring."],
        ["report","Report immediately because any systolic pressure below 120 mmHg is abnormal."],
        ["repeat","Repeat both measurements immediately because the current values do not exactly match the earlier ones."],
        ["treat","Start an intervention to raise the blood pressure before documenting the findings."]
      ],
      correctFeedback:"<strong>Correct.</strong> Nora's blood pressure and temperature are close to her earlier measurements and do not indicate an acute change. Document and continue routine monitoring.",
      incorrectFeedback:"<strong>Compare with the baseline.</strong> The values are internally consistent with Nora's stable presentation and do not require treatment simply because they are not identical to the earlier measurements.",
      reportNeeded:false,
      documentation:[
        ["best","BP 118/72 mmHg, right upper arm, manual; temperature 98.6 °F oral. Patient tolerated procedure; values compared with prior measurements."],
        ["vague","Vitals okay. Blood pressure and temperature obtained."],
        ["omit","BP 118/72. Temperature not necessary to document because it was normal."],
        ["overstate","BP and temperature normal; no future reassessment is required."]
      ],
      completionHeading:"Patient 1: Reliable Routine Established", completionClinical:"Nora demonstrates the standard workflow: correct preparation, patient identification, manual blood-pressure technique, appropriate temperature-site selection, and complete documentation.", completionNext:"Patient 2 adds an arm restriction and a temperature-site consideration with fewer hints.",
      roomImage:"assets/patient-nora-room.png", patientImage:"assets/patient-nora-upright.png"
    },
    {
      firstName:"Elaine", displayName:"Elaine M., 68 years", fullName:"Elaine Moreno", dob:"09/02/1958", support:"Supported", patientNumber:"Patient 2 of 4",
      caseText:"History of chronic obstructive pulmonary disease. Elaine is admitted for a non-respiratory reason and is resting comfortably on her prescribed home oxygen. Routine manual blood pressure and temperature are ordered.",
      bedsideText:"Elaine is comfortable and cooperative. A peripheral IV is infusing in the left forearm. She has just finished a cup of ice water.",
      orderText:"Manual blood pressure + temperature · routine vital-sign assessment",
      prepareCue:"Use the same equipment routine you established with Patient 1. Treatment equipment is not needed just because Elaine has COPD.",
      connectCue:"Complete the standard opening sequence and verify two patient identifiers before measuring.",
      bpCue:"Choose the appropriate arm and cuff from the patient context. Then use palpation to set the inflation target before auscultation.",
      armContext:"A peripheral IV is actively infusing in the left forearm. The right arm is unrestricted.",
      armCorrect:"right", cuffCorrect:"adult", bp:[136,78], pulseGone:136,
      tempCue:"The site should fit the current circumstances. Avoid choosing a site whose reading could be affected by what just happened at the bedside.",
      tempContext:"Elaine has just finished ice water. For this scenario, use a facility-approved temporal site rather than immediately taking an oral temperature.",
      siteCorrect:"temporal", temp:98.8, tempSiteLabel:"temporal", baseline:"Usual BP 132–140/76–82 mmHg · Afebrile this admission",
      contextSummary:"Stable on home respiratory regimen; left-arm IV infusing",
      interpretationCorrect:"routine",
      interpretationChoices:[
        ["routine","Document the values, note the measurement sites, and continue routine monitoring."],
        ["increase-o2","Increase oxygen because the systolic blood pressure is above 130 mmHg."],
        ["report-fever","Report a fever because any temperature above 98.6 °F is abnormal."],
        ["repeat-left","Repeat the blood pressure in the left arm while the IV is infusing to compare both sides."]
      ],
      correctFeedback:"<strong>Correct.</strong> Elaine's values fit her documented recent pattern. The key technique decisions were using the unrestricted arm and selecting a temperature site not immediately affected by the ice water.",
      incorrectFeedback:"<strong>Use patient context.</strong> The measured values do not show acute deterioration. Focus on reliable technique, the unrestricted arm, the site context, and comparison with prior measurements.",
      reportNeeded:false,
      documentation:[
        ["best","BP 136/78 mmHg, right upper arm, manual; temperature 98.8 °F temporal. Left-arm IV infusing; values consistent with recent measurements."],
        ["vague","Vitals stable for COPD patient."],
        ["omit","BP 136/78. No need to document the temperature site."],
        ["wrongarm","BP obtained in left arm over IV; temperature 98.8 °F."]
      ],
      completionHeading:"Patient 2: Technique Depends on Context", completionClinical:"Elaine reinforces that the same competency routine must adapt to the bedside situation. The unrestricted arm and an appropriate temperature site protect measurement reliability.", completionNext:"Patient 3 introduces abnormal findings that must be recognized, documented, and reported.",
      roomImage:"assets/patient-elaine-room.png", patientImage:"assets/patient-elaine-upright.png"
    },
    {
      firstName:"Robert", displayName:"Robert K., 72 years", fullName:"Robert Keller", dob:"11/14/1953", support:"Reduced support", patientNumber:"Patient 3 of 4",
      caseText:"Robert is being evaluated for worsening shortness of breath. He is alert but uncomfortable. Manual blood pressure and temperature are requested as part of the current assessment.",
      bedsideText:"Robert is sitting upright and breathing faster than usual. He is cooperative but prefers not to keep his mouth closed for long because of dyspnea.",
      orderText:"Manual blood pressure + temperature · report clinically important changes",
      prepareCue:"Choose the needed equipment without relying on a checklist. Gather only what supports the ordered measurements and close-out tasks.",
      connectCue:"Use the same safe opening sequence. Do not skip identification because the patient looks acutely ill.",
      bpCue:"Complete the manual technique independently: appropriate arm and cuff, palpated estimate, inflation target, brachial auscultation, slow deflation, systolic and diastolic pressures.",
      armContext:"Both arms are available. No arm restriction is documented.",
      armCorrect:"right", cuffCorrect:"adult", bp:[164,96], pulseGone:164,
      tempCue:"Choose a site that can be obtained without asking Robert to keep his mouth closed while he is visibly dyspneic.",
      tempContext:"Robert is tachypneic and mouth-breathing. For this scenario, a facility-approved temporal temperature is the better choice than oral measurement.",
      siteCorrect:"temporal", temp:100.8, tempSiteLabel:"temporal", baseline:"Earlier BP 138/82 mmHg · Temp 98.7 °F",
      contextSummary:"New dyspnea; current values differ meaningfully from earlier measurements",
      interpretationCorrect:"report",
      interpretationChoices:[
        ["report","Document the findings and promptly report the abnormal blood pressure and elevated temperature with the change from baseline."],
        ["routine","Document and continue routine monitoring because the patient is still awake and cooperative."],
        ["repeat-only","Repeat the measurements several times before telling anyone about them."],
        ["ignore-temp","Report only the blood pressure because temperature is not relevant to respiratory assessment."]
      ],
      correctFeedback:"<strong>Correct.</strong> Robert has both a meaningful blood-pressure increase and an elevated temperature compared with earlier measurements. These abnormal findings should be documented and reported in the context of his acute symptoms.",
      incorrectFeedback:"<strong>Compare the current values with baseline.</strong> Robert's BP and temperature have both changed while his clinical condition is worsening. The competency requires notification of abnormal findings.",
      reportNeeded:true,
      documentation:[
        ["best","BP 164/96 mmHg, right upper arm, manual; temperature 100.8 °F temporal. Values increased from earlier BP 138/82 and temp 98.7 °F; abnormal findings reported."],
        ["vague","BP high and patient warm. Provider notified."],
        ["omit","BP 164/96. Temperature not documented because patient was short of breath."],
        ["delay","Abnormal vitals obtained; will report after next routine vital-sign round."]
      ],
      completionHeading:"Patient 3: Recognize and Report Change", completionClinical:"Robert's scenario moves beyond technique. Reliable measurements only matter if the learner compares them with prior values and communicates clinically important abnormalities.", completionNext:"Patient 4 requires independent technique with both hypotension and fever.",
      roomImage:"assets/patient-robert.png", patientImage:"assets/patient-robert.png"
    },
    {
      firstName:"Maggie", displayName:"Maggie L., 76 years", fullName:"Margaret Lewis", dob:"02/27/1950", support:"Independent", patientNumber:"Patient 4 of 4",
      caseText:"History of heart failure and hypertension. Maggie reports feeling weak and chilled. Manual blood pressure and temperature are ordered with instructions to report changes from baseline.",
      bedsideText:"Maggie is awake but appears fatigued. Her left arm has a limb-alert band. Her right upper arm requires a larger adult cuff for a snug, appropriate fit.",
      orderText:"Manual blood pressure + temperature · report abnormal findings / changes from baseline",
      prepareCue:"Complete preparation independently. Use the chart and bedside clues to decide what you need.",
      connectCue:"Complete the standard bedside opening sequence without guided hints.",
      bpCue:"Use the unrestricted arm and an appropriately sized cuff. Complete the palpation and auscultation sequence and record both pressures.",
      armContext:"Left arm: limb alert. Right arm: unrestricted. The right upper-arm circumference requires a large adult cuff.",
      armCorrect:"right", cuffCorrect:"large", bp:[86,52], pulseGone:86,
      tempCue:"Select an appropriate site and complete the measurement independently.",
      tempContext:"Maggie is alert and cooperative but chilled. For this scenario, use the facility-approved temporal site for a prompt measurement.",
      siteCorrect:"temporal", temp:102.4, tempSiteLabel:"temporal", baseline:"Earlier BP 128/70 mmHg · Temp 98.5 °F",
      contextSummary:"Weakness and chills with major change from earlier blood pressure and temperature",
      interpretationCorrect:"urgent-report",
      interpretationChoices:[
        ["urgent-report","Keep Maggie safe, document the values, and promptly report the marked hypotension and fever with the change from baseline."],
        ["routine","Continue routine monitoring because a single blood-pressure reading should never be reported."],
        ["recheck-later","Return in one hour to repeat the measurements before notifying anyone."],
        ["left-arm","Repeat the blood pressure in the left arm despite the limb alert to confirm the low value."]
      ],
      correctFeedback:"<strong>Correct.</strong> Maggie has marked hypotension and fever compared with her earlier measurements. Ensure safety, document accurately, and report the abnormal findings promptly.",
      incorrectFeedback:"<strong>Prioritize the change from baseline.</strong> BP 86/52 and temperature 102.4 °F are not routine findings in this context, and the competency requires notification of abnormal findings.",
      reportNeeded:true,
      documentation:[
        ["best","BP 86/52 mmHg, right upper arm with large adult cuff, manual; temperature 102.4 °F temporal. Marked change from earlier BP 128/70 and temp 98.5 °F; abnormal findings reported promptly."],
        ["vague","Vitals abnormal. Nurse aware."],
        ["wrongarm","BP 86/52 obtained in left arm despite limb alert; temp 102.4 °F."],
        ["delay","Low BP and fever noted; will recheck later before reporting."]
      ],
      completionHeading:"Patient 4: Independent Competency", completionClinical:"Maggie's case combines correct site selection, cuff sizing, complete manual technique, comparison with baseline, patient safety, and timely reporting of abnormal findings.", completionNext:"The four-patient sequence is complete. Learners are ready for an instructor-observed lab check-off using the L-3 competency.",
      roomImage:"assets/patient-maggie-room.png", patientImage:"assets/patient-maggie-upright.png"
    }
  ];
  const p = () => patients[state.patientIndex];
  const expectedEquipment = ["bp-cuff","stethoscope","thermometer","sheaths","hand-rub","clipboard"];
  const connectExpected = ["Perform hand hygiene and follow required isolation precautions","Knock, introduce yourself, and state the purpose of the visit","Verify the patient using two identifiers","Explain the procedure and obtain permission to touch","Position the patient comfortably with the head of bed elevated as appropriate"];

  function save(){ try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }catch(e){} }
  function load(){
    try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return;const s=JSON.parse(raw);if(s&&typeof s==='object')Object.assign(state,s);}catch(e){}
    if(!Array.isArray(state.completedPatients))state.completedPatients=[];
    if(!Array.isArray(state.equipment))state.equipment=[]; if(!Array.isArray(state.ids))state.ids=[]; if(!Array.isArray(state.connectOrder))state.connectOrder=[]; if(!Array.isArray(state.closeActions))state.closeActions=[];
    state.patientIndex=Math.max(0,Math.min(3,Number(state.patientIndex)||0)); state.section=Math.max(0,Math.min(7,Number(state.section)||0));
  }
  function shuffle(a){const c=[...a];for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;}
  function sameMembers(a,b){const x=[...a].sort(),y=[...b].sort();return x.length===y.length&&x.every((v,i)=>v===y[i]);}
  function setFeedback(el,type,html){el.className=`feedback show ${type}`;el.innerHTML=html;}
  function clearFeedback(el){el.className="feedback";el.innerHTML="";}
  function showSection(n){state.section=Number(n);state.unlockedThrough=Math.max(state.unlockedThrough,state.section);save();$$('.lesson-section').forEach((s,i)=>s.classList.toggle('active',i===state.section));$$('.nav-step').forEach((b,i)=>b.classList.toggle('active',i===state.section));const labels=['Teach','Prepare','Connect','Blood Pressure','Temperature','Interpret','Close the Loop','Complete'];$('#progressText').textContent=labels[state.section];$('#progressBar').style.width=`${state.section/7*100}%`;requestAnimationFrame(()=>{const sec=$(`.lesson-section[data-section-panel="${state.section}"]`);if(sec)window.scrollTo({top:Math.max(0,sec.getBoundingClientRect().top+window.scrollY-STICKY_HEADER_OFFSET),behavior:'smooth'});});}

  const icons = {
    cuff:`<svg viewBox="0 0 180 100" role="img" aria-label="Manual blood pressure cuff"><rect x="8" y="22" width="105" height="55" rx="11" fill="#163b63"/><rect x="20" y="34" width="78" height="31" rx="7" fill="#d9ecf4"/><path d="M113 50 C140 50 132 80 151 80" fill="none" stroke="#244b6d" stroke-width="7"/><circle cx="157" cy="78" r="18" fill="#fff" stroke="#244b6d" stroke-width="6"/><line x1="157" y1="78" x2="165" y2="67" stroke="#c75a58" stroke-width="3"/></svg>`,
    steth:`<svg viewBox="0 0 150 110"><path d="M42 15v30c0 25 42 25 42 0V15" fill="none" stroke="#173247" stroke-width="8" stroke-linecap="round"/><circle cx="37" cy="14" r="7" fill="#0f7f7b"/><circle cx="89" cy="14" r="7" fill="#0f7f7b"/><path d="M63 66v14c0 13 11 21 25 21h10" fill="none" stroke="#173247" stroke-width="7"/><circle cx="113" cy="100" r="13" fill="#dcebf2" stroke="#173247" stroke-width="5"/></svg>`,
    thermometer:`<svg viewBox="0 0 150 110"><rect x="54" y="10" width="38" height="74" rx="18" fill="#f8fbfd" stroke="#3578a8" stroke-width="5"/><rect x="65" y="21" width="16" height="45" rx="8" fill="#c75a58"/><circle cx="73" cy="85" r="20" fill="#c75a58" stroke="#3578a8" stroke-width="5"/></svg>`,
    sheath:`<svg viewBox="0 0 160 110"><rect x="25" y="20" width="110" height="70" rx="12" fill="#fff" stroke="#0f7f7b" stroke-width="4"/><path d="M43 70L115 38" stroke="#90d2ce" stroke-width="15" stroke-linecap="round"/><path d="M43 70L115 38" stroke="#fff" stroke-width="7" stroke-linecap="round"/></svg>`,
    neb:`<svg viewBox="0 0 160 110"><rect x="30" y="25" width="65" height="55" rx="12" fill="#dcebf2" stroke="#62798a" stroke-width="4"/><path d="M95 52h28c14 0 15 25 28 25" fill="none" stroke="#62798a" stroke-width="7"/><circle cx="45" cy="80" r="8" fill="#62798a"/><circle cx="82" cy="80" r="8" fill="#62798a"/></svg>`,
    pulseox:`<svg viewBox="0 0 160 110"><rect x="25" y="22" width="110" height="65" rx="16" fill="#173247"/><rect x="43" y="36" width="74" height="35" rx="7" fill="#0f7f7b"/><text x="80" y="60" text-anchor="middle" fill="white" font-size="22" font-weight="700">SpO₂</text></svg>`
  };
  const equipment = [
    ["bp-cuff","Manual BP cuff / manometer",icons.cuff,true],["stethoscope","Stethoscope",icons.steth,true],["thermometer","Electronic thermometer",icons.thermometer,true],["sheaths","Disposable probe sheaths",icons.sheath,true],
    ["hand-rub","Alcohol-based hand rub",`<img src="assets/alcohol-rub.png" alt="Alcohol-based hand rub">`,true],["clipboard","Documentation / clipboard",`<img src="assets/clipboard.png" alt="Documentation clipboard">`,true],
    ["pulse-ox","Pulse oximeter",icons.pulseox,false],["nebulizer","Nebulizer kit",icons.neb,false]
  ];
  function renderEquipment(){const tray=$('#equipmentTray');tray.innerHTML='';shuffle(equipment).forEach(([id,label,art])=>{const b=document.createElement('button');b.type='button';b.className='equipment-card';b.dataset.id=id;b.innerHTML=`<div class="equipment-illustration">${art}</div><strong>${label}</strong>`;b.classList.toggle('selected',state.equipment.includes(id));b.onclick=()=>{state.equipment.includes(id)?state.equipment=state.equipment.filter(x=>x!==id):state.equipment.push(id);b.classList.toggle('selected',state.equipment.includes(id));clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;save();};tray.appendChild(b);});}

  function createSortable(){const container=$('#connectSequence');container.innerHTML='';const order=(state.connectOrder.length===connectExpected.length&&sameMembers(state.connectOrder,connectExpected))?[...state.connectOrder]:shuffle(connectExpected);order.forEach(step=>{const item=document.createElement('div');item.className='sortable-item';item.draggable=true;item.dataset.step=step;item.innerHTML=`<span class="drag-handle">☰</span><div><div style="display:flex;gap:10px;align-items:center"><span class="order-number"></span><span>${step}</span></div><div class="keyboard-order-controls"><button type="button" class="move-btn up">↑</button><button type="button" class="move-btn down">↓</button></div></div><span class="sort-status"></span>`;item.addEventListener('dragstart',()=>item.classList.add('dragging'));item.addEventListener('dragend',()=>{item.classList.remove('dragging');syncSortable();});item.addEventListener('dragover',e=>e.preventDefault());item.addEventListener('drop',e=>{e.preventDefault();const d=$('.dragging',container);if(!d||d===item)return;const items=[...container.children],from=items.indexOf(d),to=items.indexOf(item);from<to?item.after(d):item.before(d);syncSortable();});$('.up',item).onclick=()=>{if(item.previousElementSibling)container.insertBefore(item,item.previousElementSibling);syncSortable();};$('.down',item).onclick=()=>{if(item.nextElementSibling)item.nextElementSibling.after(item);syncSortable();};container.appendChild(item);});syncSortable();}
  function syncSortable(){const c=$('#connectSequence');state.connectOrder=[...c.children].map(x=>x.dataset.step);[...c.children].forEach((x,i)=>{$('.order-number',x).textContent=i+1;x.classList.remove('correct-position','wrong-position');$('.sort-status',x).textContent='';});save();}
  function gradeSortable(){let ok=true;[...$('#connectSequence').children].forEach((x,i)=>{const yes=x.dataset.step===connectExpected[i];x.classList.toggle('correct-position',yes);x.classList.toggle('wrong-position',!yes);$('.sort-status',x).textContent=yes?'✓ Correct':'Adjust';if(!yes)ok=false;});return ok;}
  function renderIds(){const opts=[['name','Full name'],['dob','Date of birth'],['room','Room number'],['diagnosis','Diagnosis']];const wrap=$('#identifierChoices');wrap.innerHTML='';shuffle(opts).forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.className='choice-chip';b.dataset.id=id;b.textContent=label;b.classList.toggle('selected',state.ids.includes(id));b.onclick=()=>{if(state.ids.includes(id))state.ids=state.ids.filter(x=>x!==id);else if(state.ids.length<2)state.ids.push(id);else state.ids=[state.ids[1],id];$$('.choice-chip',wrap).forEach(x=>x.classList.toggle('selected',state.ids.includes(x.dataset.id)));$('#toBP').disabled=true;clearFeedback($('#connectFeedback'));save();};wrap.appendChild(b);});}
  function renderSingleChoice(containerSel,choices,stateKey,dataKey){const wrap=$(containerSel);wrap.innerHTML='';shuffle(choices).forEach(([id,text])=>{const b=document.createElement('button');b.type='button';b.className='select-option';b.dataset[dataKey]=id;b.textContent=text;b.classList.toggle('selected',state[stateKey]===id);b.onclick=()=>{state[stateKey]=id;$$('.select-option',wrap).forEach(x=>x.classList.toggle('selected',x===b));save();};wrap.appendChild(b);});}
  function markChoice(containerSel,dataKey,chosen,correct){const wrap=$(containerSel);$$(`[data-${dataKey}]`,wrap).forEach(b=>{b.classList.remove('answer-correct','answer-wrong');if(b.dataset[dataKey]===chosen)b.classList.add(chosen===correct?'answer-correct':'answer-wrong');});}
  function markSet(containerSel,dataKey,chosen,correct){const cs=new Set(chosen),rs=new Set(correct);$$(`[data-${dataKey}]`,$(containerSel)).forEach(b=>{b.classList.remove('answer-correct','answer-wrong');if(cs.has(b.dataset[dataKey]))b.classList.add(rs.has(b.dataset[dataKey])?'answer-correct':'answer-wrong');});}

  function renderBPChoices(){renderSingleChoice('#armChoices',[["right","Right arm"],["left","Left arm"]],'arm','arm');renderSingleChoice('#cuffChoices',[["small","Small adult cuff"],["adult","Adult cuff"],["large","Large adult cuff"]],'cuff','cuff');}
  function updateCuffStatus(){const el=$('#cuffStatus');if(state.cuffWrapped){el.className='mini-result collected';el.innerHTML=`<strong>✓ Cuff placed:</strong> ${state.arm==='right'?'right':'left'} upper arm with ${state.cuff==='large'?'large adult':state.cuff==='adult'?'adult':'small adult'} cuff.`;$('#palpateBrachial').disabled=false;}else{el.className='mini-result locked';el.innerHTML='<span>Cuff not placed</span>';$('#palpateBrachial').disabled=true;}}
  function updateManometer(){const panel=$('#manometerPanel'),slider=$('#pressureSlider');if(!state.stethoscopePlaced){panel.classList.add('locked');slider.disabled=true;return;}panel.classList.remove('locked');slider.disabled=false;const pressure=Number(slider.value);$('#gaugeNumber').textContent=pressure;const [sys,dia]=p().bp;const sound=$('#soundStatus');if(pressure<=sys&&pressure>dia){sound.className='sound-status heard';sound.textContent='Korotkoff sounds heard';}else{sound.className='sound-status silent';sound.textContent=pressure>sys?'No sounds yet':'Sounds absent / disappeared';}$('#markSystolic').disabled=!(pressure<=sys+4&&pressure>=sys-4);$('#markDiastolic').disabled=!(pressure<=dia+4&&pressure>=dia-4);}
  function resetBPUI(){state.arm=null;state.cuff=null;state.cuffWrapped=false;state.palpated=false;state.inflationCorrect=false;state.stethoscopePlaced=false;state.systolicMark=null;state.diastolicMark=null;$('#inflationPanel').hidden=true;$('#inflationTarget').value='';$('#inflationFeedback').textContent='';$('#palpationReadout').className='mini-result locked';$('#palpationReadout').innerHTML='<span>Palpated systolic estimate not collected</span>';$('#placeStethoscope').disabled=true;$('#manometerPanel').classList.add('locked');$('#pressureSlider').disabled=true;$('#systolicMark').textContent='—';$('#diastolicMark').textContent='—';$('#toTemp').disabled=true;clearFeedback($('#bpFeedback'));renderBPChoices();updateCuffStatus();}

  const siteDefs=[
    ["oral","Oral","Cooperative patient; site not recently affected",`<svg viewBox="0 0 90 90"><path d="M18 48 Q45 68 72 48 Q45 58 18 48Z" fill="#c75a58"/><path d="M18 48 Q45 30 72 48" fill="none" stroke="#c75a58" stroke-width="5"/></svg>`],
    ["temporal","Temporal","Forehead/temporal method per facility device",`<svg viewBox="0 0 90 90"><circle cx="45" cy="42" r="25" fill="#f4d5c5"/><path d="M45 10c20 0 28 16 28 30" fill="none" stroke="#173247" stroke-width="6"/><circle cx="66" cy="34" r="7" fill="#3578a8"/></svg>`],
    ["tympanic","Tympanic","Ear site with appropriate device",`<svg viewBox="0 0 90 90"><path d="M48 18c19 0 25 17 17 29-5 7-14 6-15 17-1 9-8 12-15 8-8-5-7-18 1-23 8-5 1-13 8-20" fill="none" stroke="#c7791b" stroke-width="7" stroke-linecap="round"/></svg>`],
    ["axillary","Axillary","Alternative site when appropriate",`<svg viewBox="0 0 90 90"><circle cx="45" cy="20" r="10" fill="#f4d5c5"/><path d="M30 35l15 8 15-8 12 35H18z" fill="#83b7d4"/><circle cx="32" cy="47" r="6" fill="#0f7f7b"/></svg>`]
  ];
  function renderSites(){const wrap=$('#siteChoices');wrap.innerHTML='';shuffle(siteDefs).forEach(([id,name,desc,icon])=>{const b=document.createElement('button');b.type='button';b.className='site-card';b.dataset.site=id;b.innerHTML=`<div class="site-icon">${icon}</div><strong>${name}</strong><small>${desc}</small>`;b.classList.toggle('selected',state.site===id);b.onclick=()=>{state.site=id;state.sheath=false;state.tempCollected=false;$$('.site-card',wrap).forEach(x=>x.classList.toggle('selected',x===b));$('#applySheath').disabled=false;$('#takeTemp').disabled=true;const r=$('#tempReadout');r.className='thermometer-readout locked';r.innerHTML='<span class="data-status">Not collected</span><strong>— °F</strong><small>Apply a disposable sheath before taking the measurement.</small>';$('#toInterpret').disabled=true;clearFeedback($('#tempFeedback'));save();};wrap.appendChild(b);});}
  function closeActions(){const actions=[["comfortable",`Return ${p().firstName} to a safe, comfortable position`,true],["discard","Discard the used probe sheath / supplies and clean areas of use",true],["clean","Clean reusable blood-pressure and thermometer equipment as required",true],["hand","Remove PPE if worn and perform hand hygiene before leaving",true],["document","Document BP, temperature, sites, and comparison with previous measurements",true],["report","Notify the appropriate health care provider of abnormal findings",p().reportNeeded],["repeat","Repeat both measurements automatically even when findings are reliable and unchanged",false],["leave-cuff","Leave the cuff on the patient's arm for the next vital-sign round",false]];return actions;}
  function renderClose(){const wrap=$('#closeActionChoices');wrap.innerHTML='';shuffle(closeActions()).forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.className='select-option close-action-option';b.dataset.action=id;b.textContent=label;b.classList.toggle('selected',state.closeActions.includes(id));b.onclick=()=>{if(state.closeActions.includes(id))state.closeActions=state.closeActions.filter(x=>x!==id);else state.closeActions.push(id);b.classList.toggle('selected',state.closeActions.includes(id));$('#finishPatient').disabled=true;clearFeedback($('#closeFeedback'));save();};wrap.appendChild(b);});renderSingleChoice('#documentationChoices',p().documentation,'doc','doc');}

  function resetPatientState(){state.equipment=[];state.connectOrder=[];state.ids=[];state.site=null;state.sheath=false;state.tempCollected=false;state.interpret=null;state.closeActions=[];state.doc=null;resetBPUI();['#toConnect','#toBP','#toTemp','#toInterpret','#toClose','#finishPatient'].forEach(id=>{const e=$(id);if(e)e.disabled=true;});['#prepareFeedback','#connectFeedback','#bpFeedback','#tempFeedback','#interpretFeedback','#closeFeedback'].forEach(id=>clearFeedback($(id)));}
  function applyPatient(){const x=p();$$('.patient-badge').forEach(e=>e.textContent=x.patientNumber);$$('.support-badge').forEach(e=>e.textContent=x.support);$('#prepareName').textContent=x.displayName;$('#prepareCase').textContent=x.caseText;$('#prepareImage').src=x.roomImage;$('#faceSheetSummary').textContent=`Name: ${x.fullName} · DOB: ${x.dob}`;$('#orderSummary').textContent=x.orderText;$('#prepareCue').innerHTML=`<strong>${x.support} cue:</strong> ${x.prepareCue}`;$('#connectCase').textContent=x.bedsideText;$('#connectImage').src=x.patientImage;$('#connectCue').innerHTML=`<strong>${x.support} cue:</strong> ${x.connectCue}`;$('#bpCue').innerHTML=`<strong>${x.support} cue:</strong> ${x.bpCue}`;$('#bpPatientTitle').textContent=x.firstName;$('#bpPatientImage').src=x.patientImage;$('#armContext').textContent=x.armContext;$('#tempCue').innerHTML=`<strong>${x.support} cue:</strong> ${x.tempCue}`;$('#tempPatientImage').src=x.patientImage;$('#tempContext').textContent=x.tempContext;$('#summaryBP').textContent=`${x.bp[0]}/${x.bp[1]} mmHg, manual`;$('#summaryTemp').textContent=`${x.temp.toFixed(1)} °F ${x.tempSiteLabel}`;$('#summaryBaseline').textContent=x.baseline;$('#summaryContext').textContent=x.contextSummary;$('#closeCue').innerHTML=`<strong>${x.support} cue:</strong> Complete the encounter: patient safety, used supplies/equipment, hand hygiene, documentation, baseline comparison, and reporting when indicated.`;$('#closeHeading').textContent=`Select all actions needed to complete ${x.firstName}'s care`;$('#completionHeading').textContent=x.completionHeading;$('#completionClinical').textContent=x.completionClinical;$('#completionNext').textContent=x.completionNext;renderEquipment();createSortable();renderIds();renderBPChoices();renderSites();renderSingleChoice('#interpretChoices',x.interpretationChoices,'interpret','decision');renderClose();restoreUI();renderCompletionTabs();}

  function restoreUI(){const x=p();$('#toConnect').disabled=!sameMembers(state.equipment,expectedEquipment);$('#toBP').disabled=!(sameMembers(state.connectOrder,connectExpected)&&sameMembers(state.ids,['name','dob']));updateCuffStatus();if(state.palpated){$('#palpationReadout').className='mini-result collected';$('#palpationReadout').innerHTML=`<strong>✓ Brachial pulse disappeared at ${x.pulseGone} mmHg.</strong>`;$('#inflationPanel').hidden=false;$('#pulseGoneValue').textContent=x.pulseGone;}if(state.inflationCorrect)$('#placeStethoscope').disabled=false;if(state.stethoscopePlaced){const slider=$('#pressureSlider');slider.max=x.pulseGone+30;slider.value=state.diastolicMark??state.systolicMark??x.pulseGone+30;updateManometer();}if(state.systolicMark!==null)$('#systolicMark').textContent=`${state.systolicMark} mmHg`;if(state.diastolicMark!==null)$('#diastolicMark').textContent=`${state.diastolicMark} mmHg`;$('#toTemp').disabled=!(state.systolicMark===x.bp[0]&&state.diastolicMark===x.bp[1]);if(state.site)$$('.site-card').forEach(b=>b.classList.toggle('selected',b.dataset.site===state.site));$('#applySheath').disabled=!state.site;$('#takeTemp').disabled=!state.sheath;if(state.tempCollected){const r=$('#tempReadout');r.className='thermometer-readout collected';r.innerHTML=`<span class="data-status">✓ Collected</span><strong>${x.temp.toFixed(1)} °F</strong><small>${x.tempSiteLabel.charAt(0).toUpperCase()+x.tempSiteLabel.slice(1)} temperature</small>`;}$('#toInterpret').disabled=!(state.tempCollected&&state.site===x.siteCorrect);$('#toClose').disabled=state.interpret!==x.interpretationCorrect;const expected=closeActions().filter(a=>a[2]).map(a=>a[0]);$('#finishPatient').disabled=!(sameMembers(state.closeActions,expected)&&state.doc==='best');}
  function renderCompletionTabs(){const tabs=$('#completionReviewTabs');tabs.innerHTML='';[...state.completedPatients].sort((a,b)=>a-b).forEach(i=>{const b=document.createElement('button');b.type='button';b.className='completion-review-tab';b.classList.toggle('active',i===state.patientIndex);b.innerHTML=`<span class="tab-check">✓</span>${patients[i].firstName}`;b.onclick=()=>{const q=patients[i];$('#completionHeading').textContent=q.completionHeading;$('#completionClinical').textContent=q.completionClinical;$('#completionNext').textContent=q.completionNext;$$('.completion-review-tab').forEach((t,j)=>t.classList.toggle('active',state.completedPatients[j]===i));};tabs.appendChild(b);});const next=$('#nextPatient');if(state.patientIndex<3){next.style.display='inline-block';next.textContent=`Start Patient ${state.patientIndex+2}`;}else next.style.display='none';}

  $('#startPractice').onclick=()=>showSection(1);
  $('#checkPrepare').onclick=()=>{markSet('#equipmentTray','id',state.equipment,expectedEquipment);if(sameMembers(state.equipment,expectedEquipment)){setFeedback($('#prepareFeedback'),'correct','<strong>Correct.</strong> You selected the tools needed for a manual blood pressure, temperature measurement, hand hygiene/clean workflow, and documentation.');$('#toConnect').disabled=false;}else{setFeedback($('#prepareFeedback'),'incorrect','<strong>Adjust the tray.</strong> Selected distractors are marked for recheck. Make sure you also have every item needed for manual BP, temperature, hand hygiene, and documentation.');$('#toConnect').disabled=true;}save();};
  $('#resetPrepare').onclick=()=>{state.equipment=[];renderEquipment();$('#toConnect').disabled=true;clearFeedback($('#prepareFeedback'));save();};
  $('#toConnect').onclick=()=>showSection(2);
  $('#checkConnect').onclick=()=>{const seq=gradeSortable(),ids=sameMembers(state.ids,['name','dob']);markSet('#identifierChoices','id',state.ids,['name','dob']);if(seq&&ids){setFeedback($('#connectFeedback'),'correct',`<strong>Correct.</strong> You completed the bedside opening, verified ${p().firstName} with two identifiers, explained the procedure, obtained permission, and positioned the patient.`);$('#toBP').disabled=false;}else{setFeedback($('#connectFeedback'),'incorrect',`<strong>Keep working.</strong> ${!seq?'Adjust the steps marked out of sequence. ':''}${!ids?'Use two patient-specific identifiers rather than room number or diagnosis.':''}`);$('#toBP').disabled=true;}save();};
  $('#toBP').onclick=()=>showSection(3);
  $('#wrapCuff').onclick=()=>{markChoice('#armChoices','arm',state.arm,p().armCorrect);markChoice('#cuffChoices','cuff',state.cuff,p().cuffCorrect);if(state.arm===p().armCorrect&&state.cuff===p().cuffCorrect){state.cuffWrapped=true;updateCuffStatus();clearFeedback($('#bpFeedback'));}else{state.cuffWrapped=false;updateCuffStatus();setFeedback($('#bpFeedback'),'incorrect','<strong>Recheck arm and cuff selection.</strong> Use the bedside context to choose an unrestricted arm and a cuff that fits the upper arm appropriately.');}save();};
  $('#palpateBrachial').onclick=()=>{state.palpated=true;$('#palpationReadout').className='mini-result collected';$('#palpationReadout').innerHTML=`<strong>✓ Brachial pulse disappeared at ${p().pulseGone} mmHg.</strong>`;$('#inflationPanel').hidden=false;$('#pulseGoneValue').textContent=p().pulseGone;save();};
  $('#checkInflation').onclick=()=>{const target=Number($('#inflationTarget').value),correct=p().pulseGone+30,el=$('#inflationFeedback');if(target===correct){state.inflationCorrect=true;el.className='inline-feedback good';el.textContent=`Correct: inflate to ${correct} mmHg for the auscultatory measurement.`;$('#placeStethoscope').disabled=false;}else{state.inflationCorrect=false;el.className='inline-feedback bad';el.textContent='Recalculate: add 30 mmHg to the pressure where the brachial pulse disappeared.';$('#placeStethoscope').disabled=true;}save();};
  $('#placeStethoscope').onclick=()=>{state.stethoscopePlaced=true;const slider=$('#pressureSlider');slider.max=p().pulseGone+30;slider.value=p().pulseGone+30;$('#gaugeNumber').textContent=slider.value;updateManometer();save();};
  $('#pressureSlider').addEventListener('input',updateManometer);
  $('#markSystolic').onclick=()=>{state.systolicMark=Number($('#pressureSlider').value);$('#systolicMark').textContent=`${state.systolicMark} mmHg`;save();};
  $('#markDiastolic').onclick=()=>{state.diastolicMark=Number($('#pressureSlider').value);$('#diastolicMark').textContent=`${state.diastolicMark} mmHg`;save();};
  $('#checkBP').onclick=()=>{const x=p();markChoice('#armChoices','arm',state.arm,x.armCorrect);markChoice('#cuffChoices','cuff',state.cuff,x.cuffCorrect);const ok=state.cuffWrapped&&state.palpated&&state.inflationCorrect&&state.stethoscopePlaced&&Math.abs((state.systolicMark??0)-x.bp[0])<=4&&Math.abs((state.diastolicMark??0)-x.bp[1])<=4;if(ok){state.systolicMark=x.bp[0];state.diastolicMark=x.bp[1];$('#systolicMark').textContent=`${x.bp[0]} mmHg`;$('#diastolicMark').textContent=`${x.bp[1]} mmHg`;setFeedback($('#bpFeedback'),'correct',`<strong>Correct.</strong> Manual BP is ${x.bp[0]}/${x.bp[1]} mmHg. You used the palpated estimate to set inflation pressure, placed the stethoscope over the brachial artery, and identified systolic and diastolic pressures during slow deflation.`);$('#toTemp').disabled=false;}else{setFeedback($('#bpFeedback'),'incorrect','<strong>Finish the manual technique.</strong> Verify the arm and cuff, palpate the brachial pulse, inflate 30 mmHg above pulse disappearance, place the stethoscope over the brachial artery, and mark the first sound and sound disappearance.');$('#toTemp').disabled=true;}save();};
  $('#toTemp').onclick=()=>showSection(4);
  $('#applySheath').onclick=()=>{if(!state.site)return;state.sheath=true;$('#takeTemp').disabled=false;save();};
  $('#takeTemp').onclick=()=>{if(!state.sheath)return;state.tempCollected=true;const r=$('#tempReadout');r.className='thermometer-readout collected';r.innerHTML=`<span class="data-status">✓ Collected</span><strong>${p().temp.toFixed(1)} °F</strong><small>${state.site.charAt(0).toUpperCase()+state.site.slice(1)} measurement</small>`;save();};
  $('#checkTemp').onclick=()=>{markChoice('#siteChoices','site',state.site,p().siteCorrect);if(state.site===p().siteCorrect&&state.sheath&&state.tempCollected){setFeedback($('#tempFeedback'),'correct',`<strong>Correct.</strong> You selected the appropriate site for this scenario, applied a disposable sheath, turned on the device, and obtained ${p().temp.toFixed(1)} °F.`);$('#toInterpret').disabled=false;}else{setFeedback($('#tempFeedback'),'incorrect','<strong>Recheck the sequence.</strong> Choose the site that fits the patient context, apply a disposable probe sheath, then obtain the measurement.');$('#toInterpret').disabled=true;}save();};
  $('#toInterpret').onclick=()=>showSection(5);
  $('#checkInterpret').onclick=()=>{markChoice('#interpretChoices','decision',state.interpret,p().interpretationCorrect);if(state.interpret===p().interpretationCorrect){setFeedback($('#interpretFeedback'),'correct',p().correctFeedback);$('#toClose').disabled=false;}else{setFeedback($('#interpretFeedback'),'incorrect',p().incorrectFeedback);$('#toClose').disabled=true;}save();};
  $('#toClose').onclick=()=>showSection(6);
  $('#checkClose').onclick=()=>{const expected=closeActions().filter(a=>a[2]).map(a=>a[0]);markSet('#closeActionChoices','action',state.closeActions,expected);markChoice('#documentationChoices','doc',state.doc,'best');if(sameMembers(state.closeActions,expected)&&state.doc==='best'){setFeedback($('#closeFeedback'),'correct',`<strong>Correct.</strong> You completed ${p().firstName}'s encounter: patient comfort, used supplies/equipment, hand hygiene, documentation, comparison with baseline, and ${p().reportNeeded?'reporting the abnormal findings':'no unnecessary escalation'}.`);$('#finishPatient').disabled=false;}else{setFeedback($('#closeFeedback'),'incorrect','<strong>Close the loop completely.</strong> Recheck any selected action outlined in red, include all required cleanup/hand-hygiene/documentation tasks, and report abnormal findings only when indicated.');$('#finishPatient').disabled=true;}save();};
  $('#finishPatient').onclick=()=>{if(!state.completedPatients.includes(state.patientIndex))state.completedPatients.push(state.patientIndex);save();renderCompletionTabs();showSection(7);};
  $('#nextPatient').onclick=()=>{if(state.patientIndex>=3)return;state.patientIndex++;resetPatientState();state.section=1;state.unlockedThrough=1;save();applyPatient();showSection(1);};
  $('#restartLesson').onclick=()=>{localStorage.removeItem(STORAGE_KEY);Object.assign(state,{section:0,unlockedThrough:0,patientIndex:0,completedPatients:[],equipment:[],connectOrder:[],ids:[],arm:null,cuff:null,cuffWrapped:false,palpated:false,inflationCorrect:false,stethoscopePlaced:false,systolicMark:null,diastolicMark:null,site:null,sheath:false,tempCollected:false,interpret:null,closeActions:[],doc:null});applyPatient();showSection(0);};
  $$('.nav-step').forEach((b,i)=>b.onclick=()=>{if(i<=state.unlockedThrough||i===0||state.completedPatients.length)showSection(i);});
  $('#chartFace').onclick=()=>alert(`${p().fullName}\nDOB: ${p().dob}\n${p().baseline}`);
  $('#chartOrder').onclick=()=>alert(p().orderText);

  load();
  applyPatient();
  showSection(state.section);
})();
