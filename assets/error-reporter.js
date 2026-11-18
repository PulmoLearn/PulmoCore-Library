/** PulmoLearn Quality & Feedback Center — student report overlay v1.0 */
import { supabase } from '/assets/auth.js';

if (!document.getElementById('pl-report-launcher')) {
  const css = document.createElement('style');
  css.textContent = `
  #pl-report-launcher{position:fixed;right:18px;bottom:20px;z-index:2147482000;border:0;border-radius:999px;background:#0B1F33;color:#fff;padding:13px 18px;font:700 15px Arial,sans-serif;box-shadow:0 8px 24px #0004;cursor:pointer}
  #pl-report-launcher:hover{background:#128486}#pl-report-launcher:focus-visible,.plqr-dialog :focus-visible{outline:3px solid #F4B860;outline-offset:3px}
  .plqr-backdrop{position:fixed;inset:0;z-index:2147483000;background:#071827b8;display:grid;place-items:center;padding:16px}
  .plqr-dialog{background:#fff;color:#0B1F33;border-radius:18px;max-width:560px;width:100%;max-height:92vh;overflow:auto;padding:25px;box-shadow:0 15px 45px #0005;font:16px/1.5 Arial,sans-serif}
  .plqr-dialog h2{font-size:23px;margin:0 0 8px}.plqr-dialog p{margin:8px 0 16px}.plqr-dialog label{display:block;font-weight:700;margin:13px 0 5px}
  .plqr-dialog input,.plqr-dialog textarea,.plqr-dialog select{width:100%;border:1px solid #9fb6c5;border-radius:9px;padding:10px;font:inherit;color:#0B1F33;background:white}
  .plqr-dialog textarea{min-height:125px;resize:vertical}.plqr-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap}
  .plqr-actions button{border:1px solid #afc5d0;border-radius:10px;padding:11px 16px;font:700 15px Arial;cursor:pointer;background:#fff;color:#0B1F33}
  .plqr-actions button[type=submit]{background:#128486;color:#fff;border-color:#128486}.plqr-actions button:disabled{opacity:.6;cursor:wait}
  .plqr-message{min-height:1.3em;font-size:14px}.plqr-note{font-size:13px;color:#415A77}.plqr-dialog .plqr-hidden{position:absolute;left:-10000px}
  @media(max-width:560px){#pl-report-launcher{bottom:12px;right:12px;padding:12px 14px}.plqr-dialog{padding:18px}}
  `;
  document.head.appendChild(css);

  const launch = document.createElement('button');
  launch.id = 'pl-report-launcher';
  launch.type = 'button';
  launch.textContent = '⚑ Report an Error';
  launch.setAttribute('aria-haspopup','dialog');
  document.body.appendChild(launch);

  function readContext() {
    const m = window.PULMO_LESSON || {};
    return {
      course_id: String(m.courseId || m.course_id || document.body?.dataset?.courseId || 'unknown').slice(0,160),
      course_title: String(m.courseTitle || m.courseName || m.course_id || 'PulmoLearn').slice(0,240),
      lesson_id: String(m.lessonId || m.lesson_id || window.PULMO_LESSON_ID || window.LESSON_ID || location.pathname.split('/').pop() || 'unknown').slice(0,240),
      lesson_title: String(m.lessonTitle || m.activityName || m.displayTitle || document.title || 'Untitled').slice(0,300),
      page_url: location.origin + location.pathname
    };
  }

  let dialog = null;
  let previousFocus = null;
  const categories = ['Incorrect or misleading information','Typo or grammar','Incorrect answer or feedback','Broken interaction or link','Accessibility issue','Other'];
  function close() {
    if (!dialog) return;
    dialog.remove(); dialog = null;
    document.removeEventListener('keydown', onKey);
    (previousFocus?.isConnected ? previousFocus : launch).focus();
  }
  function onKey(e) {
    if (!dialog) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const focusables = [...dialog.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled)')];
    if (!focusables.length) return;
    const first=focusables[0], last=focusables[focusables.length-1];
    if (e.shiftKey && document.activeElement === first){e.preventDefault();last.focus();}
    else if (!e.shiftKey && document.activeElement === last){e.preventDefault();first.focus();}
  }
  launch.addEventListener('click', async () => {
    if (dialog) return;
    previousFocus = document.activeElement;
    const context = readContext();
    const overlay = document.createElement('div');
    overlay.className = 'plqr-backdrop';
    const panel = document.createElement('div');
    panel.className = 'plqr-dialog';
    panel.setAttribute('role','dialog'); panel.setAttribute('aria-modal','true'); panel.setAttribute('aria-labelledby','plqr-title');
    const h = document.createElement('h2'); h.id='plqr-title';h.textContent='Report a PulmoLearn Issue';panel.appendChild(h);
    const meta=document.createElement('p');meta.className='plqr-note';meta.textContent=`${context.course_title} · ${context.lesson_title}`;panel.appendChild(meta);
    const form=document.createElement('form');
    form.innerHTML = `<label for="plqr-kind">Issue type</label><select id="plqr-kind" required></select>
      <label for="plqr-location">Where in this lesson? (optional)</label><input id="plqr-location" maxlength="240" placeholder="e.g. Quiz question 4, section 3">
      <label for="plqr-details">Describe the issue</label><textarea id="plqr-details" minlength="10" maxlength="4000" required placeholder="What seems wrong, and what should we check?"></textarea>
      <p class="plqr-note">Your signed-in PulmoLearn account and lesson are automatically linked to this report. Do not include patient information or passwords.</p>
      <div class="plqr-message" role="status" aria-live="polite"></div>
      <div class="plqr-actions"><button type="button" id="plqr-cancel">Cancel</button><button type="submit">Submit report</button></div>`;
    const kind=form.querySelector('#plqr-kind');
    for(const c of categories){const o=document.createElement('option');o.value=c;o.textContent=c;kind.appendChild(o);}
    form.querySelector('#plqr-cancel').addEventListener('click',close);
    form.addEventListener('submit',async (event)=>{
      event.preventDefault();
      const submit=form.querySelector('[type=submit]'),status=form.querySelector('.plqr-message');
      submit.disabled=true;status.textContent='Submitting…';
      try {
        const {data:{user},error:authError}=await supabase.auth.getUser();
        if(authError||!user) throw new Error('Please sign in to PulmoLearn to submit a report.');
        const payload={...context,issue_type:kind.value,location_hint:form.querySelector('#plqr-location').value.trim()||null,description:form.querySelector('#plqr-details').value.trim(),reporter_id:user.id};
        if(payload.description.length<10) throw new Error('Please provide at least 10 characters.');
        const {error}=await supabase.from('quality_reports').insert(payload);
        if(error) throw new Error('Unable to save the report. Please try again.');
        form.replaceChildren();
        const done=document.createElement('p');done.setAttribute('role','status');done.textContent='Thank you! Your report was received and will be reviewed.';form.appendChild(done);
        const exit=document.createElement('button');exit.type='button';exit.textContent='Close';exit.addEventListener('click',close);form.appendChild(exit);exit.focus();
      }catch(error){status.textContent=error.message||'Could not submit report.';submit.disabled=false;}
    });
    panel.appendChild(form);overlay.appendChild(panel);document.body.appendChild(overlay);dialog=overlay;
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
    document.addEventListener('keydown',onKey);
    kind.focus();
  });
}
