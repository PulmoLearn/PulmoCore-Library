/* =========================================
   PULMOCORE COURSES.JS
   Course list + local progress + course menu
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

/* ---------- CURRENT LESSON PROGRESS ---------- */

function updateCurrentLessonProgress() {
  const currentFile = window.location.pathname.split("/").pop();
  if (!currentFile) return;

  const sections = Array.from(document.querySelectorAll(".lesson-stack > section"));
  if (!sections.length) return;

  const unlockedSections = sections.filter(section =>
    !section.classList.contains("lesson-hidden")
  );

  const percent = Math.round((unlockedSections.length / sections.length) * 100);
  const completed = percent >= 100;

  saveCourseProgress(currentFile, percent, completed);
}

function autoTrackCourseProgress() {
  updateCurrentLessonProgress();
}

/* ---------- COURSE MENU ---------- */

function initializeCourseMenu() {
  const button = document.getElementById("courseMenuButton");

  const panel =
    document.getElementById("courseMenuPanel") ||
    document.getElementById("courseDropdown");

  if (!button || !panel) return;

  const courseSource =
    window.PULMOCORE_COURSES ||
    window.pulmoCoreCourses ||
    window.pulmocoreCourses ||
    window.courseList ||
    window.courses ||
    [];

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

    item.innerHTML = `
      <strong>${course.title}</strong>
      <span class="course-menu-status ${statusClass}">${status}</span>
    `;

    panel.appendChild(item);
  });

  button.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = panel.classList.toggle("open");
    panel.classList.toggle("show", isOpen);

    button.setAttribute("aria-expanded", String(isOpen));
  };

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".course-menu") && !event.target.closest(".course-menu-wrapper")) {
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

window.initializeCourseMenu = initializeCourseMenu;
window.updateCurrentLessonProgress = updateCurrentLessonProgress;
window.autoTrackCourseProgress = autoTrackCourseProgress;

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", function () {
  initializeCourseMenu();

  setTimeout(function () {
    updateCurrentLessonProgress();
  }, 750);

  document.addEventListener("activityComplete", updateCurrentLessonProgress);
});
