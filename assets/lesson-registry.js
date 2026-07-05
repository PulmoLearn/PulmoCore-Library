/*
  PulmoLearn / PulmoCore Lesson Registry
  Starter registry for NBRC 2027 dashboard alignment.

  Requires:
  /assets/nbrc-outline-2027.js

  Purpose:
  - Central data source for NBRC 2027 alignment dashboards.
  - Maps each lesson to canonical NBRC outline IDs from nbrc-outline-2027.js.
  - Supports program director reporting, gap analysis, and student review filtering.

  Important:
  - mappingStatus: "first-pass" means usable for dashboard testing.
  - Review before exporting as a final accreditation crosswalk.
*/

(function (global) {
  "use strict";

  const REGISTRY = [
    {
      courseId: "pulmonary-assessment",
      courseTitle: "PulmoCore Pulmonary Assessment",
      moduleId: "advanced-blood-gas-assessment",
      moduleTitle: "Advanced Blood Gas Assessment and Monitoring Technology",
      lessonId: "pa-2-1-advanced-blood-gas-mixed-disorders-monitoring-technology",
      lessonTitle: "Advanced Blood Gas: Mixed Disorders, Monitoring Technology & Clinical Integration",
      displayTitle: "PA 2.1: Advanced Blood Gas",
      href: "/PA_2_1_Advanced_Blood_Gas.html",
      estimatedMinutes: 55,
      patientAge: ["Adult", "Geriatric", "Pregnancy / maternal", "Adolescent"],
      setting: ["ICU", "Emergency department", "Acute care", "Transport", "Procedural sedation"],
      topics: [
        "advanced blood gas interpretation",
        "mixed acid-base disorders",
        "expected compensation",
        "Winter formula",
        "analytical error",
        "serial ABG trending",
        "point-of-care blood gas analyzer",
        "co-oximetry",
        "pulse oximetry limitations",
        "carbon monoxide poisoning",
        "methemoglobinemia",
        "capnography",
        "ETCO2",
        "pregnancy ABG",
        "COPD baseline ABG",
        "electrolyte shifts"
      ],
      activityTypes: ["video", "sort", "quiz", "case-study", "knowledge-check", "flashcards"],
      activities: [
        { id: "pa_2_1_overview_video", type: "video", title: "Advanced Blood Gas Overview", required: false, estimatedMinutes: 2 },
        { id: "pa_2_1_mixed_disorder_identification", type: "sort", title: "Mixed Disorder Identification", required: true, estimatedMinutes: 5 },
        { id: "pa_2_1_analytical_error_detection", type: "sort", title: "Analytical Error Detection", required: true, estimatedMinutes: 5 },
        { id: "pa_2_1_decision_tree_application", type: "quiz", title: "Decision Tree Application", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_serial_trend_interpretation", type: "sort", title: "Serial Trend Interpretation", required: true, estimatedMinutes: 5 },
        { id: "pa_2_1_electrolyte_shift_match", type: "sort", title: "Electrolyte Shift Match", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_poc_technology_match", type: "sort", title: "POC Technology Match", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_oximetry_limitation_check", type: "quiz", title: "Oximetry Limitation Check", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_capnography_reading", type: "sort", title: "Capnography Reading", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_special_population_interpretation", type: "sort", title: "Special Population Interpretation", required: true, estimatedMinutes: 4 },
        { id: "pa_2_1_unfolding_case", type: "case-study", title: "Complex Integration Case", required: true, estimatedMinutes: 8 },
        { id: "pa_2_1_assignment_practice", type: "sort", title: "Assignment Practice", required: true, estimatedMinutes: 6 },
        { id: "pa_2_1_knowledge_check", type: "knowledge-check", title: "Advanced Blood Gas Knowledge Check", required: true, estimatedMinutes: 8 },
        { id: "pa_2_1_flashcards", type: "flashcards", title: "Glossary Flashcard Deck", required: false, estimatedMinutes: 5 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.A.2",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study", "knowledge-check"],
          interactionIds: ["pa_2_1_unfolding_case", "pa_2_1_knowledge_check"],
          estimatedMinutes: 6,
          notes: "Blood gas, co-oximetry, electrolytes, lactate, and related lab review."
        },
        {
          outlineId: "BOK-I.C.4",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "sorting"],
          interactionIds: ["pa_2_1_analytical_error_detection"],
          estimatedMinutes: 4,
          notes: "Blood gas sample handling and recollection logic."
        },
        {
          outlineId: "BOK-I.C.5",
          coverageLevel: "applied",
          evidenceType: ["instruction", "sorting", "case-study"],
          interactionIds: ["pa_2_1_poc_technology_match", "pa_2_1_unfolding_case"],
          estimatedMinutes: 6,
          notes: "Blood gas analysis and hemoximetry technology."
        },
        {
          outlineId: "BOK-I.C.7",
          coverageLevel: "applied",
          evidenceType: ["instruction", "calculation", "case-study"],
          interactionIds: ["pa_2_1_mixed_disorder_identification", "pa_2_1_unfolding_case"],
          estimatedMinutes: 7,
          notes: "Expected compensation and ABG-related calculations."
        },
        {
          outlineId: "BOK-I.D.5",
          coverageLevel: "assessed",
          evidenceType: ["sorting", "case-study", "knowledge-check"],
          interactionIds: ["pa_2_1_mixed_disorder_identification", "pa_2_1_serial_trend_interpretation", "pa_2_1_knowledge_check"],
          estimatedMinutes: 10,
          notes: "Evaluate ABG and co-oximetry results including mixed disorders and trends."
        },
        {
          outlineId: "BOK-I.D.7",
          coverageLevel: "assessed",
          evidenceType: ["calculation", "case-study", "knowledge-check"],
          interactionIds: ["pa_2_1_mixed_disorder_identification", "pa_2_1_unfolding_case", "pa_2_1_knowledge_check"],
          estimatedMinutes: 8,
          notes: "Evaluate cardiopulmonary calculation patterns and compensation logic."
        },
        {
          outlineId: "BOK-II.A.13",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "sorting"],
          interactionIds: ["pa_2_1_poc_technology_match"],
          estimatedMinutes: 4,
          notes: "Point-of-care blood gas analyzer and hemoximetry device handling."
        },
        {
          outlineId: "BOK-II.B.4",
          coverageLevel: "applied",
          evidenceType: ["instruction", "sorting"],
          interactionIds: ["pa_2_1_analytical_error_detection", "pa_2_1_poc_technology_match"],
          estimatedMinutes: 5,
          notes: "QC, analyzer flags, clots, bubbles, delayed analysis, and analytical error rejection."
        },
        {
          outlineId: "BOK-III.C.2",
          coverageLevel: "applied",
          evidenceType: ["case-study", "knowledge-check"],
          interactionIds: ["pa_2_1_oximetry_limitation_check", "pa_2_1_unfolding_case"],
          estimatedMinutes: 5,
          notes: "Use ABG, SpO2, co-oximetry, and ETCO2 to support oxygenation decisions."
        },
        {
          outlineId: "BOK-III.E.2",
          coverageLevel: "assessed",
          evidenceType: ["case-study", "knowledge-check"],
          interactionIds: ["pa_2_1_unfolding_case", "pa_2_1_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Recommend repeat sampling, oxygen/ventilation modification, co-oximetry, or escalation."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "pulmonary-assessment",
      courseTitle: "PulmoCore Pulmonary Assessment",
      moduleId: "assessment-foundations",
      moduleTitle: "Foundations of Respiratory Patient Assessment",
      lessonId: "pa-1-4-pulmonary-function-testing-basics",
      lessonTitle: "Pulmonary Function Testing Basics",
      displayTitle: "PA 1.4: Pulmonary Function Testing Basics",
      href: "/PA_1_4_Pulmonary_Function_Testing_Basics.html",
      estimatedMinutes: 45,
      patientAge: ["Adult", "Pediatric"],
      setting: ["Outpatient", "Diagnostic testing", "Pulmonary function laboratory", "Clinic", "Hospital"],
      topics: [
        "pulmonary function testing",
        "spirometry",
        "forced vital capacity",
        "FVC",
        "lung volumes",
        "tidal volume",
        "residual volume",
        "patient coaching",
        "spirometry setup",
        "acceptable maneuver",
        "early termination",
        "mouthpiece seal",
        "quality control",
        "predicted values"
      ],
      activityTypes: ["video", "quiz", "sort", "sequence-sort", "case-study", "knowledge-check", "flashcards"],
      activities: [
        { id: "pa_1_4_overview_video", type: "video", title: "Pulmonary Function Testing Basics Overview", required: false, estimatedMinutes: 2 },
        { id: "pa_1_4_fvc_precheck", type: "quiz", title: "FVC Pre-Check", required: true, estimatedMinutes: 3 },
        { id: "pa_1_4_volume_check", type: "quiz", title: "FVC Volume Check", required: true, estimatedMinutes: 3 },
        { id: "pa_1_4_setup_sort", type: "sort", title: "Spirometry Setup Sort", required: true, estimatedMinutes: 4 },
        { id: "pa_1_4_fvc_sequence", type: "sequence-sort", title: "FVC Coaching Sequence", required: true, estimatedMinutes: 5 },
        { id: "pa_1_4_quality_sort", type: "sort", title: "FVC Quality Sort", required: true, estimatedMinutes: 4 },
        { id: "pa_1_4_guided_case", type: "case-study", title: "Guided FVC Coaching Case", required: true, estimatedMinutes: 6 },
        { id: "pa_1_4_knowledge_check", type: "knowledge-check", title: "FVC Knowledge Check", required: true, estimatedMinutes: 6 },
        { id: "pa_1_4_flashcards", type: "flashcards", title: "Glossary Flashcard Deck", required: false, estimatedMinutes: 5 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.A.3",
          coverageLevel: "introduced",
          evidenceType: ["instruction"],
          interactionIds: ["pa_1_4_overview_video"],
          estimatedMinutes: 4,
          notes: "Introduces pulmonary function testing results and predicted values."
        },
        {
          outlineId: "BOK-I.B.1",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study"],
          interactionIds: ["pa_1_4_guided_case"],
          estimatedMinutes: 5,
          notes: "Assess whether the patient can safely perform spirometry."
        },
        {
          outlineId: "BOK-I.C.20",
          coverageLevel: "assessed",
          evidenceType: ["instruction", "sequence", "case-study", "knowledge-check"],
          interactionIds: ["pa_1_4_setup_sort", "pa_1_4_fvc_sequence", "pa_1_4_guided_case", "pa_1_4_knowledge_check"],
          estimatedMinutes: 16,
          notes: "Perform spirometry setup and coach an FVC maneuver."
        },
        {
          outlineId: "BOK-I.D.21",
          coverageLevel: "assessed",
          evidenceType: ["sorting", "case-study", "knowledge-check"],
          interactionIds: ["pa_1_4_quality_sort", "pa_1_4_guided_case", "pa_1_4_knowledge_check"],
          estimatedMinutes: 10,
          notes: "Evaluate spirometry quality problems and basic FVC interpretation."
        },
        {
          outlineId: "BOK-I.D.23",
          coverageLevel: "introduced",
          evidenceType: ["instruction", "quiz"],
          interactionIds: ["pa_1_4_volume_check"],
          estimatedMinutes: 4,
          notes: "Introduces lung volumes and residual volume concepts."
        },
        {
          outlineId: "BOK-II.B.4",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "sorting"],
          interactionIds: ["pa_1_4_setup_sort", "pa_1_4_quality_sort"],
          estimatedMinutes: 5,
          notes: "Spirometry quality control and patient safety checks."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "foundations",
      courseTitle: "PulmoCore Foundations of Respiratory Care",
      moduleId: "foundations-core-skills",
      moduleTitle: "Core Foundations and Clinical Readiness",
      lessonId: "foundations-1-3-oxygenation-gas-exchange-calculations",
      lessonTitle: "Oxygenation & Gas Exchange Calculations",
      displayTitle: "Foundations 1.3: Oxygenation & Gas Exchange Calculations",
      href: "/Foundations_1_3_Oxygenation_Gas_Exchange_Calculations.html",
      estimatedMinutes: 70,
      patientAge: ["Adult", "Older adult", "Pediatric principles where applicable"],
      setting: ["Inpatient", "Emergency", "Critical care", "Classroom", "Laboratory"],
      topics: [
        "oxygenation calculations",
        "FiO2",
        "PiO2",
        "alveolar gas equation",
        "PAO2",
        "A-a gradient",
        "P/F ratio",
        "oxygen content",
        "CaO2",
        "oxygen delivery",
        "DO2",
        "oxygen consumption",
        "VO2",
        "oxygen extraction ratio",
        "hemoglobin",
        "cardiac output",
        "gas exchange"
      ],
      activityTypes: ["video", "sorting", "calculation", "knowledge-check", "guided-case", "flashcards"],
      activities: [
        { id: "foundations_1_3_overview_video", type: "video", title: "Lesson Overview Video: Where Is the Oxygen?", required: false, estimatedMinutes: 3 },
        { id: "foundations_1_3_oxygen_journey_sort", type: "sorting", title: "Oxygen Journey Sort", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_3_pio2_practice", type: "calculation", title: "PiO2 Practice", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_3_pao2_practice", type: "calculation", title: "PAO2 Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_3_aa_gradient_check", type: "knowledge-check", title: "A-a Gradient Check", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_3_pf_ratio_practice", type: "calculation", title: "P/F Ratio Practice", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_3_cao2_practice", type: "calculation", title: "CaO2 Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_3_do2_practice", type: "calculation", title: "DO2 Practice", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_3_o2er_practice", type: "calculation", title: "O2ER Practice", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_3_guided_oxygenation_scenario", type: "guided-case", title: "Guided Oxygenation Scenario", required: true, estimatedMinutes: 7 },
        { id: "foundations_1_3_mixed_oxygenation_practice", type: "calculation", title: "Mixed Oxygenation Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_3_knowledge_check", type: "knowledge-check", title: "Foundations 1.3 Knowledge Check", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_3_flashcards", type: "flashcards", title: "Glossary Flashcard Mastery Deck", required: false, estimatedMinutes: 6 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.A.2",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "calculation"],
          interactionIds: ["foundations_1_3_pao2_practice", "foundations_1_3_cao2_practice"],
          estimatedMinutes: 6,
          notes: "Review ABG values, oxygenation data, hemoglobin, and cardiopulmonary data."
        },
        {
          outlineId: "BOK-I.C.7",
          coverageLevel: "assessed",
          evidenceType: ["calculation", "guided-case", "knowledge-check"],
          interactionIds: [
            "foundations_1_3_pio2_practice",
            "foundations_1_3_pao2_practice",
            "foundations_1_3_pf_ratio_practice",
            "foundations_1_3_cao2_practice",
            "foundations_1_3_do2_practice",
            "foundations_1_3_o2er_practice",
            "foundations_1_3_knowledge_check"
          ],
          estimatedMinutes: 24,
          notes: "Perform cardiopulmonary calculations including A-a gradient, P/F ratio, CaO2, DO2, VO2, and O2ER."
        },
        {
          outlineId: "BOK-I.D.7",
          coverageLevel: "assessed",
          evidenceType: ["calculation", "guided-case", "knowledge-check"],
          interactionIds: [
            "foundations_1_3_aa_gradient_check",
            "foundations_1_3_guided_oxygenation_scenario",
            "foundations_1_3_mixed_oxygenation_practice",
            "foundations_1_3_knowledge_check"
          ],
          estimatedMinutes: 16,
          notes: "Interpret oxygenation calculation results."
        },
        {
          outlineId: "BOK-III.C.2",
          coverageLevel: "applied",
          evidenceType: ["guided-case", "calculation", "knowledge-check"],
          interactionIds: ["foundations_1_3_guided_oxygenation_scenario", "foundations_1_3_knowledge_check"],
          estimatedMinutes: 8,
          notes: "Use oxygenation data to evaluate oxygen support and tissue delivery."
        },
        {
          outlineId: "BOK-III.E.2",
          coverageLevel: "reinforced",
          evidenceType: ["guided-case", "knowledge-check"],
          interactionIds: ["foundations_1_3_guided_oxygenation_scenario", "foundations_1_3_knowledge_check"],
          estimatedMinutes: 6,
          notes: "Recognize patterns that may require escalation or reassessment."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "foundations",
      courseTitle: "PulmoCore Foundations of Respiratory Care",
      moduleId: "foundations-core-skills",
      moduleTitle: "Foundations of Respiratory Care",
      lessonId: "foundations_1_2",
      lessonTitle: "Medical Math, Units & Dosage Calculations",
      displayTitle: "Foundations 1.2: Medical Math, Units & Dosage Calculations",
      href: "/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html",
      estimatedMinutes: 60,
      patientAge: ["Adult", "Pediatric", "Neonatal foundational calculations"],
      setting: ["Classroom", "Laboratory", "Clinical preparation", "Respiratory medication administration", "Ventilator setup"],
      topics: [
        "medical math",
        "metric conversions",
        "dimensional analysis",
        "temperature conversions",
        "medication dosage calculations",
        "percent solutions",
        "safe decimal notation",
        "ideal body weight",
        "predicted body weight",
        "tidal volume calculations",
        "respiratory care math"
      ],
      activityTypes: ["video", "reflection", "calculation", "knowledge-check", "guided-case", "flashcards"],
      activities: [
        { id: "foundations_1_2_overview_video", type: "video", title: "Lesson Overview Video: RT Math Is Patient Safety", required: false, estimatedMinutes: 3 },
        { id: "foundations_1_2_math_safety_reflection", type: "reflection", title: "Math Safety Reflection", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_2_metric_conversion_practice", type: "calculation", title: "Metric Conversion Practice", required: true, estimatedMinutes: 6 },
        { id: "foundations_1_2_dimensional_analysis_setup", type: "knowledge-check", title: "Dimensional Analysis Setup", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_2_temperature_practice", type: "calculation", title: "Temperature Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_2_dosage_practice", type: "calculation", title: "Dosage Practice", required: true, estimatedMinutes: 7 },
        { id: "foundations_1_2_ibw_tidal_volume_practice", type: "calculation", title: "IBW Tidal Volume Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_2_mixed_practice", type: "calculation", title: "Mixed Practice", required: true, estimatedMinutes: 7 },
        { id: "foundations_1_2_guided_math_scenario", type: "guided-case", title: "Guided Math Scenario", required: true, estimatedMinutes: 6 },
        { id: "foundations_1_2_knowledge_check", type: "knowledge-check", title: "Medical Math Knowledge Check", required: true, estimatedMinutes: 7 },
        { id: "foundations_1_2_flashcards", type: "flashcards", title: "Glossary Flashcard Mastery Deck", required: false, estimatedMinutes: 6 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.A.1",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "calculation"],
          interactionIds: ["foundations_1_2_metric_conversion_practice", "foundations_1_2_mixed_practice"],
          estimatedMinutes: 8,
          notes: "Uses height, weight, temperature, orders, and medication concentration data."
        },
        {
          outlineId: "BOK-I.D.7",
          coverageLevel: "assessed",
          evidenceType: ["calculation", "guided-case", "knowledge-check"],
          interactionIds: [
            "foundations_1_2_metric_conversion_practice",
            "foundations_1_2_temperature_practice",
            "foundations_1_2_dosage_practice",
            "foundations_1_2_ibw_tidal_volume_practice",
            "foundations_1_2_knowledge_check"
          ],
          estimatedMinutes: 22,
          notes: "Foundational math and clinical calculation reasonableness checks."
        },
        {
          outlineId: "BOK-II.B.4",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "calculation", "knowledge-check"],
          interactionIds: ["foundations_1_2_math_safety_reflection", "foundations_1_2_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Quality and safety checks around decimal notation and dose calculation."
        },
        {
          outlineId: "BOK-III.C.3",
          coverageLevel: "introduced",
          evidenceType: ["calculation", "knowledge-check"],
          interactionIds: ["foundations_1_2_ibw_tidal_volume_practice", "foundations_1_2_knowledge_check"],
          estimatedMinutes: 6,
          notes: "Introduces predicted/ideal body weight calculations for tidal volume setup."
        },
        {
          outlineId: "BOK-III.E.2",
          coverageLevel: "introduced",
          evidenceType: ["guided-case", "knowledge-check"],
          interactionIds: ["foundations_1_2_guided_math_scenario", "foundations_1_2_knowledge_check"],
          estimatedMinutes: 5,
          notes: "Use calculated values to support safe respiratory care decisions."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "foundations",
      courseTitle: "PulmoCore Foundations of Respiratory Care",
      moduleId: "foundations-professional-practice",
      moduleTitle: "Professional Practice and Communication",
      lessonId: "foundations_1_1",
      lessonTitle: "Professional Communication & Conflict Resolution",
      displayTitle: "Foundations 1.1: Professional Communication & Conflict Resolution",
      href: "/Foundations_1_1_Professional_Communication_Conflict_Resolution.html",
      estimatedMinutes: 45,
      patientAge: ["Adult", "Pediatric", "Neonatal", "Not age specific"],
      setting: ["Classroom", "Laboratory", "Clinical introduction", "Simulation", "Clinical team environment"],
      topics: [
        "professional communication",
        "therapeutic communication",
        "conflict resolution",
        "patient-centered communication",
        "email professionalism",
        "team communication",
        "self-advocacy",
        "professional tone",
        "empathy",
        "active listening"
      ],
      activityTypes: ["video", "reflection", "sorting", "knowledge-check", "branching-scenario", "guided-case", "assignment-practice", "flashcards"],
      activities: [
        { id: "foundations_1_1_overview_video", type: "video", title: "Lesson Overview Video: Your Words Are Part of Care", required: false, estimatedMinutes: 3 },
        { id: "foundations_1_1_provider_qualities", type: "reflection", title: "What Would Make You Feel Safe?", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_1_communication_sort", type: "sorting", title: "Sort the Communication Statements", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_1_email_precheck", type: "knowledge-check", title: "Email Pre-Check", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_1_conflict_branching", type: "branching-scenario", title: "Work Schedule Conflict", required: true, estimatedMinutes: 4 },
        { id: "foundations_1_1_patient_communication", type: "knowledge-check", title: "Choose the Best Patient-Centered Response", required: true, estimatedMinutes: 3 },
        { id: "foundations_1_1_guided_scenario", type: "guided-case", title: "The Difficult Email That Becomes a Professional Conversation", required: true, estimatedMinutes: 6 },
        { id: "foundations_1_1_email_builder", type: "assignment-practice", title: "Guided Email Composer", required: true, estimatedMinutes: 8 },
        { id: "foundations_1_1_knowledge_check", type: "knowledge-check", title: "Professional Communication Practice", required: true, estimatedMinutes: 5 },
        { id: "foundations_1_1_glossary_flashcards", type: "flashcards", title: "Glossary Flashcard Mastery Deck", required: false, estimatedMinutes: 5 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.B.1",
          coverageLevel: "assessed",
          evidenceType: ["reflection", "sorting", "knowledge-check", "guided-case"],
          interactionIds: [
            "foundations_1_1_provider_qualities",
            "foundations_1_1_communication_sort",
            "foundations_1_1_patient_communication",
            "foundations_1_1_knowledge_check"
          ],
          estimatedMinutes: 12,
          notes: "Patient-centered communication and subjective information gathering."
        },
        {
          outlineId: "BOK-III.I.1",
          coverageLevel: "assessed",
          evidenceType: ["branching-scenario", "guided-case", "assignment-practice", "knowledge-check"],
          interactionIds: [
            "foundations_1_1_conflict_branching",
            "foundations_1_1_guided_scenario",
            "foundations_1_1_email_builder",
            "foundations_1_1_knowledge_check"
          ],
          estimatedMinutes: 16,
          notes: "Interdisciplinary team communication, escalation, and professionalism."
        },
        {
          outlineId: "BOK-III.I.2",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "knowledge-check"],
          interactionIds: ["foundations_1_1_patient_communication", "foundations_1_1_knowledge_check"],
          estimatedMinutes: 6,
          notes: "Patient and family education style communication."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "respiratory-diseases",
      courseTitle: "PulmoCore Respiratory Diseases",
      moduleId: "obstructive-diseases",
      moduleTitle: "Obstructive Pulmonary Diseases",
      lessonId: "diseases_asthma",
      lessonTitle: "Asthma",
      displayTitle: "Asthma",
      href: "/Asthma.html",
      estimatedMinutes: 35,
      patientAge: ["Adult", "Pediatric"],
      setting: ["Emergency department", "Hospital", "Outpatient", "ICU"],
      topics: [
        "asthma",
        "obstructive lung disease",
        "bronchospasm",
        "airway inflammation",
        "airway hyperresponsiveness",
        "peak flow",
        "bronchodilator therapy",
        "inhaled corticosteroids",
        "status asthmaticus",
        "auto-PEEP",
        "dynamic hyperinflation"
      ],
      activityTypes: ["video", "quiz", "hotspot", "sorting", "sequence", "guided-case", "knowledge-check", "flashcards"],
      activities: [
        { id: "diseases_asthma_overview_video", type: "video", title: "Asthma Overview", required: false, estimatedMinutes: 2 },
        { id: "diseases_asthma_precheck", type: "quiz", title: "Asthma Pre-Check", required: true, estimatedMinutes: 3 },
        { id: "diseases_asthma_hotspot", type: "hotspot", title: "Asthma Airway Hotspot", required: true, estimatedMinutes: 5 },
        { id: "diseases_asthma_trigger_sort", type: "sorting", title: "Asthma Trigger Sort", required: true, estimatedMinutes: 5 },
        { id: "diseases_asthma_peak_flow_activity", type: "quiz", title: "Peak Flow Activity", required: true, estimatedMinutes: 4 },
        { id: "diseases_asthma_treatment_sequence", type: "sequence", title: "Treatment Sequence", required: true, estimatedMinutes: 6 },
        { id: "diseases_asthma_guided_case", type: "guided-case", title: "Guided Asthma Case", required: true, estimatedMinutes: 8 },
        { id: "diseases_asthma_knowledge_check", type: "knowledge-check", title: "Asthma Knowledge Check", required: true, estimatedMinutes: 7 },
        { id: "diseases_asthma_flashcards", type: "flashcards", title: "Glossary Flashcard Deck", required: false, estimatedMinutes: 5 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.B.1",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study", "knowledge-check"],
          interactionIds: ["diseases_asthma_guided_case", "diseases_asthma_knowledge_check"],
          estimatedMinutes: 5,
          notes: "Assess dyspnea, cough, wheeze, triggers, and symptom pattern."
        },
        {
          outlineId: "BOK-I.D.3",
          coverageLevel: "assessed",
          evidenceType: ["quiz", "case-study", "knowledge-check"],
          interactionIds: ["diseases_asthma_peak_flow_activity", "diseases_asthma_guided_case", "diseases_asthma_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Peak flow zone interpretation."
        },
        {
          outlineId: "BOK-I.D.21",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "knowledge-check"],
          interactionIds: ["diseases_asthma_knowledge_check"],
          estimatedMinutes: 4,
          notes: "Spirometry/obstructive pattern concept."
        },
        {
          outlineId: "BOK-III.C.2",
          coverageLevel: "applied",
          evidenceType: ["sequence", "case-study", "knowledge-check"],
          interactionIds: ["diseases_asthma_treatment_sequence", "diseases_asthma_guided_case", "diseases_asthma_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Oxygenation support and escalation in acute asthma."
        },
        {
          outlineId: "BOK-III.C.3",
          coverageLevel: "introduced",
          evidenceType: ["instruction", "case-study"],
          interactionIds: ["diseases_asthma_guided_case"],
          estimatedMinutes: 4,
          notes: "Mechanical ventilation considerations in severe obstruction/status asthmaticus."
        },
        {
          outlineId: "BOK-III.D.1",
          coverageLevel: "assessed",
          evidenceType: ["instruction", "sequence", "case-study", "knowledge-check"],
          interactionIds: ["diseases_asthma_treatment_sequence", "diseases_asthma_guided_case", "diseases_asthma_knowledge_check"],
          estimatedMinutes: 10,
          notes: "Bronchodilators and anti-inflammatory aerosolized therapies."
        },
        {
          outlineId: "BOK-III.E.3",
          coverageLevel: "applied",
          evidenceType: ["sequence", "case-study", "knowledge-check"],
          interactionIds: ["diseases_asthma_treatment_sequence", "diseases_asthma_guided_case", "diseases_asthma_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Recommend medication escalation and modification during exacerbation."
        },
        {
          outlineId: "BOK-III.F.3",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "board-prep"],
          interactionIds: ["diseases_asthma_knowledge_check"],
          estimatedMinutes: 4,
          notes: "Application of asthma management guideline concepts."
        }
      ],
      mappingStatus: "first-pass"
    },

    {
      courseId: "respiratory-diseases",
      courseTitle: "PulmoCore Respiratory Diseases",
      moduleId: "acute-hypoxemic-respiratory-failure",
      moduleTitle: "Acute Hypoxemic Respiratory Failure",
      lessonId: "ards",
      lessonTitle: "Acute Respiratory Distress Syndrome",
      displayTitle: "ARDS",
      href: "/ARDS.html",
      estimatedMinutes: 40,
      patientAge: ["Adult"],
      setting: ["ICU", "Emergency department", "Hospital"],
      topics: [
        "ARDS",
        "acute respiratory distress syndrome",
        "acute hypoxemic respiratory failure",
        "noncardiogenic pulmonary edema",
        "P/F ratio",
        "shunt physiology",
        "low compliance",
        "lung-protective ventilation",
        "PEEP",
        "prone positioning",
        "plateau pressure",
        "predicted body weight",
        "ventilator-induced lung injury",
        "ECMO"
      ],
      activityTypes: ["video", "quiz", "hotspot", "sorting", "sequence", "guided-case", "knowledge-check", "flashcards"],
      activities: [
        { id: "ards_overview_video", type: "video", title: "2-Minute ARDS Overview", required: false, estimatedMinutes: 2 },
        { id: "ards_precheck", type: "quiz", title: "Quick Pre-Check", required: true, estimatedMinutes: 3 },
        { id: "ards_hotspot_graphic", type: "hotspot", title: "ARDS Hotspot Graphic", required: true, estimatedMinutes: 5 },
        { id: "ards_etiology_sort", type: "sorting", title: "ARDS Etiology Sorting", required: true, estimatedMinutes: 5 },
        { id: "ards_pf_ratio_activity", type: "quiz", title: "P/F Ratio Activity", required: true, estimatedMinutes: 4 },
        { id: "ards_escalation_sequence", type: "sequence", title: "ARDS Escalation Sequence", required: true, estimatedMinutes: 6 },
        { id: "ards_guided_case", type: "guided-case", title: "Guided ARDS Case", required: true, estimatedMinutes: 10 },
        { id: "ards_knowledge_check", type: "knowledge-check", title: "ARDS Knowledge Check", required: true, estimatedMinutes: 8 },
        { id: "ards_glossary_deck", type: "flashcards", title: "Glossary Flashcard Mastery Deck", required: false, estimatedMinutes: 6 }
      ],
      nbrcAlignment: [
        {
          outlineId: "BOK-I.A.2",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study", "knowledge-check"],
          interactionIds: ["ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 5,
          notes: "Review ABG and oxygenation data."
        },
        {
          outlineId: "BOK-I.A.4",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study"],
          interactionIds: ["ards_guided_case"],
          estimatedMinutes: 4,
          notes: "Review imaging with bilateral opacities and rule-out context."
        },
        {
          outlineId: "BOK-I.D.7",
          coverageLevel: "assessed",
          evidenceType: ["calculation", "case-study", "knowledge-check"],
          interactionIds: ["ards_pf_ratio_activity", "ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 10,
          notes: "Calculate and interpret P/F ratio for ARDS severity."
        },
        {
          outlineId: "BOK-I.D.9",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "case-study"],
          interactionIds: ["ards_hotspot_graphic", "ards_guided_case"],
          estimatedMinutes: 4,
          notes: "Evaluate low compliance in ARDS."
        },
        {
          outlineId: "BOK-I.D.10",
          coverageLevel: "reinforced",
          evidenceType: ["instruction", "case-study", "knowledge-check"],
          interactionIds: ["ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 4,
          notes: "Monitor plateau pressure and pressure injury risk."
        },
        {
          outlineId: "BOK-III.C.3",
          coverageLevel: "assessed",
          evidenceType: ["instruction", "sequence", "case-study", "knowledge-check"],
          interactionIds: ["ards_escalation_sequence", "ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 12,
          notes: "Initiate, maintain, and titrate mechanical ventilation concepts in ARDS."
        },
        {
          outlineId: "BOK-III.C.6",
          coverageLevel: "applied",
          evidenceType: ["instruction", "case-study"],
          interactionIds: ["ards_guided_case"],
          estimatedMinutes: 5,
          notes: "Recruitment, PEEP, and proning concepts for severe hypoxemia."
        },
        {
          outlineId: "BOK-III.E.2",
          coverageLevel: "assessed",
          evidenceType: ["sequence", "case-study", "knowledge-check"],
          interactionIds: ["ards_escalation_sequence", "ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 8,
          notes: "Recommend escalation for refractory hypoxemia and unsafe pressures."
        },
        {
          outlineId: "BOK-III.F.3",
          coverageLevel: "assessed",
          evidenceType: ["instruction", "case-study", "knowledge-check", "board-prep"],
          interactionIds: ["ards_guided_case", "ards_knowledge_check"],
          estimatedMinutes: 7,
          notes: "Apply ARDS guideline concepts: low VT, PEEP, plateau pressure, and proning."
        }
      ],
      mappingStatus: "first-pass"
    }
  ];

  function getAllLessons() {
    return REGISTRY.slice();
  }

  function findLessonById(lessonId) {
    return REGISTRY.find(lesson => lesson.lessonId === lessonId) || null;
  }

  function getLessonsByCourse(courseId) {
    return REGISTRY.filter(lesson => lesson.courseId === courseId);
  }

  function getLessonsByOutlineId(outlineId) {
    return REGISTRY.filter(lesson =>
      Array.isArray(lesson.nbrcAlignment) &&
      lesson.nbrcAlignment.some(entry => entry.outlineId === outlineId)
    );
  }

  function getAlignmentRows() {
    return REGISTRY.flatMap(lesson =>
      (lesson.nbrcAlignment || []).map(entry => ({
        ...entry,
        courseId: lesson.courseId,
        courseTitle: lesson.courseTitle,
        moduleId: lesson.moduleId,
        moduleTitle: lesson.moduleTitle,
        lessonId: lesson.lessonId,
        lessonTitle: lesson.lessonTitle,
        displayTitle: lesson.displayTitle,
        href: lesson.href,
        lessonEstimatedMinutes: lesson.estimatedMinutes,
        patientAge: lesson.patientAge || [],
        setting: lesson.setting || [],
        topics: lesson.topics || [],
        activityTypes: lesson.activityTypes || [],
        mappingStatus: lesson.mappingStatus || "unknown"
      }))
    );
  }

  function getRegistryStats() {
    const outlineIds = new Set();
    const assessedIds = new Set();
    const courseIds = new Set();
    const activityTypes = new Set();

    let activityCount = 0;
    let estimatedMinutes = 0;

    REGISTRY.forEach(lesson => {
      courseIds.add(lesson.courseId);
      estimatedMinutes += lesson.estimatedMinutes || 0;

      (lesson.activities || []).forEach(activity => {
        activityCount += 1;
        if (activity.type) activityTypes.add(activity.type);
      });

      (lesson.nbrcAlignment || []).forEach(entry => {
        outlineIds.add(entry.outlineId);

        if (
          entry.coverageLevel === "assessed" ||
          (Array.isArray(entry.evidenceType) && (
            entry.evidenceType.includes("knowledge-check") ||
            entry.evidenceType.includes("case-study") ||
            entry.evidenceType.includes("guided-case") ||
            entry.evidenceType.includes("calculation")
          ))
        ) {
          assessedIds.add(entry.outlineId);
        }
      });
    });

    return {
      lessonCount: REGISTRY.length,
      courseCount: courseIds.size,
      outlineItemsCovered: outlineIds.size,
      outlineItemsAssessed: assessedIds.size,
      activityCount,
      activityTypes: Array.from(activityTypes).sort(),
      estimatedMinutes,
      estimatedHours: Math.round((estimatedMinutes / 60) * 10) / 10
    };
  }

  function searchLessons(query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return getAllLessons();

    return REGISTRY.filter(lesson => {
      const searchable = [
        lesson.courseId,
        lesson.courseTitle,
        lesson.moduleTitle,
        lesson.lessonId,
        lesson.lessonTitle,
        lesson.displayTitle,
        ...(lesson.topics || []),
        ...(lesson.setting || []),
        ...(lesson.patientAge || []),
        ...(lesson.activityTypes || []),
        ...(lesson.nbrcAlignment || []).map(entry => entry.outlineId)
      ].join(" ").toLowerCase();

      return searchable.includes(q);
    });
  }

  function getCoverageByOutlineId(outlineId) {
    const lessons = getLessonsByOutlineId(outlineId);

    const entries = lessons.flatMap(lesson =>
      (lesson.nbrcAlignment || [])
        .filter(entry => entry.outlineId === outlineId)
        .map(entry => ({
          lessonId: lesson.lessonId,
          lessonTitle: lesson.lessonTitle,
          courseId: lesson.courseId,
          courseTitle: lesson.courseTitle,
          href: lesson.href,
          coverageLevel: entry.coverageLevel,
          evidenceType: entry.evidenceType || [],
          interactionIds: entry.interactionIds || [],
          estimatedMinutes: entry.estimatedMinutes || 0,
          notes: entry.notes || ""
        }))
    );

    const assessed = entries.some(entry =>
      entry.coverageLevel === "assessed" ||
      entry.evidenceType.includes("knowledge-check") ||
      entry.evidenceType.includes("case-study") ||
      entry.evidenceType.includes("guided-case") ||
      entry.evidenceType.includes("calculation")
    );

    return {
      outlineId,
      lessonCount: lessons.length,
      assessed,
      estimatedMinutes: entries.reduce((sum, entry) => sum + (entry.estimatedMinutes || 0), 0),
      entries
    };
  }

  global.PULMO_LESSON_REGISTRY = REGISTRY;

  global.PULMO_LESSON_REGISTRY_HELPERS = {
    getAllLessons,
    findLessonById,
    getLessonsByCourse,
    getLessonsByOutlineId,
    getAlignmentRows,
    getRegistryStats,
    searchLessons,
    getCoverageByOutlineId
  };
})(typeof window !== "undefined" ? window : globalThis);
