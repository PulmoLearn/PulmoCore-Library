/* =========================================
   PULMOCORE COURSES.JS — Grouped Dropdown
   Course list + local progress + expandable course menu
========================================= */

window.PULMOCORE_COURSE_GROUPS = [
  {
  id: "foundations",
  title: "Foundations of Respiratory Care",
  courses: [
    { id:"foundations-1-1", title:"Professional Communication & Conflict Resolution", file:"https://www.pulmolearn.com/foundations/Foundations_1_1_Student_FULL.html" },
    { id:"foundations-1-2", title:"Medical Math, Units & Dosage Calculations", file:"https://www.pulmolearn.com/foundations/Foundations_1_2_Student_REBUILT.html" },
    { id:"foundations-1-3", title:"Oxygenation & Gas Exchange Calculations", file:"https://www.pulmolearn.com/foundations/Foundations_1_3_Student_FULL.html" },
    { id:"foundations-1-4", title:"Introduction to Pulmonary Function Testing", file:"https://www.pulmolearn.com/foundations/Foundations_1_4_Student_FULL.html" },
    { id:"foundations-2-1", title:"Oximetry & Capnography", file:"https://www.pulmolearn.com/foundations/Foundations_2_1_Student_FULL.html" },
    { id:"foundations-2-2", title:"Interpreting Clinical & Laboratory Data", file:"https://www.pulmolearn.com/foundations/Foundations_2_2_Student_FULL.html" },
    { id:"foundations-2-3", title:"ABG Interpretation", file:"https://www.pulmolearn.com/foundations/Foundations_2_3_Student_FULL.html" },
    { id:"foundations-2-4", title:"Integrated Respiratory Decision-Making", file:"https://www.pulmolearn.com/foundations/Foundations_2_4_Student_FULL.html" },
    { id:"foundations-3-1", title:"Flexible Bronchoscopy: Procedure, Sedation & Airway Assessment", file:"https://www.pulmolearn.com/foundations/Foundations_3_1_Student_FULL.html" },
    { id:"foundations-3-2", title:"ECG Interpretation & Cardiac Rhythm Analysis", file:"https://www.pulmolearn.com/foundations/Foundations_3_2_Student_FULL.html" },
    { id:"foundations-3-3", title:"Anion Gap, Bicarbonate Gap & Mixed Acid-Base Disorders", file:"https://www.pulmolearn.com/foundations/Foundations_3_3_Student_FULL.html" },
    { id:"foundations-3-4", title:"Nutrition, Ethics & Electronic Medical Records", file:"https://www.pulmolearn.com/foundations/Foundations_3_4_Student_FULL.html" }
  ]
},
{
  id: "physiology",
  title: "Respiratory Physiology",
  courses: [
    { id:"rp-1-1", title:"Airway Defense & Conditioning", file:"https://www.pulmolearn.com/physiology/RP_1_1_Student.html" },
    { id:"rp-1-2", title:"Basic Respiratory Anatomy", file:"https://www.pulmolearn.com/physiology/RP_1_2_Student.html" },
    { id:"rp-1-3", title:"Mechanics of Ventilation", file:"https://www.pulmolearn.com/physiology/RP_1_3_Student_FULL.html" },
    { id:"rp-1-4", title:"Lung Volumes and Capacities", file:"https://www.pulmolearn.com/physiology/RP_1_4_Student.html" },
    { id:"rp-2-1", title:"Acid-Base Physiology & Kidney Compensation", file:"https://www.pulmolearn.com/physiology/RP_2_1_Student.html" },
    { id:"rp-2-2", title:"Neural Control of Ventilation, Respiratory Drives & V/Q Ratio", file:"https://www.pulmolearn.com/physiology/RP_2_2_Student.html" },
    { id:"rp-2-3", title:"Assessment & Treatment of Hypoxia, V/Q Calculations & Physiologic Oxygenation", file:"https://www.pulmolearn.com/physiology/RP_2_3_Student.html" },
    { id:"rp-2-4", title:"Sleep-Disordered Breathing, Sleep Studies & Clinical Interpretation", file:"https://www.pulmolearn.com/physiology/RP_2_4_Student.html" },
    { id:"rp-3-1", title:"Cardiovascular System & Cardiac Electrophysiology", file:"https://www.pulmolearn.com/physiology/RP_3_1_Student.html" },
    { id:"rp-3-2", title:"Cardiac Pathology & Hemodynamics", file:"https://www.pulmolearn.com/physiology/RP_3_2_Student.html" },
    { id:"rp-3-3", title:"Fluid Volume Overload", file:"https://www.pulmolearn.com/physiology/RP_3_3_Student.html" },
    { id:"rp-3-4", title:"Newborn Assessment & APGAR Scoring", file:"https://www.pulmolearn.com/physiology/RP_3_4_Student.html" }
  ]
},
{
  id: "assessment",
  title: "Pulmonary Assessment",
  courses: [
    { id:"pa-1-1", title:"Introduction to Pulmonary Assessment", file:"https://www.pulmolearn.com/assessment/PA_1_1_Introduction_to_Respiratory_Patient_Assessment_&_Interviewing.html" },
    { id:"pa-1-2", title:"Vital Signs & Respiratory Patterns", file:"https://www.pulmolearn.com/assessment/PA_1_2_Physical_Assessment_&_Disease_Differentiation.html" },
    { id:"pa-1-3", title:"Inspection, Palpation & Chest Assessment", file:"https://www.pulmolearn.com/assessment/PA_1_3_SOAP_Notes_&_Clinical_Documentation.html" },
    { id:"pa-1-4", title:"Breath Sounds & Lung Auscultation", file:"https://www.pulmolearn.com/assessment/PA_1_4_Pulmonary_Function_Testing_Basics.html" },
    { id:"pa-2-1", title:"ABG Sampling & Interpretation", file:"https://www.pulmolearn.com/assessment/PA_2_1_Advanced_Blood_Gas.html" },
    { id:"pa-2-2", title:"Oxygenation Cascade & Hypoxemia", file:"https://www.pulmolearn.com/assessment/PA_2_2_Assessment_of_Oxygen.html" },
    { id:"pa-2-3", title:"Cardiac Monitoring & ECG Basics", file:"https://www.pulmolearn.com/assessment/PA_2_3_ECG_Assessment.html" },
    { id:"pa-2-4", title:"Diagnostic Imaging & Pulmonary Diagnostics", file:"https://www.pulmolearn.com/assessment/PA_2_4_Radiologic_Examination.html" },
    { id:"pa-3-1", title:"Infection Control & Pneumonia Assessment", file:"https://www.pulmolearn.com/assessment/PA_3_1_Diagnostic_Tests_Respiratory_Infections_&_Nosocomial_Prevention.html" },
    { id:"pa-3-2", title:"Respiratory Documentation & Oxygen Therapy", file:"https://www.pulmolearn.com/assessment/PA_3_2_Therapist-Driven_Protocols.html" },
    { id:"pa-3-3", title:"Integrated Pulmonary Assessment", file:"https://www.pulmolearn.com/assessment/PA_3_3_Respiratory_Failure.html" },
    { id:"pa-3-4", title:"HIPAA, Compliance & Professional Communication", file:"https://www.pulmolearn.com/assessment/PA_3_4_Clinical_Documentation_&_HIPAA.html" }
  ]
},
{
  id: "equipment",
  title: "Equipment & Procedures",
  courses: [
    { id:"ep-1-1", title:"Medical Gas Systems & Safety", file:"https://www.pulmolearn.com/equipment/EP_1_1_Student.html" },
    { id:"ep-1-2", title:"Oxygen Delivery Devices", file:"https://www.pulmolearn.com/equipment/EP_1_2_Student.html" },
    { id:"ep-1-3", title:"MDIs, DPIs & Spacer Devices", file:"https://www.pulmolearn.com/equipment/EP_1_3_Student.html" },
    { id:"ep-1-4", title:"Nebulizers & Aerosol Therapy", file:"https://www.pulmolearn.com/equipment/EP_1_4_Student.html" },
    { id:"ep-2-1", title:"Humidity & Bland Aerosol Therapy", file:"https://www.pulmolearn.com/equipment/EP_2_1_Student.html" },
    { id:"ep-2-2", title:"Lung Expansion Therapy", file:"https://www.pulmolearn.com/equipment/EP_2_2_Student.html" },
    { id:"ep-2-3", title:"Airway Clearance Therapy", file:"https://www.pulmolearn.com/equipment/EP_2_3_Student.html" },
    { id:"ep-2-4", title:"Suctioning Procedures", file:"https://www.pulmolearn.com/equipment/EP_2_4_Student.html" },
    { id:"ep-3-1", title:"Basic Airway Management", file:"https://www.pulmolearn.com/equipment/EP_3_1_Student.html" },
    { id:"ep-3-2", title:"Artificial Airways", file:"https://www.pulmolearn.com/equipment/EP_3_2_Student.html" },
    { id:"ep-3-3", title:"Mechanical Ventilation Basics", file:"https://www.pulmolearn.com/equipment/EP_3_3_Student.html" },
    { id:"ep-3-4", title:"Emergency Respiratory Procedures", file:"https://www.pulmolearn.com/equipment/EP_3_4_Student.html" }
  ]
}
];
window.PULMOCORE_COURSES = window.PULMOCORE_COURSE_GROUPS.flatMap(group =>
  group.courses.map(course => ({ ...course, groupId: group.id, groupTitle: group.title }))
);

window.courses = window.PULMOCORE_COURSES;
window.pulmocoreCourses = window.PULMOCORE_COURSES;
window.pulmoCoreCourses = window.PULMOCORE_COURSES;
window.courseList = window.PULMOCORE_COURSES;

function getPulmoCoreProgressData() {
  try { return JSON.parse(localStorage.getItem("pulmocoreProgress") || "{}"); }
  catch { return {}; }
}

function getProgressKey(courseOrFile) {
  if (typeof courseOrFile === "object" && courseOrFile !== null) {
    return courseOrFile.id || courseOrFile.file || "";
  }
  return courseOrFile || "";
}

function getCourseProgress(courseOrFile) {
  const progress = getPulmoCoreProgressData();
  const key = getProgressKey(courseOrFile);
  return progress[key] || { completed: false, percent: 0 };
}

function saveCourseProgress(courseOrFile, percent, completed = false) {
  const progress = getPulmoCoreProgressData();
  const key = getProgressKey(courseOrFile);
  if (!key) return;
  progress[key] = {
    percent: Math.max(0, Math.min(100, Number(percent) || 0)),
    completed: Boolean(completed)
  };
  localStorage.setItem("pulmocoreProgress", JSON.stringify(progress));
}

window.getCourseProgress = getCourseProgress;
window.saveCourseProgress = saveCourseProgress;

function getCourseSource() {
  return window.PULMOCORE_COURSES || window.pulmoCoreCourses || window.pulmocoreCourses || window.courseList || window.courses || [];
}

function getCourseGroups() {
  return window.PULMOCORE_COURSE_GROUPS || [
    { id: "all", title: "Courses", courses: getCourseSource() }
  ];
}

function getCurrentFileName() {
  return window.location.pathname.split("/").pop();
}

function getCurrentLessonKey() {
  return window.PULMO_LESSON_ID || window.LESSON_ID || getCurrentFileName();
}

function getCoursePanel() {
  return document.getElementById("courseMenuPanel") || document.getElementById("courseDropdown");
}

function isCurrentCourse(course) {
  const currentPath = window.location.pathname.toLowerCase();
  const currentFile = getCurrentFileName().toLowerCase();
  const courseFile = (course.file || "").toLowerCase();
  return course.id === getCurrentLessonKey() || courseFile.endsWith("/" + currentFile) || courseFile === currentFile || courseFile === currentPath;
}

function renderCourseMenu() {
  const panel = getCoursePanel();
  if (!panel) return;

  let list = document.getElementById("courseMenuList");
  if (!list) {
    panel.innerHTML = '<div class="course-menu-heading">PulmoCore Courses</div><div id="courseMenuList"></div>';
    list = document.getElementById("courseMenuList");
  }
  if (!list) return;

  list.innerHTML = "";

  getCourseGroups().forEach(group => {
    const details = document.createElement("details");
    details.className = "course-menu-group";
    details.dataset.courseGroup = group.id;

    const shouldOpen = group.courses.some(isCurrentCourse) || group.id === "diseases";
    if (shouldOpen) details.open = true;

    const completedCount = group.courses.filter(course => getCourseProgress(course).completed).length;

    details.innerHTML = `
      <summary class="course-menu-group-summary">
        <span>${group.title}</span>
        <span class="course-menu-group-count">${completedCount}/${group.courses.length}</span>
      </summary>
      <div class="course-menu-group-list"></div>
    `;

    const groupList = details.querySelector(".course-menu-group-list");

    group.courses.forEach(course => {
      const progress = getCourseProgress(course);
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
      item.className = "course-menu-item" + (isCurrentCourse(course) ? " current" : "");
      item.setAttribute("role", "menuitem");
      item.dataset.courseFile = course.file;
      item.dataset.courseId = course.id || course.file;

      item.innerHTML = `
        <span class="course-menu-title">${course.title}</span>
        <span class="course-menu-status ${statusClass}">${status}</span>
      `;

      item.addEventListener("click", function (event) {
        event.stopPropagation();
      });

      groupList.appendChild(item);
    });

    list.appendChild(details);
  });
}

function updateCourseMenuStatuses() {
  const panel = getCoursePanel();
  if (!panel) return;

  panel.querySelectorAll(".course-menu-item").forEach(item => {
    const courseId = item.dataset.courseId || item.dataset.courseFile;
    const statusEl = item.querySelector(".course-menu-status");
    if (!courseId || !statusEl) return;

    const progress = getCourseProgress(courseId);
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

  panel.querySelectorAll(".course-menu-group").forEach(groupEl => {
    const group = getCourseGroups().find(g => g.id === groupEl.dataset.courseGroup);
    const countEl = groupEl.querySelector(".course-menu-group-count");
    if (!group || !countEl) return;
    const completedCount = group.courses.filter(course => getCourseProgress(course).completed).length;
    countEl.textContent = `${completedCount}/${group.courses.length}`;
  });
}

function injectCourseMenuStyles() {
  if (document.getElementById("pulmocore-course-menu-group-styles")) return;
  const style = document.createElement("style");
  style.id = "pulmocore-course-menu-group-styles";
  style.textContent = `
    .course-menu-group{border:1px solid var(--soft-border,#D7E6EF);border-radius:14px;background:#fff;overflow:hidden;}
    .course-menu-group + .course-menu-group{margin-top:8px;}
    .course-menu-group-summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 12px;font-weight:800;font-family:var(--font-heading,Arial,sans-serif);color:var(--core-navy,#0B1F33);background:#F8FBFD;}
    .course-menu-group-summary::-webkit-details-marker{display:none;}
    .course-menu-group-summary::after{content:'+';color:var(--pulmo-teal,#1CA7A8);font-size:1.2rem;font-weight:800;}
    .course-menu-group[open] .course-menu-group-summary::after{content:'–';}
    .course-menu-group-count{margin-left:auto;font-size:.75rem;font-weight:800;border-radius:999px;padding:3px 7px;background:#E5F0F6;color:var(--slate,#415A77);white-space:nowrap;}
    .course-menu-group-list{display:grid;gap:4px;padding:8px;}
    .course-menu-item.current{border-color:var(--pulmo-teal,#1CA7A8);background:var(--airway-mint,#DDF7F2);box-shadow:inset 4px 0 0 var(--pulmo-teal,#1CA7A8);}
  `;
  document.head.appendChild(style);
}

function initializeCourseMenu() {
  const button = document.getElementById("courseMenuBtn") || document.getElementById("courseMenuButton");
  const panel = getCoursePanel();
  if (!button || !panel) return;

  injectCourseMenuStyles();
  renderCourseMenu();

  button.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = panel.classList.contains("open") || panel.classList.contains("show");
    panel.classList.toggle("open", !isOpen);
    panel.classList.toggle("show", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  };

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".course-menu-container") && !event.target.closest(".course-menu-wrapper")) {
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

function updateCurrentLessonProgress() {
  const currentLessonId = getCurrentLessonKey();
  if (!currentLessonId) return;

  const sections = Array.from(document.querySelectorAll(".lesson-stack-top > section, .lesson-stack > section"));
  if (!sections.length) return;

  const unlockedSections = sections.filter(section => !section.classList.contains("lesson-hidden"));
  const percent = Math.round((unlockedSections.length / sections.length) * 100);
  const completed = percent >= 100;

  saveCourseProgress(currentLessonId, percent, completed);
  updateCourseMenuStatuses();
}

function autoTrackCourseProgress() { updateCurrentLessonProgress(); }

function watchLessonProgressChanges() {
  const lessonArea = document.querySelector(".lesson-stack, .lesson-stack-top");
  if (!lessonArea) return;

  const observer = new MutationObserver(function () { updateCurrentLessonProgress(); });
  observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class", "data-complete"] });
}

document.addEventListener("DOMContentLoaded", function () {
  initializeCourseMenu();
  setTimeout(function () {
    updateCurrentLessonProgress();
    watchLessonProgressChanges();
  }, 750);
  document.addEventListener("activityComplete", updateCurrentLessonProgress);
});

window.initializeCourseMenu = initializeCourseMenu;
window.updateCurrentLessonProgress = updateCurrentLessonProgress;
window.autoTrackCourseProgress = autoTrackCourseProgress;
