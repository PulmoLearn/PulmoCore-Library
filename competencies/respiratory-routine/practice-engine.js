(() => {
  "use strict";
  const STICKY_HEADER_OFFSET = 130;
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const state = {
    section:0, equipment:[], ids:[], measure:null, ox:null, inspectionSingle:null, breath:null, interpret:null, doc:null, closeActions:[],
    collected:{timer:false, pulseOx:false}, inspected:false, listened:false
  };

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
  const closeActions = [
    ["safe","Ensure Nora is safe and comfortable",true],
    ["document","Document the respiratory assessment findings",true],
    ["clean","Clean/disinfect the stethoscope and pulse-ox equipment",true],
    ["hand-hygiene","Perform hand hygiene before leaving the room",true],
    ["escalate","Escalate care",false],
    ["report-vitals","Report vital signs outside expected parameters",false],
    ["repeat","Repeat the entire respiratory assessment regardless of findings",false],
    ["oxygen-off","Remove oxygen from any patient before leaving the room",false]
  ];
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
    shuffle(closeActions).forEach(([id,label])=>{
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
    renderChoiceStack('#inspectionChoices',[["normal","Breathing is regular and unlabored with symmetric chest movement."],["accessory","Accessory muscle use is present despite a normal respiratory rate."],["tripod","The patient is leaning forward in a tripod position."],["retractions","Intercostal retractions are visible during inspiration."]],'inspectionSingle','finding');
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
      $('.data-value',card).innerHTML='<strong>Pulse 82/min</strong><br><strong>Respiratory rate 16/min</strong> · regular, unlabored';
      $('#measureTechniquePanel').hidden=false;
    }
    if(tool==='pulse-ox'){
      state.collected.pulseOx=true;
      const card=$('#oxFinding');
      card.classList.remove('locked'); card.classList.add('collected');
      $('.data-status',card).textContent='✓ Collected';
      $('.data-value',card).innerHTML='<strong>SpO₂ 97%</strong> on room air · pulse displayed 82/min';
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
    reveal.innerHTML='<span class="data-status">✓ Observed</span><p><strong>Regular, unlabored respirations.</strong> Chest movement is symmetric. No retractions, accessory-muscle use, cyanosis, or tripod positioning are observed.</p>';
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
      audio.currentTime=0;
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

  $('#startPractice').onclick=()=>showSection(1);
  $('#checkPrepare').onclick=()=>{const expected=equipment.filter(x=>x[3]).map(x=>x[0]);if(sameMembers(state.equipment,expected)){setFeedback($('#prepareFeedback'),'correct','<strong>Correct.</strong> These tools support observation, measurement, auscultation, and documentation. Treatment or diagnostic equipment is not indicated simply because it is available.');$('#toConnect').disabled=false;}else{setFeedback($('#prepareFeedback'),'incorrect','<strong>Adjust the tray.</strong> Bring the tools needed for a routine bedside respiratory assessment. Do not add treatment or invasive diagnostic equipment unless the order or patient condition calls for it.');$('#toConnect').disabled=true;}};
  $('#resetPrepare').onclick=()=>{state.equipment=[];renderEquipment();clearFeedback($('#prepareFeedback'));$('#toConnect').disabled=true;};
  $('#toConnect').onclick=()=>showSection(2);
  $('#checkConnect').onclick=()=>{const seq=gradeSortable($('#connectSequence'),connectExpected),ids=sameMembers(state.ids,['name','dob']);if(seq&&ids){setFeedback($('#connectFeedback'),'correct','<strong>Correct.</strong> You entered safely, identified the patient with two valid identifiers, explained the assessment, and positioned the patient for a reliable respiratory exam.');$('#toMeasure').disabled=false;}else{setFeedback($('#connectFeedback'),'incorrect',`<strong>Keep working.</strong> ${!seq?'Check the opening sequence. ':''}${!ids?'Use two person-specific identifiers; room number and diagnosis are not acceptable identifiers.':''}`);$('#toMeasure').disabled=true;}};
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
    if(state.inspected&&state.listened&&state.inspectionSingle==='normal'&&state.breath==='normal'){
      setFeedback($('#inspectFeedback'),'correct','<strong>Correct.</strong> You inspected before auscultating, used the stethoscope to hear the breath sounds, and matched what you heard to the normal/clear finding. The visual assessment, vital signs, and breath sounds all agree.');$('#toInterpret').disabled=false;
    }else{
      const prompts=[];if(!state.inspected)prompts.push('inspect Nora');if(!state.listened)prompts.push('use the stethoscope and listen');if(state.inspected&&state.inspectionSingle!=='normal')prompts.push('reconsider the visual finding');if(state.listened&&state.breath!=='normal')prompts.push('listen again and reconsider the breath-sound card');
      setFeedback($('#inspectFeedback'),'incorrect',`<strong>Finish the bedside assessment.</strong> ${prompts.join('; ')}.`);$('#toInterpret').disabled=true;
    }
  };
  $('#toInterpret').onclick=()=>showSection(5);
  $('#checkInterpret').onclick=()=>{if(state.interpret==='routine'){setFeedback($('#interpretFeedback'),'correct','<strong>Correct.</strong> No immediate respiratory intervention is indicated. Continue routine monitoring and document the findings.');$('#toClose').disabled=false;}else{setFeedback($('#interpretFeedback'),'incorrect','<strong>Look at the whole pattern.</strong> Normal work of breathing, RR 16/min, SpO₂ 97% on room air, and clear bilateral breath sounds do not support immediate respiratory treatment or escalation.');$('#toClose').disabled=true;}};
  $('#toClose').onclick=()=>showSection(6);
  $('#checkClose').onclick=()=>{
    const expected=closeActions.filter(x=>x[2]).map(x=>x[0]);
    const actionsCorrect=sameMembers(state.closeActions,expected);
    if(actionsCorrect&&state.doc==='best'){
      setFeedback($('#closeFeedback'),'correct','<strong>Correct.</strong> Nora is stable. Complete the routine actions that apply: ensure she is safe and comfortable, document the assessment, clean/disinfect the reusable equipment, and perform hand hygiene before leaving. <strong>There are no indications that Nora needs escalation of care, and none of her measured vital signs are outside expected parameters.</strong>');
      $('#finishPatient').disabled=false;
    }else{
      const parts=[];
      if(!actionsCorrect) {
        const extra=[];
        if(state.closeActions.includes('escalate')) extra.push('Nora has no finding that indicates escalation of care');
        if(state.closeActions.includes('report-vitals')) extra.push('none of Nora\'s measured vital signs are outside expected parameters');
        const missing=expected.filter(id=>!state.closeActions.includes(id));
        if(extra.length) parts.push(extra.join('; ')+'.');
        if(missing.length) parts.push('Make sure you also select all routine close-out actions that apply: patient safety/comfort, documentation, cleaning reusable equipment, and hand hygiene before leaving.');
        if(!extra.length && !missing.length) parts.push('Reconsider the close-out actions that apply to Nora based on the findings you collected.');
      }
      if(state.doc!=='best') parts.push('Choose documentation that records objective findings and oxygen status without adding unsupported conclusions.');
      setFeedback($('#closeFeedback'),'incorrect',`<strong>Almost there.</strong> ${parts.join(' ')}`);
      $('#finishPatient').disabled=true;
    }
  };
  $('#finishPatient').onclick=()=>showSection(7);
  $('#restartLesson').onclick=()=>location.reload();

  $$('.nav-step').forEach(b=>b.onclick=()=>{const target=Number(b.dataset.section);if(target===0||target<=state.section)showSection(target);});

  renderEquipment();createSortable($('#connectSequence'),connectExpected);renderIds();renderCloseActions();
  renderChoiceStack('#measureTechnique',[["announce","Tell the patient you are counting respirations, then count for 30 seconds."],["quiet","Continue appearing to assess the pulse while quietly observing respiratory rate, rhythm, depth, and effort."],["estimate","Estimate respirations from the monitor because the patient looks comfortable."]],'measure','measure');
  renderChoiceStack('#oxTechnique',[["verify","Place the probe correctly, minimize motion, and verify that the displayed pulse/signal is believable before accepting the SpO₂."],["instant","Apply the probe and document the first number that appears."],["blanket","Place the probe over any convenient finger even if nail coverage or poor perfusion affects the signal."]],'ox','ox');
  renderInspection();renderBreathSounds();initMeasureTools();initAuscultationTool();
  $('#inspectPatient').addEventListener('click',inspectPatient);
  renderChoiceStack('#interpretChoices',[["routine","No immediate respiratory intervention; document findings and continue routine monitoring."],["oxygen","Start supplemental oxygen because the patient is postoperative."],["neb","Administer a bronchodilator treatment to prevent postoperative bronchospasm."],["abg","Obtain an arterial blood gas to confirm the normal pulse-ox reading."]],'interpret','decision');
  renderChoiceStack('#documentationChoices',[["best","RR 16/min, regular and unlabored; chest movement symmetric; breath sounds clear/equal bilaterally; SpO₂ 97% on room air; no acute respiratory distress observed."],["vague","Respiratory assessment normal. Patient doing fine."],["overstate","Postoperative patient has no pulmonary complications and will not require respiratory therapy."],["omit","SpO₂ 97%. No other documentation needed because findings were normal."]],'doc','doc');
  showSection(0);
  console.info('PulmoLearn Respiratory Routine practice engine v1.6 — inspection interpretation prompt + Nora close-out grading/feedback fixes');
})();
