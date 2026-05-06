/* =========================================
   PULMOCORE COURSE LIST
========================================= */

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

/* =========================================
   COMPATIBILITY ALIASES
========================================= */

window.courses = window.PULMOCORE_COURSES;
window.pulmocoreCourses = window.PULMOCORE_COURSES;
window.courseList = window.PULMOCORE_COURSES;

/* =========================================
   PROGRESS HELPERS
========================================= */

function getCourseProgress(courseFile) {
  const progress =
    JSON.parse(localStorage.getItem("pulmocoreProgress")) || {};

  return (
    progress[courseFile] || {
      completed: false,
      percent: 0
    }
  );
}

function saveCourseProgress(courseFile, percent, completed = false) {
  const progress =
    JSON.parse(localStorage.getItem("pulmocoreProgress")) || {};

  progress[courseFile] = {
    percent,
    completed
  };

  localStorage.setItem(
    "pulmocoreProgress",
    JSON.stringify(progress)
  );
}

/* =========================================
   AUTO TRACK CURRENT PAGE
========================================= */

function autoTrackCourseProgress() {
  const currentFile = window.location.pathname
    .split("/")
    .pop();

  const sections = document.querySelectorAll(
    ".lesson-stack > section"
  );

  if (!sections.length) return;

  const visibleSections = Array.from(sections).filter(
    section => !section.classList.contains("lesson-hidden")
  );

  const percent = Math.round(
    (visibleSections.length / sections.length) * 100
  );

  const completed = percent >= 100;

  saveCourseProgress(currentFile, percent, completed);
}

/* =========================================
   MENU INITIALIZATION
========================================= */

function initializeCourseMenu() {
  const button = document.getElementById("courseMenuButton");
  const dropdown = document.getElementById("courseDropdown");

  if (!button || !dropdown) return;

  dropdown.innerHTML = "";

  window.PULMOCORE_COURSES.forEach(course => {
    const progress = getCourseProgress(course.file);

    let status = "Not Started";

    if (progress.completed) {
      status = "✅ Complete";
    } else if (progress.percent > 0) {
      status = `${progress.percent}%`;
    }

    const item = document.createElement("a");
    item.href = course.file;
    item.className = "course-menu-item";

    item.innerHTML = `
      <div class="course-menu-title">${course.title}</div>
      <div class="course-menu-status">${status}</div>
    `;

    dropdown.appendChild(item);
  });

  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".course-menu-wrapper")) {
      dropdown.classList.remove("show");
    }
  });
}
/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeCourseMenu();

  setTimeout(() => {
    autoTrackCourseProgress();
  }, 500);
});
