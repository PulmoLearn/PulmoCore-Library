(() => {
  "use strict";
  const STICKY_HEADER_OFFSET = 130;
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const STORAGE_KEY = "pulmolearn.respiratoryRoutine.v4_1";
  const state = {
    section:0, unlockedThrough:0, patientIndex:0, equipment:[], ids:[], measure:null, ox:null, inspectionSingle:null, breath:null, interpret:null, doc:null, closeActions:[],
    collected:{timer:false, pulseOx:false}, inspected:false, expansionDone:false, fremitusDone:false, crepitusDone:false, percussionSides:[], percussionChoice:null, listened:false, connectOrder:[], completedPatients:[]
  };

  function saveProgress(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }
  function loadProgress(){
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      if(!raw) return;
      const saved=JSON.parse(raw);
      if(saved && typeof saved==='object') Object.assign(state,saved);
      if(!Array.isArray(state.completedPatients)) state.completedPatients=[];
      if(!Array.isArray(state.connectOrder)) state.connectOrder=[];
      if(!state.collected || typeof state.collected!=='object') state.collected={timer:false,pulseOx:false};
      if(!Array.isArray(state.percussionSides)) state.percussionSides=[];
      if(typeof state.expansionDone!=='boolean') state.expansionDone=false;
      if(typeof state.fremitusDone!=='boolean') state.fremitusDone=false;
      if(typeof state.crepitusDone!=='boolean') state.crepitusDone=false;
      if(typeof state.percussionChoice!=='string') state.percussionChoice=null;
      state.patientIndex=Math.min(Math.max(Number(state.patientIndex)||0,0),3);
      state.section=Math.min(Math.max(Number(state.section)||0,0),7);
      state.unlockedThrough=Math.max(Number(state.unlockedThrough)||0,state.section);
    }catch(e){}
  }

  const patients = [
    {
      firstName:"Nora",
      shortName:"Nora B.",
      displayName:"Nora B., 54 years",
      fullName:"Nora Bennett",
      dob:"03/18/1972",
      support:"Guided",
      patientNumber:"Patient 1 of 4",
      caseText:"Postoperative day 1 after uncomplicated abdominal surgery. Awake, cooperative, and currently on room air. A routine respiratory assessment is ordered. No isolation order is present.",
      bedsideText:"Nora is awake and watching you enter. Complete the opening sequence before beginning measurements.",
      orderText:"Routine respiratory assessment · Room air unless clinically indicated",
      prepareCue:"Review the chart first. Then choose only the equipment needed to observe, measure, auscultate, and document the patient's current respiratory status.",
      connectCue:"Place the actions in a safe, patient-centered order. Two identifiers must come from the patient/wristband—not the room number.",
      measureCue:"Click a tool or drag it onto Nora. The same interaction works by touch, mouse, or keyboard.",
      pulse:82,
      rr:16,
      rrDescription:"regular, unlabored",
      spo2:97,
      oxygenText:"room air",
      expansionFinding:"Chest expansion is symmetric bilaterally.",
      fremitusFinding:"Tactile fremitus is equal bilaterally with expected vibration intensity.",
      crepitusFinding:"No crepitus or subcutaneous air is palpated.",
      percussionCorrect:"resonant",
      percussionFinding:"Percussion is resonant and symmetric over the lung fields.",
      percussionChoices:[["resonant","Resonant and symmetric bilaterally"],["dull","Dullness over both bases"],["hyper","Marked hyperresonance throughout"],["asymmetric","Unilateral dullness compared with the opposite side"]],
      inspectionCorrect:"normal",
      inspectionReveal:"<strong>Regular, unlabored respirations.</strong> Chest movement is symmetric. No retractions, accessory-muscle use, cyanosis, or tripod positioning are observed.",
      inspectionChoices:[
        ["normal","Breathing is regular and unlabored with symmetric chest movement."],
        ["accessory","Accessory muscle use is present despite a normal respiratory rate."],
        ["tripod","The patient is leaning forward in a tripod position."],
        ["retractions","Intercostal retractions are visible during inspiration."]
      ],
      roomImage:"/competencies/respiratory-routine/assets/patient-bed-scene.png",
      roomImageAlt:"Nora resting in a hospital bed",
      inspectionImage:"/competencies/respiratory-routine/assets/chest-inspection-normal.png",
      inspectionAlt:"Nora with a normal respiratory appearance",
      patientImage:"/competencies/respiratory-routine/assets/patient-upright.png",
      patientImageAlt:"Nora sitting upright in bed",
      breathCorrect:"normal",
      audio:"/assessment/pa-1-2-vesicular.m4a",
      audioVolume:1,
      interpretationCorrect:"routine",
      interpretationChoices:[
        ["routine","Document the stable assessment and continue routine monitoring without adding respiratory treatment."],
        ["oxygen","Start supplemental oxygen because postoperative patients may develop respiratory complications after surgery."],
        ["neb","Administer a bronchodilator now to prevent possible postoperative bronchospasm before symptoms develop."],
        ["abg","Obtain an arterial blood gas now to confirm that the normal pulse-ox value is accurate."]
      ],
      findingSummary:["Comfortable, upright, symmetric chest movement","16/min, regular","97% on room air","Clear and equal bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> No immediate respiratory intervention is indicated. Continue routine monitoring and document the findings.",
      interpretIncorrectFeedback:"<strong>Look at the whole pattern.</strong> Normal work of breathing, RR 16/min, SpO₂ 97% on room air, and clear bilateral breath sounds do not support immediate respiratory treatment or escalation.",
      documentationChoices:[
        ["best","RR 16/min, regular and unlabored; chest expansion and tactile fremitus symmetric; percussion resonant bilaterally; no crepitus; breath sounds clear/equal bilaterally; SpO₂ 97% on room air."],
        ["vague","Respiratory assessment normal. Patient doing fine."],
        ["overstate","Postoperative patient has no pulmonary complications and will not require respiratory therapy."],
        ["omit","SpO₂ 97%. No other documentation needed because findings were normal."]
      ],
      noEscalationReason:"There are no indications that Nora needs escalation of care, and none of her measured vital signs are outside expected parameters.",
      completeHeading:"Patient 1: Routine Established",
      completeClinical:"Nora's findings are internally consistent with a stable postoperative patient on room air. No immediate respiratory intervention is indicated.",
      completeNext:"Patient 2 will preserve the same routine but introduce chronic oxygen therapy and fewer hints."
    },
    {
      firstName:"Elaine",
      shortName:"Elaine M.",
      displayName:"Elaine M., 68 years",
      fullName:"Elaine Moreno",
      dob:"09/02/1958",
      support:"Supported",
      patientNumber:"Patient 2 of 4",
      caseText:"History of chronic obstructive pulmonary disease (COPD) with prescribed home oxygen at 2 L/min by nasal cannula and inhaled treatments at home. Elaine was admitted for a non-respiratory reason. She is awake, cooperative, and resting comfortably. Her documented baseline SpO₂ is about 92% on 2 L/min. A routine respiratory assessment is ordered. No isolation order is present.",
      bedsideText:"Elaine is awake and comfortable on her prescribed 2 L/min nasal-cannula oxygen. She was admitted for another reason and normally uses oxygen and inhaled respiratory treatments at home.",
      orderText:"Routine respiratory assessment · Continue oxygen at 2 L/min by nasal cannula unless the patient's condition or order changes",
      prepareCue:"Use the routine you established with Patient 1. Review the chart and decide which assessment tools you actually need.",
      connectCue:"Complete the opening sequence and verify two person-specific identifiers. Fewer hints are provided this time.",
      measureCue:"Collect the measurements with the appropriate tools. Interpret the SpO₂ in the context of Elaine's prescribed oxygen and documented usual range. If the first pulse-ox site is unreliable, troubleshoot the signal before accepting a value.",
      oxScenario:"nail-polish",
      pulse:88,
      rr:20,
      rrDescription:"regular, no acute distress",
      spo2:92,
      oxygenText:"2 L/min nasal cannula",
      expansionFinding:"Chest expansion is mildly reduced but symmetric bilaterally.",
      fremitusFinding:"Tactile fremitus is decreased but symmetric bilaterally.",
      crepitusFinding:"No crepitus or subcutaneous air is palpated.",
      percussionCorrect:"hyper",
      percussionFinding:"Percussion is more resonant to hyperresonant bilaterally, consistent with chronic hyperinflation.",
      percussionChoices:[["hyper","More resonant to hyperresonant and symmetric bilaterally"],["dull","Dullness over both bases"],["resonant","Completely normal resonance without any chronic change"],["asymmetric","Unilateral dullness compared with the opposite side"]],
      inspectionCorrect:"stable",
      inspectionReveal:"<strong>Chronically stable COPD appearance without acute distress.</strong> Elaine is resting comfortably on her prescribed oxygen. Chest movement is symmetric, with no retractions, marked accessory-muscle use, cyanosis, or tripod positioning.",
      inspectionChoices:[
        ["stable","Chronic COPD features are present, but Elaine is comfortable with symmetric chest movement and no acute respiratory distress."],
        ["accessory","Marked accessory-muscle use and shoulder elevation indicate increased work of breathing."],
        ["tripod","Elaine is leaning forward in a tripod position to support ventilation."],
        ["retractions","Intercostal retractions are visible with each inspiration."]
      ],
      roomImage:"/competencies/respiratory-routine/assets/patient-elaine-copd-stable-room-scene.png",
      roomImageAlt:"Elaine resting comfortably in her hospital room on prescribed oxygen",
      inspectionImage:"/competencies/respiratory-routine/assets/patient-elaine-copd-stable-reference.png",
      inspectionAlt:"Elaine with chronic stable COPD on prescribed nasal-cannula oxygen",
      patientImage:"/competencies/respiratory-routine/assets/patient-elaine-copd-stable-cutout.png",
      patientImageAlt:"Elaine sitting comfortably in bed on prescribed nasal-cannula oxygen",
      breathCorrect:"diminished",
      audio:"/assessment/pa-1-2-vesicular.m4a",
      audioVolume:0.38,
      interpretationCorrect:"continue-o2",
      interpretationChoices:[
        ["continue-o2","Maintain Elaine\'s prescribed oxygen and home respiratory regimen, document the findings, and continue routine monitoring."],
        ["remove-o2","Remove Elaine\'s oxygen and reassess on room air because 92% is below the usual adult range."],
        ["increase-o2","Increase Elaine\'s oxygen flow now because a saturation of 92% should always be corrected upward."],
        ["escalate","Escalate care immediately because diminished bilateral breath sounds should always be treated as acute deterioration."]
      ],
      findingSummary:["Comfortable at rest, symmetric chest movement","20/min, regular","92% on 2 L/min nasal cannula","Diminished bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> Elaine's current findings fit the patient-specific context documented in the chart: prescribed oxygen at 2 L/min, SpO₂ within her recent stable range, no acute distress, and diminished bilateral breath sounds. Continue the ordered oxygen, document, and monitor.",
      interpretIncorrectFeedback:"<strong>Use the patient-specific context.</strong> Elaine is comfortable, her SpO₂ is within the recent range documented on the same prescribed oxygen flow, and there is no new sign of acute deterioration. A single value should not automatically trigger oxygen removal, an unprescribed increase, or escalation.",
      documentationChoices:[
        ["best","RR 20/min, regular; chest expansion mildly reduced but symmetric; tactile fremitus decreased bilaterally; percussion hyperresonant; no crepitus; breath sounds diminished bilaterally; SpO₂ 92% on 2 L/min nasal cannula, consistent with baseline."],
        ["vague","COPD assessment unchanged. Patient seems okay."],
        ["overstate","SpO₂ is low, so the patient requires more oxygen immediately."],
        ["omit","SpO₂ 92%. Oxygen therapy and breath sounds do not need documentation because they are chronic."]
      ],
      noEscalationReason:"Elaine has no new finding that indicates escalation of care, and her SpO₂ of 92% on 2 L/min matches her documented baseline.",
      completeHeading:"Patient 2: Context Matters",
      completeClinical:"Elaine's assessment shows why respiratory findings must be interpreted in context. Her prescribed oxygen, documented recent SpO₂ range, appearance, measurements, and breath sounds fit together without evidence of acute deterioration.",
      completeNext:"Patient 3 will keep the same routine but reduce support further and introduce an acute finding that requires action."
    },
    {
      firstName:"Robert",
      shortName:"Robert K.",
      displayName:"Robert K., 72 years",
      fullName:"Robert Keller",
      dob:"11/14/1953",
      support:"Reduced support",
      patientNumber:"Patient 3 of 4",
      caseText:"Robert is admitted with acute shortness of breath and wheezing that has worsened over the last hour. He is awake and alert but appears uncomfortable and is sitting forward to breathe. Low-flow oxygen is in place. A respiratory assessment is ordered. No isolation order is present.",
      bedsideText:"Robert is alert but visibly short of breath. Use the same respiratory-assessment routine and determine which findings require action.",
      orderText:"Respiratory assessment · Oxygen 2 L/min by nasal cannula · Report worsening respiratory status",
      prepareCue:"Review the case and gather the equipment needed to assess Robert. Use the routine you have already practiced.",
      connectCue:"Complete the opening routine and verify two patient identifiers. Use your prior practice rather than relying on step-by-step hints.",
      measureCue:"Collect Robert's pulse, respiratory rate, and SpO₂. Decide whether the values fit a stable pattern or support the visible change in his respiratory status.",
      pulse:112,
      rr:30,
      rrDescription:"tachypneic with increased effort",
      spo2:93,
      oxygenText:"2 L/min nasal cannula",
      expansionFinding:"Chest movement remains symmetric despite increased respiratory effort.",
      fremitusFinding:"Tactile fremitus is equal bilaterally without a focal increase or decrease.",
      crepitusFinding:"No crepitus or subcutaneous air is palpated.",
      percussionCorrect:"resonant",
      percussionFinding:"Percussion is resonant and symmetric over the lung fields.",
      percussionChoices:[["resonant","Resonant and symmetric bilaterally"],["dull","Dullness over both bases"],["hyper","Marked hyperresonance throughout"],["asymmetric","Unilateral dullness compared with the opposite side"]],
      inspectionCorrect:"increased-wob",
      inspectionReveal:"<strong>Increased work of breathing is visible.</strong> Robert is sitting forward, breathing with his mouth open, and using neck and shoulder muscles to assist ventilation.",
      inspectionChoices:[
        ["stable","Breathing is mildly faster but otherwise comfortable without increased work of breathing."],
        ["increased-wob","Forward positioning and accessory-muscle use indicate increased work of breathing."],
        ["normal-posture","The forward position is only a comfort preference and does not affect the respiratory assessment."],
        ["isolated-tachypnea","The only abnormal visual finding is the respiratory rate; work of breathing appears normal."]
      ],
      roomImage:"/competencies/respiratory-routine/assets/patient-robert-acute-wheezing.png",
      roomImageAlt:"Robert in bed with visible shortness of breath on nasal-cannula oxygen",
      inspectionImage:"/competencies/respiratory-routine/assets/tripod_position_medical_infographic.png",
      inspectionAlt:"Robert in tripod position with increased work of breathing",
      patientImage:"/competencies/respiratory-routine/assets/patient-robert-acute-wheezing.png",
      patientImageAlt:"Robert positioned upright for respiratory assessment while short of breath",
      breathCorrect:"wheeze",
      audio:"/assessment/pa-1-2-sibilant-wheeze.m4a",
      audioVolume:1,
      interpretationCorrect:"escalate",
      interpretationChoices:[
        ["escalate","Keep the ordered oxygen in place, report Robert's acute respiratory changes, and escalate care for prompt evaluation."],
        ["routine","Document Robert's findings and continue routine monitoring because his oxygen saturation remains above 90%."],
        ["remove-o2","Remove the oxygen and repeat the respiratory assessment on room air before deciding whether deterioration is present."],
        ["document-first","Complete documentation and equipment cleanup first, then report the abnormal respiratory findings after leaving the room."]
      ],
      findingSummary:["Sitting forward with accessory-muscle use","30/min, increased effort","93% on 2 L/min nasal cannula","Wheezes bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> Robert has a pattern of acute respiratory worsening: tachypnea, increased work of breathing, wheezing, and abnormal vital signs. Keep the ordered oxygen in place, report the findings, and escalate care so treatment can be evaluated promptly.",
      interpretIncorrectFeedback:"<strong>Reassess the pattern.</strong> Robert is not simply showing one isolated abnormal value. Tachypnea, accessory-muscle use, forward positioning, and wheezing together indicate an acute change that should be reported and escalated rather than handled as routine monitoring.",
      documentationChoices:[
        ["best","RR 30/min with increased effort; symmetric chest expansion and fremitus; resonant percussion; no crepitus; patient in tripod position with accessory-muscle use; bilateral wheezes; pulse 112/min; SpO₂ 93% on 2 L/min nasal cannula; change reported and care escalated."],
        ["vague","Patient wheezing and looks short of breath. Provider aware."],
        ["understate","Respiratory assessment completed. SpO₂ 93% on oxygen; continue routine monitoring."],
        ["omit","Wheezes present. Other findings do not need documentation because care was escalated."]
      ],
      noEscalationReason:"",
      completeHeading:"Patient 3: Recognize and Act",
      completeClinical:"Robert's findings demonstrate an acute change rather than a stable baseline pattern. The learner must connect tachypnea, increased work of breathing, wheezing, and vital-sign abnormalities to timely reporting and escalation.",
      completeNext:"Patient 4 will require an independent assessment of dyspnea in a patient with CHF, bibasilar fine crackles, pedal edema, and worsening oxygenation."
    },
    {
      firstName:"Maggie",
      shortName:"Maggie L.",
      displayName:"Maggie L., 76 years",
      fullName:"Margaret Lewis",
      dob:"02/27/1950",
      support:"Independent",
      patientNumber:"Patient 4 of 4",
      caseText:"History of congestive heart failure (CHF) and hypertension. Admitted for worsening edema and shortness of breath. Oxygen is ordered at 2 L/min by nasal cannula. Earlier in the shift, respiratory rate was 20/min and SpO₂ was 94% on 2 L/min. Nursing notes describe increasing dyspnea and difficulty lying flat. A routine respiratory assessment is ordered. No isolation order is present.",
      bedsideText:"Maggie is upright in bed and says, 'I feel more short of breath than I did earlier.' She is on 2 L/min by nasal cannula and has visible ankle swelling.",
      orderText:"Respiratory assessment · Oxygen 2 L/min by nasal cannula · Report changes from baseline",
      prepareCue:"Use the routine independently. Compare what you collect with the earlier baseline documented in the chart.",
      connectCue:"Complete the same safe opening sequence and verify two patient identifiers before beginning the assessment.",
      measureCue:"Collect pulse, respiratory rate, and SpO₂. Interpret the measurements in the context of Maggie's ordered oxygen and documented earlier values.",
      pulse:108,
      rr:28,
      rrDescription:"tachypneic with increased effort",
      spo2:88,
      oxygenText:"2 L/min nasal cannula",
      expansionFinding:"Chest expansion is symmetric but somewhat reduced as Maggie breathes with increased effort.",
      fremitusFinding:"Tactile fremitus is equal bilaterally without a focal tactile abnormality.",
      crepitusFinding:"No crepitus or subcutaneous air is palpated.",
      percussionCorrect:"dull-bases",
      percussionFinding:"Percussion is resonant over the upper fields with relative dullness at the bilateral bases.",
      percussionChoices:[["dull-bases","Resonant upper fields with relative dullness at both bases"],["resonant","Uniformly resonant throughout all lung fields"],["hyper","Marked hyperresonance throughout both lungs"],["asymmetric","Isolated unilateral dullness with a normal opposite base"]],
      inspectionCorrect:"chf-pattern",
      inspectionReveal:"<strong>Increased respiratory effort with peripheral edema is visible.</strong> Maggie is in high-Fowler position, appears dyspneic, and has bilateral pedal edema at the ankles. The pattern suggests a cardiopulmonary fluid problem rather than isolated bronchospasm.",
      inspectionChoices:[
        ["chf-pattern","High-Fowler positioning, increased work of breathing, and pedal edema suggest a meaningful cardiopulmonary change rather than an isolated airway problem."],
        ["bronchospasm","The visible findings point most strongly to bronchoconstriction, so wheezing should be assumed even before auscultation."],
        ["normal-aging","These findings are expected for age and do not represent a meaningful change from baseline."],
        ["isolated-rr","The only concerning finding is the respiratory rate; the rest of the appearance is not clinically important."]
      ],
      roomImage:"/competencies/respiratory-routine/assets/elderly_patient_receiving_hospital_care.png",
      roomImageAlt:"Older woman with CHF resting upright in a hospital bed on nasal-cannula oxygen",
      inspectionImage:"/competencies/respiratory-routine/assets/elderly_patient_resting_in_hospital_bed.png",
      inspectionAlt:"Older woman upright in bed with dyspnea and visible pedal edema",
      patientImage:"/competencies/respiratory-routine/assets/elderly_patient_resting_in_hospital_bed.png",
      patientImageAlt:"Older woman upright in bed for respiratory assessment",
      breathCorrect:"crackles",
      audio:"/assessment/pa-1-2-fine-crackles.m4a",
      audioVolume:1,
      interpretationCorrect:"report-chf",
      interpretationChoices:[
        ["report-chf","Keep ordered oxygen in place, report the change from baseline, and discuss fluid status and diuretic therapy with the nurse/provider."],
        ["bronchodilator","Request bronchodilator therapy first because worsening dyspnea should be treated as bronchoconstriction until another cause is proven."],
        ["routine","Continue routine monitoring because crackles and pedal edema may be chronic findings in a patient with heart failure."],
        ["room-air","Remove oxygen briefly and repeat the saturation on room air before deciding whether the change requires escalation."]
      ],
      findingSummary:["High-Fowler position, dyspnea, bilateral pedal edema","28/min, increased effort","88% on 2 L/min nasal cannula","Fine bibasilar crackles; no wheeze heard"],
      interpretCorrectFeedback:"<strong>Correct.</strong> Maggie's respiratory status has worsened from the earlier baseline. Fine bibasilar crackles, lower SpO₂ despite ordered oxygen, increased work of breathing, and pedal edema should be reported promptly. Do not anchor on bronchospasm when wheezing is absent and the broader picture suggests fluid overload.",
      interpretIncorrectFeedback:"<strong>Synthesize the pattern.</strong> Maggie has no wheeze, but she does have fine bibasilar crackles, worsening oxygenation on the same oxygen flow, dyspnea, and pedal edema with a history of CHF. Those findings support prompt reporting and discussion of fluid status rather than assuming bronchoconstriction.",
      documentationChoices:[
        ["best","RR 28/min with increased effort; chest expansion symmetric but reduced; tactile fremitus equal; relative dullness at bilateral bases; no crepitus; high-Fowler position with pedal edema; pulse 108/min; SpO₂ 88% on 2 L/min nasal cannula; fine bibasilar crackles, no wheeze; findings reported."],
        ["vague","Patient seems short of breath and may be fluid overloaded. Nurse notified."],
        ["broncho","Shortness of breath likely due to bronchospasm. Bronchodilator needed."],
        ["omit","Crackles heard. No other details are needed because the patient has CHF."]
      ],
      noEscalationReason:"",
      completeHeading:"Patient 4: Complex Pattern Recognition",
      completeClinical:"Maggie's case requires the learner to compare current findings with baseline and avoid anchoring on bronchospasm. Fine bibasilar crackles, pedal edema, worsening SpO₂ on the same oxygen flow, and increased work of breathing support prompt reporting and collaboration about fluid status and diuretic therapy.",
      completeNext:"You have completed the four-patient respiratory routine sequence. The next step is a cumulative patient encounter that combines the skills from all four patients."
    }
  ];

  const cfg = () => patients[state.patientIndex];

  const equipment = [
    ["stethoscope","Stethoscope","/competencies/respiratory-routine/assets/stethoscope.png",true],
    ["pulse-ox","Pulse oximeter","/competencies/respiratory-routine/assets/pulseox-probe.png",true],
    ["timer","Watch / timer","/competencies/respiratory-routine/assets/watch-timer.png",true],
    ["clipboard","Clipboard / documentation","/competencies/respiratory-routine/assets/clipboard.png",true],
    ["nebulizer","Nebulizer kit","/competencies/respiratory-routine/assets/nebulizer-kit.png",false],
    ["abg","ABG syringe","/competencies/respiratory-routine/assets/abg-syringe.png",false],
    ["suction","Suction catheter","/competencies/respiratory-routine/assets/suction-catheter.png",false],
    ["spirometer","Incentive spirometer","/competencies/respiratory-routine/assets/incentive-spirometer.png",false]
  ];
  const connectExpected=["Perform hand hygiene","Introduce yourself and explain the respiratory assessment","Verify two patient identifiers","Position the patient upright as tolerated"];
  function closeActions(){
    const p=cfg();
    const actions = [
      ["safe",`Ensure ${p.firstName} is safe and comfortable`,true],
      ["document","Document the respiratory assessment findings",true],
      ["clean","Clean/disinfect the stethoscope and pulse-ox equipment",true],
      ["hand-hygiene","Perform hand hygiene before leaving the room",true]
    ];
    if(state.patientIndex===1){
      actions.push(["maintain-regimen","Maintain prescribed oxygen / home respiratory regimen",true]);
    }
    if(state.patientIndex===2 || state.patientIndex===3){
      actions.push(["escalate","Escalate care",true]);
      actions.push(["report-vitals","Report vital signs outside expected parameters",true]);
    }else{
      actions.push(["escalate","Escalate care",false]);
      actions.push(["report-vitals","Report vital signs outside expected parameters",false]);
    }
    if(state.patientIndex===3){
      actions.push(["review-fluid","Discuss fluid status / current diuretic plan with the nurse or provider",true]);
    }
    actions.push(
      ["repeat","Repeat the entire respiratory assessment regardless of findings",false],
      ["oxygen-off","Remove oxygen from the patient before leaving the room",false]
    );
    return actions;
  }
  const setFeedback=(el,type,html)=>{el.className=`feedback show ${type}`;el.innerHTML=html;};
  const clearFeedback=el=>{el.className="feedback";el.innerHTML="";};
  const sameMembers=(a,b)=>{const x=[...a].sort(),y=[...b].sort();return x.length===y.length&&x.every((v,i)=>v===y[i]);};
  const shuffle=a=>{const c=[...a];for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;};

  function showSection(n){state.section=Number(n);state.unlockedThrough=Math.max(state.unlockedThrough,state.section);saveProgress();$$('.lesson-section').forEach((s,i)=>s.classList.toggle('active',i===state.section));$$('.nav-step').forEach((b,i)=>b.classList.toggle('active',i===state.section));const labels=['Teach','Prepare','Connect','Measure','Physical Assessment','Interpret','Close the Loop','Complete'];$('#progressText').textContent=labels[state.section];$('#progressBar').style.width=`${state.section/7*100}%`;requestAnimationFrame(()=>{const sec=$(`.lesson-section[data-section-panel="${state.section}"]`);if(sec){window.scrollTo({top:Math.max(0,sec.getBoundingClientRect().top+window.scrollY-STICKY_HEADER_OFFSET),behavior:'smooth'});}});}

  function selectSingle(container,key,value){$$('.select-option',container).forEach(b=>b.classList.toggle('selected',b.dataset[key]===value));}
  function renderEquipment(){const tray=$('#equipmentTray');tray.innerHTML='';shuffle(equipment).forEach(([id,label,file])=>{const b=document.createElement('button');b.type='button';b.className='equipment-card';b.dataset.id=id;b.innerHTML=`<img src="${file}" alt="${label}"><strong>${label}</strong>`;b.classList.toggle('selected',state.equipment.includes(id));b.addEventListener('click',()=>{state.equipment.includes(id)?state.equipment=state.equipment.filter(x=>x!==id):state.equipment.push(id);b.classList.toggle('selected',state.equipment.includes(id));clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;saveProgress();});tray.appendChild(b);});}

  function createSortable(container,steps){container.innerHTML='';const ordered=(state.connectOrder.length===steps.length&&sameMembers(state.connectOrder,steps))?[...state.connectOrder]:shuffle(steps);ordered.forEach(step=>{const item=document.createElement('div');item.className='sortable-item';item.dataset.step=step;item.innerHTML=`<span class="drag-handle">☰</span><div><div style="display:flex;gap:10px;align-items:center"><span class="order-number"></span><span>${step}</span></div><div class="keyboard-order-controls"><button type="button" class="move-btn up">↑</button><button type="button" class="move-btn down">↓</button></div></div><span class="sort-status"></span>`;item.draggable=true;item.addEventListener('dragstart',()=>item.classList.add('dragging'));item.addEventListener('dragend',()=>{item.classList.remove('dragging');sync(container);});item.addEventListener('dragover',e=>e.preventDefault());item.addEventListener('drop',e=>{e.preventDefault();const d=$('.dragging',container);if(!d||d===item)return;const items=[...container.children],from=items.indexOf(d),to=items.indexOf(item);from<to?item.after(d):item.before(d);sync(container);});$('.up',item).onclick=()=>{const p=item.previousElementSibling;if(p)container.insertBefore(item,p);sync(container);};$('.down',item).onclick=()=>{const n=item.nextElementSibling;if(n)n.after(item);sync(container);};container.appendChild(item);});sync(container);}
  function sync(container){state.connectOrder=[...container.children].map(it=>it.dataset.step);[...container.children].forEach((it,i)=>{$('.order-number',it).textContent=i+1;it.classList.remove('correct-position','wrong-position');$('.sort-status',it).textContent='';});saveProgress();}
  function gradeSortable(container,expected){let c=0;[...container.children].forEach((it,i)=>{const ok=it.dataset.step===expected[i];it.classList.toggle('correct-position',ok);it.classList.toggle('wrong-position',!ok);$('.sort-status',it).textContent=ok?'✓ Correct':'Adjust';if(ok)c++;});return c===expected.length;}

  function renderIds(){const opts=[['name','Full name'],['dob','Date of birth'],['room','Room number'],['diagnosis','Surgical diagnosis']];const wrap=$('#identifierChoices');wrap.innerHTML='';shuffle(opts).forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.className='choice-chip';b.textContent=label;b.dataset.id=id;b.classList.toggle('selected',state.ids.includes(id));b.onclick=()=>{if(state.ids.includes(id))state.ids=state.ids.filter(x=>x!==id);else if(state.ids.length<2)state.ids.push(id);else state.ids=[state.ids[1],id];$$('.choice-chip',wrap).forEach(x=>x.classList.toggle('selected',state.ids.includes(x.dataset.id)));$('#toMeasure').disabled=true;clearFeedback($('#connectFeedback'));saveProgress();};wrap.appendChild(b);});}
  function renderChoiceStack(id,choices,stateKey,dataKey){const wrap=$(id);wrap.innerHTML='';shuffle(choices).forEach(([value,text])=>{const b=document.createElement('button');b.type='button';b.className='select-option';b.dataset[dataKey]=value;b.textContent=text;b.classList.toggle('selected',state[stateKey]===value);b.onclick=()=>{state[stateKey]=value;selectSingle(wrap,dataKey,value);saveProgress();};wrap.appendChild(b);});}
  function renderCloseActions(){
    const wrap=$('#closeActionChoices');
    wrap.innerHTML='';
    shuffle(closeActions()).forEach(([id,label])=>{
      const b=document.createElement('button');
      b.type='button';
      b.className='select-option close-action-option';
      b.dataset.action=id;
      b.setAttribute('aria-pressed','false');
      b.textContent=label;
      b.onclick=()=>{
        if(state.closeActions.includes(id)) state.closeActions=state.closeActions.filter(x=>x!==id);
        else state.closeActions.push(id);
        const selected=state.closeActions.includes(id);
        b.classList.toggle('selected',selected);
        b.setAttribute('aria-pressed',selected?'true':'false');
        clearFeedback($('#closeFeedback'));
        $('#finishPatient').disabled=true;
        saveProgress();
      };
      b.classList.toggle('selected',state.closeActions.includes(id));
      b.setAttribute('aria-pressed',state.closeActions.includes(id)?'true':'false');
      wrap.appendChild(b);
    });
  }
  function renderInspection(){
    renderChoiceStack('#inspectionChoices',cfg().inspectionChoices,'inspectionSingle','finding');
    $$('#inspectionChoices .select-option').forEach(b=>b.disabled=true);
  }

  function renderPercussionChoices(){
    const wrap=$('#percussionChoices');
    if(!wrap) return;
    wrap.innerHTML='';
    shuffle(cfg().percussionChoices).forEach(([value,text])=>{
      const b=document.createElement('button');b.type='button';b.className='select-option';b.dataset.percussion=value;b.textContent=text;
      b.classList.toggle('selected',state.percussionChoice===value);
      b.disabled=state.percussionSides.length<2;
      b.onclick=()=>{state.percussionChoice=value;selectSingle(wrap,'percussion',value);clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;saveProgress();};
      wrap.appendChild(b);
    });
  }

  function revealMiniResult(id,html){
    const el=$(id);if(!el)return;el.classList.remove('locked');el.classList.add('collected');el.innerHTML=`<strong>✓ Finding:</strong> ${html}`;
  }

  function assessExpansion(){state.expansionDone=true;revealMiniResult('#expansionReveal',cfg().expansionFinding);saveProgress();clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;}
  function assessCrepitus(){state.crepitusDone=true;revealMiniResult('#crepitusReveal',cfg().crepitusFinding);saveProgress();clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;}

  function useFremitusHands(){
    const target=$('#fremitusTarget'),hands=$('#fremitusHands'),audio=$('#fremitusAudio'),status=$('#fremitusStatus'),reveal=$('#fremitusReveal');
    if(!target||!hands||!audio)return;
    hands.classList.add('used');hands.setAttribute('aria-pressed','true');target.classList.add('listening');
    reveal.classList.add('locked');reveal.classList.remove('collected');reveal.innerHTML='<span>Feeling transmitted vibration while the patient speaks…</span>';
    status.textContent='Patient is saying “ninety-nine”… Compare the vibration on both sides.';
    audio.currentTime=0;
    const finish=()=>{state.fremitusDone=true;target.classList.remove('listening');status.textContent='Tactile fremitus assessment complete.';revealMiniResult('#fremitusReveal',cfg().fremitusFinding);saveProgress();clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;};
    audio.onended=finish;
    const promise=audio.play();
    if(promise&&typeof promise.catch==='function')promise.catch(()=>{status.textContent='Press the hands again to play the patient saying “ninety-nine.”';});
  }

  function initPalpationPercussion(){
    const exp=$('#checkExpansion'),crep=$('#checkCrepitus'),hands=$('#fremitusHands'),target=$('#fremitusTarget');
    if(exp)exp.addEventListener('click',assessExpansion);if(crep)crep.addEventListener('click',assessCrepitus);
    if(hands&&target){
      hands.addEventListener('click',useFremitusHands);
      hands.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain','fremitus-hands');e.dataTransfer.effectAllowed='copy';});
      target.addEventListener('dragover',e=>{e.preventDefault();target.classList.add('drag-over');});
      target.addEventListener('dragleave',()=>target.classList.remove('drag-over'));
      target.addEventListener('drop',e=>{e.preventDefault();target.classList.remove('drag-over');if(e.dataTransfer.getData('text/plain')==='fremitus-hands')useFremitusHands();});
    }
    [['#percussLeft','left'],['#percussRight','right']].forEach(([sel,side])=>{const b=$(sel);if(!b)return;b.addEventListener('click',()=>{if(!state.percussionSides.includes(side))state.percussionSides.push(side);b.classList.add('used');if(state.percussionSides.length===2){revealMiniResult('#percussionReveal',cfg().percussionFinding);renderPercussionChoices();}saveProgress();clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;});});
  }

  function renderBreathSounds(){
    const cards=[['normal','Normal / clear','/competencies/respiratory-routine/assets/breath-sounds-normal-card.png'],['wheeze','Wheezes','/competencies/respiratory-routine/assets/breath-sounds-wheeze-card.png'],['crackles','Crackles','/competencies/respiratory-routine/assets/breath-sounds-crackles-card.png'],['diminished','Diminished','/competencies/respiratory-routine/assets/breath-sounds-diminished-card.png']];
    const wrap=$('#breathSoundChoices');wrap.innerHTML='';
    shuffle(cards).forEach(([id,label,file])=>{
      const b=document.createElement('button');b.type='button';b.className='breath-card';b.dataset.sound=id;b.disabled=true;
      b.innerHTML=`<img src="${file}" alt="${label} breath sound teaching card"><strong>${label}</strong>`;
      b.classList.toggle('selected',state.breath===id);b.onclick=()=>{state.breath=id;$$('.breath-card',wrap).forEach(x=>x.classList.toggle('selected',x===b));clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;saveProgress();};
      wrap.appendChild(b);
    });
  }

  function markToolUsed(tool){
    const target=$('#measurePatientTarget');
    if(tool==='timer'){
      state.collected.timer=true;
      const card=$('#timerFinding');
      card.classList.remove('locked'); card.classList.add('collected');
      $('.data-status',card).textContent='✓ Collected';
      $('.data-value',card).innerHTML=`<strong>Pulse ${cfg().pulse}/min</strong><br><strong>Respiratory rate ${cfg().rr}/min</strong> · ${cfg().rrDescription}`;
      $('#measureTechniquePanel').hidden=false;
    }
    if(tool==='pulse-ox'){
      state.collected.pulseOx=true;
      const card=$('#oxFinding');
      card.classList.remove('locked'); card.classList.add('collected');
      if(state.patientIndex===1){
        $('.data-status',card).textContent='Reading pending';
        $('.data-value',card).innerHTML='<strong>No stable SpO₂ reading yet.</strong><br>The first finger has dark nail polish, so the signal is unreliable.';
      }else{
        $('.data-status',card).textContent='✓ Collected';
        $('.data-value',card).innerHTML=`<strong>SpO₂ ${cfg().spo2}%</strong> on ${cfg().oxygenText} · pulse displayed ${cfg().pulse}/min`;
      }
      $('#oxTechniquePanel').hidden=false;
    }
    $$('#measureToolTray .bedside-tool').forEach(b=>{const used=(b.dataset.tool==='timer'&&state.collected.timer)||(b.dataset.tool==='pulse-ox'&&state.collected.pulseOx);b.classList.toggle('used',used);b.setAttribute('aria-pressed',used?'true':'false');});
    if(target){target.classList.add('tool-used');setTimeout(()=>target.classList.remove('tool-used'),450);}
    clearFeedback($('#measureFeedback')); $('#toInspect').disabled=true; saveProgress();
  }

  function getOxTechniqueChoices(){
    if(state.patientIndex===1){
      return [
        ["alt-site","Try a finger without nail polish, or use an alternative site such as the earlobe or toe if needed."],
        ["remove-polish","Remove the nail polish before trying any other finger or site."],
        ["accept-none","Document that no pulse-ox reading is available and skip oxygen-saturation assessment."],
        ["increase-o2","Increase the oxygen flow because the pulse oximeter does not display a number."]
      ];
    }
    return [
      ["verify","Place the probe correctly, minimize motion, and verify that the displayed pulse/signal is believable before accepting the SpO₂."],
      ["instant","Apply the probe and document the first number that appears."],
      ["blanket","Place the probe over any convenient finger even if nail coverage or poor perfusion affects the signal."]
    ];
  }

  function updateOxDisplayResolved(){
    const card=$('#oxFinding');
    if(!card) return;
    card.classList.remove('locked'); card.classList.add('collected');
    $('.data-status',card).textContent='✓ Reliable reading';
    $('.data-value',card).innerHTML=`<strong>SpO₂ ${cfg().spo2}%</strong> on ${cfg().oxygenText} · pulse displayed ${cfg().pulse}/min`;
  }

  function initMeasureTools(){
    const target=$('#measurePatientTarget');
    $$('#measureToolTray .bedside-tool').forEach(tool=>{
      tool.addEventListener('click',()=>markToolUsed(tool.dataset.tool));
      tool.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',tool.dataset.tool);e.dataTransfer.effectAllowed='copy';});
    });
    if(target){
      target.addEventListener('dragover',e=>{e.preventDefault();target.classList.add('drag-over');});
      target.addEventListener('dragleave',()=>target.classList.remove('drag-over'));
      target.addEventListener('drop',e=>{e.preventDefault();target.classList.remove('drag-over');markToolUsed(e.dataTransfer.getData('text/plain'));});
    }
  }

  function inspectPatient(){
    state.inspected=true;
    const reveal=$('#inspectionReveal');
    reveal.classList.remove('locked'); reveal.classList.add('collected');
    reveal.innerHTML=`<span class="data-status">✓ Observed</span><p>${cfg().inspectionReveal}</p>`;
    const interpretPrompt=$('#inspectionInterpretPrompt');
    if(interpretPrompt) interpretPrompt.hidden=false;
    $$('#inspectionChoices .select-option').forEach(b=>b.disabled=false);
    $('#inspectPatient').classList.add('used');
    clearFeedback($('#inspectFeedback')); $('#toInterpret').disabled=true; saveProgress();
  }

  function useStethoscope(){
    state.listened=true;
    const tool=$('#stethoscopeTool'), target=$('#auscultationPatientTarget'), panel=$('#listenPanel'), audio=$('#breathAudio');
    tool.classList.add('used'); tool.setAttribute('aria-pressed','true');
    target.classList.add('tool-used');setTimeout(()=>target.classList.remove('tool-used'),450);
    panel.classList.remove('locked'); panel.classList.add('ready');
    $('#audioStatus').textContent='Breath sounds unlocked. Listen carefully, then choose the matching card.';
    $$('#breathSoundChoices .breath-card').forEach(b=>b.disabled=false);
    if(audio){
      audio.src=cfg().audio; audio.volume=cfg().audioVolume; audio.currentTime=0;
      const playPromise=audio.play();
      if(playPromise&&typeof playPromise.catch==='function') playPromise.catch(()=>{$('#audioStatus').textContent='Breath sounds unlocked. Press Play to listen, then choose the matching card.';});
    }
    clearFeedback($('#inspectFeedback')); $('#toInterpret').disabled=true; saveProgress();
  }

  function initAuscultationTool(){
    const tool=$('#stethoscopeTool'), target=$('#auscultationPatientTarget');
    if(!tool||!target)return;
    tool.addEventListener('click',useStethoscope);
    tool.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain','stethoscope');e.dataTransfer.effectAllowed='copy';});
    target.addEventListener('dragover',e=>{e.preventDefault();target.classList.add('drag-over');});
    target.addEventListener('dragleave',()=>target.classList.remove('drag-over'));
    target.addEventListener('drop',e=>{e.preventDefault();target.classList.remove('drag-over');if(e.dataTransfer.getData('text/plain')==='stethoscope')useStethoscope();});
  }


  function resetPatientState(){
    state.equipment=[]; state.ids=[]; state.measure=null; state.ox=null; state.inspectionSingle=null;
    state.breath=null; state.interpret=null; state.doc=null; state.closeActions=[]; state.connectOrder=[];
    state.collected={timer:false,pulseOx:false}; state.inspected=false; state.expansionDone=false; state.fremitusDone=false; state.crepitusDone=false; state.percussionSides=[]; state.percussionChoice=null; state.listened=false; state.unlockedThrough=1;
    ['#toConnect','#toMeasure','#toInspect','#toInterpret','#toClose','#finishPatient'].forEach(id=>{const el=$(id);if(el)el.disabled=true;});
    ['#prepareFeedback','#connectFeedback','#measureFeedback','#inspectFeedback','#interpretFeedback','#closeFeedback'].forEach(id=>{const el=$(id);if(el)clearFeedback(el);});
    const tf=$('#timerFinding'), of=$('#oxFinding');
    [tf,of].forEach(card=>{if(card){card.classList.add('locked');card.classList.remove('collected');$('.data-status',card).textContent='Not collected';}});
    if(tf) $('.data-value',tf).textContent='Use the watch / timer';
    if(of) $('.data-value',of).textContent='Use the pulse oximeter';
    $('#measureTechniquePanel').hidden=true; $('#oxTechniquePanel').hidden=true;
    const rev=$('#inspectionReveal'); rev.className='observation-reveal locked'; rev.innerHTML='<span class="data-status">Not collected</span><p>Inspect the patient before choosing a finding.</p>';
    $('#inspectionInterpretPrompt').hidden=true;
    $('#inspectPatient').classList.remove('used');
    ['#expansionReveal','#fremitusReveal','#crepitusReveal','#percussionReveal'].forEach(id=>{const el=$(id);if(el){el.className='mini-result locked';el.innerHTML='<span>Not assessed</span>';}});
    if($('#fremitusStatus'))$('#fremitusStatus').textContent='Place your hands to begin. The patient will say “ninety-nine.”';
    if($('#fremitusHands')){$('#fremitusHands').classList.remove('used');$('#fremitusHands').setAttribute('aria-pressed','false');}
    state.percussionSides=[];$$('.percussion-site').forEach(b=>b.classList.remove('used'));
    renderPercussionChoices();
    const lp=$('#listenPanel'); lp.className='listen-panel locked';
    $('#audioStatus').textContent='Use the stethoscope to unlock the recording.';
    $('#stethoscopeTool').classList.remove('used'); $('#stethoscopeTool').setAttribute('aria-pressed','false');
    $$('#measureToolTray .bedside-tool').forEach(b=>{b.classList.remove('used');b.setAttribute('aria-pressed','false');});
  }

  function restorePatientUI(){
    const expectedEquipment=equipment.filter(x=>x[3]).map(x=>x[0]);
    $('#toConnect').disabled=!sameMembers(state.equipment,expectedEquipment);
    $('#toMeasure').disabled=!(sameMembers(state.connectOrder,connectExpected)&&sameMembers(state.ids,['name','dob']));
    if(state.collected.timer){
      const card=$('#timerFinding');card.classList.remove('locked');card.classList.add('collected');$('.data-status',card).textContent='✓ Collected';$('.data-value',card).innerHTML=`<strong>Pulse ${cfg().pulse}/min</strong><br><strong>Respiratory rate ${cfg().rr}/min</strong> · ${cfg().rrDescription}`;$('#measureTechniquePanel').hidden=false;
    }
    if(state.collected.pulseOx){
      const card=$('#oxFinding');card.classList.remove('locked');card.classList.add('collected');
      if(state.patientIndex===1 && state.ox!=='alt-site'){ $('.data-status',card).textContent='Reading pending';$('.data-value',card).innerHTML='<strong>No stable SpO₂ reading yet.</strong><br>The first finger has dark nail polish, so the signal is unreliable.'; }
      else{ $('.data-status',card).textContent='✓ Collected';$('.data-value',card).innerHTML=`<strong>SpO₂ ${cfg().spo2}%</strong> on ${cfg().oxygenText} · pulse displayed ${cfg().pulse}/min`; }
      $('#oxTechniquePanel').hidden=false;
    }
    $$('#measureToolTray .bedside-tool').forEach(b=>{const used=(b.dataset.tool==='timer'&&state.collected.timer)||(b.dataset.tool==='pulse-ox'&&state.collected.pulseOx);b.classList.toggle('used',used);b.setAttribute('aria-pressed',used?'true':'false');});
    const oxExpected=state.patientIndex===1?'alt-site':'verify';
    $('#toInspect').disabled=!(state.collected.timer&&state.collected.pulseOx&&state.measure==='quiet'&&state.ox===oxExpected);
    if(state.inspected){ inspectPatient(); }
    if(state.expansionDone) revealMiniResult('#expansionReveal',cfg().expansionFinding);
    if(state.fremitusDone){if($('#fremitusHands')){$('#fremitusHands').classList.add('used');$('#fremitusHands').setAttribute('aria-pressed','true');}revealMiniResult('#fremitusReveal',cfg().fremitusFinding);if($('#fremitusStatus'))$('#fremitusStatus').textContent='Tactile fremitus assessment complete.';}
    if(state.crepitusDone) revealMiniResult('#crepitusReveal',cfg().crepitusFinding);
    $$('.percussion-site').forEach(b=>b.classList.toggle('used',state.percussionSides.includes(b.id==='percussLeft'?'left':'right')));
    if(state.percussionSides.length===2) revealMiniResult('#percussionReveal',cfg().percussionFinding);
    renderPercussionChoices();
    if(state.listened){
      const panel=$('#listenPanel'); panel.classList.remove('locked');panel.classList.add('ready');$('#audioStatus').textContent='Breath sounds unlocked. Press Play to listen again, then choose the matching card.';$('#stethoscopeTool').classList.add('used');$('#stethoscopeTool').setAttribute('aria-pressed','true');$$('#breathSoundChoices .breath-card').forEach(b=>b.disabled=false);
    }
    $('#toInterpret').disabled=!(state.inspected&&state.expansionDone&&state.fremitusDone&&state.crepitusDone&&state.percussionSides.length===2&&state.percussionChoice===cfg().percussionCorrect&&state.listened&&state.inspectionSingle===cfg().inspectionCorrect&&state.breath===cfg().breathCorrect);
    $('#toClose').disabled=!(state.interpret===cfg().interpretationCorrect);
    const expectedClose=closeActions().filter(x=>x[2]).map(x=>x[0]);
    $('#finishPatient').disabled=!(sameMembers(state.closeActions,expectedClose)&&state.doc==='best');
  }

  function renderCompletionSummary(reviewIndex=state.patientIndex){
    const p=patients[reviewIndex];
    const sec7=$('.lesson-section[data-section-panel="7"]');
    if(!sec7||!p) return;
    $('.section-kicker',sec7).textContent=`${p.support} patient complete`;
    $('h2',sec7).textContent=p.completeHeading;
    const cards=$$('.info-card',sec7);
    if(cards[1]){
      const ps=$$('p',cards[1]);
      if(ps[0]) ps[0].textContent=p.completeClinical;
      if(ps[1]) ps[1].innerHTML=`<strong>Next level:</strong> ${p.completeNext}`;
    }
    const tabs=$('#completionReviewTabs');
    const callout=$('.callout.success',sec7);if(callout) callout.innerHTML=`<strong>${p.support} practice complete.</strong> Review any completed patient above, or continue when a next patient is available.`;
    if(tabs){
      tabs.innerHTML='';
      [...state.completedPatients].sort((a,b)=>a-b).forEach(i=>{
        const b=document.createElement('button');b.type='button';b.className='completion-review-tab';b.classList.toggle('active',i===reviewIndex);b.innerHTML=`<span class="tab-check">✓</span>${patients[i].firstName}`;b.onclick=()=>renderCompletionSummary(i);tabs.appendChild(b);
      });
    }
  }

  function applyPatientToPage(){
    const p=cfg();
    $$('.patient-badge').forEach(el=>el.textContent=p.patientNumber);
    $$('.support-badge').forEach(el=>el.textContent=p.support);

    const sec1=$('.lesson-section[data-section-panel="1"]');
    $('.patient-name',sec1).textContent=p.displayName;
    $('.patient-case',sec1).textContent=p.caseText;
    $('#faceSheetSummary').textContent=`Name: ${p.fullName} · DOB: ${p.dob}`;
    $('#orderSummary').textContent=p.orderText;
    $('.guided-note',sec1).innerHTML=`<strong>${p.support} cue:</strong> ${p.prepareCue}`;
    const prepareImg=$('.patient-figure img',sec1);
    if(prepareImg){prepareImg.src=p.roomImage;prepareImg.alt=p.roomImageAlt;}

    const sec2=$('.lesson-section[data-section-panel="2"]');
    $('.patient-case',sec2).textContent=p.bedsideText;
    $('.guided-note',sec2).innerHTML=`<strong>${p.support} cue:</strong> ${p.connectCue}`;
    const bedsideImg=$('.patient-figure img',sec2);
    if(bedsideImg){bedsideImg.src=p.roomImage;bedsideImg.alt=p.roomImageAlt;}

    const sec3=$('.lesson-section[data-section-panel="3"]');
    $('.guided-note',sec3).innerHTML=`<strong>${p.support} cue:</strong> ${p.measureCue}`;
    const measureHeading=$('.subhead', $('#measurePatientTarget').parentElement);
    if(measureHeading) measureHeading.textContent=p.firstName;
    $('#measurePatientTarget').setAttribute('aria-label',`${p.firstName}, patient assessment target. Select a tool and use it on the patient.`);
    const measureImg=$('#measurePatientTarget img'); if(measureImg){measureImg.src=p.patientImage;measureImg.alt=p.patientImageAlt;}

    const inspectImg=$('#inspectPatient img'); inspectImg.src=p.inspectionImage; inspectImg.alt=p.inspectionAlt;
    const fremitusImg=$('#fremitusTarget img'); if(fremitusImg){fremitusImg.src=p.patientImage;fremitusImg.alt=`${p.firstName} upright for tactile fremitus palpation`;}
    if($('#fremitusTarget'))$('#fremitusTarget').setAttribute('aria-label',`${p.firstName}, chest target for tactile fremitus assessment.`);
    $('#inspectPatient strong').textContent=`Inspect ${p.firstName}`;
    $('#inspectPatient span').textContent='Tap the patient to collect visual findings';
    $('#inspectionInterpretPrompt').innerHTML=`<strong>Interpret what you observed:</strong> Choose the one statement below that best describes ${p.firstName}'s visual respiratory findings.`;
    const stethScope=$('#stethoscopeTool span');
    if(stethScope) stethScope.textContent=`Click or drag to ${p.firstName}`;
    const ausHeading=$('.subhead', $('#auscultationPatientTarget').parentElement);
    if(ausHeading) ausHeading.textContent=`Auscultate ${p.firstName}`;
    const ausImg=$('#auscultationPatientTarget img'); ausImg.src=p.patientImage; ausImg.alt=`${p.firstName} sitting upright for lung auscultation`;
    $('#auscultationPatientTarget').setAttribute('aria-label',`${p.firstName}, auscultation target. Drag or click the stethoscope to listen.`);
    $('#listenPanel h3').textContent=`Listen to ${p.firstName}'s breath sounds`;

    const summary=$$('.finding-summary div span');
    p.findingSummary.forEach((v,i)=>{if(summary[i])summary[i].textContent=v;});

    const sec6=$('.lesson-section[data-section-panel="6"]');
    $('.guided-note',sec6).innerHTML=`<strong>${p.support} cue:</strong> Select every action that applies before you complete this encounter.`;
    $('h3',sec6).textContent=`Select all actions needed to complete ${p.firstName}'s care`;

    const sec7=$('.lesson-section[data-section-panel="7"]');
    $('h2',sec7).textContent=p.completeHeading;
    const cards=$$('.info-card',sec7);
    if(cards[1]){
      const ps=$$('p',cards[1]);
      if(ps[0]) ps[0].textContent=p.completeClinical;
      if(ps[1]) ps[1].innerHTML=`<strong>Next level:</strong> ${p.completeNext}`;
    }
    $('.section-kicker',sec7).textContent=`${p.support} patient complete`;
    $('.callout.success',sec7).innerHTML=`<strong>${p.support} practice complete.</strong> The bedside routine stays consistent while the clinical context and level of support change.`;
    const nextBtn=$('#startPatient2');
    if(nextBtn) nextBtn.style.display=state.patientIndex===0?'inline-block':'none';
    const nextBtn3=$('#startPatient3');
    if(nextBtn3) nextBtn3.style.display=state.patientIndex===1?'inline-block':'none';
    const nextBtn4=$('#startPatient4');
    if(nextBtn4) nextBtn4.style.display=state.patientIndex===2?'inline-block':'none';
    const restartBtn=$('#restartLesson'); if(restartBtn) restartBtn.textContent=state.patientIndex===3?'Start Over from Patient 1':'Restart from Patient 1';
    renderCompletionSummary(state.patientIndex);

    renderEquipment();
    createSortable($('#connectSequence'),connectExpected);
    renderIds();
    renderCloseActions();
    renderInspection();
    renderPercussionChoices();
    renderBreathSounds();
    renderChoiceStack('#measureTechnique',[["announce","Tell the patient you are counting respirations, then count for 30 seconds."],["quiet","Continue appearing to assess the pulse while quietly observing respiratory rate, rhythm, depth, and effort."],["estimate","Estimate respirations from the monitor because the patient looks comfortable."]],'measure','measure');
    renderChoiceStack('#oxTechnique',getOxTechniqueChoices(),'ox','ox');
    const oxPrompt=$('#oxTechniquePanel p');
    if(oxPrompt){
      oxPrompt.textContent = state.patientIndex===1
        ? "The probe is first placed on a finger with dark nail polish, and no reliable SpO₂ appears. What is the best next step?"
        : "What should you verify before accepting the displayed SpO₂?";
    }
    renderChoiceStack('#interpretChoices',p.interpretationChoices,'interpret','decision');
    renderChoiceStack('#documentationChoices',p.documentationChoices,'doc','doc');
    const audio=$('#breathAudio'); if(audio){audio.src=p.audio;audio.volume=p.audioVolume;}
    restorePatientUI();
  }


  $('#startPractice').onclick=()=>showSection(1);
  $('#checkPrepare').onclick=()=>{const expected=equipment.filter(x=>x[3]).map(x=>x[0]);if(sameMembers(state.equipment,expected)){setFeedback($('#prepareFeedback'),'correct','<strong>Correct.</strong> These tools support observation, measurement, auscultation, and documentation. Treatment or diagnostic equipment is not indicated simply because it is available.');$('#toConnect').disabled=false;}else{setFeedback($('#prepareFeedback'),'incorrect',state.patientIndex===0?'<strong>Adjust the tray.</strong> Bring the tools needed for a routine bedside respiratory assessment. Do not add treatment or invasive diagnostic equipment unless the order or patient condition calls for it.':'<strong>Adjust the tray.</strong> Recheck the order and choose only the tools needed to complete the respiratory assessment.');$('#toConnect').disabled=true;}};
  $('#resetPrepare').onclick=()=>{state.equipment=[];renderEquipment();clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;saveProgress();};
  $('#toConnect').onclick=()=>showSection(2);
  $('#checkConnect').onclick=()=>{const seq=gradeSortable($('#connectSequence'),connectExpected),ids=sameMembers(state.ids,['name','dob']);if(seq&&ids){setFeedback($('#connectFeedback'),'correct',`<strong>Correct.</strong> You entered safely, identified ${cfg().firstName} with two valid identifiers, explained the assessment, and positioned the patient for a reliable respiratory exam.`);$('#toMeasure').disabled=false;}else{setFeedback($('#connectFeedback'),'incorrect',`<strong>Keep working.</strong> ${!seq?'Check the opening sequence. ':''}${!ids?'Use two person-specific identifiers; room number and diagnosis are not acceptable identifiers.':''}`);$('#toMeasure').disabled=true;}};
  $('#toMeasure').onclick=()=>showSection(3);
  $('#checkMeasure').onclick=()=>{
    const gathered=state.collected.timer&&state.collected.pulseOx;
    const oxExpected = state.patientIndex===1 ? 'alt-site' : 'verify';
    if(gathered&&state.measure==='quiet'&&state.ox===oxExpected){
      if(state.patientIndex===1){
        updateOxDisplayResolved();
        setFeedback($('#measureFeedback'),'correct','<strong>Correct.</strong> You protected the accuracy of the respiratory rate and troubleshot the pulse-ox issue appropriately. Because nail polish interfered with the first site, you moved to a better finger or an alternative site to obtain a reliable SpO₂ reading.');
      }else{
        setFeedback($('#measureFeedback'),'correct','<strong>Correct.</strong> You used the tools to collect the findings, protected the respiratory rate from observer effect, and verified that the pulse-ox signal was believable before accepting the SpO₂.');
      }
      $('#toInspect').disabled=false;
    }else{
      const missing=[];if(!state.collected.timer)missing.push('use the watch / timer');if(!state.collected.pulseOx)missing.push('use the pulse oximeter');
      const technique=(state.measure!=='quiet'||state.ox!==oxExpected)?' Then complete both technique checks.':'';
      const extra = state.patientIndex===1 ? ' For Elaine, do not accept a blank or unreliable pulse-ox display—choose a better finger or an alternative site.' : '';
      setFeedback($('#measureFeedback'),'incorrect',`<strong>Keep collecting.</strong> ${missing.length?'First '+missing.join(' and ')+'.':''}${technique}${extra}`);$('#toInspect').disabled=true;
    }
  };
  $('#toInspect').onclick=()=>showSection(4);
  $('#checkInspect').onclick=()=>{
    const complete=state.inspected&&state.expansionDone&&state.fremitusDone&&state.crepitusDone&&state.percussionSides.length===2&&state.listened;
    const interpreted=state.inspectionSingle===cfg().inspectionCorrect&&state.percussionChoice===cfg().percussionCorrect&&state.breath===cfg().breathCorrect;
    if(complete&&interpreted){
      setFeedback($('#inspectFeedback'),'correct',`<strong>Correct.</strong> You completed the full physical assessment sequence: inspection, palpation, percussion, and auscultation. You compared findings side-to-side and interpreted them in the context of ${cfg().firstName}'s overall presentation.`);$('#toInterpret').disabled=false;
    }else{
      const prompts=[];if(!state.inspected)prompts.push(`inspect ${cfg().firstName}`);if(!state.expansionDone)prompts.push('assess chest expansion');if(!state.fremitusDone)prompts.push('place the hands and assess tactile fremitus while the patient says “ninety-nine”');if(!state.crepitusDone)prompts.push('palpate for crepitus');if(state.percussionSides.length<2)prompts.push('percuss and compare both sides');if(state.percussionSides.length===2&&state.percussionChoice!==cfg().percussionCorrect)prompts.push('reconsider the percussion interpretation');if(!state.listened)prompts.push('use the stethoscope and listen');if(state.inspected&&state.inspectionSingle!==cfg().inspectionCorrect)prompts.push('reconsider the visual finding');if(state.listened&&state.breath!==cfg().breathCorrect)prompts.push('listen again and reconsider the breath-sound card');
      setFeedback($('#inspectFeedback'),'incorrect',`<strong>Finish the physical assessment.</strong> ${prompts.join('; ')}.`);$('#toInterpret').disabled=true;
    }
    saveProgress();
  };
  $('#toInterpret').onclick=()=>showSection(5);
  $('#checkInterpret').onclick=()=>{if(state.interpret===cfg().interpretationCorrect){setFeedback($('#interpretFeedback'),'correct',cfg().interpretCorrectFeedback);$('#toClose').disabled=false;}else{setFeedback($('#interpretFeedback'),'incorrect',cfg().interpretIncorrectFeedback);$('#toClose').disabled=true;}};
  $('#toClose').onclick=()=>showSection(6);
  $('#checkClose').onclick=()=>{
    const expected=closeActions().filter(x=>x[2]).map(x=>x[0]);
    const actionsCorrect=sameMembers(state.closeActions,expected);
    if(actionsCorrect&&state.doc==='best'){
      let message;
      if(state.patientIndex===1){
        message=`<strong>Correct.</strong> Elaine is stable on her prescribed respiratory regimen. Maintain her ordered 2 L/min oxygen and home respiratory regimen, ensure she is safe and comfortable, document the assessment, clean/disinfect reusable equipment, and perform hand hygiene before leaving. <strong>${cfg().noEscalationReason}</strong>`;
      }else if(state.patientIndex===2){
        message='<strong>Correct.</strong> Robert has findings that require action. Ensure he is safe, report the out-of-range vital signs and abnormal respiratory findings, escalate care, document objectively, clean reusable equipment when appropriate, and perform hand hygiene.';
      }else if(state.patientIndex===3){
        message='<strong>Correct.</strong> Maggie has a clinically important change from baseline. Keep her safe and upright, report the abnormal vital signs and respiratory findings, escalate care, discuss fluid status and current diuretic therapy with the nurse/provider, document objectively, clean reusable equipment as appropriate, and perform hand hygiene. Do not assume a bronchodilator is the answer when wheezing is absent and the broader picture suggests fluid overload.';
      }else{
        message=`<strong>Correct.</strong> Complete the routine actions that apply: ensure ${cfg().firstName} is safe and comfortable, document the assessment, clean/disinfect reusable equipment, and perform hand hygiene before leaving. <strong>${cfg().noEscalationReason}</strong>`;
      }
      setFeedback($('#closeFeedback'),'correct',message);
      $('#finishPatient').disabled=false;
    }else{
      const parts=[];
      if(!actionsCorrect){
        const extra=[];
        const missing=expected.filter(id=>!state.closeActions.includes(id));
        const selectedWrong=state.closeActions.filter(id=>!expected.includes(id));
        if(state.patientIndex===0){
          if(state.closeActions.includes('escalate')) extra.push('Nora has no finding that indicates escalation of care');
          if(state.closeActions.includes('report-vitals')) extra.push("none of Nora's measured vital signs are outside expected parameters");
        }
        if(state.patientIndex===1){
          if(state.closeActions.includes('escalate')) extra.push("Elaine has no new finding that indicates escalation of care");
          if(state.closeActions.includes('report-vitals')) extra.push("Elaine's SpO₂ is at her documented baseline on prescribed oxygen");
          if(missing.includes('maintain-regimen')) extra.push("Elaine should remain on her prescribed oxygen and home respiratory regimen");
        }
        if(state.patientIndex===2){
          if(missing.includes('escalate')) extra.push("Robert's acute respiratory worsening requires escalation of care");
          if(missing.includes('report-vitals')) extra.push("Robert has vital signs and respiratory findings outside expected parameters that should be reported");
        }
        if(state.patientIndex===3){
          if(missing.includes('escalate')) extra.push("Maggie's change from baseline requires escalation of care");
          if(missing.includes('report-vitals')) extra.push("Maggie has worsening vital signs and respiratory findings that should be reported");
          if(missing.includes('review-fluid')) extra.push("Maggie's CHF history, pedal edema, and bibasilar crackles should prompt discussion of fluid status and current diuretic therapy");
          if(state.closeActions.includes('repeat')) extra.push("do not delay reporting by automatically repeating the entire assessment");
        }
        if(selectedWrong.includes('oxygen-off')) extra.push('do not remove ordered oxygen as a routine close-out action');
        if(selectedWrong.includes('repeat')) extra.push('a complete reassessment should be driven by clinical need rather than repeated automatically');
        if(extra.length) parts.push(extra.join('; ')+'.');
        if(missing.length) parts.push('Select every close-out action that applies to this patient.');
        if(!extra.length && !missing.length) parts.push(`Reconsider the close-out actions that apply to ${cfg().firstName} based on the findings you collected.`);
      }
      if(state.doc!=='best') parts.push('Choose documentation that records objective findings, oxygen status, and the action taken without vague or unsupported conclusions.');
      setFeedback($('#closeFeedback'),'incorrect',`<strong>Almost there.</strong> ${parts.join(' ')}`);
      $('#finishPatient').disabled=true;
    }
  };
  $('#finishPatient').onclick=()=>{if(!state.completedPatients.includes(state.patientIndex))state.completedPatients.push(state.patientIndex);state.unlockedThrough=7;saveProgress();applyPatientToPage();showSection(7);};
  $('#startPatient2').onclick=()=>{state.patientIndex=1;resetPatientState();applyPatientToPage();showSection(1);};
  $('#startPatient3').onclick=()=>{state.patientIndex=2;resetPatientState();applyPatientToPage();showSection(1);};
  $('#startPatient4').onclick=()=>{state.patientIndex=3;resetPatientState();applyPatientToPage();showSection(1);};
  $('#restartLesson').onclick=()=>{try{localStorage.removeItem(STORAGE_KEY);}catch(e){} location.reload();};

  $$('.nav-step').forEach(b=>b.onclick=()=>{const target=Number(b.dataset.section);if(target===0||target<=state.unlockedThrough)showSection(target);});

  loadProgress();
  applyPatientToPage();
  initMeasureTools();
  initPalpationPercussion();
  initAuscultationTool();
  $('#inspectPatient').addEventListener('click',inspectPatient);
  showSection(state.section);
  console.info('PulmoLearn Respiratory Routine practice engine v4.2 — palpation, tactile fremitus audio, percussion, persistent progress');
})();
