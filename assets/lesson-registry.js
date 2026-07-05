/*
  PulmoLearn / PulmoCore Lesson Registry
  Expanded registry for NBRC 2027 dashboard alignment.

  Includes:
  - Starter disease/foundations entries
  - Pulmonary Assessment course batch
  - Foundations expansion batch through Foundations 3.4

  Requires:
  /assets/nbrc-outline-2027.js

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
    "href": "/assessment/PA_1_1_Introduction_to_Respiratory_Patient_Assessment_&_Interviewing",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_1_1_Introduction_to_Respiratory_Patient_Assessment_&_Interviewing"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Foundations of Respiratory Patient Assessment",
    "lessonId": "pa-1-2-physical-assessment-disease-differentiation",
    "lessonTitle": "Physical Assessment & Disease Differentiation",
    "displayTitle": "PA 1.2: Physical Assessment & Disease Differentiation",
    "href": "/assessment/PA_1_2_Physical_Assessment_&_Disease_Differentiation",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_1_2_Physical_Assessment_&_Disease_Differentiation"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Assessment Foundations",
    "lessonId": "pa_1_3_soap_notes_clinical_documentation",
    "lessonTitle": "SOAP Notes & Clinical Documentation",
    "displayTitle": "SOAP Notes & Clinical Documentation",
    "href": "/assessment/PA_1_3_SOAP_Notes_&_Clinical_Documentation",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_1_3_SOAP_Notes_&_Clinical_Documentation"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-foundations",
    "moduleTitle": "Foundations of Respiratory Patient Assessment",
    "lessonId": "pa-1-4-pulmonary-function-testing-basics",
    "lessonTitle": "Pulmonary Function Testing Basics",
    "displayTitle": "PA 1.4: Pulmonary Function Testing Basics",
    "href": "/assessment/PA_1_4_Pulmonary_Function_Testing_Basics",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_1_4_Pulmonary_Function_Testing_Basics"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "advanced-blood-gas-assessment",
    "moduleTitle": "Advanced Blood Gas Assessment and Monitoring Technology",
    "lessonId": "pa-2-1-advanced-blood-gas-mixed-disorders-monitoring-technology",
    "lessonTitle": "Advanced Blood Gas: Mixed Disorders, Monitoring Technology & Clinical Integration",
    "displayTitle": "PA 2.1: Advanced Blood Gas: Mixed Disorders, Monitoring Technology & Clinical Integration",
    "href": "/assessment/PA_2_1_Advanced_Blood_Gas",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_2_1_Advanced_Blood_Gas"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "oxygen-assessment-and-blood-gas-integration",
    "moduleTitle": "Assessment of Oxygen and Clinical Oxygen Delivery",
    "lessonId": "pa-2-2-assessment-of-oxygen-hypoxemia-vs-hypoxia",
    "lessonTitle": "Assessment of Oxygen — Hypoxemia vs. Hypoxia",
    "displayTitle": "PA 2.2: Assessment of Oxygen — Hypoxemia vs. Hypoxia",
    "href": "/assessment/PA_2_2_Assessment_of_Oxygen",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_2_2_Assessment_of_Oxygen"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "cardiopulmonary-assessment-and-monitoring",
    "moduleTitle": "Cardiopulmonary Assessment and Monitoring",
    "lessonId": "pa-2-3-ecg-assessment-equipment-interpretation-chest-pain-artifact",
    "lessonTitle": "ECG Assessment — Equipment, Interpretation, Chest Pain & Artifact",
    "displayTitle": "PA 2.3: ECG Assessment — Equipment, Interpretation, Chest Pain & Artifact",
    "href": "/assessment/PA_2_3_ECG_Assessment",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_2_3_ECG_Assessment"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "diagnostic-assessment-and-monitoring",
    "moduleTitle": "Diagnostic Assessment and Monitoring",
    "lessonId": "pa_2_4_radiologic_examination",
    "lessonTitle": "Radiologic Examination — Imaging Modalities, CXR Interpretation & Radiation Safety",
    "displayTitle": "Radiologic Examination",
    "href": "/assessment/PA_2_4_Radiologic_Examination",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_2_4_Radiologic_Examination"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "diagnostics-infections-protocols",
    "moduleTitle": "Diagnostic Testing, Respiratory Infections, and Clinical Protocols",
    "lessonId": "pa_3_1_diagnostic_tests_respiratory_infections_nosocomial_prevention",
    "lessonTitle": "Diagnostic Tests, Respiratory Infections & Nosocomial Prevention",
    "displayTitle": "Diagnostic Tests, Respiratory Infections & Nosocomial Prevention",
    "href": "/assessment/PA_3_1_Diagnostic_Tests_Respiratory_Infections_&_Nosocomial_Prevention",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_3_1_Diagnostic_Tests_Respiratory_Infections_&_Nosocomial_Prevention"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "clinical-decision-making-and-protocols",
    "moduleTitle": "Clinical Decision-Making, Protocols, and Respiratory Care Planning",
    "lessonId": "pa_3_2_therapist_driven_protocols_soapier_severity_based_decision_making",
    "lessonTitle": "Therapist-Driven Protocols, SOAPIER Documentation & Severity-Based Clinical Decision-Making",
    "displayTitle": ": Therapist-Driven Protocols, SOAPIER Documentation & Severity-Based Clinical Decision-Making",
    "href": "/assessment/PA_3_2_Therapist-Driven_Protocols",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_3_2_Therapist-Driven_Protocols"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "assessment-integration-and-clinical-decision-making",
    "moduleTitle": "Assessment Integration and Clinical Decision-Making",
    "lessonId": "pa_3_3_respiratory_failure",
    "lessonTitle": "Respiratory Failure — Types, Causes, ABG Interpretation & Intervention Hierarchy",
    "displayTitle": ": Respiratory Failure — Types, Causes, ABG Interpretation & Intervention Hierarchy",
    "href": "/assessment/PA_3_3_Respiratory_Failure",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_3_3_Respiratory_Failure"
  },
  {
    "courseId": "pulmonary-assessment",
    "courseTitle": "PulmoCore Pulmonary Assessment",
    "moduleId": "advanced-assessment-clinical-practice",
    "moduleTitle": "Advanced Assessment, Clinical Decision-Making, and Professional Practice",
    "lessonId": "pa-3-4-clinical-documentation-hipaa",
    "lessonTitle": "Clinical Documentation & HIPAA",
    "displayTitle": "PA 3.4: Clinical Documentation & HIPAA",
    "href": "/assessment/PA_3_4_Clinical_Documentation_HIPAA",
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
    "mappingStatus": "first-pass",
    "url": "/assessment/PA_3_4_Clinical_Documentation_HIPAA"
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-core-skills",
    "moduleTitle": "Core Foundations and Clinical Readiness",
    "lessonId": "foundations-1-3-oxygenation-gas-exchange-calculations",
    "lessonTitle": "Oxygenation & Gas Exchange Calculations",
    "displayTitle": "Foundations 1.3: Oxygenation & Gas Exchange Calculations",
    "href": "/foundations/Foundations_1_3_Oxygenation_Gas_Exchange_Calculations",
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
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk.",
    "url": "/foundations/Foundations_1_3_Oxygenation_Gas_Exchange_Calculations"
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-core-skills",
    "moduleTitle": "Foundations of Respiratory Care",
    "lessonId": "foundations_1_2",
    "lessonTitle": "Medical Math, Units & Dosage Calculations",
    "displayTitle": "Foundations 1.2: Medical Math, Units & Dosage Calculations",
    "href": "/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations",
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
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk.",
    "url": "/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations"
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-professional-practice",
    "moduleTitle": "Professional Practice and Communication",
    "lessonId": "foundations_1_1",
    "lessonTitle": "Professional Communication & Conflict Resolution",
    "displayTitle": "Foundations 1.1 · Professional Communication & Conflict Resolution",
    "href": "/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution",
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
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk.",
    "url": "/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution"
  },
  {
    "courseId": "respiratory-diseases",
    "courseTitle": "Respiratory Diseases",
    "moduleId": "obstructive-diseases",
    "moduleTitle": "Obstructive Pulmonary Diseases",
    "lessonId": "diseases_asthma",
    "lessonTitle": "Asthma",
    "displayTitle": "Asthma",
    "href": "/Asthma",
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
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk.",
    "url": "/Asthma"
  },
  {
    "courseId": "respiratory-diseases",
    "courseTitle": "PulmoCore Respiratory Diseases",
    "moduleId": "acute-hypoxemic-respiratory-failure",
    "moduleTitle": "Acute Hypoxemic Respiratory Failure",
    "lessonId": "ards",
    "lessonTitle": "Acute Respiratory Distress Syndrome",
    "displayTitle": "ARDS",
    "href": "/ARDS",
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
    "mappingNotes": "First-pass canonical NBRC 2027 line-item mapping. Review before using as final accreditation crosswalk.",
    "url": "/ARDS"
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-orientation-core-skills",
    "moduleTitle": "Foundations, Professional Skills, and Core Calculations",
    "lessonId": "foundations-1-4-pulmonary-function-testing-basics",
    "lessonTitle": "Pulmonary Function Testing Basics",
    "displayTitle": "Foundations 1.4: Pulmonary Function Testing Basics",
    "href": "/foundations/Foundations_1_4_Introduction_to_Pulmonary_Function_Testing",
    "url": "/foundations/Foundations_1_4_Introduction_to_Pulmonary_Function_Testing",
    "estimatedMinutes": 60,
    "patientAge": [
      "Adult",
      "Older adult"
    ],
    "setting": [
      "Outpatient",
      "inpatient",
      "or diagnostic testing",
      "Diagnostic testing or clinical assessment"
    ],
    "topics": [
      "pulmonary function testing",
      "spirometry",
      "FEV1",
      "FVC",
      "FEV1/FVC ratio",
      "flow-volume loops",
      "lung volumes",
      "TLC",
      "RV",
      "DLCO",
      "obstructive pattern",
      "restrictive pattern",
      "mixed pattern",
      "bronchodilator response",
      "test quality",
      "patient effort",
      "PFT interpretation algorithm"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "quiz",
      "selection",
      "sorting",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_1_4_overview_video",
        "type": "video",
        "title": "Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_4_pft_component_matching",
        "type": "sorting",
        "title": "PFT Component Matching",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_4_lung_volume_check",
        "type": "selection",
        "title": "Lung Volume Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_1_4_flow_volume_loop_check",
        "type": "quiz",
        "title": "Flow-Volume Loop Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_1_4_dlco_factor_sorting",
        "type": "sorting",
        "title": "DLCO Factor Sorting",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_4_pft_pattern_practice",
        "type": "selection",
        "title": "PFT Pattern Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_4_guided_pft_scenario",
        "type": "guided-case",
        "title": "Guided PFT Scenario",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_1_4_mixed_pft_practice",
        "type": "selection",
        "title": "Mixed PFT Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_1_4_knowledge_check",
        "type": "knowledge-check",
        "title": "PFT Basics Mastery",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_1_4_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "foundations_1_4_guided_pft_scenario"
        ],
        "estimatedMinutes": 6,
        "notes": "Reviews pulmonary function testing data and diagnostic results."
      },
      {
        "outlineId": "BOK-I.C.20",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "sorting",
          "selection",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_pft_component_matching",
          "foundations_1_4_pft_pattern_practice",
          "foundations_1_4_guided_pft_scenario",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 14,
        "notes": "Spirometry components, test quality, and basic interpretation practice."
      },
      {
        "outlineId": "BOK-I.C.21",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "sorting",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_dlco_factor_sorting",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "DLCO factors and interpretation at a foundational level."
      },
      {
        "outlineId": "BOK-I.C.22",
        "coverageLevel": "assessed",
        "evidenceType": [
          "instruction",
          "selection",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_lung_volume_check",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Lung volume concepts including TLC and RV."
      },
      {
        "outlineId": "BOK-I.D.21",
        "coverageLevel": "assessed",
        "evidenceType": [
          "selection",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_pft_pattern_practice",
          "foundations_1_4_mixed_pft_practice",
          "foundations_1_4_guided_pft_scenario",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Differentiates normal, obstructive, restrictive, and mixed spirometry patterns."
      },
      {
        "outlineId": "BOK-I.D.22",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sorting",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_dlco_factor_sorting",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Connects DLCO patterns to clinical interpretation."
      },
      {
        "outlineId": "BOK-I.D.23",
        "coverageLevel": "assessed",
        "evidenceType": [
          "selection",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_lung_volume_check",
          "foundations_1_4_guided_pft_scenario",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Uses lung volume patterns to distinguish restrictive and mixed physiology."
      },
      {
        "outlineId": "BOK-I.E.6",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "foundations_1_4_guided_pft_scenario"
        ],
        "estimatedMinutes": 4,
        "notes": "Recognizes when pulmonary function testing supports further evaluation."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_1_4_guided_pft_scenario",
          "foundations_1_4_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Uses PFT findings with symptoms and test quality to support care decisions."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Obstructive, restrictive, or mixed ventilatory pattern",
        "conditionTags": [
          "spirometry",
          "PFT interpretation",
          "flow-volume loop",
          "DLCO"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Outpatient, inpatient, or diagnostic testing"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Dyspnea with abnormal pulmonary function data",
        "conditionTags": [
          "FEV1/FVC",
          "TLC",
          "DLCO",
          "bronchodilator response"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Diagnostic testing or clinical assessment"
      }
    ],
    "sourceFile": "Foundations_1_4_Introduction_to_Pulmonary_Function_Testing.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "monitoring-and-bedside-assessment",
    "moduleTitle": "Monitoring and Bedside Assessment",
    "lessonId": "foundations-2-1-oximetry-capnography",
    "lessonTitle": "Oximetry & Capnography",
    "displayTitle": "Foundations 2.1: Oximetry & Capnography",
    "href": "/foundations/Foundations_2_1_Oximetry_Capnography",
    "url": "/foundations/Foundations_2_1_Oximetry_Capnography",
    "estimatedMinutes": 60,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "Inpatient",
      "emergency",
      "outpatient",
      "and sleep screening settings",
      "Emergency department",
      "ICU",
      "procedural sedation",
      "and resuscitation settings",
      "Emergency and acute care settings"
    ],
    "topics": [
      "pulse oximetry",
      "SpO2 monitoring",
      "oxygen saturation",
      "co-oximetry",
      "carboxyhemoglobin",
      "carbon monoxide poisoning",
      "capnography",
      "ETCO2",
      "capnogram waveform",
      "colorimetric CO2 detector",
      "airway placement confirmation",
      "CPR quality",
      "ROSC",
      "rebreathing",
      "airway obstruction waveform",
      "monitor troubleshooting"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "practice",
      "quiz",
      "select-all",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "found_2_1_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_1_monitoring_match",
        "type": "sort",
        "title": "Monitoring Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_2_1_pulse_ox_check",
        "type": "quiz",
        "title": "Pulse Ox Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_1_spo2_troubleshooting",
        "type": "select-all",
        "title": "Pulse Ox Troubleshooting",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_1_overnight_oximetry_check",
        "type": "quiz",
        "title": "Overnight Oximetry Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_1_co_oximetry_check",
        "type": "quiz",
        "title": "Co-Oximetry Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_1_etco2_trend_sorting",
        "type": "sort",
        "title": "ETCO2 Trend Sorting",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_1_waveform_match",
        "type": "sort",
        "title": "Waveform Pattern Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_1_cpr_capnography_check",
        "type": "quiz",
        "title": "CPR Capnography Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_1_guided_monitoring_scenario",
        "type": "guided-case",
        "title": "Guided Monitoring Scenario",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "found_2_1_monitoring_assignment_practice",
        "type": "practice",
        "title": "Monitoring Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Oximetry & Capnography Mastery",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "found_2_1_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_1_guided_monitoring_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews bedside monitoring data in clinical context."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "select-all",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_1_pulse_ox_check",
          "found_2_1_spo2_troubleshooting",
          "found_2_1_guided_monitoring_scenario"
        ],
        "estimatedMinutes": 8,
        "notes": "Compares monitor values with patient appearance, pulse, perfusion, and oxygen delivery."
      },
      {
        "outlineId": "BOK-I.C.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_monitoring_match",
          "found_2_1_pulse_ox_check",
          "found_2_1_guided_monitoring_scenario",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Pulse oximetry and capnography data gathering and troubleshooting."
      },
      {
        "outlineId": "BOK-I.C.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_co_oximetry_check",
          "found_2_1_guided_monitoring_scenario",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Co-oximetry and dyshemoglobin recognition including CO poisoning."
      },
      {
        "outlineId": "BOK-I.C.14",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz"
        ],
        "interactionIds": [
          "found_2_1_overnight_oximetry_check"
        ],
        "estimatedMinutes": 3,
        "notes": "Introduces overnight oximetry as a monitoring procedure."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_etco2_trend_sorting",
          "found_2_1_waveform_match",
          "found_2_1_cpr_capnography_check",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Interprets SpO2 trends, ETCO2 trends, and capnogram waveform patterns."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_co_oximetry_check",
          "found_2_1_guided_monitoring_scenario",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Interprets co-oximetry results and limitations of standard pulse oximetry."
      },
      {
        "outlineId": "BOK-I.D.15",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz"
        ],
        "interactionIds": [
          "found_2_1_overnight_oximetry_check"
        ],
        "estimatedMinutes": 3,
        "notes": "Interprets basic overnight oximetry concepts."
      },
      {
        "outlineId": "BOK-II.A.21",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_1_monitoring_match",
          "found_2_1_guided_monitoring_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Uses noninvasive monitoring devices and recognizes troubleshooting needs."
      },
      {
        "outlineId": "BOK-II.B.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "select-all",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_1_spo2_troubleshooting",
          "found_2_1_guided_monitoring_scenario"
        ],
        "estimatedMinutes": 4,
        "notes": "Applies patient-first troubleshooting and quality checks when data appear inconsistent."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_co_oximetry_check",
          "found_2_1_guided_monitoring_scenario",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Supports oxygenation decisions when SpO2 or co-oximetry suggests risk."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_1_guided_monitoring_scenario",
          "found_2_1_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Uses monitoring data to guide oxygen therapy escalation."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz"
        ],
        "interactionIds": [
          "found_2_1_cpr_capnography_check"
        ],
        "estimatedMinutes": 3,
        "notes": "Uses ETCO2 concepts for CPR quality and ROSC recognition."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Unexpected low SpO2 or misleading pulse oximetry",
        "conditionTags": [
          "artifact",
          "poor perfusion",
          "carbon monoxide poisoning",
          "oxygenation monitoring"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Inpatient, emergency, outpatient, and sleep screening settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Capnography change during ventilation, airway management, or CPR",
        "conditionTags": [
          "ETCO2",
          "airway obstruction",
          "airway displacement",
          "CPR quality",
          "ROSC"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency department, ICU, procedural sedation, and resuscitation settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Dyshemoglobinemia or suspected carbon monoxide exposure",
        "conditionTags": [
          "COHb",
          "co-oximetry",
          "100 percent oxygen"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency and acute care settings"
      }
    ],
    "sourceFile": "Foundations_2_1_Oximetry_Capnography.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "monitoring-and-bedside-assessment",
    "moduleTitle": "Monitoring and Bedside Assessment",
    "lessonId": "foundations-2-2-clinical-laboratory-data-interpretation",
    "lessonTitle": "Clinical & Laboratory Data Interpretation",
    "displayTitle": "Foundations 2.2: Clinical & Laboratory Data Interpretation",
    "href": "/foundations/Foundations_2_2_Interpreting_Clinical_Laboratory_Data",
    "url": "/foundations/Foundations_2_2_Interpreting_Clinical_Laboratory_Data",
    "estimatedMinutes": 75,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "Inpatient",
      "emergency",
      "outpatient",
      "and acute care settings",
      "Emergency department",
      "ICU",
      "floor care",
      "and outpatient assessment settings",
      "Acute care",
      "and infection-control settings"
    ],
    "topics": [
      "clinical laboratory data",
      "CBC interpretation",
      "hemoglobin and oxygen carrying capacity",
      "anemia",
      "polycythemia",
      "white blood cells",
      "neutrophils",
      "eosinophils",
      "platelets",
      "electrolytes",
      "bicarbonate",
      "anion gap",
      "acid-base balance",
      "potassium abnormalities",
      "sodium abnormalities",
      "respiratory muscle weakness",
      "sputum assessment",
      "sputum sample quality",
      "Gram stain",
      "culture and sensitivity",
      "community-acquired pneumonia",
      "hospital-acquired pneumonia",
      "ventilator-associated pneumonia",
      "tuberculosis testing",
      "AFB smear",
      "BNP",
      "NT-proBNP",
      "troponin",
      "BUN",
      "creatinine",
      "procalcitonin",
      "CRP",
      "lactate",
      "sepsis",
      "hypoperfusion"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "practice",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "found_2_2_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_lab_data_match",
        "type": "sort",
        "title": "Lab Data Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_cbc_concept_check",
        "type": "quiz",
        "title": "CBC Concept Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_2_2_electrolyte_interpretation",
        "type": "sort",
        "title": "Electrolyte Interpretation",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_sputum_clue_match",
        "type": "sort",
        "title": "Sputum Clue Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_microbiology_match",
        "type": "sort",
        "title": "Microbiology Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_special_test_match",
        "type": "sort",
        "title": "Special Test Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_2_guided_lab_scenario",
        "type": "guided-case",
        "title": "Guided Lab Scenario",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "found_2_2_lab_mixed_practice",
        "type": "practice",
        "title": "Lab Mixed Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "found_2_2_knowledge_check",
        "type": "knowledge-check",
        "title": "Clinical & Laboratory Data Mastery",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "found_2_2_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_lab_data_match",
          "found_2_2_cbc_concept_check",
          "found_2_2_guided_lab_scenario",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 14,
        "notes": "Reviews and interprets CBC, electrolytes, renal, cardiac, inflammatory, sputum, and microbiology data."
      },
      {
        "outlineId": "BOK-I.A.8",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_guided_lab_scenario",
          "found_2_2_lab_mixed_practice",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Uses lab patterns to determine patient condition and escalation needs."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_2_cbc_concept_check",
          "found_2_2_guided_lab_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Compares laboratory values with symptoms, vital signs, ABGs, imaging, and bedside assessment."
      },
      {
        "outlineId": "BOK-I.C.17",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_2_sputum_clue_match",
          "found_2_2_guided_lab_scenario"
        ],
        "estimatedMinutes": 7,
        "notes": "Assesses sputum quality and microbiology clues."
      },
      {
        "outlineId": "BOK-I.D.18",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_sputum_clue_match",
          "found_2_2_microbiology_match",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Interprets sputum, Gram stain, culture, AFB, and infection-control clues."
      },
      {
        "outlineId": "BOK-I.E.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sort",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_microbiology_match",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 4,
        "notes": "Introduces TB-related testing and positive AFB escalation."
      },
      {
        "outlineId": "BOK-I.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_lab_data_match",
          "found_2_2_special_test_match",
          "found_2_2_guided_lab_scenario",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Recommends or interprets laboratory tests in respiratory scenarios."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_2_microbiology_match",
          "found_2_2_guided_lab_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Applies infection-control reasoning when microbiology or TB testing suggests risk."
      },
      {
        "outlineId": "BOK-II.B.3",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sort"
        ],
        "interactionIds": [
          "found_2_2_sputum_clue_match"
        ],
        "estimatedMinutes": 3,
        "notes": "Connects specimen handling and biohazard considerations to sputum and microbiology testing."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_2_guided_lab_scenario",
          "found_2_2_lab_mixed_practice",
          "found_2_2_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Uses clinical and laboratory data to support escalation, precautions, or care plan modification."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Dyspnea with abnormal oxygen-carrying capacity, infection markers, or laboratory trends",
        "conditionTags": [
          "anemia",
          "hemoglobin",
          "leukocytosis",
          "neutrophilia",
          "oxygen delivery"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Inpatient, emergency, outpatient, and acute care settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Electrolyte or metabolic abnormality affecting ventilation, acid-base balance, cardiac rhythm, or weakness",
        "conditionTags": [
          "bicarbonate",
          "potassium",
          "sodium",
          "anion gap",
          "respiratory muscle weakness"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency department, ICU, floor care, and outpatient assessment settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Suspected respiratory infection, sepsis, TB, or fluid overload requiring interpretation of sputum, microbiology, and special markers",
        "conditionTags": [
          "sputum",
          "Gram stain",
          "culture",
          "AFB",
          "lactate",
          "BNP",
          "procalcitonin"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Acute care, emergency, ICU, and infection-control settings"
      }
    ],
    "sourceFile": "Foundations_2_2_Interpreting_Clinical_Laboratory_Data.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundational-clinical-data-and-interpretation",
    "moduleTitle": "Foundational Clinical Data and Interpretation",
    "lessonId": "foundations-2-3-abg-interpretation",
    "lessonTitle": "ABG Interpretation",
    "displayTitle": "Foundations 2.3: ABG Interpretation",
    "href": "/foundations/Foundations_2_3_ABG_Interpretation",
    "url": "/foundations/Foundations_2_3_ABG_Interpretation",
    "estimatedMinutes": 90,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "Emergency department",
      "ICU",
      "acute care",
      "and outpatient diagnostic settings",
      "pulmonary clinic",
      "and long-term care settings",
      "Emergency",
      "and home oxygen evaluation settings",
      "Hospital and emergency settings"
    ],
    "topics": [
      "arterial blood gas",
      "ABG interpretation",
      "acid-base balance",
      "pH",
      "PaCO2",
      "HCO3",
      "PaO2",
      "respiratory acidosis",
      "respiratory alkalosis",
      "metabolic acidosis",
      "metabolic alkalosis",
      "ROME method",
      "compensation",
      "acute respiratory acidosis",
      "chronic respiratory acidosis",
      "hypoxemia",
      "hypoventilation correction",
      "mixed disorders"
    ],
    "activityTypes": [
      "calculation",
      "flashcards",
      "guided-case",
      "knowledge-check",
      "practice",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "found_2_3_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_3_abg_framework_sequence",
        "type": "sort",
        "title": "ABG Framework Sequence",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_2_3_range_recognition",
        "type": "sort",
        "title": "Range Recognition",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_3_primary_cause_check",
        "type": "quiz",
        "title": "Primary Cause Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_3_technical_classification",
        "type": "sort",
        "title": "Technical Classification Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_3_compensation_check",
        "type": "quiz",
        "title": "Compensation Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_3_acute_chronic_check",
        "type": "quiz",
        "title": "Acute Chronic Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_3_oxygenation_check",
        "type": "quiz",
        "title": "Oxygenation Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_3_hypoventilation_correction",
        "type": "calculation",
        "title": "Hypoventilation Correction Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_3_mixed_disorder_check",
        "type": "quiz",
        "title": "Mixed Disorder Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_2_3_guided_abg_scenario",
        "type": "guided-case",
        "title": "Guided ABG Scenario",
        "required": true,
        "estimatedMinutes": 10
      },
      {
        "id": "found_2_3_abg_assignment_practice",
        "type": "practice",
        "title": "ABG Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_3_knowledge_check",
        "type": "knowledge-check",
        "title": "ABG Interpretation Mastery",
        "required": true,
        "estimatedMinutes": 10
      },
      {
        "id": "found_2_3_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_3_guided_abg_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews ABG values and related laboratory trends in context."
      },
      {
        "outlineId": "BOK-I.A.8",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Determines patient condition from ventilation, oxygenation, and acid-base data."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_3_primary_cause_check",
          "found_2_3_guided_abg_scenario"
        ],
        "estimatedMinutes": 5,
        "notes": "Connects ABG abnormalities to patient assessment and clinical severity."
      },
      {
        "outlineId": "BOK-I.C.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "calculation",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_range_recognition",
          "found_2_3_technical_classification",
          "found_2_3_hypoventilation_correction",
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 18,
        "notes": "Gathers and classifies ABG data including pH, PaCO2, HCO3, and PaO2."
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
          "found_2_3_hypoventilation_correction",
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Uses calculations to evaluate hypoventilation correction and oxygenation interpretation."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_technical_classification",
          "found_2_3_compensation_check",
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 18,
        "notes": "Interprets ABGs to classify acid-base disorders, compensation, oxygenation severity, and mixed disorders."
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
          "found_2_3_hypoventilation_correction",
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Applies cardiopulmonary calculations to oxygenation and ventilation interpretation."
      },
      {
        "outlineId": "BOK-I.E.8",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recognizes when blood gas or hemoximetry interpretation supports further evaluation."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_oxygenation_check",
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Uses ABG data to identify hypoxemia and urgency."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_guided_abg_scenario",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Uses ABG findings to support oxygen and ventilation decisions."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_3_guided_abg_scenario",
          "found_2_3_abg_assignment_practice",
          "found_2_3_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Recommends reassessment or care plan modification when values worsen."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Acid-base disturbance or abnormal arterial blood gas",
        "conditionTags": [
          "ABG",
          "acidosis",
          "alkalosis",
          "compensation",
          "mixed disorder"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Emergency department, ICU, acute care, and outpatient diagnostic settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Hypercapnia, hypoventilation, and chronic CO2 retention",
        "conditionTags": [
          "PaCO2",
          "chronic respiratory acidosis",
          "renal compensation",
          "hypoventilation"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "ICU, acute care, pulmonary clinic, and long-term care settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Hypoxemia and oxygenation impairment",
        "conditionTags": [
          "PaO2",
          "hypoxemia",
          "oxygenation severity",
          "hypoventilation correction"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency, ICU, acute care, and home oxygen evaluation settings"
      },
      {
        "patientConditionCategory": "Neonatal/Pediatric/Adult",
        "patientConditionType": "ABG interpretation across age groups",
        "conditionTags": [
          "ventilation",
          "oxygenation",
          "acid-base interpretation"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Hospital and emergency settings"
      }
    ],
    "sourceFile": "Foundations_2_3_ABG_Interpretation.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "clinical-data-abg-and-decision-making",
    "moduleTitle": "Clinical Data, ABG Interpretation, and Decision Making",
    "lessonId": "foundations-2-4-integrated-clinical-decision-making",
    "lessonTitle": "Integrated Clinical Decision Making",
    "displayTitle": "Foundations 2.4: Integrated Clinical Decision Making",
    "href": "/foundations/Foundations_2_4_Integrated_Respiratory_Decision_Making",
    "url": "/foundations/Foundations_2_4_Integrated_Respiratory_Decision_Making",
    "estimatedMinutes": 75,
    "patientAge": [
      "Adult",
      "Pediatric",
      "Neonatal"
    ],
    "setting": [
      "Emergency department",
      "inpatient",
      "and ICU settings",
      "Emergency",
      "and outpatient settings",
      "ICU",
      "procedural",
      "and inpatient settings",
      "Acute care and emergency settings"
    ],
    "topics": [
      "integrated clinical decision making",
      "respiratory failure",
      "oxygenation failure",
      "ventilatory failure",
      "combined respiratory failure",
      "dyspnea differentiation",
      "pulmonary dyspnea",
      "cardiac dyspnea",
      "priority ladder",
      "airway priority",
      "breathing priority",
      "ABG trends",
      "monitoring trends",
      "laboratory data interpretation",
      "reassessment",
      "escalation",
      "COPD exacerbation",
      "board-style clinical reasoning"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "knowledge-check",
      "practice",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "found_2_4_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_4_data_source_match",
        "type": "sort",
        "title": "Data Source Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_4_failure_pattern_sort",
        "type": "sort",
        "title": "Failure Pattern Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_4_dyspnea_pattern_match",
        "type": "sort",
        "title": "Dyspnea Pattern Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_4_priority_ladder_sequence",
        "type": "sort",
        "title": "Priority Ladder Sequence",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_2_4_patient_board_check",
        "type": "quiz",
        "title": "Patient Board Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_2_4_guided_integrated_case",
        "type": "guided-case",
        "title": "Guided Integrated Case",
        "required": true,
        "estimatedMinutes": 12
      },
      {
        "id": "found_2_4_integrated_decision_practice",
        "type": "practice",
        "title": "Integrated Decision Practice",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "found_2_4_knowledge_check",
        "type": "knowledge-check",
        "title": "Integrated Clinical Decision Making Mastery",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "found_2_4_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_4_data_source_match",
          "found_2_4_guided_integrated_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Reviews history, medications, prior response, and clinical context."
      },
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_4_data_source_match",
          "found_2_4_guided_integrated_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews laboratory data, ABGs, and monitoring trends."
      },
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_data_source_match",
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Connects SpO2, ETCO2, PaO2, PaCO2, BNP, and trends to patient condition."
      },
      {
        "outlineId": "BOK-I.A.8",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_failure_pattern_sort",
          "found_2_4_dyspnea_pattern_match",
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Differentiates oxygenation failure, ventilatory failure, combined failure, and dyspnea patterns."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_dyspnea_pattern_match",
          "found_2_4_patient_board_check",
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Assesses work of breathing, airway protection, breath sounds, mental status, perfusion, fatigue, and response."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Evaluates monitoring trends after intervention."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Evaluates ABG trends after respiratory support."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_2_4_priority_ladder_sequence",
          "found_2_4_guided_integrated_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Prioritizes safe escalation and reassessment when a patient is deteriorating."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_failure_pattern_sort",
          "found_2_4_guided_integrated_case",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Selects first interventions to minimize hypoxemia based on primary threat."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_guided_integrated_case",
          "found_2_4_integrated_decision_practice",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Titrates oxygen and supports ventilation in integrated scenarios."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "guided-case",
          "practice",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_2_4_guided_integrated_case",
          "found_2_4_integrated_decision_practice",
          "found_2_4_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Modifies or escalates care based on reassessment, ABG trends, patient status, and response."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "COPD exacerbation with hypoxemia and hypercapnia",
        "conditionTags": [
          "COPD",
          "combined respiratory failure",
          "bronchospasm",
          "ABG interpretation",
          "oxygen titration"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency department, inpatient, and ICU settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Acute dyspnea requiring pulmonary versus cardiac pattern differentiation",
        "conditionTags": [
          "dyspnea",
          "heart failure",
          "BNP",
          "orthopnea",
          "wheezing",
          "crackles"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Emergency, inpatient, and outpatient settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Airway, breathing, and escalation priority scenario",
        "conditionTags": [
          "airway protection",
          "respiratory distress",
          "reassessment",
          "escalation"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Emergency department, ICU, procedural, and inpatient settings"
      },
      {
        "patientConditionCategory": "Pediatric and Neonatal",
        "patientConditionType": "Integrated respiratory assessment and response-to-therapy reasoning",
        "conditionTags": [
          "oxygenation",
          "ventilation",
          "assessment",
          "reassessment"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Acute care and emergency settings"
      }
    ],
    "sourceFile": "Foundations_2_4_Integrated_Respiratory_Decision_Making.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "procedural-airway-management-and-bronchoscopy",
    "moduleTitle": "Procedural Airway Management and Bronchoscopy",
    "lessonId": "foundations-3-1-flexible-bronchoscopy-procedure-sedation-airway-assessment",
    "lessonTitle": "Flexible Bronchoscopy: Procedure, Sedation & Airway Assessment",
    "displayTitle": "Foundations 3.1: Flexible Bronchoscopy",
    "href": "/foundations/Foundations_3_1_Flexible_Bronchoscopy",
    "url": "/foundations/Foundations_3_1_Flexible_Bronchoscopy",
    "estimatedMinutes": 65,
    "patientAge": [
      "Adult",
      "Pediatric"
    ],
    "setting": [
      "Bronchoscopy suite",
      "ICU",
      "emergency department",
      "procedural area",
      "Pre-procedure assessment and acute care settings",
      "Acute care",
      "bronchoscopy suite"
    ],
    "topics": [
      "flexible bronchoscopy",
      "diagnostic bronchoscopy",
      "therapeutic bronchoscopy",
      "Mallampati airway assessment",
      "conscious sedation",
      "procedural monitoring",
      "ETCO2 monitoring",
      "hypoventilation",
      "topical lidocaine",
      "bronchoalveolar lavage",
      "bronchial washing",
      "bronchial brushing",
      "endobronchial biopsy",
      "transbronchial needle aspiration",
      "thermal ablation",
      "cryotherapy",
      "airway stent placement",
      "balloon dilation",
      "foreign body removal",
      "secretion clearance",
      "post-procedure recovery"
    ],
    "activityTypes": [
      "flashcards",
      "guided-case",
      "hotspot-select",
      "knowledge-check",
      "practice",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "found_3_1_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "found_3_1_bronchoscopy_type_match",
        "type": "sort",
        "title": "Bronchoscopy Type Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_3_1_mallampati_identification",
        "type": "hotspot-select",
        "title": "Mallampati Identification",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_3_1_patient_prep_match",
        "type": "sort",
        "title": "Patient Preparation Match",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "found_3_1_sedation_monitoring_sort",
        "type": "sort",
        "title": "Sedation Monitoring Parameters Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_3_1_hypoventilation_intervention_check",
        "type": "quiz",
        "title": "Hypoventilation Intervention Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "found_3_1_diagnostic_technique_match",
        "type": "sort",
        "title": "Diagnostic Technique Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_3_1_therapeutic_procedure_match",
        "type": "sort",
        "title": "Therapeutic Procedure Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_3_1_unfolding_case",
        "type": "guided-case",
        "title": "Bronchoscopy Unfolding Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "found_3_1_mixed_practice",
        "type": "practice",
        "title": "Mixed Practice 3.1",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "found_3_1_knowledge_check",
        "type": "knowledge-check",
        "title": "Flexible Bronchoscopy Mastery",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "found_3_1_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Reviews procedure indications, allergies, bleeding risk, oxygen requirement, and airway history."
      },
      {
        "outlineId": "BOK-I.A.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Reviews imaging findings relevant to bronchoscopy."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "hotspot-select",
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_mallampati_identification",
          "found_3_1_hypoventilation_intervention_check",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 8,
        "notes": "Assesses difficult airway risk and procedural tolerance during sedation."
      },
      {
        "outlineId": "BOK-I.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_sedation_monitoring_sort",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Uses SpO2, respiratory rate, heart rate, blood pressure, and ETCO2 during procedural sedation."
      },
      {
        "outlineId": "BOK-I.C.24",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_diagnostic_technique_match",
          "found_3_1_unfolding_case",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Supports diagnostic sampling including BAL, washing, brushing, biopsy, and TBNA."
      },
      {
        "outlineId": "BOK-I.D.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_sedation_monitoring_sort",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Evaluates procedural monitoring trends and post-procedure status."
      },
      {
        "outlineId": "BOK-I.D.25",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_diagnostic_technique_match",
          "found_3_1_unfolding_case",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Differentiates diagnostic sampling approaches and purposes."
      },
      {
        "outlineId": "BOK-I.E.4",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_bronchoscopy_type_match",
          "found_3_1_diagnostic_technique_match",
          "found_3_1_therapeutic_procedure_match",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Covers diagnostic and therapeutic bronchoscopy indications and techniques."
      },
      {
        "outlineId": "BOK-I.E.5",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_diagnostic_technique_match",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Identifies BAL and related specimen collection purposes."
      },
      {
        "outlineId": "BOK-II.A.22",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_bronchoscopy_type_match",
          "found_3_1_therapeutic_procedure_match",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Identifies bronchoscopes and procedural support needs."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_patient_prep_match",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Applies procedural safety and infection-prevention principles."
      },
      {
        "outlineId": "BOK-III.A.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "hotspot-select",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_mallampati_identification",
          "found_3_1_unfolding_case",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Recognizes difficult airway risk using Mallampati and related clues."
      },
      {
        "outlineId": "BOK-III.A.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_hypoventilation_intervention_check",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "Supports airway patency and responds to sedation-related obstruction or hypoventilation."
      },
      {
        "outlineId": "BOK-III.C.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_sedation_monitoring_sort",
          "found_3_1_hypoventilation_intervention_check",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 6,
        "notes": "Minimizes hypoxemia during procedural monitoring."
      },
      {
        "outlineId": "BOK-III.C.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_unfolding_case",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Adjusts oxygen and ventilation support during bronchoscopy."
      },
      {
        "outlineId": "BOK-III.H.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "guided-case",
          "knowledge-check"
        ],
        "interactionIds": [
          "found_3_1_bronchoscopy_type_match",
          "found_3_1_unfolding_case",
          "found_3_1_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Bronchoscopy procedural support and monitoring."
      },
      {
        "outlineId": "BOK-III.H.3",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_therapeutic_procedure_match",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Specialized bronchoscopy techniques including thermal ablation, cryotherapy, stent, and balloon dilation."
      },
      {
        "outlineId": "BOK-III.H.8",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "guided-case"
        ],
        "interactionIds": [
          "found_3_1_sedation_monitoring_sort",
          "found_3_1_hypoventilation_intervention_check",
          "found_3_1_unfolding_case"
        ],
        "estimatedMinutes": 8,
        "notes": "Moderate/conscious sedation monitoring and response to hypoventilation."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Patient undergoing bronchoscopy with procedural sedation",
        "conditionTags": [
          "conscious sedation",
          "hypoventilation",
          "ETCO2 trend",
          "airway obstruction",
          "SpO2 decline"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Bronchoscopy suite, ICU, emergency department, procedural area"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Difficult airway risk before bronchoscopy",
        "conditionTags": [
          "Mallampati class 3",
          "Mallampati class 4",
          "emergency airway plan",
          "sedation risk"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Pre-procedure assessment and acute care settings"
      },
      {
        "patientConditionCategory": "Adults",
        "patientConditionType": "Diagnostic or therapeutic bronchoscopy decision support",
        "conditionTags": [
          "BAL",
          "bronchial washing",
          "biopsy",
          "TBNA",
          "thermal ablation",
          "cryotherapy",
          "stent",
          "foreign body removal"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "Acute care, ICU, bronchoscopy suite"
      }
    ],
    "sourceFile": "Foundations_3_1_Flexible_Bronchoscopy.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "procedures-monitoring-and-cardiac-rhythm-analysis",
    "moduleTitle": "Procedures, Monitoring, and Cardiac Rhythm Analysis",
    "lessonId": "foundations-3-2-ecg-interpretation-cardiac-rhythm-analysis",
    "lessonTitle": "ECG Interpretation & Cardiac Rhythm Analysis",
    "displayTitle": "Foundations 3.2: ECG Interpretation & Cardiac Rhythm Analysis",
    "href": "/foundations/Foundations_3_2_ECG_Interpretation_Cardiac_Rhythm_Analysis",
    "url": "/foundations/Foundations_3_2_ECG_Interpretation_Cardiac_Rhythm_Analysis",
    "estimatedMinutes": 75,
    "patientAge": [
      "Adult",
      "Older adult"
    ],
    "setting": [
      "Emergency department",
      "ICU",
      "General acute care",
      "Procedural areas",
      "Inpatient",
      "Emergency",
      "Critical care"
    ],
    "topics": [
      "ECG interpretation",
      "cardiac rhythm analysis",
      "ECG paper",
      "PQRST waveforms",
      "PR interval",
      "QRS duration",
      "QT interval",
      "ST segment",
      "heart rate calculation",
      "sinus rhythm",
      "atrial flutter",
      "atrial fibrillation",
      "SVT",
      "ventricular tachycardia",
      "ventricular fibrillation",
      "asystole",
      "defibrillation",
      "synchronized cardioversion",
      "5 Hs and 5 Ts",
      "shockable rhythms"
    ],
    "activityTypes": [
      "calculation",
      "case",
      "flashcards",
      "knowledge-check",
      "quiz",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_3_2_overview_video",
        "type": "video",
        "title": "Lesson overview video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_2_ecg_time_match",
        "type": "sort",
        "title": "ECG box-to-time match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_2_four_step_order",
        "type": "sort",
        "title": "Four-step ECG analysis order",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_2_rate_calculation_practice",
        "type": "calculation",
        "title": "Rate calculation practice",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_3_2_sinus_rhythm_match",
        "type": "sort",
        "title": "Sinus rhythm match",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_2_atrial_rhythm_features",
        "type": "sort",
        "title": "Atrial rhythm key features",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_2_vt_vs_svt_check",
        "type": "quiz",
        "title": "VT vs SVT check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_3_2_deadly_rhythm_intervention",
        "type": "sort",
        "title": "Deadly rhythm intervention match",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_2_clinical_scenarios",
        "type": "case",
        "title": "ECG clinical scenarios",
        "required": true,
        "estimatedMinutes": 12
      },
      {
        "id": "foundations_3_2_rhythm_intervention_match",
        "type": "sort",
        "title": "Rhythm-to-intervention match",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_2_knowledge_check",
        "type": "knowledge-check",
        "title": "Foundations 3.2 knowledge check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_2_flashcards",
        "type": "flashcards",
        "title": "Glossary flashcard mastery deck",
        "required": false,
        "estimatedMinutes": 8
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.7",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case"
        ],
        "interactionIds": [
          "foundations_3_2_clinical_scenarios"
        ],
        "estimatedMinutes": 4,
        "notes": "Reviews cardiac monitoring and clinical trends."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_vt_vs_svt_check",
          "foundations_3_2_clinical_scenarios",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 8,
        "notes": "Assesses stability, pulse, perfusion, mental status, and symptoms during rhythm changes."
      },
      {
        "outlineId": "BOK-I.C.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "calculation",
          "quiz",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_ecg_time_match",
          "foundations_3_2_four_step_order",
          "foundations_3_2_rate_calculation_practice",
          "foundations_3_2_clinical_scenarios",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 18,
        "notes": "Performs ECG/rhythm analysis including intervals, rate, and rhythm features."
      },
      {
        "outlineId": "BOK-I.D.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "calculation",
          "quiz",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_rate_calculation_practice",
          "foundations_3_2_sinus_rhythm_match",
          "foundations_3_2_atrial_rhythm_features",
          "foundations_3_2_deadly_rhythm_intervention",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 20,
        "notes": "Interprets sinus, atrial, SVT, VT, VFib, and asystole patterns."
      },
      {
        "outlineId": "BOK-I.E.9",
        "coverageLevel": "applied",
        "evidenceType": [
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_clinical_scenarios",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Recognizes when ECG is needed for rhythm disturbance or cardiac arrest scenarios."
      },
      {
        "outlineId": "BOK-II.A.21",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "instruction",
          "case"
        ],
        "interactionIds": [
          "foundations_3_2_clinical_scenarios"
        ],
        "estimatedMinutes": 4,
        "notes": "Uses cardiac monitoring as part of noninvasive monitoring and patient safety."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_deadly_rhythm_intervention",
          "foundations_3_2_rhythm_intervention_match",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 9,
        "notes": "Selects appropriate escalation for bradycardia, tachycardia, shockable, and non-shockable rhythms."
      },
      {
        "outlineId": "BOK-III.G.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_deadly_rhythm_intervention",
          "foundations_3_2_clinical_scenarios",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 10,
        "notes": "Recognizes life-threatening rhythms requiring emergency response."
      },
      {
        "outlineId": "BOK-III.H.9",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "case",
          "knowledge-check"
        ],
        "interactionIds": [
          "foundations_3_2_deadly_rhythm_intervention",
          "foundations_3_2_rhythm_intervention_match",
          "foundations_3_2_knowledge_check"
        ],
        "estimatedMinutes": 7,
        "notes": "Differentiates defibrillation from synchronized cardioversion in scenarios."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Cardiopulmonary emergencies",
        "patientConditionType": "Rhythm disturbance or cardiac arrest",
        "conditionTags": [
          "bradycardia",
          "tachycardia",
          "SVT",
          "VT",
          "VFib",
          "asystole",
          "pulseless rhythms"
        ],
        "clinicalJudgmentType": [
          "Recognize cues",
          "Analyze cues",
          "Prioritize hypotheses",
          "Take action",
          "Evaluate outcomes"
        ],
        "setting": [
          "Emergency department",
          "ICU",
          "General acute care",
          "Procedural areas"
        ]
      },
      {
        "patientConditionCategory": "Monitoring and diagnostics",
        "patientConditionType": "ECG rhythm interpretation",
        "conditionTags": [
          "PQRST",
          "rate calculation",
          "interval measurement",
          "atrial rhythms",
          "ventricular rhythms"
        ],
        "clinicalJudgmentType": [
          "Recognize cues",
          "Analyze cues"
        ],
        "setting": [
          "Inpatient",
          "Emergency",
          "Critical care"
        ]
      }
    ],
    "sourceFile": "Foundations_3_2_ECG_Interpretation_Cardiac_Rhythm_Analysis.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-procedures-diagnostics",
    "moduleTitle": "Procedures, Diagnostics, and Advanced Interpretation",
    "lessonId": "foundations_3_3",
    "lessonTitle": "Anion Gap, Bicarbonate Gap & Mixed Acid-Base Disorders",
    "displayTitle": "Foundations 3.3: Anion Gap, Bicarbonate Gap & Mixed Acid-Base Disorders",
    "href": "/foundations/Foundations_3_3_Anion_Gap_Mixed_Acid_Base_Disorders",
    "url": "/foundations/Foundations_3_3_Anion_Gap_Mixed_Acid_Base_Disorders",
    "estimatedMinutes": 65,
    "patientAge": [
      "Adult",
      "Pediatric concepts when clinically applicable"
    ],
    "setting": [
      "Emergency department",
      "intensive care",
      "acute care",
      "and board-style case scenarios"
    ],
    "topics": [
      "base excess",
      "lactate",
      "anion gap",
      "bicarbonate gap",
      "delta gap",
      "anion gap metabolic acidosis",
      "non-anion gap metabolic acidosis",
      "DKA",
      "alcohol ketoacidosis",
      "starvation ketoacidosis",
      "lactic acidosis",
      "mixed acid-base disorders",
      "ABG interpretation"
    ],
    "activityTypes": [
      "calculation",
      "flashcards",
      "guided_case",
      "knowledge_check",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_3_3_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_3_lactate_type_match",
        "type": "sort",
        "title": "Lactate Type Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_3_agma_nagma_sort",
        "type": "sort",
        "title": "AGMA vs NAGMA Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_3_anion_gap_calculation",
        "type": "calculation",
        "title": "Anion Gap Calculation Practice",
        "required": true,
        "estimatedMinutes": 7
      },
      {
        "id": "foundations_3_3_agma_cause_match",
        "type": "sort",
        "title": "AGMA Cause Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_3_bicarbonate_gap_calculation",
        "type": "calculation",
        "title": "Bicarbonate Gap Step-by-Step",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_3_mixed_disorder_match",
        "type": "sort",
        "title": "Mixed Disorder Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_3_unfolding_case",
        "type": "guided_case",
        "title": "Anion Gap Unfolding Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_3_assignment_practice",
        "type": "sort",
        "title": "Assignment Practice",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_3_knowledge_check",
        "type": "knowledge_check",
        "title": "Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_3_glossary_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 5
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "calculation",
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_lactate_type_match",
          "foundations_3_3_anion_gap_calculation",
          "foundations_3_3_unfolding_case",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Reviews lab values related to metabolic status, lactate, and acid-base interpretation."
      },
      {
        "outlineId": "BOK-I.A.8",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_unfolding_case",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Integrates history, clinical findings, and diagnostic data to recognize acid-base disorders."
      },
      {
        "outlineId": "BOK-I.C.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_anion_gap_calculation",
          "foundations_3_3_bicarbonate_gap_calculation",
          "foundations_3_3_unfolding_case",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 18,
        "notes": "Calculates anion gap, delta gap, and bicarbonate gap."
      },
      {
        "outlineId": "BOK-I.D.5",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "calculation",
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_agma_nagma_sort",
          "foundations_3_3_mixed_disorder_match",
          "foundations_3_3_unfolding_case",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Interprets acid-base disorders and mixed metabolic/respiratory patterns."
      },
      {
        "outlineId": "BOK-I.D.7",
        "coverageLevel": "assessed",
        "evidenceType": [
          "calculation",
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_anion_gap_calculation",
          "foundations_3_3_bicarbonate_gap_calculation",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 14,
        "notes": "Applies cardiopulmonary and acid-base calculations to identify mixed disorders."
      },
      {
        "outlineId": "BOK-I.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "calculation"
        ],
        "interactionIds": [
          "foundations_3_3_lactate_type_match",
          "foundations_3_3_anion_gap_calculation"
        ],
        "estimatedMinutes": 5,
        "notes": "Uses laboratory tests to explain metabolic acidosis and lactate elevation."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "guided_case",
          "knowledge_check"
        ],
        "interactionIds": [
          "foundations_3_3_unfolding_case",
          "foundations_3_3_knowledge_check"
        ],
        "estimatedMinutes": 6,
        "notes": "Prioritizes treatment considerations based on acid-base severity and likely cause."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Acid-base and metabolic disorders",
        "patientConditionType": "Metabolic acidosis, mixed acid-base disorders, and elevated lactate",
        "conditionTags": [
          "AGMA",
          "NAGMA",
          "DKA",
          "AKA",
          "SKA",
          "lactic acidosis",
          "mixed acid-base disorder"
        ],
        "clinicalJudgmentType": "Information Gathering and Decision Making",
        "setting": "Emergency department, intensive care, acute care, and board-style case scenarios"
      }
    ],
    "sourceFile": "Foundations_3_3_Anion_Gap_Mixed_Acid_Base_Disorders.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  },
  {
    "courseId": "foundations",
    "courseTitle": "PulmoCore Foundations of Respiratory Care",
    "moduleId": "foundations-clinical-systems-professional-practice",
    "moduleTitle": "Clinical Systems, Ethics, and Professional Practice",
    "lessonId": "foundations_3_4",
    "lessonTitle": "Nutrition, Ethics & Electronic Medical Records",
    "displayTitle": "Foundations 3.4: Nutrition, Ethics & Electronic Medical Records",
    "href": "/foundations/Foundations_3_4_Nutrition_Ethics_Electronic_Medical_Records",
    "url": "/foundations/Foundations_3_4_Nutrition_Ethics_Electronic_Medical_Records",
    "estimatedMinutes": 65,
    "patientAge": [
      "Adult",
      "Older adult"
    ],
    "setting": [
      "Hospital",
      "outpatient",
      "and post-acute care",
      "All respiratory care settings"
    ],
    "topics": [
      "cardiac nutrition",
      "COPD nutrition",
      "malnutrition",
      "dyspnea and eating",
      "macronutrients and CO2 production",
      "key nutrients",
      "AARC Code of Ethics",
      "scope of practice",
      "HIPAA",
      "EMR vs EHR",
      "patient verification",
      "documentation ethics"
    ],
    "activityTypes": [
      "case",
      "flashcards",
      "quiz",
      "sequence",
      "sort",
      "video"
    ],
    "activities": [
      {
        "id": "foundations_3_4_overview_video",
        "type": "video",
        "title": "Lesson Overview Video",
        "required": false,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_cardiac_diet_match",
        "type": "sort",
        "title": "Cardiac Diet Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_copd_eating_strategy_sort",
        "type": "sort",
        "title": "COPD Eating Strategy Sort",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_4_nutrient_function_match",
        "type": "sort",
        "title": "Nutrient-Function Match",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_nutrition_signs_check",
        "type": "quiz",
        "title": "Nutrition Signs Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_3_4_ethics_principle_match",
        "type": "sort",
        "title": "Ethics Principle Match",
        "required": true,
        "estimatedMinutes": 6
      },
      {
        "id": "foundations_3_4_ethics_scenario_check",
        "type": "quiz",
        "title": "Ethics Scenario Check",
        "required": true,
        "estimatedMinutes": 4
      },
      {
        "id": "foundations_3_4_emr_ehr_check",
        "type": "quiz",
        "title": "EMR vs EHR Check",
        "required": true,
        "estimatedMinutes": 3
      },
      {
        "id": "foundations_3_4_hipaa_violations_sort",
        "type": "sort",
        "title": "HIPAA Violations Sort",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_verification_step_order",
        "type": "sequence",
        "title": "Verification Step Order",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_unfolding_case",
        "type": "case",
        "title": "3.4 Unfolding Case",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_4_assignment_practice",
        "type": "sort",
        "title": "3.4 Assignment Practice",
        "required": true,
        "estimatedMinutes": 5
      },
      {
        "id": "foundations_3_4_knowledge_check",
        "type": "quiz",
        "title": "Foundations 3.4 Knowledge Check",
        "required": true,
        "estimatedMinutes": 8
      },
      {
        "id": "foundations_3_4_glossary_flashcards",
        "type": "flashcards",
        "title": "Glossary Flashcard Mastery Deck",
        "required": false,
        "estimatedMinutes": 6
      }
    ],
    "nbrcAlignment": [
      {
        "outlineId": "BOK-I.A.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "quiz",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_nutrition_signs_check",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Reviews medical record information, active orders, and nutrition-related patient data."
      },
      {
        "outlineId": "BOK-I.A.2",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_nutrition_signs_check",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Identifies clinical signs related to fluid balance, malnutrition, and respiratory status."
      },
      {
        "outlineId": "BOK-I.B.1",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "quiz",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_copd_eating_strategy_sort",
          "foundations_3_4_nutrition_signs_check",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 8,
        "notes": "Evaluates nutrition-related findings and dyspnea/eating strategies."
      },
      {
        "outlineId": "BOK-II.B.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "sequence",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_hipaa_violations_sort",
          "foundations_3_4_verification_step_order",
          "foundations_3_4_unfolding_case",
          "foundations_3_4_knowledge_check"
        ],
        "estimatedMinutes": 12,
        "notes": "Applies HIPAA privacy, confidentiality, patient verification, and safe documentation principles."
      },
      {
        "outlineId": "BOK-II.B.4",
        "coverageLevel": "reinforced",
        "evidenceType": [
          "quiz",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_emr_ehr_check",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 4,
        "notes": "Connects EHR/EMR documentation accuracy and audit trail concepts to quality and safety."
      },
      {
        "outlineId": "BOK-III.E.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "case",
          "quiz"
        ],
        "interactionIds": [
          "foundations_3_4_unfolding_case",
          "foundations_3_4_knowledge_check"
        ],
        "estimatedMinutes": 5,
        "notes": "Escalates concerns related to nutrition, aspiration risk, fluid overload, and deterioration."
      },
      {
        "outlineId": "BOK-III.I.1",
        "coverageLevel": "assessed",
        "evidenceType": [
          "sort",
          "quiz",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_ethics_principle_match",
          "foundations_3_4_ethics_scenario_check",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 10,
        "notes": "Covers ethics, scope of practice, interdisciplinary responsibilities, and documentation ethics."
      },
      {
        "outlineId": "BOK-III.I.2",
        "coverageLevel": "applied",
        "evidenceType": [
          "sort",
          "case"
        ],
        "interactionIds": [
          "foundations_3_4_copd_eating_strategy_sort",
          "foundations_3_4_unfolding_case"
        ],
        "estimatedMinutes": 5,
        "notes": "Supports patient-facing nutrition strategies and safety communication within the care plan."
      }
    ],
    "dcjAlignment": [
      {
        "patientConditionCategory": "Adult",
        "patientConditionType": "Cardiopulmonary disease with nutrition and safety needs",
        "conditionTags": [
          "CHF",
          "CAD",
          "COPD",
          "malnutrition",
          "fluid overload",
          "hypercapnia",
          "aspiration risk"
        ],
        "clinicalJudgmentType": "Information Gathering",
        "setting": "Hospital, outpatient, and post-acute care"
      },
      {
        "patientConditionCategory": "Adult",
        "patientConditionType": "Patient safety, ethics, privacy, and documentation",
        "conditionTags": [
          "HIPAA",
          "patient verification",
          "scope of practice",
          "documentation accuracy",
          "EHR"
        ],
        "clinicalJudgmentType": "Decision Making",
        "setting": "All respiratory care settings"
      }
    ],
    "sourceFile": "Foundations_3_4_Nutrition_Ethics_Electronic_Medical_Records.html",
    "mappingStatus": "first-pass",
    "mappingNotes": "First-pass exact NBRC BOK mapping generated from embedded lesson metadata. Review before accreditation reporting."
  }
];

  const COURSE_ID_ALIASES = {
    "pulmocore-assessment": "pulmonary-assessment",
    "pulmocore-pulmonary-assessment": "pulmonary-assessment",
    "foundations-of-respiratory-care": "foundations",
    "pulmocore-foundations": "foundations",
    "pulmocore-physiology": "respiratory-physiology"
  };

  const COURSE_PATH_PREFIXES = {
    "pulmonary-assessment": "/assessment",
    "foundations": "/foundations",
    "respiratory-physiology": "/physiology",
    "respiratory-diseases": ""
  };

  function cleanFilename(value) {
    return String(value || "")
      .trim()
      .replace(/^https?:\/\/[^/]+/i, "")
      .replace(/\.html$/i, "")
      .replace(/^\/+/, "")
      .split("/")
      .pop();
  }

  function normalizeHref(courseId, href) {
    const normalizedCourseId = COURSE_ID_ALIASES[courseId] || courseId;
    const prefix = COURSE_PATH_PREFIXES[normalizedCourseId] ?? "";
    const filename = cleanFilename(href);
    return (prefix + "/" + filename).replace(/\/+/g, "/");
  }

  REGISTRY.forEach(lesson => {
    lesson.courseId = COURSE_ID_ALIASES[lesson.courseId] || lesson.courseId;
    lesson.href = normalizeHref(lesson.courseId, lesson.href || lesson.url || lesson.path || lesson.sourceFile || lesson.lessonId);
    lesson.url = lesson.href;
  });

  function getAllLessons() {
    return REGISTRY.slice();
  }

  function findLessonById(lessonId) {
    return REGISTRY.find(lesson => lesson.lessonId === lessonId) || null;
  }

  function getLessonsByCourse(courseId) {
    const normalizedCourseId = COURSE_ID_ALIASES[courseId] || courseId;
    return REGISTRY.filter(lesson => lesson.courseId === normalizedCourseId);
  }

  function getLessonsByOutlineId(outlineId) {
    return REGISTRY.filter(lesson =>
      (lesson.nbrcAlignment || []).some(entry => entry.outlineId === outlineId)
    );
  }

  function getAlignmentRows() {
    return REGISTRY.flatMap(lesson =>
      (lesson.nbrcAlignment || []).map(entry => ({
        courseId: lesson.courseId,
        courseTitle: lesson.courseTitle,
        moduleId: lesson.moduleId,
        moduleTitle: lesson.moduleTitle,
        lessonId: lesson.lessonId,
        lessonTitle: lesson.lessonTitle,
        displayTitle: lesson.displayTitle,
        href: lesson.href,
        outlineId: entry.outlineId,
        coverageLevel: entry.coverageLevel,
        evidenceType: entry.evidenceType || [],
        interactionIds: entry.interactionIds || [],
        estimatedMinutes: entry.estimatedMinutes || 0,
        notes: entry.notes || "",
        mappingStatus: lesson.mappingStatus || "first-pass"
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
            entry.evidenceType.includes("knowledge_check") ||
            entry.evidenceType.includes("case-study") ||
            entry.evidenceType.includes("case") ||
            entry.evidenceType.includes("guided-case") ||
            entry.evidenceType.includes("guided_case") ||
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
      entry.evidenceType.includes("knowledge_check") ||
      entry.evidenceType.includes("case-study") ||
      entry.evidenceType.includes("case") ||
      entry.evidenceType.includes("guided-case") ||
      entry.evidenceType.includes("guided_case") ||
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
