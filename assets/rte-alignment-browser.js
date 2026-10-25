/* PulmoLearn RTE Browser metadata reader v2 · no lesson page scripts are executed. */
(function(global){
  'use strict';
  const CACHE_KEY='pulmolearn-rte-lesson-tags-v2';
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
    // Other PulmoLearn lessons: extract metadata from *source text* without executing its JS.
    // Anchor extraction to the PULMO_LESSON object, not activity HTML or arbitrary script content.
    for(const script of doc.querySelectorAll('script:not([src])')){
      const source=script.textContent||'';
      const marker=source.search(/window\.PULMO_LESSON\s*=/);
      if(marker<0)continue;
      const segment=source.slice(marker,source.search(/window\.(?:PULMO_LESSON_ID|LESSON_ID)\s*=/)>marker?source.search(/window\.(?:PULMO_LESSON_ID|LESSON_ID)\s*=/):source.length);
      // Structured nbrc.contentOutline sections (quoted JSON or unquoted JS keys).
      const outline=segment.match(/(?:["']?contentOutline["']?)\s*:\s*\[/);
      if(outline){
        const area=segment.slice(outline.index+outline[0].length);
        for(const m of area.matchAll(/(?:["']?sectionId["']?)\s*:\s*["']((?:III|II|I)\.[A-Z])(?:\.\d+)?["']/g))add(m[1]);
      }
      // Fine-grained author alignment entries and legacy lineItems IDs.
      for(const m of segment.matchAll(/(?:["']?(?:outlineId|id)["']?)\s*:\s*["']BOK-((?:III|II|I)\.[A-Z](?:\.\d+)?)["']/g)){
        add(m[1]);
      }
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
