/* PulmoLearn RTE Lesson Bridge v1.0
   Connects an individual RTE lesson to rte-learner-engine.js.
   - Canonical lesson ID discovery
   - Active-learning reporting adapter (existing tracker first; optional fallback timer)
   - Progress/completion reporting
   - End-of-lesson goal status + next-lesson recommendation
*/
(function (global) {
  'use strict';

  const VERSION = '1.0.0';
  const FLUSH_SECONDS = 30;
  const FALLBACK_IDLE_MS = 60000;
  const state = {
    lessonId: null,
    registry: null,
    lesson: null,
    sessionId: null,
    pendingSeconds: 0,
    fallbackEnabled: false,
    fallbackActive: false,
    lastInteraction: Date.now(),
    timer: null,
    mounted: false
  };

  const uuid = () => (global.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  function engine() {
    if (!global.PulmoRTE) throw new Error('PulmoRTE learner engine is not loaded.');
    return global.PulmoRTE;
  }

  function normalizeId(v) {
    const m = String(v || '').toUpperCase().match(/\b([A-Z0-9]+-\d{2})\b/);
    return m ? m[1] : '';
  }

  function detectLessonId() {
    const candidates = [
      document.documentElement.dataset.lessonId,
      document.body && document.body.dataset.lessonId,
      document.querySelector('meta[name="pulmolearn-lesson-id"]')?.content,
      location.pathname.split('/').pop(),
      document.title
    ];
    for (const c of candidates) {
      const id = normalizeId(c);
      if (id) return id;
    }
    return '';
  }

  function resolveRegistry() {
    return global.RTE_LESSON_REGISTRY || global.PulmoRTERegistry || global.RTERegistry || null;
  }

  function findLesson(registry, id) {
    return registry?.lessons?.find(l => l.id === id) || null;
  }

  function init(options = {}) {
    state.lessonId = normalizeId(options.lessonId) || detectLessonId();
    if (!state.lessonId) throw new Error('Could not determine canonical RTE lesson ID. Add data-lesson-id="PA-01" to <body>.');
    state.registry = options.registry || resolveRegistry();
    state.lesson = findLesson(state.registry, state.lessonId);
    state.sessionId = uuid();

    // Existing PulmoLearn lesson timer should call reportActiveSeconds().
    // Fallback timer is opt-in only to prevent double-counting existing active-learning telemetry.
    if (options.fallbackTimer === true) enableFallbackTimer();

    bindEvents();
    return api();
  }

  function reportActiveSeconds(seconds) {
    const n = Math.max(0, Math.round(Number(seconds) || 0));
    if (!n) return;
    state.pendingSeconds += n;
    if (state.pendingSeconds >= FLUSH_SECONDS) flushActivity();
  }

  function flushActivity() {
    if (!state.pendingSeconds || !state.lessonId) return;
    const seconds = state.pendingSeconds;
    state.pendingSeconds = 0;
    engine().recordActivity({
      lessonId: state.lessonId,
      activeSeconds: seconds,
      sessionId: state.sessionId
    });
    engine().evaluateCurrentGoal();
  }

  function setProgress(percent) {
    const p = engine().setLessonProgress(state.lessonId, percent);
    if (p.completed && state.registry) engine().awardTopicMilestones(state.registry);
    dispatch('pulmolearn:rte-progress-saved', { lessonId: state.lessonId, progress: p });
    return p;
  }

  function completeLesson() {
    flushActivity();
    const progress = setProgress(100);
    const goal = engine().evaluateCurrentGoal();
    const next = recommendNextLesson();
    const detail = { lessonId: state.lessonId, progress, goal, nextLesson: next };
    dispatch('pulmolearn:rte-lesson-complete', detail);
    return detail;
  }

  function recommendNextLesson() {
    const lessons = state.registry?.lessons || [];
    if (!lessons.length) return null;
    const learner = engine().load();
    const current = state.lesson || findLesson(state.registry, state.lessonId);
    const incomplete = l => !learner.lessonProgress?.[l.id]?.completed && l.id !== state.lessonId;

    // V1 recommendation priority: same canonical topic, then any incomplete lesson.
    // Diagnostic-priority scoring will supersede this when question-response data is connected.
    let candidate = current
      ? lessons.find(l => l.topicCode === current.topicCode && incomplete(l))
      : null;
    if (!candidate) candidate = lessons.find(incomplete) || null;
    return candidate;
  }

  function mountCompletionCard(target) {
    const host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host) return null;
    const result = completeLesson();
    const g = result.goal;
    const next = result.nextLesson;
    const met = g?.status === 'met';
    const noGoal = g?.status === 'no-goal';
    const points = engine().totalPoints();

    host.innerHTML = `
      <section class="rte-completion-card" aria-live="polite">
        <div class="rte-completion-kicker">LESSON COMPLETE</div>
        <h2>${escapeHtml(state.lesson?.title || state.lessonId)}</h2>
        ${noGoal ? `
          <p>Your lesson progress is saved.</p>
        ` : met ? `
          <div class="rte-goal-met">✓ ${capitalize(g.cadence)} study goal complete</div>
          <p><strong>${g.minutes} / ${g.targetMinutes} active minutes</strong> this ${periodWord(g.cadence)}.</p>
          <p>⭐ ${points.toLocaleString()} total Streak Points</p>
        ` : `
          <div class="rte-goal-progress">${g.remaining} active minute${g.remaining === 1 ? '' : 's'} to your ${g.cadence} goal</div>
          <div class="rte-mini-bar"><span style="width:${Math.min(100, Math.round(g.minutes / g.targetMinutes * 100))}%"></span></div>
          <p>${g.minutes} / ${g.targetMinutes} active minutes</p>
        `}
        ${next ? `
          <div class="rte-next-wrap">
            <div class="rte-next-label">${met ? 'KEEP STUDYING' : 'RECOMMENDED NEXT'}</div>
            <h3>${escapeHtml(next.id)} · ${escapeHtml(next.title)}</h3>
            <p>${escapeHtml(next.coreFocus || '')}</p>
            <a class="rte-primary-action" href="${escapeAttr(next.href)}">${met ? 'Continue Studying' : 'Keep Going'}</a>
          </div>
        ` : ''}
        <a class="rte-secondary-action" href="/RTE/">Return to RTE Prep Dashboard</a>
      </section>`;
    injectStyles();
    state.mounted = true;
    return result;
  }

  function bindEvents() {
    // Recommended contract for the existing PulmoLearn active-learning tracker.
    // detail may contain activeSeconds or seconds.
    document.addEventListener('pulmolearn:active-time', e => {
      const seconds = e.detail?.activeSeconds ?? e.detail?.seconds ?? 0;
      reportActiveSeconds(seconds);
    });
    document.addEventListener('pulmolearn:lesson-progress', e => {
      if (e.detail?.percent != null) setProgress(e.detail.percent);
    });
    document.addEventListener('pulmolearn:lesson-complete', e => {
      if (e.detail?.source === 'rte-bridge') return;
      completeLesson();
    });
    document.addEventListener('visibilitychange', () => { if (document.hidden) flushActivity(); });
    global.addEventListener('pagehide', flushActivity);
  }

  function enableFallbackTimer() {
    if (state.fallbackEnabled) return;
    state.fallbackEnabled = true;
    ['pointerdown','keydown','scroll','touchstart'].forEach(evt => {
      document.addEventListener(evt, () => { state.lastInteraction = Date.now(); }, { passive: true });
    });
    state.timer = setInterval(() => {
      const active = !document.hidden && (Date.now() - state.lastInteraction <= FALLBACK_IDLE_MS);
      state.fallbackActive = active;
      if (active) reportActiveSeconds(1);
    }, 1000);
  }

  function dispatch(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail: { ...detail, source: 'rte-bridge' } }));
  }

  function injectStyles() {
    if (document.getElementById('rte-completion-styles')) return;
    const s = document.createElement('style');
    s.id = 'rte-completion-styles';
    s.textContent = `
      .rte-completion-card{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#fff;border:1px solid #dce7ee;border-radius:20px;padding:24px;box-shadow:0 10px 30px rgba(18,48,67,.08);color:#17384d;max-width:760px;margin:28px auto}
      .rte-completion-kicker,.rte-next-label{font-size:.76rem;font-weight:800;letter-spacing:.09em;color:#087f8c;margin-bottom:7px}
      .rte-completion-card h2{margin:0 0 14px;color:#123043;font-size:clamp(1.35rem,3vw,2rem)}
      .rte-completion-card h3{margin:5px 0 8px;color:#123043}.rte-completion-card p{line-height:1.55;color:#4b6575}
      .rte-goal-met{background:#e9f8f4;color:#126d61;border-radius:12px;padding:12px 14px;font-weight:800}
      .rte-goal-progress{font-weight:800;color:#123043;margin-top:8px}.rte-mini-bar{height:10px;background:#e7eef2;border-radius:999px;overflow:hidden;margin:10px 0 4px}.rte-mini-bar span{display:block;height:100%;background:linear-gradient(90deg,#0a8f8f,#2d82c7);border-radius:inherit}
      .rte-next-wrap{border-top:1px solid #e5edf1;margin-top:20px;padding-top:20px}.rte-primary-action,.rte-secondary-action{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-weight:800;border-radius:12px;padding:12px 17px;margin-top:10px}.rte-primary-action{background:#087f8c;color:white}.rte-secondary-action{color:#176a83;border:1px solid #b9d1dc;margin-left:8px}
      @media(max-width:560px){.rte-completion-card{border-radius:16px;padding:18px;margin:18px 0}.rte-primary-action,.rte-secondary-action{display:flex;width:100%;box-sizing:border-box;margin:10px 0 0}}
    `;
    document.head.appendChild(s);
  }

  function escapeHtml(v){return String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function escapeAttr(v){return escapeHtml(v)}
  function capitalize(v){return String(v||'').charAt(0).toUpperCase()+String(v||'').slice(1)}
  function periodWord(c){return c==='daily'?'day':c==='weekly'?'week':'month'}

  function api(){return {VERSION,lessonId:state.lessonId,lesson:state.lesson,reportActiveSeconds,flushActivity,setProgress,completeLesson,recommendNextLesson,mountCompletionCard,enableFallbackTimer}}

  global.PulmoRTELesson = { VERSION, init, reportActiveSeconds, flushActivity, setProgress, completeLesson, recommendNextLesson, mountCompletionCard, enableFallbackTimer };
})(window);
