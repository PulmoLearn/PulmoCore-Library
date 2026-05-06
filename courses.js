/* =========================================
   PULMOCORE COURSES.JS
   Course list + local progress + clickable course menu
========================================= */

/* ---------- COURSE LIST ---------- */

window.PULMOCORE_COURSES = [
  { title: "ALS", file: "ALS.html" },
  { title: "ARDS", file: "ARDS.html" },
  { title: "Asthma", file: "Asthma.html" },
  { title: "Atelectasis", file: "Atelectasis.html" },
  { title: "Bronchiectasis", file: "Bronchiectasis.html" },
  { title: "CDH", file: "CDH.html" },
  { title: "CHD", file: "CHD.html" },
  { title: "Chronic Lung Disease of Infancy", file: "CLDI.html" },
  { title: "COPD", file: "COPD.html" },
  { title: "Cardiogenic Pulmonary Edema", file: "CardiogenicPulmonaryEdema.html" },
  { title: "Croup", file: "Croup.html" },
  { title: "Cystic Fibrosis", file: "CysticFibrosis.html" },
  { title: "Epiglottitis", file: "Epiglottitis.html" },
  { title: "Flail Chest", file: "FlailChest.html" },
  { title: "Guillain-Barré Syndrome", file: "GuillainBarre.html" },
  { title: "Interstitial Lung Disease", file: "InterstitialLungDisease.html" },
  { title: "Kyphoscoliosis", file: "Kyphoscoliosis.html" },
  { title: "Lung Cancer", file: "LungCancer.html" },
  { title: "Meconium Aspiration Syndrome", file: "MAS.html" },
  { title: "Myasthenia Gravis", file: "MyastheniaGravis.html" },
  { title: "Near Drowning", file: "NearDrowning.html" },
  { title: "Pulmonary Air Leak Syndrome", file: "PALS.html" },
  { title: "Pleural Effusion", file: "PleuralEffusion.html" },
  { title: "Pneumonia", file: "Pneumonia.html" },
  { title: "Pneumothorax", file: "Pneumothorax.html" },
  { title: "Pulmonary Embolism", file: "PulmonaryEmbolism.html" },
  { title: "Respiratory Distress Syndrome", file: "RDS.html" },
  { title: "RSV", file: "RSV.html" },
  { title: "Sleep Apnea", file: "SleepApnea.html" },
  { title: "Smoke Inhalation", file: "SmokeInhalation.html" },
  { title: "Transient Tachypnea of the Newborn", file: "TTN.html" },
  { title: "Tuberculosis", file: "Tuberculosis.html" }
];

/* Compatibility aliases */
window.courses = window.PULMOCORE_COURSES;
window.pulmocoreCourses = window.PULMOCORE_COURSES;
window.pulmoCoreCourses = window.PULMOCORE_COURSES;
window.courseList = window.PULMOCORE_COURSES;

/* ---------- PROGRESS HELPERS ---------- */

function getPulmoCoreProgressData() {
  try {
    return JSON.parse(localStorage.getItem("pulmocoreProgress") || "{}");
  } catch {
    return {};
  }
}

function getCourseProgress(courseFile) {
  const progress = getPulmoCoreProgressData();

  return progress[courseFile] || {
    completed: false,
    percent: 0
  };
}

function saveCourseProgress(courseFile, percent, completed = false) {
  const progress = getPulmoCoreProgressData();

  progress[courseFile] = {
    percent: Math.max(0, Math.min(100, Number(percent) || 0)),
    completed: Boolean(completed)
  };

  localStorage.setItem("pulmocoreProgress", JSON.stringify(progress));
}

window.getCourseProgress = getCourseProgress;
window.saveCourseProgress = saveCourseProgress;

/* ---------- UTILITIES ---------- */

function getCourseSource() {
  return (
    window.PULMOCORE_COURSES ||
    window.pulmoCoreCourses ||
    window.pulmocoreCourses ||
    window.courseList ||
    window.courses ||
    []
  );
}

function getCurrentFileName() {
  return window.location.pathname.split("/").pop();
}

function getCoursePanel() {
  return (
    document.getElementById("courseMenuPanel") ||
    document.getElementById("courseDropdown")
  );
}

/* ---------- COURSE MENU ---------- */

function renderCourseMenu() {
  const panel = getCoursePanel();
  if (!panel) return;

  const courseSource = getCourseSource();
  panel.innerHTML = "";

  courseSource.forEach(course => {
    const progress = getCourseProgress(course.file);

    let status = "Not started";
    let statusClass = "not-started";

    if (progress.completed) {
      status = "Complete";
      statusClass = "complete";
    } else if (progress.percent > 0) {
      status = `In progress (${progress.percent}%)`;
      statusClass = "in-progress";
    }

    const item = document.createElement("a");
    item.href = course.file;
    item.className = "course-menu-item";
    item.setAttribute("role", "menuitem");
    item.dataset.courseFile = course.file;

    item.innerHTML = `
      <strong>${course.title}</strong>
      <span class="course-menu-status ${statusClass}">${status}</span>
    `;

    item.addEventListener("click", function (event) {
      event.stopPropagation();
      window.location.href = course.file;
    });

    panel.appendChild(item);
  });
}

function updateCourseMenuStatuses() {
  const panel = getCoursePanel();
  if (!panel) return;

  panel.querySelectorAll(".course-menu-item").forEach(item => {
    const courseFile = item.dataset.courseFile;
    const statusEl = item.querySelector(".course-menu-status");

    if (!courseFile || !statusEl) return;

    const progress = getCourseProgress(courseFile);

    statusEl.className = "course-menu-status";

    if (progress.completed) {
      statusEl.textContent = "Complete";
      statusEl.classList.add("complete");
    } else if (progress.percent > 0) {
      statusEl.textContent = `In progress (${progress.percent}%)`;
      statusEl.classList.add("in-progress");
    } else {
      statusEl.textContent = "Not started";
      statusEl.classList.add("not-started");
    }
  });
}

function initializeCourseMenu() {
  const button = document.getElementById("courseMenuButton");
  const panel = getCoursePanel();

  if (!button || !panel) return;

  renderCourseMenu();

  button.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    const isOpen =
      panel.classList.contains("open") ||
      panel.classList.contains("show");

    panel.classList.toggle("open", !isOpen);
    panel.classList.toggle("show", !isOpen);

    button.setAttribute("aria-expanded", String(!isOpen));
  };

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".course-menu") &&
      !event.target.closest(".course-menu-wrapper")
    ) {
      panel.classList.remove("open");
      panel.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      panel.classList.remove("open");
      panel.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- CURRENT LESSON PROGRESS ---------- */

function updateCurrentLessonProgress() {
  const currentFile = getCurrentFileName();
  if (!currentFile) return;

  const sections = Array.from(document.querySelectorAll(".lesson-stack > section"));
  if (!sections.length) return;

  const unlockedSections = sections.filter(section =>
    !section.classList.contains("lesson-hidden")
  );

  const percent = Math.round((unlockedSections.length / sections.length) * 100);
  const completed = percent >= 100;

  saveCourseProgress(currentFile, percent, completed);
  updateCourseMenuStatuses();
}

function autoTrackCourseProgress() {
  updateCurrentLessonProgress();
}

function watchLessonProgressChanges() {
  const lessonStack = document.querySelector(".lesson-stack");
  if (!lessonStack) return;

  const observer = new MutationObserver(function () {
    updateCurrentLessonProgress();
  });

  observer.observe(lessonStack, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "data-complete"]
  });
}

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", function () {
  initializeCourseMenu();

  setTimeout(function () {
    updateCurrentLessonProgress();
    watchLessonProgressChanges();
  }, 750);

  document.addEventListener("activityComplete", updateCurrentLessonProgress);
});

/* ---------- EXPOSE GLOBALS ---------- */

window.initializeCourseMenu = initializeCourseMenu;
window.updateCurrentLessonProgress = updateCurrentLessonProgress;
window.autoTrackCourseProgress = autoTrackCourseProgress;
