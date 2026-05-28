/* =========================================
   PULMOCORE COURSES.JS
   Course list + local progress + clickable course menu
========================================= */

/* ---------- COURSE LIST ---------- */

window.PULMOCORE_COURSES = [

  /* ── DISEASE LIBRARY ─────────────────────────────────────────── */
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
  { title: "Tuberculosis", file: "Tuberculosis.html" },

  /* ── PULMONARY ASSESSMENT ─────────────────────────────────────── */
  { title: "Assessment 1.1: Intro to Respiratory Patient Assessment", file: "/assessment/PA_1_1_Introduction_to_Respiratory_Patient_Assessment___Interviewing.html" },
  { title: "Assessment 1.2: Physical Assessment & Disease Differentiation", file: "/assessment/PA_1_2_Physical_Assessment_&_Disease_Differentiation.html" },
  { title: "Assessment 1.3: SOAP Notes & Clinical Documentation", file: "/assessment/PA_1_3_SOAP_Notes_&_Clinical_Documentation.html" },
  { title: "Assessment 1.4: Pulmonary Function Testing Basics", file: "/assessment/PA_1_4_Pulmonary_Function_Testing_Basics.html" },
  { title: "Assessment 2.1: Advanced Blood Gas", file: "/assessment/PA_2_1_Advanced_Blood_Gas.html" },
  { title: "Assessment 2.2: Assessment of Oxygen — Hypoxemia vs. Hypoxia", file: "/assessment/PA_2_2_Assessment_of_Oxygen.html" },
  { title: "Assessment 2.3: ECG Assessment", file: "/assessment/PA_2_3_ECG_Assessment.html" },
  { title: "Assessment 2.4: Radiologic Examination", file: "/assessment/PA_2_4_Radiologic_Examination.html" },
  { title: "Assessment 3.1: Diagnostic Tests & Nosocomial Prevention", file: "/assessment/PA_3_1_Diagnostic_Tests_Respiratory_Infections_Nosocomial_Prevention.html" },
  { title: "Assessment 3.2: Therapist-Driven Protocols", file: "/assessment/PA_3_2_Therapist-Driven_Protocols.html" },
  { title: "Assessment 3.3: Respiratory Failure", file: "/assessment/PA_3_3_Respiratory_Failure.html" },
  { title: "Assessment 3.4: Clinical Documentation & HIPAA", file: "/assessment/PA_3_4_Clinical_Documentation_HIPAA.html" },

  /* ── FOUNDATIONS ──────────────────────────────────────────────── */
  { title: "Foundations 1.1: Professional Communication & Conflict Resolution", file: "/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html" },
  { title: "Foundations 1.2: Medical Math, Units & Dosage Calculations", file: "/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html" },
  { title: "Foundations 1.3: Oxygenation & Gas Exchange Calculations", file: "/foundations/Foundations_1_3_Oxygenation_Gas_Exchange_Calculations.html" },
  { title: "Foundations 1.4: Introduction to Pulmonary Function Testing", file: "/foundations/Foundations_1_4_Introduction_to_Pulmonary_Function_Testing.html" },
  { title: "Foundations 2.1: Oximetry & Capnography", file: "/foundations/Foundations_2_1_Oximetry_Capnography.html" },
  { title: "Foundations 2.2: Interpreting Clinical & Laboratory Data", file: "/foundations/Foundations_2_2_Interpreting_Clinical_Laboratory_Data.html" },
  { title: "Foundations 2.3: ABG Interpretation", file: "/foundations/Foundations_2_3_ABG_Interpretation.html" },
  { title: "Foundations 2.4: Integrated Respiratory Decision-Making", file: "/foundations/Foundations_2_4_Integrated_Respiratory_Decision_Making.html" },
  { title: "Foundations 3.1: Flexible Bronchoscopy", file: "/foundations/Foundations_3_1_Flexible_Bronchoscopy.html" },
  { title: "Foundations 3.2: ECG Interpretation & Cardiac Rhythm Analysis", file: "/foundations/Foundations_3_2_ECG_Interpretation_Cardiac_Rhythm_Analysis.html" },
  { title: "Foundations 3.3: Anion Gap & Mixed Acid-Base Disorders", file: "/foundations/Foundations_3_3_Anion_Gap_Mixed_Acid_Base_Disorders.html" },
  { title: "Foundations 3.4: Nutrition, Ethics & Electronic Medical Records", file: "/foundations/Foundations_3_4_Nutrition_Ethics_Electronic_Medical_Records.html" },

  /* ── RESPIRATORY PHYSIOLOGY ───────────────────────────────────── */
  { title: "Physiology 1.1: Airway Defense & Conditioning", file: "/physiology/RP_1_1_Airway_Defense_Conditioning.html" },
  { title: "Physiology 1.2: Basic Respiratory Anatomy", file: "/physiology/RP_1_2_Basic_Respiratory_Anatomy.html" },
  { title: "Physiology 1.3: Mechanics of Ventilation", file: "/physiology/RP_1_3_Mechanics_of_Ventilation.html" },
  { title: "Physiology 1.4: Lung Volumes and Capacities", file: "/physiology/RP_1_4_Lung_Volumes_and_Capacities.html" },
  { title: "Physiology 2.1: Acid-Base Physiology & Kidney Compensation", file: "/physiology/RP_2_1_Acid_Base_Physiology_Kidney_Compensation.html" },
  { title: "Physiology 2.2: Neural Control of Ventilation & V/Q Ratio", file: "/physiology/RP_2_2_Neural_Control_Ventilation_VQ_Ratio.html" },
  { title: "Physiology 2.3: Assessment & Treatment of Hypoxia", file: "/physiology/RP_2_3_Assessment_Treatment_Hypoxia_VQ_Calculations.html" },
  { title: "Physiology 2.4: Sleep-Disordered Breathing & Sleep Studies", file: "/physiology/RP_2_4_Sleep_Disordered_Breathing_Sleep_Studies.html" },
  { title: "Physiology 3.1: Cardiovascular System & Cardiac Electrophysiology", file: "/physiology/RP_3_1_Cardiovascular_System_Cardiac_Electrophysiology.html" },
  { title: "Physiology 3.2: Cardiac Pathology & Hemodynamics", file: "/physiology/RP_3_2_Cardiac_Pathology_Hemodynamics.html" },
  { title: "Physiology 3.3: Fluid Volume Overload", file: "/physiology/RP_3_3_Fluid_Volume_Overload.html" },
  { title: "Physiology 3.4: Newborn Assessment & APGAR Scoring", file: "/physiology/RP_3_4_Newborn_Assessment_APGAR_Scoring.html" },

  /* ── RESPIRATORY EQUIPMENT ────────────────────────────────────── */
  { title: "Equipment: Aerosol Drug Therapy", file: "/equipment/RE_Aerosol_Delivery.html" },
  { title: "Equipment: Airway Management", file: "/equipment/RE_Airway_Management.html" },
  { title: "Equipment: Airway Pharmacology", file: "/equipment/RE_Airway_Pharmacology.html" },
  { title: "Equipment: Blood Gas Monitoring", file: "/equipment/RE_Blood_Gas_Monitoring.html" },
  { title: "Equipment: Cardiovascular Monitoring", file: "/equipment/RE_Cardiovascular_Monitoring.html" },
  { title: "Equipment: Humidity & Aerosol Therapy", file: "/equipment/RE_Humidity_Aerosol_Therapy.html" },
  { title: "Equipment: Infection Control & PPE", file: "/equipment/RE_Infection_Control.html" },
  { title: "Equipment: Medical Gas Systems", file: "/equipment/RE_Medical_Gas_Systems.html" },
  { title: "Equipment: Oxygen Delivery Devices", file: "/equipment/RE_Oxygen_Delivery.html" },
  { title: "Equipment: Patient Assessment Equipment", file: "/equipment/RE_Patient_Assessment_Equipment.html" },
  { title: "Equipment: Professionalism & Documentation", file: "/equipment/RE_Professionalism_Documentation.html" },
  { title: "Equipment: Pulmonary Function Testing", file: "/equipment/RE_Pulmonary_Function_Testing.html" },

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
  // Normalize key — try exact match, then without .html, then filename only
  const fileNoExt = courseFile.replace(/\.html$/i, '').split('/').pop();
  return progress[courseFile]
    || progress[fileNoExt]
    || progress[courseFile.split('/').pop()]
    || { completed: false, percent: 0 };
}

function saveCourseProgress(courseFile, percent, completed = false) {
  const progress = getPulmoCoreProgressData();
  // Normalize key — strip .html and leading path to match Vercel URL format
  const key = courseFile.replace(/\.html$/i, '').split('/').pop();
  progress[key] = {
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
  const list = document.getElementById("courseMenuList");

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

    list.appendChild(item);
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
  const button =
    document.getElementById("courseMenuBtn") ||
    document.getElementById("courseMenuButton");
  const panel = getCoursePanel();
  const list = document.getElementById("courseMenuList") || panel;
  if (!panel || !list) return;
  list.innerHTML = "";

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

  // ── Support both lesson-stack-top and lesson-stack layouts ──
  const sections = Array.from(document.querySelectorAll(".lesson-stack-top > section, .lesson-stack > section"));
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
  // ── Watch both lesson-stack-top and lesson-stack ──
  const lessonStack = document.querySelector(".lesson-stack-top, .lesson-stack");
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
