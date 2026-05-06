/* =========================================
   PULMOCORE COURSES.JS
   Course list + progress + menu CSS + menu behavior
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

window.courses = window.PULMOCORE_COURSES;
window.pulmocoreCourses = window.PULMOCORE_COURSES;
window.courseList = window.PULMOCORE_COURSES;

/* ---------- CSS INJECTION ---------- */

function injectCourseMenuCSS() {
  if (document.getElementById("pulmocore-course-menu-css")) return;

  const style = document.createElement("style");
  style.id = "pulmocore-course-menu-css";

  style.textContent = `
    .course-menu-wrapper {
      position: relative;
      display: inline-block;
      z-index: 9999;
    }

    .course-menu-button {
      background: rgba(255,255,255,0.08);
      color: #ffffff;
      border: 2px solid rgba(255,255,255,0.28);
      padding: 14px 24px;
      border-radius: 999px;
      font-weight: 800;
      font-size: 1rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .course-menu-button:hover {
      background: rgba(255,255,255,0.16);
    }

    .course-dropdown {
      position: absolute;
      top: calc(100% + 14px);
      right: 0;
      width: min(420px, 92vw);
      max-height: 70vh;
      overflow-y: auto;
      background: #ffffff;
      color: #0B1F33;
      border: 1px solid #D7E6EF;
      border-radius: 22px;
      box-shadow: 0 18px 45px rgba(11, 31, 51, 0.22);
      padding: 14px;
      display: none;
      z-index: 10000;
    }

    .course-dropdown.show {
      display: grid;
      gap: 8px;
    }

    .course-menu-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 12px;
      align-items: center;
      padding: 12px 14px;
      border-radius: 14px;
      text-decoration: none;
      color: #0B1F33;
      border: 1px solid transparent;
    }

    .course-menu-item:hover {
      background: #F4FAFC;
      border-color: #D7E6EF;
    }

    .course-menu-title {
      font-weight: 800;
      line-height: 1.2;
    }

    .course-menu-status {
      font-size: 0.82rem;
      font-weight: 800;
      color: #415A77;
      background: #EEF5F8;
      border-radius: 999px;
      padding: 6px 10px;
      white-space: nowrap;
    }

    @media (max-width: 780px) {
      .course-dropdown {
        right: -10px;
        width: min(360px, 92vw);
      }

      .course-menu-button {
        padding: 10px 14px;
        font-size: 0.95rem;
      }
    }
  `;

  document.head.appendChild(style);
}

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

/* ---------- AUTO TRACK CURRENT LESSON ---------- */

function autoTrackCourseProgress() {
  const currentFile = window.location.pathname.split("/").pop();
  if (!currentFile) return;

  const sections = Array.from(document.querySelectorAll(".lesson-stack > section"));
  if (!sections.length) return;

  const visibleSections = sections.filter(section => {
    return !section.classList.contains("lesson-hidden");
  });

  const percent = Math.round((visibleSections.length / sections.length) * 100);
  const completed = percent >= 100;

  saveCourseProgress(currentFile, percent, completed);
}

/* ---------- MENU INITIALIZATION ---------- */

function initializeCourseMenu() {
  injectCourseMenuCSS();

  const button = document.getElementById("courseMenuButton");
  const dropdown = document.getElementById("courseDropdown");

  if (!button || !dropdown) return;

  dropdown.innerHTML = "";

  if (!window.PULMOCORE_COURSES || !window.PULMOCORE_COURSES.length) {
    dropdown.innerHTML = `
      <div class="course-menu-item">
        <div class="course-menu-title">No courses found</div>
        <div class="course-menu-status">Check courses.js</div>
      </div>
    `;
    return;
  }

  window.PULMOCORE_COURSES.forEach(course => {
    const progress = getCourseProgress(course.file);

    let status = "Not started";

    if (progress.completed) {
      status = "Complete";
    } else if (progress.percent > 0) {
      status = `In progress ${progress.percent}%`;
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

  button.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    dropdown.classList.toggle("show");
  };

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".course-menu-wrapper")) {
      dropdown.classList.remove("show");
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      dropdown.classList.remove("show");
    }
  });
}

window.initializeCourseMenu = initializeCourseMenu;

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", function() {
  initializeCourseMenu();

  setTimeout(function() {
    autoTrackCourseProgress();
    initializeCourseMenu();
  }, 500);
});
