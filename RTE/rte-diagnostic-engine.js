/* PulmoLearn RTE diagnostic engine. Requires rte-question-bank.js. */
(function(){
 const BANK=()=>window.PULMOLEARN_RTE_QUESTION_BANK?.items||[];
 const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
 function prepare(q){const opts=q.options.map((text,i)=>({text,correct:i===q.correctIndex}));return {...q,displayOptions:shuffle(opts)} }
 function select({topicId,nbrcSectionId,nbrcItemId,maxItems=30}={}){
   let x=BANK();
   if(topicId)x=x.filter(q=>q.topicIds?.includes(topicId));
   if(nbrcItemId)x=x.filter(q=>q.nbrcItemIds?.includes(nbrcItemId));
   else if(nbrcSectionId)x=x.filter(q=>q.nbrcItemIds?.some(id=>id===nbrcSectionId||id.startsWith(nbrcSectionId+'.')));
   // Randomize item order and cap set size. Future bank expansion can stratify by official cognitive/item weights.
   return shuffle(x).slice(0,Math.min(30,maxItems)).map(prepare);
 }
 function score(items,responses){
   const detail=items.map((q,i)=>({id:q.id,lessonIds:q.lessonIds,nbrcItemIds:q.nbrcItemIds,correct:!!responses[i]?.correct}));
   const summarize=(key)=>{const out={};detail.forEach(r=>(r[key]||[]).forEach(id=>{out[id]??={correct:0,total:0};out[id].total++;if(r.correct)out[id].correct++}));return out};
   return {correct:detail.filter(x=>x.correct).length,total:detail.length,detail,byLesson:summarize('lessonIds'),byNbrcItem:summarize('nbrcItemIds')};
 }
 window.PulmoLearnDiagnostic={select,score};
})();
