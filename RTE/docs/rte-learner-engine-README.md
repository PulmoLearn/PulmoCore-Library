# PulmoLearn RTE Learner Engine v1.0

Production foundation for RTE learner goals, active-learning activity, lesson completion, Streak Points, and milestone awards.

## Current storage
Uses `localStorage` as the browser adapter so the UI can be built and tested now. The public API is intentionally isolated so a Supabase adapter can replace storage without changing lesson/dashboard UI calls.

## Goal rules
- Cadence: `daily`, `weekly`, or `monthly`.
- Learner chooses target active-learning minutes.
- Daily cadence requires at least 3 selected study days per week.
- Daily, weekly, and monthly base goal awards are normalized (3 / 21 / 84 points) so a fully met cadence is roughly comparable over time.
- Declared target minutes do not multiply goal points.

## Core calls
```js
PulmoRTE.setGoal({ cadence:'daily', targetMinutes:30, studyDays:[1,2,3,4,5] });
PulmoRTE.recordActivity({ lessonId:'PA-01', activeSeconds:420 });
PulmoRTE.setLessonProgress('PA-01',100);
PulmoRTE.evaluateCurrentGoal();
PulmoRTE.awardTopicMilestones(window.RTE_LESSON_REGISTRY);
PulmoRTE.summary(window.RTE_LESSON_REGISTRY);
```

## Point integrity
Every award can carry a `dedupeKey`. Goal-period and milestone awards use this so page reloads cannot award the same achievement twice.

## Next integration
Replace the localStorage internals with authenticated Supabase tables while preserving the same public methods. NBRC-section milestone bonuses will be added after the NBRC mapping registry is normalized into machine-readable section IDs.
