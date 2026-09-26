# PulmoLearn RTE Lesson Bridge v1.0

## Purpose
Connect every canonical RTE lesson to the shared learner engine without duplicating progress logic inside 248 lesson files.

## Production load order
Place these shared assets under `/RTE/assets/` in the final deployment package:

```html
<script src="/RTE/assets/rte-lesson-registry.js"></script>
<script src="/RTE/assets/rte-learner-engine.js"></script>
<script src="/RTE/assets/rte-lesson-bridge.js"></script>
```

Give each lesson its canonical ID:

```html
<body data-lesson-id="PA-01">
```

Then initialize:

```html
<script>
  const rteLesson = PulmoRTELesson.init();
</script>
```

## Existing active-learning timer integration
The bridge deliberately does NOT start a second timer by default because PulmoLearn lessons already track active learning.

The existing tracker can either call:

```js
rteLesson.reportActiveSeconds(secondsSinceLastReport);
```

or dispatch:

```js
document.dispatchEvent(new CustomEvent('pulmolearn:active-time', {
  detail: { activeSeconds: secondsSinceLastReport }
}));
```

Use incremental seconds, not the cumulative session total.

If a lesson does not yet have the existing tracker, initialize with `{ fallbackTimer: true }`. The fallback counts time only while the page is visible and the learner has interacted within the previous 60 seconds.

## Progress integration
For incremental progress:

```js
rteLesson.setProgress(50);
```

or dispatch `pulmolearn:lesson-progress` with `{ percent: 50 }`.

At the real completion condition:

```js
rteLesson.completeLesson();
```

## End-of-lesson card
Add an empty host where the lesson's existing completion UI belongs:

```html
<div id="rte-completion"></div>
```

When the learner truly completes the lesson:

```js
rteLesson.mountCompletionCard('#rte-completion');
```

The card shows goal status and a next lesson. V1 chooses the next incomplete lesson in the same canonical topic, then falls back to another incomplete RTE lesson. Once diagnostic question data is connected, diagnostic priority will supersede this simple fallback ranking.

## Important
Do not call `mountCompletionCard()` merely because the page loads. It marks the lesson complete. Call it only from the lesson's actual completion event/condition.
