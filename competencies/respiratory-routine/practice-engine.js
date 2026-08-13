(() => {
  "use strict";
  const STICKY_HEADER_OFFSET = 130;
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const state = {
    section:0, patientIndex:0, equipment:[], ids:[], measure:null, ox:null, inspectionSingle:null, breath:null, interpret:null, doc:null, closeActions:[],
    collected:{timer:false, pulseOx:false}, inspected:false, listened:false
  };

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
        ["routine","No immediate respiratory intervention; document findings and continue routine monitoring."],
        ["oxygen","Start supplemental oxygen because the patient is postoperative."],
        ["neb","Administer a bronchodilator treatment to prevent postoperative bronchospasm."],
        ["abg","Obtain an arterial blood gas to confirm the normal pulse-ox reading."]
      ],
      findingSummary:["Comfortable, upright, symmetric chest movement","16/min, regular","97% on room air","Clear and equal bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> No immediate respiratory intervention is indicated. Continue routine monitoring and document the findings.",
      interpretIncorrectFeedback:"<strong>Look at the whole pattern.</strong> Normal work of breathing, RR 16/min, SpO₂ 97% on room air, and clear bilateral breath sounds do not support immediate respiratory treatment or escalation.",
      documentationChoices:[
        ["best","RR 16/min, regular and unlabored; chest movement symmetric; breath sounds clear/equal bilaterally; SpO₂ 97% on room air; no acute respiratory distress observed."],
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
      measureCue:"Collect the measurements with the appropriate tools. Interpret the SpO₂ in the context of Elaine's prescribed oxygen and documented usual range.",
      pulse:88,
      rr:20,
      rrDescription:"regular, no acute distress",
      spo2:92,
      oxygenText:"2 L/min nasal cannula",
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
        ["continue-o2","Maintain Elaine\'s prescribed 2 L/min oxygen and home respiratory regimen, document the assessment, and continue routine monitoring."],
        ["remove-o2","Remove the oxygen because an SpO₂ of 92% is below the usual normal range for adults."],
        ["increase-o2","Increase oxygen immediately based only on the SpO₂ value of 92%."],
        ["escalate","Escalate care immediately because diminished breath sounds always indicate acute deterioration."]
      ],
      findingSummary:["Comfortable at rest, symmetric chest movement","20/min, regular","92% on 2 L/min nasal cannula","Diminished bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> Elaine's current findings fit the patient-specific context documented in the chart: prescribed oxygen at 2 L/min, SpO₂ within her recent stable range, no acute distress, and diminished bilateral breath sounds. Continue the ordered oxygen, document, and monitor.",
      interpretIncorrectFeedback:"<strong>Use the patient-specific context.</strong> Elaine is comfortable, her SpO₂ is within the recent range documented on the same prescribed oxygen flow, and there is no new sign of acute deterioration. A single value should not automatically trigger oxygen removal, an unprescribed increase, or escalation.",
      documentationChoices:[
        ["best","RR 20/min, regular; chest movement symmetric; breath sounds diminished bilaterally; SpO₂ 92% on 2 L/min nasal cannula, consistent with documented baseline; no acute respiratory distress observed."],
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
      inspectionImage:"/competencies/respiratory-routine/assets/patient-robert-acute-wheezing.png",
      inspectionAlt:"Robert with visible increased work of breathing",
      patientImage:"/competencies/respiratory-routine/assets/patient-robert-acute-wheezing.png",
      patientImageAlt:"Robert positioned upright for respiratory assessment while short of breath",
      breathCorrect:"wheeze",
      audio:"/assessment/pa-1-2-sibilant-wheeze.m4a",
      audioVolume:1,
      interpretationCorrect:"escalate",
      interpretationChoices:[
        ["escalate","Recognize acute respiratory worsening, keep the ordered oxygen in place, report the abnormal findings and vital signs, and escalate care for prompt evaluation and treatment."],
        ["routine","Document the findings and continue routine monitoring because the SpO₂ is above 90%."],
        ["remove-o2","Remove the oxygen and repeat the assessment on room air before deciding whether the patient is deteriorating."],
        ["document-first","Finish documentation and equipment cleanup before notifying anyone about the abnormal assessment findings."]
      ],
      findingSummary:["Sitting forward with accessory-muscle use","30/min, increased effort","93% on 2 L/min nasal cannula","Wheezes bilaterally"],
      interpretCorrectFeedback:"<strong>Correct.</strong> Robert has a pattern of acute respiratory worsening: tachypnea, increased work of breathing, wheezing, and abnormal vital signs. Keep the ordered oxygen in place, report the findings, and escalate care so treatment can be evaluated promptly.",
      interpretIncorrectFeedback:"<strong>Reassess the pattern.</strong> Robert is not simply showing one isolated abnormal value. Tachypnea, accessory-muscle use, forward positioning, and wheezing together indicate an acute change that should be reported and escalated rather than handled as routine monitoring.",
      documentationChoices:[
        ["best","RR 30/min with increased effort; patient sitting forward with accessory-muscle use; bilateral wheezes; pulse 112/min; SpO₂ 93% on 2 L/min nasal cannula; acute change reported and care escalated."],
        ["vague","Patient wheezing and looks short of breath. Provider aware."],
        ["understate","Respiratory assessment completed. SpO₂ 93% on oxygen; continue routine monitoring."],
        ["omit","Wheezes present. Other findings do not need documentation because care was escalated."]
      ],
      noEscalationReason:"",
      completeHeading:"Patient 3: Recognize and Act",
      completeClinical:"Robert's findings demonstrate an acute change rather than a stable baseline pattern. The learner must connect tachypnea, increased work of breathing, wheezing, and vital-sign abnormalities to timely reporting and escalation.",
      completeNext:"Patient 4 will remove procedural hints and require an independent assessment of pneumonia with worsening oxygenation."
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
    if(state.patientIndex===2){
      actions.push(["escalate","Escalate care",true]);
      actions.push(["report-vitals","Report vital signs outside expected parameters",true]);
    }else{
      actions.push(["escalate","Escalate care",false]);
      actions.push(["report-vitals","Report vital signs outside expected parameters",false]);
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

  function showSection(n){state.section=Number(n);$$('.lesson-section').forEach((s,i)=>s.classList.toggle('active',i===state.section));$$('.nav-step').forEach((b,i)=>b.classList.toggle('active',i===state.section));const labels=['Teach','Prepare','Connect','Measure','Inspect & Listen','Interpret','Close the Loop','Complete'];$('#progressText').textContent=labels[state.section];$('#progressBar').style.width=`${state.section/7*100}%`;requestAnimationFrame(()=>{const sec=$(`.lesson-section[data-section-panel="${state.section}"]`);if(sec){window.scrollTo({top:Math.max(0,sec.getBoundingClientRect().top+window.scrollY-STICKY_HEADER_OFFSET),behavior:'smooth'});}});}

  function selectSingle(container,key,value){$$('.select-option',container).forEach(b=>b.classList.toggle('selected',b.dataset[key]===value));}
  function renderEquipment(){const tray=$('#equipmentTray');tray.innerHTML='';shuffle(equipment).forEach(([id,label,file])=>{const b=document.createElement('button');b.type='button';b.className='equipment-card';b.dataset.id=id;b.innerHTML=`<img src="${file}" alt="${label}"><strong>${label}</strong>`;b.addEventListener('click',()=>{state.equipment.includes(id)?state.equipment=state.equipment.filter(x=>x!==id):state.equipment.push(id);b.classList.toggle('selected',state.equipment.includes(id));clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;});tray.appendChild(b);});}

  function createSortable(container,steps){container.innerHTML='';shuffle(steps).forEach(step=>{const item=document.createElement('div');item.className='sortable-item';item.dataset.step=step;item.innerHTML=`<span class="drag-handle">☰</span><div><div style="display:flex;gap:10px;align-items:center"><span class="order-number"></span><span>${step}</span></div><div class="keyboard-order-controls"><button type="button" class="move-btn up">↑</button><button type="button" class="move-btn down">↓</button></div></div><span class="sort-status"></span>`;item.draggable=true;item.addEventListener('dragstart',()=>item.classList.add('dragging'));item.addEventListener('dragend',()=>{item.classList.remove('dragging');sync(container);});item.addEventListener('dragover',e=>e.preventDefault());item.addEventListener('drop',e=>{e.preventDefault();const d=$('.dragging',container);if(!d||d===item)return;const items=[...container.children],from=items.indexOf(d),to=items.indexOf(item);from<to?item.after(d):item.before(d);sync(container);});$('.up',item).onclick=()=>{const p=item.previousElementSibling;if(p)container.insertBefore(item,p);sync(container);};$('.down',item).onclick=()=>{const n=item.nextElementSibling;if(n)n.after(item);sync(container);};container.appendChild(item);});sync(container);}
  function sync(container){[...container.children].forEach((it,i)=>{$('.order-number',it).textContent=i+1;it.classList.remove('correct-position','wrong-position');$('.sort-status',it).textContent='';});}
  function gradeSortable(container,expected){let c=0;[...container.children].forEach((it,i)=>{const ok=it.dataset.step===expected[i];it.classList.toggle('correct-position',ok);it.classList.toggle('wrong-position',!ok);$('.sort-status',it).textContent=ok?'✓ Correct':'Adjust';if(ok)c++;});return c===expected.length;}

  function renderIds(){const opts=[['name','Full name'],['dob','Date of birth'],['room','Room number'],['diagnosis','Surgical diagnosis']];const wrap=$('#identifierChoices');wrap.innerHTML='';shuffle(opts).forEach(([id,label])=>{const b=document.createElement('button');b.type='button';b.className='choice-chip';b.textContent=label;b.onclick=()=>{if(state.ids.includes(id))state.ids=state.ids.filter(x=>x!==id);else if(state.ids.length<2)state.ids.push(id);else state.ids=[state.ids[1],id];$$('.choice-chip',wrap).forEach(x=>x.classList.toggle('selected',state.ids.includes(x.dataset.id)));$('#toMeasure').disabled=true;clearFeedback($('#connectFeedback'));};b.dataset.id=id;wrap.appendChild(b);});}
  function renderChoiceStack(id,choices,stateKey,dataKey){const wrap=$(id);wrap.innerHTML='';shuffle(choices).forEach(([value,text])=>{const b=document.createElement('button');b.type='button';b.className='select-option';b.dataset[dataKey]=value;b.textContent=text;b.onclick=()=>{state[stateKey]=value;selectSingle(wrap,dataKey,value);};wrap.appendChild(b);});}
  function renderCloseActions(){
    const wrap=$('#closeActionChoices');
    wrap.innerHTML='';
    state.closeActions=[];
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
      };
      wrap.appendChild(b);
    });
  }
  function renderInspection(){
    renderChoiceStack('#inspectionChoices',cfg().inspectionChoices,'inspectionSingle','finding');
    $$('#inspectionChoices .select-option').forEach(b=>b.disabled=true);
  }

  function renderBreathSounds(){
    const cards=[['normal','Normal / clear','/competencies/respiratory-routine/assets/breath-sounds-normal-card.png'],['wheeze','Wheezes','/competencies/respiratory-routine/assets/breath-sounds-wheeze-card.png'],['crackles','Crackles','/competencies/respiratory-routine/assets/breath-sounds-crackles-card.png'],['diminished','Diminished','/competencies/respiratory-routine/assets/breath-sounds-diminished-card.png']];
    const wrap=$('#breathSoundChoices');wrap.innerHTML='';
    shuffle(cards).forEach(([id,label,file])=>{
      const b=document.createElement('button');b.type='button';b.className='breath-card';b.dataset.sound=id;b.disabled=true;
      b.innerHTML=`<img src="${file}" alt="${label} breath sound teaching card"><strong>${label}</strong>`;
      b.onclick=()=>{state.breath=id;$$('.breath-card',wrap).forEach(x=>x.classList.toggle('selected',x===b));clearFeedback($('#inspectFeedback'));$('#toInterpret').disabled=true;};
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
      $('.data-status',card).textContent='✓ Collected';
      $('.data-value',card).innerHTML=`<strong>SpO₂ ${cfg().spo2}%</strong> on ${cfg().oxygenText} · pulse displayed ${cfg().pulse}/min`;
      $('#oxTechniquePanel').hidden=false;
    }
    $$('#measureToolTray .bedside-tool').forEach(b=>{const used=(b.dataset.tool==='timer'&&state.collected.timer)||(b.dataset.tool==='pulse-ox'&&state.collected.pulseOx);b.classList.toggle('used',used);b.setAttribute('aria-pressed',used?'true':'false');});
    if(target){target.classList.add('tool-used');setTimeout(()=>target.classList.remove('tool-used'),450);}
    clearFeedback($('#measureFeedback')); $('#toInspect').disabled=true;
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
    clearFeedback($('#inspectFeedback')); $('#toInterpret').disabled=true;
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
    clearFeedback($('#inspectFeedback')); $('#toInterpret').disabled=true;
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
    state.breath=null; state.interpret=null; state.doc=null; state.closeActions=[];
    state.collected={timer:false,pulseOx:false}; state.inspected=false; state.listened=false;
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
    const lp=$('#listenPanel'); lp.className='listen-panel locked';
    $('#audioStatus').textContent='Use the stethoscope to unlock the recording.';
    $('#stethoscopeTool').classList.remove('used'); $('#stethoscopeTool').setAttribute('aria-pressed','false');
    $$('#measureToolTray .bedside-tool').forEach(b=>{b.classList.remove('used');b.setAttribute('aria-pressed','false');});
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

    renderEquipment();
    createSortable($('#connectSequence'),connectExpected);
    renderIds();
    renderCloseActions();
    renderInspection();
    renderBreathSounds();
    renderChoiceStack('#measureTechnique',[["announce","Tell the patient you are counting respirations, then count for 30 seconds."],["quiet","Continue appearing to assess the pulse while quietly observing respiratory rate, rhythm, depth, and effort."],["estimate","Estimate respirations from the monitor because the patient looks comfortable."]],'measure','measure');
    renderChoiceStack('#oxTechnique',[["verify","Place the probe correctly, minimize motion, and verify that the displayed pulse/signal is believable before accepting the SpO₂."],["instant","Apply the probe and document the first number that appears."],["blanket","Place the probe over any convenient finger even if nail coverage or poor perfusion affects the signal."]],'ox','ox');
    renderChoiceStack('#interpretChoices',p.interpretationChoices,'interpret','decision');
    renderChoiceStack('#documentationChoices',p.documentationChoices,'doc','doc');
    const audio=$('#breathAudio'); if(audio){audio.src=p.audio;audio.volume=p.audioVolume;}
  }


  $('#startPractice').onclick=()=>showSection(1);
  $('#checkPrepare').onclick=()=>{const expected=equipment.filter(x=>x[3]).map(x=>x[0]);if(sameMembers(state.equipment,expected)){setFeedback($('#prepareFeedback'),'correct','<strong>Correct.</strong> These tools support observation, measurement, auscultation, and documentation. Treatment or diagnostic equipment is not indicated simply because it is available.');$('#toConnect').disabled=false;}else{setFeedback($('#prepareFeedback'),'incorrect',state.patientIndex===0?'<strong>Adjust the tray.</strong> Bring the tools needed for a routine bedside respiratory assessment. Do not add treatment or invasive diagnostic equipment unless the order or patient condition calls for it.':'<strong>Adjust the tray.</strong> Recheck the order and choose only the tools needed to complete the respiratory assessment.');$('#toConnect').disabled=true;}};
  $('#resetPrepare').onclick=()=>{state.equipment=[];renderEquipment();clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;};
  $('#toConnect').onclick=()=>showSection(2);
  $('#checkConnect').onclick=()=>{const seq=gradeSortable($('#connectSequence'),connectExpected),ids=sameMembers(state.ids,['name','dob']);if(seq&&ids){setFeedback($('#connectFeedback'),'correct',`<strong>Correct.</strong> You entered safely, identified ${cfg().firstName} with two valid identifiers, explained the assessment, and positioned the patient for a reliable respiratory exam.`);$('#toMeasure').disabled=false;}else{setFeedback($('#connectFeedback'),'incorrect',`<strong>Keep working.</strong> ${!seq?'Check the opening sequence. ':''}${!ids?'Use two person-specific identifiers; room number and diagnosis are not acceptable identifiers.':''}`);$('#toMeasure').disabled=true;}};
  $('#toMeasure').onclick=()=>showSection(3);
  $('#checkMeasure').onclick=()=>{
    const gathered=state.collected.timer&&state.collected.pulseOx;
    if(gathered&&state.measure==='quiet'&&state.ox==='verify'){
      setFeedback($('#measureFeedback'),'correct','<strong>Correct.</strong> You used the tools to collect the findings, protected the respiratory rate from observer effect, and verified that the pulse-ox signal was believable before accepting the SpO₂.');$('#toInspect').disabled=false;
    }else{
      const missing=[];if(!state.collected.timer)missing.push('use the watch / timer');if(!state.collected.pulseOx)missing.push('use the pulse oximeter');
      const technique=(state.measure!=='quiet'||state.ox!=='verify')?' Then complete both technique checks.':'';
      setFeedback($('#measureFeedback'),'incorrect',`<strong>Keep collecting.</strong> ${missing.length?'First '+missing.join(' and ')+'.':''}${technique}`);$('#toInspect').disabled=true;
    }
  };
  $('#toInspect').onclick=()=>showSection(4);
  $('#checkInspect').onclick=()=>{
    if(state.inspected&&state.listened&&state.inspectionSingle===cfg().inspectionCorrect&&state.breath===cfg().breathCorrect){
      setFeedback($('#inspectFeedback'),'correct',`<strong>Correct.</strong> You inspected before auscultating, used the stethoscope to hear the breath sounds, and matched the sound to the rest of ${cfg().firstName}'s assessment.`);$('#toInterpret').disabled=false;
    }else{
      const prompts=[];if(!state.inspected)prompts.push(`inspect ${cfg().firstName}`);if(!state.listened)prompts.push('use the stethoscope and listen');if(state.inspected&&state.inspectionSingle!==cfg().inspectionCorrect)prompts.push('reconsider the visual finding');if(state.listened&&state.breath!==cfg().breathCorrect)prompts.push('listen again and reconsider the breath-sound card');
      setFeedback($('#inspectFeedback'),'incorrect',`<strong>Finish the bedside assessment.</strong> ${prompts.join('; ')}.`);$('#toInterpret').disabled=true;
    }
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
          if(state.closeActions.includes('report-vitals')) extra.push('none of Nora's measured vital signs are outside expected parameters');
        }
        if(state.patientIndex===1){
          if(state.closeActions.includes('escalate')) extra.push('Elaine has no new finding that indicates escalation of care');
          if(state.closeActions.includes('report-vitals')) extra.push('Elaine's SpO₂ is at her documented baseline on prescribed oxygen');
          if(missing.includes('maintain-regimen')) extra.push('Elaine should remain on her prescribed oxygen and home respiratory regimen');
        }
        if(state.patientIndex===2){
          if(missing.includes('escalate')) extra.push('Robert's acute respiratory worsening requires escalation of care');
          if(missing.includes('report-vitals')) extra.push('Robert has vital signs and respiratory findings outside expected parameters that should be reported');
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
  $('#finishPatient').onclick=()=>{applyPatientToPage();showSection(7);};
  $('#startPatient2').onclick=()=>{state.patientIndex=1;resetPatientState();applyPatientToPage();showSection(1);};
  $('#startPatient3').onclick=()=>{state.patientIndex=2;resetPatientState();applyPatientToPage();showSection(1);};
  $('#restartLesson').onclick=()=>location.reload();

  $$('.nav-step').forEach(b=>b.onclick=()=>{const target=Number(b.dataset.section);if(target===0||target<=state.section)showSection(target);});

  applyPatientToPage();
  initMeasureTools();
  initAuscultationTool();
  $('#inspectPatient').addEventListener('click',inspectPatient);
  showSection(0);
  console.info('PulmoLearn Respiratory Routine practice engine v3.0 — Patient 3 acute wheezing and escalation added');
})();
