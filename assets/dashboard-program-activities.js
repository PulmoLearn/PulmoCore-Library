// PulmoLearn Program Practice Activities
// Adds paid-package practice activities directly after their aligned dashboard lesson.
// Requires public.current_user_lti_package_access() RPC.

const AUTH_MODULE_URL = "/assets/auth.js";

const isLocalPreview =
  window.location.protocol === "file:" ||
  ["localhost", "127.0.0.1"].includes(window.location.hostname) ||
  !window.location.hostname.includes("pulmolearn.com");

const activityMap = {
  foundations: [
    {
      lessonId: "foundations_1_2",
      title: "Respiratory Math & Safety Practice",
      href: "/foundations/activities/1-2-respiratory-math-safety-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_1_3",
      title: "Follow the Oxygen",
      href: "/foundations/activities/1-3-follow-the-oxygen.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_1_4",
      title: "PFT Interpretation Practice",
      href: "/foundations/activities/1-4-PFT-interpretation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_2_1",
      title: "Monitor Detective: Oximetry & Capnography",
      href: "/foundations/activities/2-1-monitor-detective-oximetry-capnography.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_2_2",
      title: "Gathering Clinical Clues",
      href: "/foundations/activities/2-2-gathering-clinical-clues.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_2_3",
      title: "ABG Interpretation Practice",
      href: "/foundations/activities/2-3-ABG-interpretation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_2_4",
      title: "Chest X-Ray Interpretation Practice",
      href: "/foundations/activities/2-4-chest-x-ray-interpretation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_3_1",
      title: "Bronchoscopy Procedure Practice",
      href: "/foundations/activities/3-1-bronchoscopy-procedure-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_3_2",
      title: "ECG Interpretation Practice",
      href: "/foundations/activities/3-2-ECG-interpretation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_3_3",
      title: "Acid-Base Detective Lab",
      href: "/foundations/activities/3-3-acid-base-detective-lab.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "foundations_3_4",
      title: "Nutrition, Ethics & Electronic Medical Records",
      href: "/foundations/activities/3-4-nutrition-ethics-electronic-medical-records.html",
      kind: "Practice Activity"
    }
  ],

  physiology: [
    {
      lessonId: "rp-1-1",
      title: "Airway Defense & Conditioning Practice",
      href: "/physiology/activities/1-1-airway-defense-conditioning.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-1-2",
      title: "Basic Respiratory Anatomy Practice",
      href: "/physiology/activities/1-2-basic-respiratory-anatomy.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-1-3",
      title: "Mechanics of Ventilation Practice",
      href: "/physiology/activities/1-3-mechanics-of-ventilation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-1-4",
      title: "Pulmonary Function Practice",
      href: "/physiology/activities/1-4-pulmonary-function-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-2-1",
      title: "Acid-Base Physiology Practice",
      href: "/physiology/activities/2-1-acid-base-physiology-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-2-2",
      title: "Neural Control & V/Q Physiology Practice",
      href: "/physiology/activities/2-2-neural-control-vq-physiology-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-2-3",
      title: "Physiologic Oxygenation Practice",
      href: "/physiology/activities/2-3-physiologic-oxygenation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-2-4",
      title: "Sleep-Disordered Breathing Practice",
      href: "/physiology/activities/2-4-sleep-disordered-breathing-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-3-1",
      title: "Cardiovascular Electrophysiology Practice",
      href: "/physiology/activities/3-1-cardiovascular-electrophysiology-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-3-2",
      title: "Cardiac Pathology & Hemodynamics Practice",
      href: "/physiology/activities/3-2-cardiac-pathology-hemodynamics-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-3-3",
      title: "Fluid Volume Overload Practice",
      href: "/physiology/activities/3-3-fluid-volume-overload-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "rp-3-4",
      title: "Newborn Transition & APGAR Practice",
      href: "/physiology/activities/3-4-newborn-transition-apgar-practice.html",
      kind: "Practice Activity"
    }
  ],

  assessment: [
    {
      lessonId: "pa-1-1",
      title: "Respiratory Interview Practice",
      href: "/assessment/activities/1-1-respiratory-interview-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-1-2",
      title: "Chest Assessment Practice",
      href: "/assessment/activities/1-2-chest-assessment-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-1-3",
      title: "SOAP Note Practice",
      href: "/assessment/activities/1-3-soap-note-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-1-4",
      title: "Techniques for Proper Breathing Practice",
      href: "/assessment/activities/1-4-techniques-for-proper-breathing-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-2-1",
      title: "Advanced Blood Gas Practice",
      href: "/assessment/activities/2-1-advanced-blood-gas-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-2-2",
      title: "Oxygen Transport & Hypoxia Practice",
      href: "/assessment/activities/2-2-oxygen-transport-hypoxia-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-2-3",
      title: "ECG Assessment Practice",
      href: "/assessment/activities/2-3-ecg-assessment-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-2-4",
      title: "Radiologic Imaging Practice",
      href: "/assessment/activities/2-4-radiologic-imaging-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-3-1",
      title: "Diagnostic Tests & Infection Prevention Practice",
      href: "/assessment/activities/3-1-diagnostic-tests-infection-prevention-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-3-2",
      title: "Therapist-Driven Protocol Practice",
      href: "/assessment/activities/3-2-therapist-driven-protocol-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-3-3",
      title: "Respiratory Failure & Support Escalation Practice",
      href: "/assessment/activities/3-3-respiratory-failure-support-escalation-practice.html",
      kind: "Practice Activity"
    },
    {
      lessonId: "pa-3-4",
      title: "Clinical Documentation & Privacy Practice",
      href: "/assessment/activities/3-4-clinical-documentation-privacy-practice.html",
      kind: "Practice Activity"
    }
  ],

  "neonatal-pediatric": [
    {
      lessonId: "np_1_1",
      title: "Before the First Breath",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-1-before-the-first-breath.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_2",
      title: "Delivery Room Ready",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-2-delivery-room-ready.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_3",
      title: "Minutes Matter",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-3-minutes-matter.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_4",
      title: "What Is the Baby Telling You?",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-4-what-is-the-baby-telling-you.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_5",
      title: "Why Is This Newborn Struggling?",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-5-why-is-this-newborn-struggling.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_6",
      title: "Climbing the Support Ladder",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-6-climbing-the-support-ladder.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_1_7",
      title: "When Conventional Support Is Not Enough",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-1-7-when-conventional-support-is-not-enough.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_1",
      title: "Sick or Getting Sicker?",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-1-sick-or-getting-sicker.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_2",
      title: "Choose the Right Respiratory Tool",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-2-choose-the-right-respiratory-tool.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_3",
      title: "Protect the Airway",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-3-protect-the-airway.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_4",
      title: "The Ventilated Child",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-4-the-ventilated-child.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_5",
      title: "Follow the Respiratory Clues",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-5-follow-the-respiratory-clues.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_6",
      title: "More Than a Lung Problem",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-6-more-than-a-lung-problem.html",
      kind: "Practice Scenario"
    },
    {
      lessonId: "np_2_7",
      title: "Beyond the Hospital",
      href: "/Neonatal_Pediatric/scenarios/np-scenario-2-7-beyond-the-hospital.html",
      kind: "Practice Scenario"
    }
  ]
};

const lessonLinkById = {
  foundations_1_2: "Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html",
  foundations_1_3: "Foundations_1_3_Oxygenation_Gas_Exchange_Calculations.html",
  foundations_1_4: "Foundations_1_4_Introduction_to_Pulmonary_Function_Testing.html",
  foundations_2_1: "Foundations_2_1_Oximetry_Capnography.html",
  foundations_2_2: "Foundations_2_2_Interpreting_Clinical_Laboratory_Data.html",
  foundations_2_3: "Foundations_2_3_ABG_Interpretation.html",
  foundations_2_4: "Foundations_2_4_Integrated_Respiratory_Decision_Making.html",
  foundations_3_1: "Foundations_3_1_Flexible_Bronchoscopy.html",
  foundations_3_2: "Foundations_3_2_ECG_Interpretation_Cardiac_Rhythm_Analysis.html",
  foundations_3_3: "Foundations_3_3_Anion_Gap_Mixed_Acid_Base_Disorders.html",
  foundations_3_4: "Foundations_3_4_Nutrition_Ethics_Electronic_Medical_Records.html",

  "rp-1-1": "RP_1_1_Airway_Defense_Conditioning.html",
  "rp-1-2": "RP_1_2_Basic_Respiratory_Anatomy.html",
  "rp-1-3": "RP_1_3_Mechanics_of_Ventilation.html",
  "rp-1-4": "RP_1_4_Lung_Volumes_and_Capacities.html",
  "rp-2-1": "RP_2_1_Acid_Base_Physiology_Kidney_Compensation.html",
  "rp-2-2": "RP_2_2_Neural_Control_Ventilation_VQ_Ratio.html",
  "rp-2-3": "RP_2_3_Assessment_Treatment_Hypoxia_VQ_Calculations.html",
  "rp-2-4": "RP_2_4_Sleep_Disordered_Breathing_Sleep_Studies.html",
  "rp-3-1": "RP_3_1_Cardiovascular_System_Cardiac_Electrophysiology.html",
  "rp-3-2": "RP_3_2_Cardiac_Pathology_Hemodynamics.html",
  "rp-3-3": "RP_3_3_Fluid_Volume_Overload.html",
  "rp-3-4": "RP_3_4_Newborn_Assessment_APGAR_Scoring.html",

  "pa-1-1": "PA_1_1_Introduction_to_Respiratory_Patient_Assessment_&_Interviewing.html",
  "pa-1-2": "PA_1_2_Physical_Assessment_&_Disease_Differentiation.html",
  "pa-1-3": "PA_1_3_SOAP_Notes_&_Clinical_Documentation.html",
  "pa-1-4": "PA_1_4_Pulmonary_Function_Testing_Basics.html",
  "pa-2-1": "PA_2_1_Advanced_Blood_Gas.html",
  "pa-2-2": "PA_2_2_Assessment_of_Oxygen.html",
  "pa-2-3": "PA_2_3_ECG_Assessment.html",
  "pa-2-4": "PA_2_4_Radiologic_Examination.html",
  "pa-3-1": "PA_3_1_Diagnostic_Tests_Respiratory_Infections_&_Nosocomial_Prevention.html",
  "pa-3-2": "PA_3_2_Therapist-Driven_Protocols.html",
  "pa-3-3": "PA_3_3_Respiratory_Failure.html",
  "pa-3-4": "PA_3_4_Clinical_Documentation_HIPAA.html",

  np_1_1: "1_1_Fetal_Lung_Development_Gas_Exchange_and_Transition.html",
  np_1_2: "1_2_Maternal_Risk_High_Risk_Delivery_and_Neonatal_Assessment.html",
  np_1_3: "1_3_Neonatal_Stabilization_and_Resuscitation.html",
  np_1_4: "1_4_Neonatal_Assessment_Monitoring_Blood_Gases_and_Imaging.html",
  np_1_5: "1_5_Neonatal_Pulmonary_Disorders.html",
  np_1_6: "1_6_Neonatal_Noninvasive_and_Invasive_Ventilation.html",
  np_1_7: "1_7_Advanced_Neonatal_Ventilation_Complications_and_Chronic_Care.html",
  np_2_1: "2_1_Pediatric_Anatomy_Assessment_Monitoring_and_Diagnostics.html",
  np_2_2: "2_2_Pediatric_Oxygen_Aerosol_Airway_Clearance_and_Specialty_Gases.html",
  np_2_3: "2_3_Pediatric_Airway_Management_and_Noninvasive_Support.html",
  np_2_4: "2_4_Pediatric_Mechanical_Ventilation_and_ARDS.html",
  np_2_5: "2_5_Obstructive_Infectious_and_Chronic_Pulmonary_Disorders.html",
  np_2_6: "2_6_Cardiac_Neurologic_Neuromuscular_Shock_Trauma_and_ECMO.html",
  np_2_7: "2_7_Transport_Home_Care_Safety_Family_Education_and_End_of_Life_Care.html"
};

function injectStyles() {
  if (document.getElementById("pl-program-activity-styles")) return;

  const style = document.createElement("style");
  style.id = "pl-program-activity-styles";
  style.textContent = `
    .course-section.has-program-activities .disease-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: stretch;
    }

    .program-activity-card {
      border-top-color: var(--clinical-amber, #F4B860) !important;
      background: linear-gradient(180deg, #FFFDF8 0%, #FFFFFF 100%) !important;
    }

    .program-activity-card .program-activity-label {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      border-radius: 999px;
      padding: 6px 10px;
      background: #FFF4DF;
      border: 1px solid #F4D49A;
      color: #6E4700;
      font-size: .78rem;
      font-weight: 800;
    }

    .program-activity-card .program-activity-note {
      color: var(--slate, #415A77);
      margin: 0;
    }

    .program-activity-card .btn-program-practice {
      background: var(--core-navy, #0B1F33);
      color: #fff;
      box-shadow: 0 8px 16px rgba(11,31,51,.16);
    }

    .program-activity-card .btn-program-practice:hover {
      background: var(--core-navy-2, #102A43);
    }

    @media (max-width: 780px) {
      .course-section.has-program-activities .disease-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
}

function makeActivityCard(activity) {
  const article = document.createElement("article");
  article.className = "disease-card program-activity-card";
  article.dataset.programActivity = "true";
  article.dataset.alignedLessonId = activity.lessonId;

  article.innerHTML = `
    <div class="program-activity-label">${activity.kind}</div>
    <div class="disease-header">
      <div class="disease-title-group">
        <h3>${activity.title}</h3>
        <div class="disease-category">Aligned practice provided by your respiratory therapy program</div>
      </div>
    </div>
    <p class="program-activity-note">
      Apply the concepts from the lesson immediately above through interactive practice and clinical reasoning.
    </p>
    <div class="disease-meta">
      <span class="pill">Program Practice</span>
      <span class="pill">Included with LTI Package</span>
    </div>
    <div class="card-actions">
      <a class="btn btn-program-practice" href="${activity.href}">Open ${activity.kind}</a>
    </div>
  `;

  return article;
}

function findLessonCard(section, lessonId) {
  const expectedFile = lessonLinkById[lessonId];
  if (!expectedFile) return null;

  const cards = [...section.querySelectorAll(".disease-card:not(.program-activity-card)")];

  return cards.find(card => {
    const link = card.querySelector(".card-actions a[href]");
    if (!link) return false;

    try {
      const url = new URL(link.getAttribute("href"), window.location.href);
      return decodeURIComponent(url.pathname).endsWith(expectedFile);
    } catch {
      return decodeURIComponent(link.getAttribute("href") || "").includes(expectedFile);
    }
  }) || null;
}

function addActivitiesToVisibleSections() {
  Object.entries(activityMap).forEach(([courseGroup, activities]) => {
    document
      .querySelectorAll(`.course-section[data-course-section="${courseGroup}"]`)
      .forEach(section => {
        const grid = section.querySelector(".disease-grid");
        if (!grid) return;

        // The dashboard rebuilds this grid on every tab/search/filter render,
        // so insert only when these cards are not already present.
        if (grid.querySelector("[data-program-activity='true']")) return;

        let inserted = 0;

        activities.forEach(activity => {
          const lessonCard = findLessonCard(section, activity.lessonId);
          if (!lessonCard) return;

          lessonCard.insertAdjacentElement("afterend", makeActivityCard(activity));
          inserted += 1;
        });

        if (inserted > 0) {
          section.classList.add("has-program-activities");

          const countPill = section.querySelector(".course-count-pill");
          if (countPill) {
            countPill.dataset.lessonCountText = countPill.dataset.lessonCountText || countPill.textContent;
            countPill.textContent = `${countPill.dataset.lessonCountText} · ${inserted} program practice`;
          }
        }
      });
  });
}

async function userHasPackageAccess() {
  if (isLocalPreview) return true;

  try {
    const auth = await import(AUTH_MODULE_URL);
    const supabase = auth.supabase;

    const { data, error } = await supabase.rpc("current_user_lti_package_access");

    if (error) {
      console.warn("PulmoLearn: Could not verify LTI package access:", error.message);
      return false;
    }

    return data === true;
  } catch (error) {
    console.warn("PulmoLearn: LTI package entitlement check failed:", error);
    return false;
  }
}

async function initProgramActivities() {
  injectStyles();

  const entitled = await userHasPackageAccess();
  if (!entitled) return;

  addActivitiesToVisibleSections();

  const target = document.getElementById("courseSections");
  if (!target) return;

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;

    requestAnimationFrame(() => {
      queued = false;
      addActivitiesToVisibleSections();
    });
  });

  observer.observe(target, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProgramActivities, { once: true });
} else {
  initProgramActivities();
}
