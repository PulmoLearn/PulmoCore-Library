/* PulmoLearn RTE Browser metadata reader v3 · no lesson page scripts are executed. */
(function(global){
  'use strict';
  const CACHE_KEY='pulmolearn-rte-lesson-tags-v3';
  const TTL=12*60*60*1000;
  const codePattern=/^(?:I|II|III)\.[A-Z](?:\.\d+)?$/;
  function valid(code){
    const section=String(code).match(/^(?:I|II|III)\.[A-Z]/)?.[0];
    if(!section || !codePattern.test(code))return false;
    const registry=global.NBRC_RT_DCO_2027_HELPERS;
    if(!registry)return true;
    if(!registry.getSection(section))return false;
    return !/\.\d+$/.test(code) || Boolean(registry.getBreadthItem('BOK-'+code));
  }
  function normalize(v){const code=String(v).replace(/^BOK-/,'').trim();return valid(code)?code:null;}
  function extractCodes(html){
    const doc=new DOMParser().parseFromString(html,'text/html');
    const codes=new Set();
    const add=v=>{const code=normalize(v);if(code)codes.add(code);};
    // Diseases and legacy lessons: explicit visible author tags.
    const tagged=Array.from(doc.querySelectorAll('.direct-codes,[data-rte-codes],[data-nbrc-codes]'));
    const texts=tagged.map(el=>el.getAttribute('data-rte-codes')||el.getAttribute('data-nbrc-codes')||el.textContent||'');
    if(!texts.length){
      const raw=doc.body?.textContent||'';
      const m=raw.match(/Directly\s+covered\s*:?\s*([\s\S]{0,450}?)(?=Depth\s*:|How\s+tested|\n\s*\n|$)/i);
      if(m)texts.push(m[1]);
    }
    texts.forEach(t=>{
      const raw=t.split(/Depth\s*:/i)[0];
      for(const m of raw.matchAll(/\b(?:III|II|I)\.[A-Z](?:\.\d+)?\b/g)) add(m[0]);
    });
    // Pull author-supplied RTE metadata only. Never run the lesson's scripts.
    function findValueBlock(source, key, opener, closer){
      const re=new RegExp('(?:["\\\']?'+key+'["\\\']?)\\s*:\\s*\\'+opener);
      const m=re.exec(source);
      if(!m)return '';
      const begin=m.index+m[0].length-1;
      let depth=0, quote='', esc=false;
      for(let i=begin;i<source.length;i++){
        const c=source[i];
        if(quote){
          if(esc){esc=false;continue;}
          if(c==='\\'){esc=true;continue;}
          if(c===quote)quote='';
        }else if(c==='"'||c==="'"||c==='`'){quote=c;}
        else if(c===opener)depth++;
        else if(c===closer && --depth===0)return source.slice(begin,i+1);
      }
      return '';
    }
    function fromSource(source){
      const lessonSource=source.slice(source.search(/window\.PULMO_LESSON\s*=/));
      let nbrc=findValueBlock(lessonSource,'nbrc','{','}');
      if(!nbrc)return;
      // Neonatal/Pediatric lessons also contain NPS-specific codes: RTE ONLY.
      if(/(?:["']?rt2027["']?)\s*:/.test(nbrc)){
        nbrc=findValueBlock(nbrc,'rt2027','{','}');
      }
      const aligned=findValueBlock(lessonSource,'nbrcAlignment','[',']')
        ||findValueBlock(nbrc,'alignment','[',']');
      // Canonical author entries can include exact item-level codes.
      for(const m of aligned.matchAll(/(?:["']?outlineId["']?)\s*:\s*["']BOK-((?:III|II|I)\.[A-Z](?:\.\d+)?)["']/g))add(m[1]);
      // Some author pages supply detailed codes such as I.B.1.d or I.B.1.f-g.
      // Student navigation groups those under the valid BOK-I.B.1 item.
      const tags=findValueBlock(nbrc,'alignmentTags','[',']');
      for(const m of tags.matchAll(/\b(?:III|II|I)\.[A-Z](?:\.\d+)?(?:\.[a-z](?:-[a-z])?)?\b/g)){
        const normalized=m[0].match(/^(?:III|II|I)\.[A-Z](?:\.\d+)?/)[0];
        add(normalized);
      }
      const bok=findValueBlock(nbrc,'breadthOfKnowledge','[',']');
      const outline=findValueBlock(nbrc,'contentOutline','[',']');
      for(const sectionSource of [bok,outline]){
        for(const m of sectionSource.matchAll(/(?:["']?sectionId["']?)\s*:\s*["']((?:III|II|I)\.[A-Z](?:\.\d+)?)(?:\.[a-z](?:-[a-z])?)?["']/g))add(m[1]);
        // For lessons using broad sectionId (e.g. I.A) but precise task strings.
        for(const m of sectionSource.matchAll(/\b(?:III|II|I)\.[A-Z]\.\d+(?:\.[a-z])?\b/g)){
          add(m[0].match(/^(?:III|II|I)\.[A-Z]\.\d+/)[0]);
        }
      }
      const lineItems=findValueBlock(nbrc,'lineItems','[',']');
      for(const m of lineItems.matchAll(/BOK-((?:III|II|I)\.[A-Z](?:\.\d+)?)/g))add(m[1]);
    }
    for(const script of doc.querySelectorAll('script:not([src])')){
      const source=script.textContent||'';
      if(!/window\.PULMO_LESSON\s*=/.test(source))continue;
      fromSource(source);
    }
    return [...codes].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  }
  function label(code){
    const helpers=global.NBRC_RT_DCO_2027_HELPERS;
    const item=helpers?.getBreadthItem('BOK-'+code);
    if(item)return item.label;
    return helpers?.getSection(code)?.title || helpers?.getSection(code.slice(0,code.lastIndexOf('.')))?.title || '';
  }
  function readCache(){try{const x=JSON.parse(sessionStorage.getItem(CACHE_KEY)||'null');return x&&Date.now()-x.created<TTL?x:null;}catch{return null;}}
  function writeCache(payload){try{sessionStorage.setItem(CACHE_KEY,JSON.stringify({...payload,created:Date.now()}));}catch{}}
  function clearCache(){try{sessionStorage.removeItem(CACHE_KEY);}catch{}}
  global.PULMO_RTE_BROWSER={extractCodes,label,readCache,writeCache,clearCache};
})(window);
