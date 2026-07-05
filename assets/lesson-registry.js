/*
  PulmoLearn / PulmoCore Lesson Registry
  Expanded registry for NBRC 2027 dashboard alignment.

  Requires:
  /assets/nbrc-outline-2027.js

  Purpose:
  - Central data source for NBRC 2027 alignment dashboards.
  - Maps each lesson to canonical NBRC outline IDs from nbrc-outline-2027.js.
  - Supports program director reporting, gap analysis, and student review filtering.

  mappingStatus: "first-pass" means usable for dashboard testing but should be reviewed before final accreditation reporting.
*/

(function (global) {
  "use strict";

  const REGISTRY = [
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Foundations of Respiratory Patient Assessment",
    "lessonId": "pa-1-1",
    "lessonTitle": "Introduction to Respiratory Patient Assessment & Interviewing",
    "displayTitle": "Introduction to Respiratory Patient Assessment & Interviewing",
    "href": "/PA_1_1_Introduction_to_Respiratory_Patient_Assessment_&_Interviewing.html",
    "estimatedMinutes": 40,
    "patientAge": [
      "adult",
      "geriatric",
      "foundational concepts applicable across age groups"
    ],
    "setting": [
      "acute care",
      "clinic",
      "emergency department",
      "long-term care",
      "rapid response",
      "student laboratory"
    ],
    "topics": [
      "respiratory patient assessment",
      "patient interviewing",
      "first impression assessment",
      "work of breathing",
      "vital signs",
      "oxygenation",
      "pulse oximetry",
      "nasal cannula",
      "subjective data",
      "objective data",
      "chart review",
      "respiratory history",
      "clinical communication",
      "chief complaint",
      "medication administration record"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "matching",
      "quiz",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "pa_1_1_overview_video",
        "type": "video",
        "title": "2-Minute Lesson Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_1_1_assessment_mindset_check",
        "type": "quiz",
        "title": "Assessment Mindset Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_1_first_look_sort",
        "type": "sorting",
        "title": "First Look Assessment",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_1_vital_signs_priority",
        "type": "quiz",
        "title": "Vital Signs Priority",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_1_interview_question_practice",
        "type": "quiz",
        "title": "Interview Question Practice",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_1_subjective_objective_sort",
        "type": "sorting",
        "title": "Subjective Objective Sorting",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_1_chart_review_matching",
        "type": "matching",
        "title": "Chart Review Matching",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_1_guided_case",
        "type": "guided-case",
        "title": "Guided Beginner Assessment Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_1_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Lesson 1.1 Knowledge Check",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_1_glossary_deck",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "matching",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_1_chart_review_matching",
          "pa_1_1_guided_case",
          "pa_1_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Chart review, H&P, MAR, orders, allergies, history, and baseline status."
      },
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "pa_1_1_vital_signs_priority",
          "pa_1_1_guided_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Basic vital signs, oxygen device status, and pulse oximetry trends."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_1_first_look_sort",
          "pa_1_1_interview_question_practice",
          "pa_1_1_subjective_objective_sort",
          "pa_1_1_guided_case",
          "pa_1_1_knowledge_check"
        ],
        "estimatedMinutes": 14,
        "notes": "Observation and interview: appearance, work of breathing, speech, mental status, subjective/objective data."
      },
      {
        "outlineId": "BOK-I.C.2",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction",
          "quiz"
        ],
        "interactionIds": [
          "pa_1_1_vital_signs_priority"
        ],
        "estimatedMinutes": 3,
        "notes": "Introduces pulse oximetry as a bedside noninvasive monitoring data point."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_1_vital_signs_priority",
          "pa_1_1_guided_case",
          "pa_1_1_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recognizes low SpO2 and increased respiratory rate as findings requiring reassessment or escalation."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "pa_1_1_interview_question_practice",
          "pa_1_1_guided_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Patient-centered and team-oriented communication during assessment."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Foundations of Respiratory Patient Assessment",
    "lessonId": "pa-1-2-physical-assessment-disease-differentiation",
    "lessonTitle": "Physical Assessment & Disease Differentiation",
    "displayTitle": "PA 1.2: Physical Assessment & Disease Differentiation",
    "href": "/PA_1_2_Physical_Assessment_&_Disease_Differentiation.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Pediatric"
    ],
    "setting": [
      "Critical care",
      "Diagnostic assessment",
      "Emergency",
      "In hospital",
      "Outpatient",
      "Pediatric care"
    ],
    "topics": [
      "inspection",
      "palpation",
      "percussion",
      "auscultation",
      "tactile fremitus",
      "tracheal deviation",
      "breath sounds",
      "voice transmission",
      "wheezes",
      "crackles",
      "rhonchi",
      "stridor",
      "disease differentiation",
      "pneumothorax",
      "pleural effusion",
      "consolidation",
      "atelectasis",
      "pulmonary edema",
      "respiratory assessment"
    ],
    "activityTypes": [
      "case-study",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sequence-sort",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_1_2_overview_video",
        "type": "video",
        "title": "Physical Assessment Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_1_2_initial_pattern_precheck",
        "type": "quiz",
        "title": "Initial Pattern Pre-Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_2_assessment_sequence_sort",
        "type": "sequence-sort",
        "title": "Assessment Sequence Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_2_inspection_distress_activity",
        "type": "quiz",
        "title": "Inspection Distress Activity",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_2_percussion_meaning_match",
        "type": "sort",
        "title": "Percussion Meaning Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_2_breath_sound_meaning",
        "type": "quiz",
        "title": "Breath Sound Meaning",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_2_assignment_practice",
        "type": "sort",
        "title": "Assignment 1.2 Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_1_2_guided_case",
        "type": "case-study",
        "title": "Guided Physical Assessment Case",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_2_knowledge_check",
        "type": "knowledge-check",
        "title": "Physical Assessment Knowledge Check",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_2_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "quiz",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_2_initial_pattern_precheck",
          "pa_1_2_inspection_distress_activity",
          "pa_1_2_guided_case",
          "pa_1_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Inspection of distress, posture, pattern, color, chest movement, and work of breathing."
      },
      {
        "outlineId": "BOK-I.B.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sequence",
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_2_assessment_sequence_sort",
          "pa_1_2_percussion_meaning_match",
          "pa_1_2_guided_case",
          "pa_1_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Palpation-related assessment such as tracheal position, expansion, and tactile fremitus patterns."
      },
      {
        "outlineId": "BOK-I.B.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "quiz",
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_2_breath_sound_meaning",
          "pa_1_2_assignment_practice",
          "pa_1_2_guided_case",
          "pa_1_2_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Auscultation and breath sound pattern recognition."
      },
      {
        "outlineId": "BOK-I.D.8",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "pa_1_2_guided_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Introduces assessment clustering with perfusion/clinical status, but not detailed invasive hemodynamics."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_2_guided_case",
          "pa_1_2_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Escalation for acute unilateral breath sound loss, tracheal deviation, distress, or suspected pneumothorax."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Assessment Foundations",
    "lessonId": "pa_1_3_soap_notes_clinical_documentation",
    "lessonTitle": "SOAP Notes & Clinical Documentation",
    "displayTitle": "SOAP Notes & Clinical Documentation",
    "href": "/PA_1_3_SOAP_Notes_&_Clinical_Documentation.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "adult",
      "pediatric",
      "neonatal when applicable to charting context"
    ],
    "setting": [
      "acute care",
      "emergency department",
      "inpatient",
      "outpatient",
      "simulation",
      "skills lab"
    ],
    "topics": [
      "SOAP notes",
      "clinical documentation",
      "respiratory therapy documentation",
      "subjective data",
      "objective data",
      "assessment statement",
      "plan of care",
      "chart review",
      "response to therapy",
      "reassessment",
      "patient education"
    ],
    "activityTypes": [
      "constructed-response",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "pa_1_3_overview_video",
        "type": "video",
        "title": "2-Minute SOAP Notes Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_1_3_documentation_precheck",
        "type": "quiz",
        "title": "Documentation Precheck",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_3_subjective_objective_sort",
        "type": "sorting",
        "title": "Subjective Objective Sorting",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_3_chart_review_soap_sort",
        "type": "sorting",
        "title": "Chart Review Data Sorting",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_1_3_assessment_plan_activity",
        "type": "quiz",
        "title": "Assessment Plan Activity",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_3_quality_sort",
        "type": "sorting",
        "title": "Documentation Quality Sorting",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_3_soap_note_builder",
        "type": "constructed-response",
        "title": "SOAP Note Builder",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_1_3_guided_case",
        "type": "guided-case",
        "title": "Guided SOAP Case",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "pa_1_3_knowledge_check",
        "type": "knowledge-check",
        "title": "Documentation Knowledge Check",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_3_glossary_deck",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "constructed-response",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_3_chart_review_soap_sort",
          "pa_1_3_soap_note_builder",
          "pa_1_3_guided_case",
          "pa_1_3_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Uses chart review, respiratory orders, allergies, vital signs, oxygen device, blood gas data, imaging, and prior RT notes."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "constructed-response",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_3_subjective_objective_sort",
          "pa_1_3_soap_note_builder",
          "pa_1_3_guided_case",
          "pa_1_3_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Organizes dyspnea, WOB, RR, SpO2, breath sounds, and response to therapy into SOAP categories."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_3_assessment_plan_activity",
          "pa_1_3_guided_case",
          "pa_1_3_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Documents and interprets basic oxygenation response and need for reassessment."
      },
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting",
          "constructed-response"
        ],
        "interactionIds": [
          "pa_1_3_chart_review_soap_sort",
          "pa_1_3_soap_note_builder"
        ],
        "estimatedMinutes": 4,
        "notes": "Uses trends in vitals, SpO2, therapy response, and prior notes in documentation."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "constructed-response",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_3_soap_note_builder",
          "pa_1_3_guided_case",
          "pa_1_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Clinical documentation as team communication and continuity of care."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Foundations of Respiratory Patient Assessment",
    "lessonId": "pa-1-4-pulmonary-function-testing-basics",
    "lessonTitle": "Pulmonary Function Testing Basics",
    "displayTitle": "PA 1.4: Pulmonary Function Testing Basics",
    "href": "/PA_1_4_Pulmonary_Function_Testing_Basics.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Pediatric"
    ],
    "setting": [
      "Clinic",
      "Diagnostic testing",
      "In hospital",
      "Outpatient",
      "Pulmonary function laboratory"
    ],
    "topics": [
      "pulmonary function testing",
      "spirometry",
      "forced vital capacity",
      "FVC",
      "lung volumes",
      "tidal volume",
      "inspiratory reserve volume",
      "expiratory reserve volume",
      "residual volume",
      "patient coaching",
      "spirometry setup",
      "acceptable maneuver",
      "early termination",
      "hesitation",
      "mouthpiece seal",
      "quality control",
      "predicted values",
      "PFT basics"
    ],
    "activityTypes": [
      "case-study",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sequence-sort",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_1_4_overview_video",
        "type": "video",
        "title": "Pulmonary Function Testing Basics Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_1_4_fvc_precheck",
        "type": "quiz",
        "title": "FVC Pre-Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_4_volume_check",
        "type": "quiz",
        "title": "FVC Volume Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_1_4_setup_sort",
        "type": "sort",
        "title": "Spirometry Setup Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_4_fvc_sequence",
        "type": "sequence-sort",
        "title": "FVC Coaching Sequence",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_1_4_quality_sort",
        "type": "sort",
        "title": "FVC Quality Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_1_4_guided_case",
        "type": "case-study",
        "title": "Guided FVC Coaching Case",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_4_knowledge_check",
        "type": "knowledge-check",
        "title": "FVC Knowledge Check",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_1_4_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.3",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction"
        ],
        "interactionIds": [
          "pa_1_4_overview_video"
        ],
        "estimatedMinutes": 4,
        "notes": "Introduces pulmonary function testing results and predicted values."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "pa_1_4_guided_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Assess whether the patient can safely perform spirometry."
      },
      {
        "outlineId": "BOK-I.C.20",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_4_setup_sort",
          "pa_1_4_fvc_sequence",
          "pa_1_4_guided_case",
          "pa_1_4_knowledge_check"
        ],
        "estimatedMinutes": 16,
        "notes": "Perform spirometry setup and coach an FVC maneuver."
      },
      {
        "outlineId": "BOK-I.D.21",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_1_4_quality_sort",
          "pa_1_4_guided_case",
          "pa_1_4_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Evaluate spirometry quality problems and basic FVC interpretation."
      },
      {
        "outlineId": "BOK-I.D.23",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction",
          "quiz"
        ],
        "interactionIds": [
          "pa_1_4_volume_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Introduces lung volumes and residual volume concepts."
      },
      {
        "outlineId": "BOK-II.B.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_1_4_setup_sort",
          "pa_1_4_quality_sort"
        ],
        "estimatedMinutes": 5,
        "notes": "Spirometry quality control and patient safety checks."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "advanced-blood-gas-assessment",
    "moduleTitle": "Advanced Blood Gas Assessment and Monitoring Technology",
    "lessonId": "pa-2-1-advanced-blood-gas-mixed-disorders-monitoring-technology",
    "lessonTitle": "Advanced Blood Gas: Mixed Disorders, Monitoring Technology & Clinical Integration",
    "displayTitle": "PA 2.1: Advanced Blood Gas: Mixed Disorders, Monitoring Technology & Clinical Integration",
    "href": "/PA_2_1_Advanced_Blood_Gas.html",
    "estimatedMinutes": 55,
    "patientAge": [
      "Adult",
      "Geriatric",
      "Pregnancy / maternal",
      "Adolescent"
    ],
    "setting": [
      "Acute care",
      "Burn or smoke inhalation care",
      "Emergency department",
      "ICU",
      "Outpatient diagnostics",
      "Procedural sedation",
      "Transport"
    ],
    "topics": [
      "advanced blood gas interpretation",
      "mixed acid-base disorders",
      "expected compensation",
      "Winter formula",
      "analytical error",
      "Henderson-Hasselbalch consistency",
      "serial ABG trending",
      "point-of-care blood gas analyzer",
      "iStat",
      "ABL90 FLEX",
      "GEM Premier",
      "co-oximetry",
      "pulse oximetry limitations",
      "carbon monoxide poisoning",
      "methemoglobinemia",
      "capnography",
      "end-tidal CO2",
      "ETCO2",
      "special populations",
      "pregnancy ABG",
      "COPD baseline ABG",
      "age-adjusted PaO2",
      "electrolyte shifts",
      "hyperkalemia",
      "ionized calcium"
    ],
    "activityTypes": [
      "case-study",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_2_1_overview_video",
        "type": "video",
        "title": "Advanced Blood Gas Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_2_1_mixed_disorder_identification",
        "type": "sort",
        "title": "Mixed Disorder Identification",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_1_analytical_error_detection",
        "type": "sort",
        "title": "Analytical Error Detection",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_1_decision_tree_application",
        "type": "quiz",
        "title": "Decision Tree Application",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_serial_trend_interpretation",
        "type": "sort",
        "title": "Serial Trend Interpretation",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_1_electrolyte_shift_match",
        "type": "sort",
        "title": "Electrolyte Shift Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_poc_technology_match",
        "type": "sort",
        "title": "POC Technology Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_oximetry_limitation_check",
        "type": "quiz",
        "title": "Oximetry Limitation Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_capnography_reading",
        "type": "sort",
        "title": "Capnography Reading",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_special_population_interpretation",
        "type": "sort",
        "title": "Special Population Interpretation",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_1_unfolding_case",
        "type": "case-study",
        "title": "Complex Integration Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_1_assignment_practice",
        "type": "sort",
        "title": "Assignment Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Advanced Blood Gas Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_1_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_1_unfolding_case",
          "pa_2_1_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Blood gas, co-oximetry, electrolytes, lactate, and related lab review."
      },
      {
        "outlineId": "BOK-I.C.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_2_1_analytical_error_detection"
        ],
        "estimatedMinutes": 4,
        "notes": "Blood gas sample handling and recollection logic."
      },
      {
        "outlineId": "BOK-I.C.5",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_1_poc_technology_match",
          "pa_2_1_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "Blood gas analysis and hemoximetry technology."
      },
      {
        "outlineId": "BOK-I.C.7",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "calculation",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_1_mixed_disorder_identification",
          "pa_2_1_unfolding_case"
        ],
        "estimatedMinutes": 7,
        "notes": "Expected compensation and ABG-related calculations."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_1_mixed_disorder_identification",
          "pa_2_1_serial_trend_interpretation",
          "pa_2_1_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Evaluate ABG and co-oximetry results including mixed disorders and trends."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_1_mixed_disorder_identification",
          "pa_2_1_unfolding_case",
          "pa_2_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Evaluate cardiopulmonary calculation patterns and compensation logic."
      },
      {
        "outlineId": "BOK-II.A.13",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_2_1_poc_technology_match"
        ],
        "estimatedMinutes": 4,
        "notes": "Point-of-care blood gas analyzer and hemoximetry device handling."
      },
      {
        "outlineId": "BOK-II.B.4",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_2_1_analytical_error_detection",
          "pa_2_1_poc_technology_match"
        ],
        "estimatedMinutes": 5,
        "notes": "QC, analyzer flags, clots, bubbles, delayed analysis, and analytical error rejection."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_1_oximetry_limitation_check",
          "pa_2_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Use ABG, SpO2, co-oximetry, and ETCO2 to support oxygenation decisions."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_1_unfolding_case",
          "pa_2_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Recommend repeat sampling, oxygen/ventilation modification, co-oximetry, or escalation."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "oxygen-assessment-and-blood-gas-integration",
    "moduleTitle": "Assessment of Oxygen and Clinical Oxygen Delivery",
    "lessonId": "pa-2-2-assessment-of-oxygen-hypoxemia-vs-hypoxia",
    "lessonTitle": "Assessment of Oxygen — Hypoxemia vs. Hypoxia",
    "displayTitle": "PA 2.2: Assessment of Oxygen — Hypoxemia vs. Hypoxia",
    "href": "/PA_2_2_Assessment_of_Oxygen.html",
    "estimatedMinutes": 55,
    "patientAge": [
      "Adult",
      "Geriatric",
      "Adolescent",
      "Pregnancy / maternal"
    ],
    "setting": [
      "Acute care",
      "Emergency department",
      "ICU",
      "Transport"
    ],
    "topics": [
      "oxygen cascade",
      "hypoxemia",
      "hypoxia",
      "PaO2",
      "SpO2",
      "SaO2",
      "A-a gradient",
      "alveolar gas equation",
      "hypoxemic hypoxia",
      "ischemic hypoxia",
      "anemic hypoxia",
      "histotoxic hypoxia",
      "RAT signs",
      "BED-C signs",
      "CaO2 calculation",
      "oxygen content",
      "DO2 oxygen delivery",
      "cardiac output",
      "hemoglobin",
      "oxyhemoglobin dissociation curve",
      "right shift",
      "left shift",
      "oxygen therapy decisions",
      "COPD oxygen target",
      "carbon monoxide",
      "cyanide",
      "hydroxocobalamin",
      "lactate",
      "tissue hypoxia"
    ],
    "activityTypes": [
      "calculation",
      "case-study",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_2_2_overview_video",
        "type": "video",
        "title": "Hypoxemia vs. Hypoxia Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_2_2_oxygen_cascade_values",
        "type": "sort",
        "title": "Oxygen Cascade PO2 Values",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_2_hypoxemia_severity_sort",
        "type": "sort",
        "title": "Hypoxemia Severity Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_2_aa_gradient_interpretation",
        "type": "sort",
        "title": "A-a Gradient Interpretation",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_2_hypoxia_type_classification",
        "type": "sort",
        "title": "Hypoxia Type Classification",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_2_rat_bedc_sort",
        "type": "sort",
        "title": "RAT vs BED-C Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_2_cao2_calculation_practice",
        "type": "calculation",
        "title": "CaO2 Calculation Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_2_do2_scenario_match",
        "type": "sort",
        "title": "DO2 Scenario Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_2_dissociation_curve_check",
        "type": "quiz",
        "title": "Dissociation Curve Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_2_o2_therapy_decision",
        "type": "sort",
        "title": "Oxygen Therapy Decision",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_2_unfolding_cases",
        "type": "case-study",
        "title": "Four Patients Oxygen Assessment Cases",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_2_assignment_practice",
        "type": "sort",
        "title": "Assignment Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_2_knowledge_check",
        "type": "knowledge-check",
        "title": "Oxygen Assessment Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_2_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "calculation",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_2_cao2_calculation_practice",
          "pa_2_2_unfolding_cases"
        ],
        "estimatedMinutes": 6,
        "notes": "ABG values, PaO2, SaO2, hemoglobin, lactate, and oxygenation labs."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_hypoxia_type_classification",
          "pa_2_2_rat_bedc_sort",
          "pa_2_2_unfolding_cases",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Differentiates hypoxemia from tissue hypoxia using clinical signs and patient appearance."
      },
      {
        "outlineId": "BOK-I.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_2_unfolding_cases"
        ],
        "estimatedMinutes": 4,
        "notes": "Pulse oximetry and clinical oxygen monitoring."
      },
      {
        "outlineId": "BOK-I.C.5",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_2_unfolding_cases"
        ],
        "estimatedMinutes": 4,
        "notes": "ABG/co-oximetry data in oxygen assessment."
      },
      {
        "outlineId": "BOK-I.C.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_aa_gradient_interpretation",
          "pa_2_2_cao2_calculation_practice",
          "pa_2_2_do2_scenario_match",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 16,
        "notes": "A-a gradient, CaO2, and DO2 calculation/interpreting practice."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_hypoxemia_severity_sort",
          "pa_2_2_o2_therapy_decision",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Evaluates SpO2/oxygenation monitoring results with clinical context."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_2_hypoxemia_severity_sort",
          "pa_2_2_unfolding_cases"
        ],
        "estimatedMinutes": 5,
        "notes": "Classifies PaO2, saturation, and oxygenation failure patterns."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_cao2_calculation_practice",
          "pa_2_2_do2_scenario_match",
          "pa_2_2_unfolding_cases",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Evaluates oxygen content and delivery calculations."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_2_o2_therapy_decision",
          "pa_2_2_unfolding_cases"
        ],
        "estimatedMinutes": 5,
        "notes": "Minimizing hypoxemia and recognizing when oxygen alone will not correct hypoxia."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_o2_therapy_decision",
          "pa_2_2_unfolding_cases",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Oxygen support decisions including COPD targets, CO exposure, and tissue hypoxia scenarios."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_2_unfolding_cases",
          "pa_2_2_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Recommends escalation, co-oximetry, transfusion/provider notification, perfusion support, or antidote therapy based on hypoxia type."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "cardiopulmonary-assessment-and-monitoring",
    "moduleTitle": "Cardiopulmonary Assessment and Monitoring",
    "lessonId": "pa-2-3-ecg-assessment-equipment-interpretation-chest-pain-artifact",
    "lessonTitle": "ECG Assessment — Equipment, Interpretation, Chest Pain & Artifact",
    "displayTitle": "PA 2.3: ECG Assessment — Equipment, Interpretation, Chest Pain & Artifact",
    "href": "/PA_2_3_ECG_Assessment.html",
    "estimatedMinutes": 55,
    "patientAge": [
      "Adult",
      "Geriatric",
      "Adolescent"
    ],
    "setting": [
      "Acute care",
      "Emergency department",
      "ICU",
      "Outpatient testing",
      "Procedure suite",
      "Transport"
    ],
    "topics": [
      "ECG assessment",
      "cardiac monitoring",
      "12-lead ECG",
      "cardiac telemetry",
      "lead placement",
      "limb leads",
      "precordial leads",
      "ECG grid",
      "P wave",
      "QRS complex",
      "T wave",
      "ST segment",
      "PR interval",
      "normal sinus rhythm",
      "atrial fibrillation",
      "atrial flutter",
      "supraventricular tachycardia",
      "ventricular tachycardia",
      "ventricular fibrillation",
      "asystole",
      "STEMI",
      "NSTEMI",
      "ischemia",
      "injury",
      "infarction",
      "artifact",
      "AC interference",
      "wandering baseline",
      "muscle tremor artifact",
      "reversed leads",
      "bronchoscopy monitoring",
      "procedural sedation monitoring"
    ],
    "activityTypes": [
      "case-study",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sequence",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_2_3_overview_video",
        "type": "video",
        "title": "ECG Assessment Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_2_3_ecg_indication_sort",
        "type": "sort",
        "title": "ECG Indication Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_3_equipment_match",
        "type": "sort",
        "title": "Equipment Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_3_lead_placement_match",
        "type": "sort",
        "title": "Lead Placement Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_3_wave_component_match",
        "type": "sort",
        "title": "Wave Component Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_3_five_step_order",
        "type": "sequence",
        "title": "5-Step Order",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_3_nsr_identification",
        "type": "quiz",
        "title": "NSR Identification",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_3_rhythm_recognition_sort",
        "type": "sort",
        "title": "Rhythm Recognition Sort",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_3_chest_pain_ecg_findings",
        "type": "sort",
        "title": "Chest Pain ECG Findings",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_3_artifact_identification",
        "type": "sort",
        "title": "Artifact Identification",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_3_unfolding_case",
        "type": "case-study",
        "title": "A Morning on the Cardiac Floor",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_3_assignment_practice",
        "type": "sort",
        "title": "Assignment Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_3_knowledge_check",
        "type": "knowledge-check",
        "title": "ECG Assessment Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_2_3_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_2_3_ecg_indication_sort",
          "pa_2_3_chest_pain_ecg_findings"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews ECG data, rhythm strips, and 12-lead reports as cardiopulmonary data."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_2_3_ecg_indication_sort",
          "pa_2_3_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Assesses symptoms and clinical context before ECG monitoring or escalation."
      },
      {
        "outlineId": "BOK-I.C.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_3_lead_placement_match",
          "pa_2_3_five_step_order",
          "pa_2_3_unfolding_case",
          "pa_2_3_knowledge_check"
        ],
        "estimatedMinutes": 13,
        "notes": "ECG acquisition, lead placement, and systematic rhythm assessment."
      },
      {
        "outlineId": "BOK-I.D.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "quiz",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_3_wave_component_match",
          "pa_2_3_nsr_identification",
          "pa_2_3_rhythm_recognition_sort",
          "pa_2_3_chest_pain_ecg_findings",
          "pa_2_3_knowledge_check"
        ],
        "estimatedMinutes": 18,
        "notes": "Evaluates ECG rate, rhythm, intervals, ischemic changes, arrhythmias, and artifact."
      },
      {
        "outlineId": "BOK-II.A.21",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_2_3_equipment_match",
          "pa_2_3_artifact_identification"
        ],
        "estimatedMinutes": 4,
        "notes": "Troubleshooting bedside monitoring/telemetry artifact as noninvasive monitoring."
      },
      {
        "outlineId": "BOK-II.A.23",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_2_3_equipment_match"
        ],
        "estimatedMinutes": 3,
        "notes": "Introduces hemodynamic/cardiac monitoring equipment selection."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_3_unfolding_case",
          "pa_2_3_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recommends escalation for ACS, arrhythmias, procedure rhythm changes, or artifact correction."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_3_chest_pain_ecg_findings",
          "pa_2_3_unfolding_case",
          "pa_2_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Emergency response to chest pain, ST elevation, VF/VT alarms, SVT, and hemodynamic compromise."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "diagnostic-assessment-and-monitoring",
    "moduleTitle": "Diagnostic Assessment and Monitoring",
    "lessonId": "pa_2_4_radiologic_examination",
    "lessonTitle": "Radiologic Examination — Imaging Modalities, CXR Interpretation & Radiation Safety",
    "displayTitle": "Radiologic Examination",
    "href": "/PA_2_4_Radiologic_Examination.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "adult",
      "older adult",
      "pediatric concepts where applicable",
      "pregnancy considerations"
    ],
    "setting": [
      "ICU",
      "acute care",
      "bronchoscopy suite",
      "emergency department",
      "imaging department",
      "nuclear medicine",
      "procedural suite",
      "radiology",
      "transport"
    ],
    "topics": [
      "radiologic examination",
      "chest x-ray interpretation",
      "CXR",
      "portable chest x-ray",
      "CT scan",
      "CT pulmonary angiography",
      "MRI safety",
      "echocardiogram",
      "transesophageal echocardiogram",
      "TEE monitoring",
      "PET scan",
      "V/Q scan",
      "ventilation perfusion mismatch",
      "pulmonary embolism imaging",
      "pneumothorax",
      "pleural effusion",
      "consolidation",
      "air bronchograms",
      "pulmonary edema",
      "Kerley B lines",
      "cardiothoracic ratio",
      "ET tube position",
      "radiation safety",
      "lead apron",
      "thyroid shield"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "pa_2_4_overview_video",
        "type": "video",
        "title": "Radiologic Assessment Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_2_4_modality_match",
        "type": "sorting",
        "title": "Modality Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_4_ct_mri_sort",
        "type": "sorting",
        "title": "CT vs MRI Sort",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_4_tee_role_sort",
        "type": "sorting",
        "title": "TEE RT Role Sort",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_4_pet_scan_check",
        "type": "quiz",
        "title": "PET Scan Check",
        "required": true,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_2_4_vq_interpretation_sort",
        "type": "sorting",
        "title": "V/Q Interpretation Sort",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_4_cxr_finding_sort",
        "type": "sorting",
        "title": "CXR Finding Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_2_4_radiation_safety_sort",
        "type": "sorting",
        "title": "Radiation Safety Sort",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_4_indications_sort",
        "type": "sorting",
        "title": "Indications Sort",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_2_4_unfolding_case",
        "type": "guided-case",
        "title": "PA 2.4 Unfolding Case",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_2_4_assignment_practice",
        "type": "sorting",
        "title": "PA 2.4 Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_4_knowledge_check",
        "type": "knowledge-check",
        "title": "PA 2.4 Knowledge Check",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_2_4_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 4
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.4",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_4_modality_match",
          "pa_2_4_ct_mri_sort",
          "pa_2_4_vq_interpretation_sort",
          "pa_2_4_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Reviews CXR, CT, V/Q, PET, MRI, and echo/TEE findings relevant to respiratory care."
      },
      {
        "outlineId": "BOK-I.B.4",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_4_cxr_finding_sort",
          "pa_2_4_unfolding_case",
          "pa_2_4_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Evaluates chest radiograph findings including pneumothorax, effusion, edema, consolidation, and ET tube position."
      },
      {
        "outlineId": "BOK-I.E.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_2_4_modality_match",
          "pa_2_4_indications_sort",
          "pa_2_4_unfolding_case"
        ],
        "estimatedMinutes": 8,
        "notes": "Recommends or differentiates imaging modalities and alternatives based on indication/contraindication."
      },
      {
        "outlineId": "BOK-II.A.11",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_2_4_cxr_finding_sort",
          "pa_2_4_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Uses imaging to evaluate artificial airway position."
      },
      {
        "outlineId": "BOK-III.G.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "pa_2_4_unfolding_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Transport and monitoring considerations for CT/MRI/diagnostic imaging."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_2_4_unfolding_case",
          "pa_2_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Recommends tube repositioning, support escalation, imaging follow-up, or alternate imaging."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "guided-case"
        ],
        "interactionIds": [
          "pa_2_4_unfolding_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Communicates imaging findings, procedural precautions, and RT monitoring needs."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "diagnostics-infections-protocols",
    "moduleTitle": "Diagnostic Testing, Respiratory Infections, and Clinical Protocols",
    "lessonId": "pa_3_1_diagnostic_tests_respiratory_infections_nosocomial_prevention",
    "lessonTitle": "Diagnostic Tests, Respiratory Infections & Nosocomial Prevention",
    "displayTitle": "Diagnostic Tests, Respiratory Infections & Nosocomial Prevention",
    "href": "/PA_3_1_Diagnostic_Tests_Respiratory_Infections_&_Nosocomial_Prevention.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Older adult",
      "Pediatric when respiratory infection classification applies"
    ],
    "setting": [
      "Emergency department",
      "ICU",
      "acute care",
      "general medicine",
      "long-term care",
      "postoperative care",
      "procedural suite"
    ],
    "topics": [
      "diagnostic testing",
      "sputum collection",
      "sputum gram stain",
      "culture and sensitivity",
      "thoracentesis",
      "pleurodesis",
      "tuberculin skin test",
      "bronchoscopy",
      "CBC",
      "electrolytes",
      "blood chemistry",
      "infection recognition",
      "atypical infection presentation",
      "elderly confusion",
      "gram positive",
      "gram negative",
      "broad spectrum antibiotics",
      "narrow spectrum antibiotics",
      "selective toxicity",
      "respiratory infections",
      "community acquired pneumonia",
      "hospital acquired pneumonia",
      "ventilator associated pneumonia",
      "VAP prevention",
      "nosocomial pneumonia",
      "hand hygiene",
      "ventilator circuit management",
      "oral care",
      "CHG",
      "PPE",
      "nebulizer infection prevention"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "sequence",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_3_1_overview_video",
        "type": "video",
        "title": "Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_3_1_diagnostic_test_indication_match",
        "type": "sort",
        "title": "Diagnostic Test Indication Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_1_sputum_steps_sequencing",
        "type": "sequence",
        "title": "Sputum Steps Sequencing",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_thoracentesis_safety_check",
        "type": "quiz",
        "title": "Thoracentesis Safety Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_3_1_lab_test_classification",
        "type": "sort",
        "title": "Lab Test Classification",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_infection_sign_recognition",
        "type": "sort",
        "title": "Infection Sign Recognition",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_antibiotic_selection_sort",
        "type": "sort",
        "title": "Antibiotic Selection Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_infection_classification_sort",
        "type": "sort",
        "title": "Infection Classification Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_pneumonia_classification_sort",
        "type": "sort",
        "title": "Pneumonia Classification Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_vap_prevention_sort",
        "type": "sort",
        "title": "VAP Prevention Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_1_unfolding_case",
        "type": "guided-case",
        "title": "The ICU Night Shift Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_3_1_assignment_practice",
        "type": "sort",
        "title": "Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Knowledge Check",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_3_1_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_lab_test_classification",
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "CBC, chemistry, electrolytes, microbiology, gram stain, culture, and sensitivity review."
      },
      {
        "outlineId": "BOK-I.A.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_1_unfolding_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Imaging reports in pneumonia, effusion, and infection workups."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_infection_sign_recognition",
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Assesses fever, cough, sputum, WBC, mental status, WOB, and respiratory infection patterns."
      },
      {
        "outlineId": "BOK-I.C.17",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sequence",
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_1_sputum_steps_sequencing",
          "pa_3_1_diagnostic_test_indication_match",
          "pa_3_1_unfolding_case"
        ],
        "estimatedMinutes": 7,
        "notes": "Sputum specimen collection, quality, and characteristics."
      },
      {
        "outlineId": "BOK-I.D.18",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_sputum_steps_sequencing",
          "pa_3_1_pneumonia_classification_sort",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Evaluates sputum adequacy, organism clues, culture/sensitivity implications, and pneumonia classification."
      },
      {
        "outlineId": "BOK-I.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_diagnostic_test_indication_match",
          "pa_3_1_lab_test_classification",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Recommends/uses laboratory tests and microbiology for infection evaluation."
      },
      {
        "outlineId": "BOK-I.E.4",
        "coverageLevel": "introduced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_3_1_diagnostic_test_indication_match"
        ],
        "estimatedMinutes": 3,
        "notes": "Introduces bronchoscopy as diagnostic/therapeutic procedure."
      },
      {
        "outlineId": "BOK-I.E.13",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_1_thoracentesis_safety_check",
          "pa_3_1_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Thoracentesis indication and safety monitoring."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_vap_prevention_sort",
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Hand hygiene, PPE, isolation, and infection-prevention procedures."
      },
      {
        "outlineId": "BOK-II.B.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_1_unfolding_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Specimen handling and biohazard transport."
      },
      {
        "outlineId": "BOK-II.B.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_vap_prevention_sort",
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "VAE/VAP prevention and nosocomial pneumonia prevention."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recommends specimen recollection, treatment escalation/de-escalation, or VAP prevention changes."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_1_unfolding_case",
          "pa_3_1_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Recognizes sepsis risk, post-thoracentesis pneumothorax, VAP, and infection-control breaches."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "clinical-decision-making-and-protocols",
    "moduleTitle": "Clinical Decision-Making, Protocols, and Respiratory Care Planning",
    "lessonId": "pa_3_2_therapist_driven_protocols_soapier_severity_based_decision_making",
    "lessonTitle": "Therapist-Driven Protocols, SOAPIER Documentation & Severity-Based Clinical Decision-Making",
    "displayTitle": ": Therapist-Driven Protocols, SOAPIER Documentation & Severity-Based Clinical Decision-Making",
    "href": "/PA_3_2_Therapist-Driven_Protocols.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Older adult"
    ],
    "setting": [
      "In hospital",
      "Outside hospital"
    ],
    "topics": [
      "therapist-driven protocols",
      "respiratory care protocols",
      "SOAPIER documentation",
      "respiratory severity scoring",
      "oxygen therapy titration",
      "FiO2 device selection",
      "airway clearance therapy",
      "lung expansion therapy",
      "aerosol medication protocols",
      "Albuterol therapy",
      "IPV",
      "Flutter valve",
      "vibratory PEP",
      "high-flow nasal cannula",
      "physician communication",
      "therapy escalation",
      "therapy de-escalation",
      "patient reassessment"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "pa_3_2_overview_video",
        "type": "video",
        "title": "TDP and Severity-Based Care Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_3_2_tdp_check",
        "type": "quiz",
        "title": "TDP Concept Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_3_2_report_components",
        "type": "sorting",
        "title": "Report Component Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_soapier_classification",
        "type": "sorting",
        "title": "SOAPIER Classification Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_2_physician_communication",
        "type": "quiz",
        "title": "Physician Communication Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_3_2_score_interpretation",
        "type": "sorting",
        "title": "Score Interpretation Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_fio2_device_selection",
        "type": "sorting",
        "title": "FiO2 Device Selection",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_airway_clearance_selection",
        "type": "sorting",
        "title": "Airway Clearance Modality Selection",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_lung_expansion_indications",
        "type": "sorting",
        "title": "Lung Expansion vs Airway Clearance Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_aerosol_medication_order",
        "type": "sorting",
        "title": "Aerosol Medication Order Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_case_study_scoring",
        "type": "sorting",
        "title": "Case Study Scoring",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_2_treatment_modification",
        "type": "sorting",
        "title": "Treatment Modification Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_2_unfolding_case",
        "type": "guided-case",
        "title": "Protocol Application Unfolding Case",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "pa_3_2_assignment_practice",
        "type": "sorting",
        "title": "TDP, SOAPIER, and Protocol Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_2_knowledge_check",
        "type": "knowledge-check",
        "title": "TDP, SOAPIER & Severity Scoring Mastery",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_3_2_glossary_deck",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_2_report_components",
          "pa_3_2_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews orders, history, therapy response, oxygen requirement, and home respiratory therapy data."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_score_interpretation",
          "pa_3_2_case_study_scoring",
          "pa_3_2_unfolding_case",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Assesses WOB, RR, HR, SpO2, breath sounds, cough, sputum, and response to therapy."
      },
      {
        "outlineId": "BOK-I.C.19",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_2_fio2_device_selection",
          "pa_3_2_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Oxygen titration/device selection within protocol logic."
      },
      {
        "outlineId": "BOK-I.D.20",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_fio2_device_selection",
          "pa_3_2_treatment_modification",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Evaluates oxygen therapy response and FiO2/device escalation."
      },
      {
        "outlineId": "BOK-II.A.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_2_fio2_device_selection"
        ],
        "estimatedMinutes": 3,
        "notes": "Medical gas delivery interfaces and device selection."
      },
      {
        "outlineId": "BOK-II.A.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_2_fio2_device_selection"
        ],
        "estimatedMinutes": 3,
        "notes": "High-flow oxygen device selection."
      },
      {
        "outlineId": "BOK-II.A.6",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_2_aerosol_medication_order"
        ],
        "estimatedMinutes": 3,
        "notes": "Nebulized aerosol therapy equipment in protocol care."
      },
      {
        "outlineId": "BOK-II.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_2_aerosol_medication_order"
        ],
        "estimatedMinutes": 3,
        "notes": "Inhaler/accessory therapy concepts."
      },
      {
        "outlineId": "BOK-II.A.16",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_2_airway_clearance_selection",
          "pa_3_2_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Secretion clearance device selection."
      },
      {
        "outlineId": "BOK-III.B.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_2_airway_clearance_selection",
          "pa_3_2_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Mechanical airway clearance modalities such as IPV and vibratory PEP."
      },
      {
        "outlineId": "BOK-III.B.5",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_2_lung_expansion_indications"
        ],
        "estimatedMinutes": 3,
        "notes": "Lung expansion/hyperinflation therapy indication concepts."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_fio2_device_selection",
          "pa_3_2_unfolding_case",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Oxygen therapy titration and escalation within protocol limits."
      },
      {
        "outlineId": "BOK-III.D.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_aerosol_medication_order",
          "pa_3_2_unfolding_case",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Aerosol medication protocol selection and bronchodilator therapy."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_treatment_modification",
          "pa_3_2_unfolding_case",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Escalates, de-escalates, or discontinues therapy based on severity score and response."
      },
      {
        "outlineId": "BOK-III.F.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "quiz",
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_2_tdp_check",
          "pa_3_2_case_study_scoring",
          "pa_3_2_assignment_practice",
          "pa_3_2_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Respiratory-driven protocol application."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_2_report_components",
          "pa_3_2_physician_communication",
          "pa_3_2_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "Communicates RT recommendations and protocol rationale to physicians/team."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-integration-and-clinical-decision-making",
    "moduleTitle": "Assessment Integration and Clinical Decision-Making",
    "lessonId": "pa_3_3_respiratory_failure",
    "lessonTitle": "Respiratory Failure — Types, Causes, ABG Interpretation & Intervention Hierarchy",
    "displayTitle": ": Respiratory Failure — Types, Causes, ABG Interpretation & Intervention Hierarchy",
    "href": "/PA_3_3_Respiratory_Failure.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "In hospital"
    ],
    "topics": [
      "respiratory failure",
      "hypoxemic respiratory failure",
      "hypercapnic respiratory failure",
      "mixed respiratory failure",
      "ABG interpretation",
      "V/Q mismatch",
      "shunt",
      "dead space",
      "hypoventilation",
      "airway obstruction",
      "capnography",
      "ETCO2",
      "BiPAP",
      "CPAP",
      "mechanical ventilation",
      "ventilator hazards",
      "oxygen delivery"
    ],
    "activityTypes": [
      "assignment-practice",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_3_3_overview_video",
        "type": "video",
        "title": "Respiratory Failure Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_3_3_rf_type_classification",
        "type": "sort",
        "title": "RF Type Classification",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_cause_mechanism_classification",
        "type": "sort",
        "title": "Cause Mechanism Classification",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_vq_shunt_dead_space",
        "type": "quiz",
        "title": "V/Q Shunt vs Dead Space",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_3_mip_interpretation",
        "type": "quiz",
        "title": "MIP Interpretation Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_3_abg_intervention_match",
        "type": "sort",
        "title": "ABG Intervention Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_capnography_waveform_sort",
        "type": "sort",
        "title": "Capnography Waveform Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_bipap_cpap_sort",
        "type": "sort",
        "title": "BiPAP vs CPAP Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_3_vent_basics_sort",
        "type": "sort",
        "title": "Mechanical Ventilation Basics Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_ventilator_hazard_sort",
        "type": "sort",
        "title": "Ventilator Hazard Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "pa_3_3_do2_concept_check",
        "type": "quiz",
        "title": "DO2 Concept Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_3_unfolding_case",
        "type": "guided-case",
        "title": "Escalating Respiratory Failure Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_3_3_assignment_practice",
        "type": "assignment-practice",
        "title": "Respiratory Failure Comprehensive Matching",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_3_3_knowledge_check",
        "type": "knowledge-check",
        "title": "Respiratory Failure Mastery",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "pa_3_3_glossary_deck",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_rf_type_classification",
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Reviews ABG values and acid-base markers for respiratory failure."
      },
      {
        "outlineId": "BOK-I.C.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "sorting"
        ],
        "interactionIds": [
          "pa_3_3_capnography_waveform_sort"
        ],
        "estimatedMinutes": 4,
        "notes": "Noninvasive monitoring with SpO2 and capnography."
      },
      {
        "outlineId": "BOK-I.C.5",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_3_rf_type_classification",
          "pa_3_3_abg_intervention_match",
          "pa_3_3_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "ABG analysis for hypoxemic, hypercapnic, and mixed respiratory failure."
      },
      {
        "outlineId": "BOK-I.C.7",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_3_vq_shunt_dead_space",
          "pa_3_3_do2_concept_check",
          "pa_3_3_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Cardiopulmonary calculations/concepts including V/Q, shunt/dead space, and DO2."
      },
      {
        "outlineId": "BOK-I.C.23",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz"
        ],
        "interactionIds": [
          "pa_3_3_mip_interpretation"
        ],
        "estimatedMinutes": 3,
        "notes": "MIP as a respiratory muscle strength procedure."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_capnography_waveform_sort",
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Evaluates noninvasive monitoring trends including capnography."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_rf_type_classification",
          "pa_3_3_abg_intervention_match",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Interprets ABG patterns in respiratory failure."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_vq_shunt_dead_space",
          "pa_3_3_do2_concept_check",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Interprets V/Q, oxygen delivery, and respiratory failure mechanism concepts."
      },
      {
        "outlineId": "BOK-I.D.24",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz"
        ],
        "interactionIds": [
          "pa_3_3_mip_interpretation"
        ],
        "estimatedMinutes": 3,
        "notes": "Interprets respiratory muscle strength test results."
      },
      {
        "outlineId": "BOK-II.A.4",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_3_bipap_cpap_sort",
          "pa_3_3_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "CPAP/NPPV selection and support."
      },
      {
        "outlineId": "BOK-II.A.9",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "guided-case"
        ],
        "interactionIds": [
          "pa_3_3_vent_basics_sort",
          "pa_3_3_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "Basic ventilator support concepts and mechanical ventilation escalation."
      },
      {
        "outlineId": "BOK-II.B.5",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting"
        ],
        "interactionIds": [
          "pa_3_3_ventilator_hazard_sort"
        ],
        "estimatedMinutes": 4,
        "notes": "VAE/VAP prevention and ventilator hazard recognition."
      },
      {
        "outlineId": "BOK-III.A.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Escalation to invasive airway management when airway protection or ventilation fails."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_abg_intervention_match",
          "pa_3_3_bipap_cpap_sort",
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Oxygenation support selection for respiratory failure."
      },
      {
        "outlineId": "BOK-III.C.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_vent_basics_sort",
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Invasive and noninvasive ventilatory support decisions."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_abg_intervention_match",
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Escalates or de-escalates support based on ABG, work of breathing, mental status, and response."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_3_unfolding_case",
          "pa_3_3_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Recognizes impending ventilatory failure/arrest and need for urgent escalation."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "advanced-assessment-clinical-practice",
    "moduleTitle": "Advanced Assessment, Clinical Decision-Making, and Professional Practice",
    "lessonId": "pa-3-4-clinical-documentation-hipaa",
    "lessonTitle": "Clinical Documentation & HIPAA",
    "displayTitle": "PA 3.4: Clinical Documentation & HIPAA",
    "href": "/PA_3_4_Clinical_Documentation_HIPAA.html",
    "estimatedMinutes": 40,
    "patientAge": [
      "Adult",
      "Geriatric",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "All respiratory care settings",
      "Emergency",
      "In hospital",
      "Long-term care",
      "Outpatient respiratory care",
      "Pediatric",
      "neonatal care"
    ],
    "topics": [
      "clinical documentation",
      "respiratory care assessment form",
      "respiratory care treatment form",
      "SOAPIER documentation",
      "HIPAA",
      "protected health information",
      "PHI",
      "privacy rule",
      "security rule",
      "electronic code set standards",
      "administrative safeguards",
      "physical safeguards",
      "technical safeguards",
      "HIPAA violations",
      "mandatory disclosure",
      "adverse reaction documentation",
      "respiratory therapy legal documentation",
      "social media compliance"
    ],
    "activityTypes": [
      "case-study",
      "flashcard-deck",
      "knowledge-check",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "pa_3_4_overview_video",
        "type": "video",
        "title": "Documentation and HIPAA Overview Video",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_3_4_form_selection_check",
        "type": "quiz",
        "title": "Form Selection Check",
        "required": true,
        "estimatedMinutes": 2
      },
      {
        "id": "pa_3_4_assessment_component_match",
        "type": "sort",
        "title": "Assessment Form Component Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_hr_threshold_calculation",
        "type": "sort",
        "title": "HR Threshold Calculation",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_phi_classification",
        "type": "sort",
        "title": "PHI Classification Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_hipaa_rule_classification",
        "type": "sort",
        "title": "HIPAA Rule Classification",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_safeguard_type_sort",
        "type": "sort",
        "title": "Safeguard Type Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_violation_recognition",
        "type": "sort",
        "title": "Violation Recognition Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_mandatory_exception_sort",
        "type": "sort",
        "title": "Mandatory Exception Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "pa_3_4_social_media_check",
        "type": "quiz",
        "title": "Social Media Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "pa_3_4_unfolding_case",
        "type": "case-study",
        "title": "Documentation and Compliance Decisions Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "pa_3_4_assignment_practice",
        "type": "sort",
        "title": "PA 3.4 Assignment Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_3_4_knowledge_check",
        "type": "knowledge-check",
        "title": "Documentation & HIPAA Mastery",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "pa_3_4_flashcards",
        "type": "flashcard-deck",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 8
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_4_assessment_component_match",
          "pa_3_4_unfolding_case",
          "pa_3_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Documents patient history, treatment forms, orders, and respiratory care records."
      },
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_4_unfolding_case",
          "pa_3_4_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Uses pre/post treatment data and trends to document response or adverse reaction."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_3_4_assessment_component_match",
          "pa_3_4_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Clinical assessment components and relevant patient documentation."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sorting",
          "case-study"
        ],
        "interactionIds": [
          "pa_3_4_hr_threshold_calculation",
          "pa_3_4_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Evaluates treatment response/adverse reaction using vital signs and monitoring data."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_4_unfolding_case",
          "pa_3_4_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Modifies or reports respiratory care interventions based on documented patient response."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "pa_3_4_phi_classification",
          "pa_3_4_violation_recognition",
          "pa_3_4_unfolding_case",
          "pa_3_4_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Documentation, privacy, and compliance as professional team communication and patient-centered practice."
      },
      {
        "outlineId": "BOK-III.I.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "case-study"
        ],
        "interactionIds": [
          "pa_3_4_social_media_check",
          "pa_3_4_unfolding_case"
        ],
        "estimatedMinutes": 3,
        "notes": "Patient/family communication and privacy considerations in education/communication contexts."
      }
    ],
    "mappingStatus": "first-pass"
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-core-skills",
    "moduleTitle": "Core Foundations and Clinical Readiness",
    "lessonId": "foundations-1-3-oxygenation-gas-exchange-calculations",
    "lessonTitle": "Oxygenation & Gas Exchange Calculations",
    "displayTitle": "Foundations 1.3: Oxygenation & Gas Exchange Calculations",
    "href": "/Foundations_1_3_Oxygenation_Gas_Exchange_Calculations.html",
    "estimatedMinutes": 70,
    "patientAge": [
      "Adult",
      "Older adult",
      "Pediatric principles where applicable"
    ],
    "setting": [
      "Classroom",
      "Lab",
      "Emergency department",
      "ICU",
      "Acute care"
    ],
    "topics": [
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
    "searchTags": [
      "foundations",
      "medical math",
      "oxygenation",
      "gas exchange",
      "calculations",
      "respiratory care math",
      "board prep",
      "NBRC"
    ],
    "activityTypes": [
      "calculation",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_1_3_overview_video",
        "type": "video",
        "title": "Lesson Overview Video: Where Is the Oxygen?",
        "required": false,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_3_oxygen_journey_sort",
        "type": "sorting",
        "title": "Oxygen Journey Sort",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_3_pio2_practice",
        "type": "calculation",
        "title": "PiO2 Practice",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_3_pao2_practice",
        "type": "calculation",
        "title": "PAO2 Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_3_aa_gradient_check",
        "type": "knowledge-check",
        "title": "A-a Gradient Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_3_pf_ratio_practice",
        "type": "calculation",
        "title": "P/F Ratio Practice",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_3_cao2_practice",
        "type": "calculation",
        "title": "CaO2 Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_3_do2_practice",
        "type": "calculation",
        "title": "DO2 Practice",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_3_o2er_practice",
        "type": "calculation",
        "title": "O2ER Practice",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_3_guided_oxygenation_scenario",
        "type": "guided-case",
        "title": "Guided Oxygenation Scenario",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_1_3_mixed_oxygenation_practice",
        "type": "calculation",
        "title": "Mixed Oxygenation Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_3_knowledge_check",
        "type": "knowledge-check",
        "title": "Foundations 1.3 Knowledge Check",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_3_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "video"
        ],
        "interactionIds": [
          "foundations_1_3_overview_video"
        ],
        "estimatedMinutes": 4,
        "notes": "Review ABG, oxygenation, hemoglobin, and related lab data."
      },
      {
        "outlineId": "BOK-I.C.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_3_pao2_practice",
          "foundations_1_3_pf_ratio_practice",
          "foundations_1_3_cao2_practice",
          "foundations_1_3_do2_practice",
          "foundations_1_3_knowledge_check"
        ],
        "estimatedMinutes": 22,
        "notes": "Perform cardiopulmonary calculations including PAO2, A-a gradient, P/F, CaO2, DO2, VO2, and O2ER."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_3_guided_oxygenation_scenario",
          "foundations_1_3_mixed_oxygenation_practice",
          "foundations_1_3_knowledge_check"
        ],
        "estimatedMinutes": 16,
        "notes": "Evaluate calculation results and identify oxygenation/gas exchange impairment."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "calculation"
        ],
        "interactionIds": [
          "foundations_1_3_guided_oxygenation_scenario",
          "foundations_1_3_mixed_oxygenation_practice"
        ],
        "estimatedMinutes": 8,
        "notes": "Use oxygenation data to recognize hypoxemia and impaired oxygen delivery."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_3_guided_oxygenation_scenario",
          "foundations_1_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Apply calculated values to oxygenation support reasoning."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_3_guided_oxygenation_scenario",
          "foundations_1_3_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recognize abnormal patterns that require escalation or reassessment."
      }
    ],
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-core-skills",
    "moduleTitle": "Foundations of Respiratory Care",
    "lessonId": "foundations_1_2",
    "lessonTitle": "Medical Math, Units & Dosage Calculations",
    "displayTitle": "Foundations 1.2: Medical Math, Units & Dosage Calculations",
    "href": "/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html",
    "estimatedMinutes": 60,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal foundational calculations"
    ],
    "setting": [
      "Classroom",
      "Laboratory",
      "Entry-level clinical preparation"
    ],
    "topics": [
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
    "searchTags": [
      "Foundations 1.2",
      "medical math",
      "unit conversions",
      "dosage calculations",
      "ventilator math",
      "IBW tidal volume",
      "safe medication notation"
    ],
    "activityTypes": [
      "calculation",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "reflection",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_1_2_overview_video",
        "type": "video",
        "title": "Lesson Overview Video: RT Math Is Patient Safety",
        "required": false,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_2_math_safety_reflection",
        "type": "reflection",
        "title": "Math Safety Reflection",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_2_metric_conversion_practice",
        "type": "calculation",
        "title": "Metric Conversion Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_1_2_dimensional_analysis_setup",
        "type": "knowledge-check",
        "title": "Dimensional Analysis Setup",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_2_temperature_practice",
        "type": "calculation",
        "title": "Temperature Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_2_dosage_practice",
        "type": "calculation",
        "title": "Dosage Practice",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_1_2_ibw_tidal_volume_practice",
        "type": "calculation",
        "title": "IBW Tidal Volume Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_2_mixed_practice",
        "type": "calculation",
        "title": "Mixed Practice",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_1_2_guided_math_scenario",
        "type": "guided-case",
        "title": "Guided Math Scenario",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_1_2_knowledge_check",
        "type": "knowledge-check",
        "title": "Medical Math Knowledge Check",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_1_2_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "calculation"
        ],
        "interactionIds": [
          "foundations_1_2_metric_conversion_practice",
          "foundations_1_2_temperature_practice"
        ],
        "estimatedMinutes": 6,
        "notes": "Use patient height, weight, temperature, orders, and available concentrations."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "applied",
        "evidenceType": [
          "calculation",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_2_ibw_tidal_volume_practice",
          "foundations_1_2_mixed_practice",
          "foundations_1_2_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "General cardiopulmonary/respiratory math and reasonableness checks."
      },
      {
        "outlineId": "BOK-III.C.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_2_ibw_tidal_volume_practice",
          "foundations_1_2_guided_math_scenario",
          "foundations_1_2_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Use IBW/PBW to calculate lung-protective tidal volume ranges for ventilator setup."
      },
      {
        "outlineId": "BOK-III.D.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "calculation"
        ],
        "interactionIds": [
          "foundations_1_2_dosage_practice"
        ],
        "estimatedMinutes": 6,
        "notes": "Medication dosing calculations for aerosolized therapies."
      },
      {
        "outlineId": "BOK-III.E.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "calculation",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_2_dosage_practice",
          "foundations_1_2_guided_math_scenario",
          "foundations_1_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Identify wrong-unit or unsafe medication calculation patterns before administration."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "introduced",
        "evidenceType": [
          "reflection",
          "instruction"
        ],
        "interactionIds": [
          "foundations_1_2_math_safety_reflection"
        ],
        "estimatedMinutes": 3,
        "notes": "Patient-safety framing for calculation and notation practices."
      }
    ],
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-professional-practice",
    "moduleTitle": "Professional Practice and Communication",
    "lessonId": "foundations_1_1",
    "lessonTitle": "Professional Communication & Conflict Resolution",
    "displayTitle": "Foundations 1.1 · Professional Communication & Conflict Resolution",
    "href": "/Foundations_1_1_Professional_Communication_Conflict_Resolution.html",
    "estimatedMinutes": 45,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal",
      "Not age specific"
    ],
    "setting": [
      "Classroom",
      "Simulation",
      "Clinical team environment"
    ],
    "topics": [
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
    "searchTags": [
      "Foundations 1.1",
      "communication",
      "professionalism",
      "conflict",
      "email",
      "patient communication",
      "teamwork",
      "professional practice"
    ],
    "activityTypes": [
      "assignment-practice",
      "branching-scenario",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "reflection",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_1_1_overview_video",
        "type": "video",
        "title": "Lesson Overview Video: Your Words Are Part of Care",
        "required": false,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_1_provider_qualities",
        "type": "reflection",
        "title": "What Would Make You Feel Safe?",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_1_communication_sort",
        "type": "sorting",
        "title": "Sort the Communication Statements",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_1_email_precheck",
        "type": "knowledge-check",
        "title": "Email Pre-Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_1_conflict_branching",
        "type": "branching-scenario",
        "title": "Work Schedule Conflict",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_1_patient_communication",
        "type": "knowledge-check",
        "title": "Choose the Best Patient-Centered Response",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_1_guided_scenario",
        "type": "guided-case",
        "title": "The Difficult Email That Becomes a Professional Conversation",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_1_1_email_builder",
        "type": "assignment-practice",
        "title": "Guided Email Composer",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_1_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Professional Communication Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_1_glossary_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "reflection",
          "sorting",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_1_provider_qualities",
          "foundations_1_1_patient_communication",
          "foundations_1_1_guided_scenario",
          "foundations_1_1_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Use patient-centered communication to obtain subjective data and support safe assessment."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "branching-scenario",
          "assignment-practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_1_communication_sort",
          "foundations_1_1_conflict_branching",
          "foundations_1_1_email_builder",
          "foundations_1_1_knowledge_check"
        ],
        "estimatedMinutes": 14,
        "notes": "Interdisciplinary communication, handoff tone, escalation wording, and professional interactions."
      },
      {
        "outlineId": "BOK-III.I.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_1_patient_communication",
          "foundations_1_1_guided_scenario"
        ],
        "estimatedMinutes": 7,
        "notes": "Patient and family education language and therapeutic communication."
      },
      {
        "outlineId": "BOK-III.G.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "branching-scenario",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_1_conflict_branching",
          "foundations_1_1_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Closed-loop and professional team communication concepts."
      }
    ],
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk."
  },
  {
    "courseId": "respiratory-diseases",
    "courseTitle": "Respiratory Diseases",
    "moduleId": "obstructive-diseases",
    "moduleTitle": "Obstructive Pulmonary Diseases",
    "lessonId": "diseases_asthma",
    "lessonTitle": "Asthma",
    "displayTitle": "Asthma",
    "href": "/Asthma.html",
    "estimatedMinutes": 35,
    "patientAge": [
      "Adult",
      "Pediatric"
    ],
    "setting": [
      "Emergency department",
      "Acute care",
      "Outpatient",
      "ICU for severe/status asthmaticus"
    ],
    "topics": [
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
    "searchTags": [],
    "activityTypes": [
      "case-study",
      "hotspot",
      "knowledge-check",
      "quiz",
      "sequence",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "diseases_asthma_overview_video",
        "type": "video",
        "title": "Asthma Overview Video",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_precheck",
        "type": "quiz",
        "title": "Asthma Quick Pre-Check",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_hotspot",
        "type": "hotspot",
        "title": "Asthma Airway Hotspot Graphic",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_trigger_sort",
        "type": "sorting",
        "title": "Asthma Trigger Sorting",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_peak_flow",
        "type": "quiz",
        "title": "Asthma Peak Flow Activity",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_treatment_sequence",
        "type": "sequence",
        "title": "Asthma Treatment Sequence",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_guided_case",
        "type": "case-study",
        "title": "Guided Asthma Case",
        "required": false,
        "estimatedMinutes": null
      },
      {
        "id": "diseases_asthma_knowledge_check",
        "type": "knowledge-check",
        "title": "Asthma Knowledge Check",
        "required": false,
        "estimatedMinutes": null
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "hotspot",
          "case-study"
        ],
        "interactionIds": [
          "diseases_asthma_hotspot",
          "diseases_asthma_guided_case"
        ],
        "estimatedMinutes": 8,
        "notes": "Assess symptoms, triggers, dyspnea, cough, sputum, exercise tolerance, and work of breathing."
      },
      {
        "outlineId": "BOK-I.D.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "quiz",
          "case-study"
        ],
        "interactionIds": [
          "diseases_asthma_peak_flow",
          "diseases_asthma_guided_case",
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Peak flow interpretation and zone-based severity reasoning."
      },
      {
        "outlineId": "BOK-I.D.21",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "knowledge-check"
        ],
        "interactionIds": [
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Spirometry concept of variable/reversible airflow obstruction."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "diseases_asthma_guided_case",
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Minimize hypoxemia during acute exacerbation."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "diseases_asthma_guided_case",
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Initiate/titrate oxygenation support in exacerbation."
      },
      {
        "outlineId": "BOK-III.C.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "diseases_asthma_guided_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Mechanical ventilation considerations in severe obstruction/status asthmaticus."
      },
      {
        "outlineId": "BOK-III.D.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "diseases_asthma_treatment_sequence",
          "diseases_asthma_guided_case",
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Bronchodilators and anti-inflammatory aerosolized therapies."
      },
      {
        "outlineId": "BOK-III.E.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "diseases_asthma_treatment_sequence",
          "diseases_asthma_guided_case",
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Recommend medication escalation and modification during exacerbation."
      },
      {
        "outlineId": "BOK-III.F.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "board-prep"
        ],
        "interactionIds": [
          "diseases_asthma_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Application of asthma management guideline concepts."
      }
    ],
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk."
  },
  {
    "courseId": "respiratory-diseases",
    "courseTitle": "PulmoCore Respiratory Diseases",
    "moduleId": "acute-hypoxemic-respiratory-failure",
    "moduleTitle": "Acute Hypoxemic Respiratory Failure",
    "lessonId": "ards",
    "lessonTitle": "Acute Respiratory Distress Syndrome",
    "displayTitle": "ARDS",
    "href": "/ARDS.html",
    "estimatedMinutes": 40,
    "patientAge": [
      "Adult"
    ],
    "setting": [
      "ICU",
      "Emergency department",
      "Hospital"
    ],
    "topics": [
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
    "searchTags": [
      "ards",
      "acute respiratory distress syndrome",
      "acute hypoxemic respiratory failure",
      "pf ratio",
      "paO2 fiO2",
      "berlin criteria",
      "noncardiogenic edema",
      "peep",
      "proning",
      "plateau pressure",
      "low compliance",
      "lung protective ventilation"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "hotspot",
      "knowledge-check",
      "quiz",
      "sequence",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "ards_overview_video",
        "type": "video",
        "title": "2-Minute ARDS Overview",
        "required": false,
        "estimatedMinutes": 2
      },
      {
        "id": "ards_precheck",
        "type": "quiz",
        "title": "Quick Pre-Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "ards_hotspot_graphic",
        "type": "hotspot",
        "title": "ARDS Hotspot Graphic",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "ards_etiology_sort",
        "type": "sorting",
        "title": "ARDS Etiology Sorting",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "ards_pf_ratio_activity",
        "type": "quiz",
        "title": "P/F Ratio Activity",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "ards_escalation_sequence",
        "type": "sequence",
        "title": "ARDS Escalation Sequence",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "ards_guided_case",
        "type": "guided-case",
        "title": "Guided ARDS Case",
        "required": true,
        "estimatedMinutes": 10
      },
      {
        "id": "ards_knowledge_check",
        "type": "knowledge-check",
        "title": "ARDS Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "ards_glossary_deck",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Review ABG and oxygenation data."
      },
      {
        "outlineId": "BOK-I.A.4",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "ards_guided_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Review imaging with bilateral opacities and rule-out context."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "ards_pf_ratio_activity",
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Calculate and interpret P/F ratio for ARDS severity."
      },
      {
        "outlineId": "BOK-I.D.9",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "ards_hotspot_graphic",
          "ards_guided_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Evaluate low compliance in ARDS."
      },
      {
        "outlineId": "BOK-I.D.10",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Monitor plateau pressure and pressure injury risk."
      },
      {
        "outlineId": "BOK-III.C.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "ards_escalation_sequence",
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Initiate, maintain, and titrate mechanical ventilation concepts in ARDS."
      },
      {
        "outlineId": "BOK-III.C.6",
        "coverageLevel": "applied",
        "evidenceType": [
          "instruction",
          "case-study"
        ],
        "interactionIds": [
          "ards_guided_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Recruitment/PEEP/proning concepts for severe hypoxemia."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sequence",
          "case-study",
          "knowledge-check"
        ],
        "interactionIds": [
          "ards_escalation_sequence",
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Recommend escalation for refractory hypoxemia and unsafe pressures."
      },
      {
        "outlineId": "BOK-III.F.3",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "case-study",
          "knowledge-check",
          "board-prep"
        ],
        "interactionIds": [
          "ards_guided_case",
          "ards_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Apply ARDS guideline concepts: low VT, PEEP, plateau pressure, proning."
      }
    ],
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk."
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
        ...(lesson.nbrcAlignment || []).map(entry => entry.outlineId),
        ...(lesson.nbrcAlignment || []).map(entry => entry.notes || "")
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
