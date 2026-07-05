/*
  PulmoLearn / PulmoCore Lesson Registry
  Expanded registry for NBRC 2027 dashboard alignment.
  Includes conservative Respiratory Physiology and Equipment mappings; gaps are not force-filled.

  Includes:
  - Starter disease/foundations entries
  - Pulmonary Assessment course batch
  - Foundations expansion batch through Foundations 3.4
  - Respiratory Physiology course batch
  - Respiratory Equipment & Procedures course batch

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
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "physiology-foundations",
      "moduleTitle": "Foundations of Respiratory Physiology",
      "lessonId": "rp-1-1-airway-defense-conditioning",
      "lessonTitle": "Airway Defense & Conditioning",
      "displayTitle": "Airway Defense & Conditioning",
      "href": "/physiology/RP_1_1_Airway_Defense_Conditioning",
      "url": "/physiology/RP_1_1_Airway_Defense_Conditioning",
      "estimatedMinutes": 40,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal concepts as applicable to airway conditioning and secretion clearance"
      ],
      "topics": [
        "airway defense",
        "airway conditioning",
        "cough reflex",
        "sneeze reflex",
        "gag reflex",
        "mucus",
        "cilia",
        "mucociliary escalator",
        "humidification",
        "temperature conditioning",
        "secretion retention",
        "smoking and cilia damage"
      ],
      "activityTypes": [
        "flashcards",
        "guided_case",
        "knowledge_check",
        "matching",
        "multi_select",
        "sequence",
        "single_choice",
        "video"
      ],
      "activities": [
        {
          "id": "rp_1_1_overview_video",
          "type": "video",
          "title": "2-Minute Lesson Preview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_1_precheck",
          "type": "single_choice",
          "title": "Airway Defense Pre-Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_1_1_defense_multiselect",
          "type": "multi_select",
          "title": "Airway Defense Multi-Select",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_1_defense_match",
          "type": "matching",
          "title": "Defense Mechanism Match",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_1_mucociliary_sequence",
          "type": "sequence",
          "title": "Mucociliary Sequence",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_1_humidity_check",
          "type": "multi_select",
          "title": "Humidity Requirement Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_1_1_damage_check",
          "type": "multi_select",
          "title": "Cilia Damage Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_1_1_guided_case",
          "type": "guided_case",
          "title": "Guided Airway Defense Case",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_1_1_knowledge_check",
          "type": "knowledge_check",
          "title": "Airway Defense Knowledge Check",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_1_glossary_deck",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": true,
          "estimatedMinutes": 5
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "multi-select",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_1_precheck",
            "rp_1_1_guided_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Assesses basic airway defense, cough quality, and secretion-retention cues."
        },
        {
          "outlineId": "BOK-I.B.3",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "matching",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_1_defense_match",
            "rp_1_1_guided_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Relates sputum, cough, and breath-sound clues to impaired airway defense."
        },
        {
          "outlineId": "BOK-II.A.5",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "multi-select",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_1_humidity_check",
            "rp_1_1_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Explains the need for humidification when airway conditioning is impaired or bypassed."
        },
        {
          "outlineId": "BOK-III.A.6",
          "coverageLevel": "applied",
          "evidenceType": [
            "multi-select",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_1_humidity_check",
            "rp_1_1_guided_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Connects normal airway humidification to maintaining adequate humidification during respiratory care."
        },
        {
          "outlineId": "BOK-III.B.4",
          "coverageLevel": "introduced",
          "evidenceType": [
            "sequence",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_1_mucociliary_sequence",
            "rp_1_1_guided_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Introduces cough and mucociliary clearance as prerequisites for airway-clearance decisions."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Patients with impaired airway clearance or secretion retention",
          "patientConditionType": "Beginner physiology connection to cough, mucus, cilia, and humidification",
          "conditionTags": [
            "airway clearance",
            "secretion retention",
            "mucociliary dysfunction",
            "humidification"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "acute care",
            "clinic",
            "long-term care",
            "student lab"
          ]
        }
      ],
      "sourceFile": "RP_1_1_Airway_Defense_Conditioning.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "physiology-foundations",
      "moduleTitle": "Foundations of Respiratory Physiology",
      "lessonId": "rp-1-2",
      "lessonTitle": "Basic Respiratory Anatomy",
      "displayTitle": "Basic Respiratory Anatomy",
      "href": "/physiology/RP_1_2_Basic_Respiratory_Anatomy",
      "url": "/physiology/RP_1_2_Basic_Respiratory_Anatomy",
      "estimatedMinutes": 40,
      "patientAge": [
        "adult",
        "pediatric",
        "neonatal foundational anatomy"
      ],
      "topics": [
        "basic respiratory anatomy",
        "upper airway",
        "lower airway",
        "airflow pathway",
        "conducting zone",
        "respiratory zone",
        "bronchial tree",
        "bronchioles",
        "alveoli",
        "pleura",
        "pleural space",
        "diaphragm",
        "phrenic nerve",
        "airway resistance",
        "gas exchange surface"
      ],
      "activityTypes": [
        "flashcard-deck",
        "guided-case",
        "hotspot",
        "knowledge-check",
        "sequence",
        "single-select",
        "sorting",
        "video"
      ],
      "activities": [
        {
          "id": "rp_1_2_overview_video",
          "type": "video",
          "title": "2-Minute Respiratory Anatomy Preview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_2_precheck",
          "type": "single-select",
          "title": "Respiratory Anatomy Pre-Check",
          "required": true,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_2_airflow_sequence",
          "type": "sequence",
          "title": "Airflow Sequence",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_1_2_zone_sort",
          "type": "sorting",
          "title": "Zone Sorting",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_2_support_structure_hotspots",
          "type": "hotspot",
          "title": "Pleura, Diaphragm, and Phrenic Nerve Hotspots",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_2_guided_case",
          "type": "guided-case",
          "title": "Guided Anatomy Case",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_2_knowledge_check",
          "type": "knowledge-check",
          "title": "Respiratory Anatomy Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_1_2_flashcards",
          "type": "flashcard-deck",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 6
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "sequence",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_2_precheck",
            "rp_1_2_guided_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Uses respiratory anatomy to localize observed airway or breathing findings."
        },
        {
          "outlineId": "BOK-I.D.4",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "sorting",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_2_zone_sort",
            "rp_1_2_guided_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Differentiates conducting-airway, gas-exchange, pleural, and diaphragmatic problems."
        },
        {
          "outlineId": "BOK-II.A.11",
          "coverageLevel": "introduced",
          "evidenceType": [
            "hotspot",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_2_support_structure_hotspots",
            "rp_1_2_knowledge_check"
          ],
          "estimatedMinutes": 4,
          "notes": "Applies airway anatomy to artificial-airway and airway-patency concepts."
        },
        {
          "outlineId": "BOK-III.A.3",
          "coverageLevel": "introduced",
          "evidenceType": [
            "sequence",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_2_airflow_sequence",
            "rp_1_2_knowledge_check"
          ],
          "estimatedMinutes": 4,
          "notes": "Introduces anatomy needed for recognizing and managing airway patency problems."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Respiratory system anatomy and foundational assessment",
          "patientConditionType": "Basic localization of respiratory impairment",
          "conditionTags": [
            "upper airway obstruction",
            "lower airway narrowing",
            "alveolar gas exchange impairment",
            "pleural limitation",
            "diaphragm weakness"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "student lab, classroom, acute care orientation, simulation"
        },
        {
          "patientConditionCategory": "Respiratory system anatomy and foundational assessment",
          "patientConditionType": "Clinical integration of airflow pathway and support structures",
          "conditionTags": [
            "airflow pathway",
            "conducting zone",
            "respiratory zone",
            "bronchial tree",
            "pleura",
            "phrenic nerve"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "student lab, classroom, simulation, early clinical practice"
        }
      ],
      "sourceFile": "RP_1_2_Basic_Respiratory_Anatomy.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "physiology-foundations",
      "moduleTitle": "Foundations of Respiratory Physiology",
      "lessonId": "rp-1-3",
      "lessonTitle": "Mechanics of Ventilation",
      "displayTitle": "Mechanics of Ventilation",
      "href": "/physiology/RP_1_3_Mechanics_of_Ventilation",
      "url": "/physiology/RP_1_3_Mechanics_of_Ventilation",
      "estimatedMinutes": 45,
      "patientAge": [
        "adult",
        "pediatric",
        "neonatal foundational physiology"
      ],
      "topics": [
        "mechanics of ventilation",
        "pressure gradients",
        "airflow",
        "inhalation sequence",
        "diaphragm",
        "phrenic nerve",
        "intrathoracic pressure",
        "atmospheric pressure",
        "exhalation",
        "elastic recoil",
        "airway resistance",
        "lung compliance",
        "work of breathing",
        "accessory muscles",
        "air trapping"
      ],
      "activityTypes": [
        "fill-sort",
        "flashcard-deck",
        "guided-case",
        "knowledge-check",
        "multi-select",
        "sequence",
        "single-select",
        "video"
      ],
      "activities": [
        {
          "id": "rp_1_3_overview_video",
          "type": "video",
          "title": "2-Minute Mechanics of Ventilation Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_3_precheck",
          "type": "single-select",
          "title": "Mechanics Precheck",
          "required": true,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_3_pressure_check",
          "type": "multi-select",
          "title": "Pressure Concept Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_1_3_inhalation_sequence",
          "type": "sequence",
          "title": "Inhalation Sequence",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_3_resistance_compliance_check",
          "type": "single-select",
          "title": "Resistance and Compliance Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_1_3_assignment_practice",
          "type": "fill-sort",
          "title": "Assignment Practice",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_1_3_guided_case",
          "type": "guided-case",
          "title": "Guided Mechanics Case",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_3_knowledge_check",
          "type": "knowledge-check",
          "title": "Mechanics Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_1_3_flashcards",
          "type": "flashcard-deck",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 6
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "single-select",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_3_precheck",
            "rp_1_3_guided_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Assesses work of breathing, respiratory pattern, and signs of ventilatory demand."
        },
        {
          "outlineId": "BOK-I.B.3",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_3_guided_case",
            "rp_1_3_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Connects wheezing, prolonged exhalation, and accessory muscle use with ventilation mechanics."
        },
        {
          "outlineId": "BOK-I.C.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sequence",
            "fill-sort",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_3_inhalation_sequence",
            "rp_1_3_assignment_practice",
            "rp_1_3_knowledge_check"
          ],
          "estimatedMinutes": 12,
          "notes": "Applies mechanics of spontaneous ventilation including pressure gradients and tidal ventilation concepts."
        },
        {
          "outlineId": "BOK-I.C.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "single-select",
            "fill-sort",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_3_resistance_compliance_check",
            "rp_1_3_assignment_practice",
            "rp_1_3_guided_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Covers pulmonary compliance and airway resistance concepts."
        },
        {
          "outlineId": "BOK-I.D.4",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sequence",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_3_inhalation_sequence",
            "rp_1_3_guided_case",
            "rp_1_3_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Evaluates mechanics-related clinical problems including incomplete exhalation and muscle fatigue."
        },
        {
          "outlineId": "BOK-I.D.9",
          "coverageLevel": "assessed",
          "evidenceType": [
            "single-select",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_3_resistance_compliance_check",
            "rp_1_3_guided_case",
            "rp_1_3_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Evaluates resistance and compliance effects on breathing mechanics."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "introduced",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_3_guided_case",
            "rp_1_3_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Relates mechanics to future oxygenation and ventilation support decisions."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Foundational ventilatory mechanics",
          "patientConditionType": "Increased work of breathing or abnormal ventilation mechanics",
          "conditionTags": [
            "accessory muscle use",
            "wheezing",
            "prolonged exhalation",
            "increased airway resistance",
            "decreased compliance",
            "air trapping",
            "respiratory muscle fatigue"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "classroom, student lab, simulation, acute care orientation"
        },
        {
          "patientConditionCategory": "Foundational ventilatory mechanics",
          "patientConditionType": "Resistance, compliance, and pressure-gradient interpretation",
          "conditionTags": [
            "pressure gradient",
            "inhalation sequence",
            "diaphragm",
            "phrenic nerve",
            "elastic recoil",
            "work of breathing"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "classroom, simulation, early clinical practice"
        }
      ],
      "sourceFile": "RP_1_3_Mechanics_of_Ventilation.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "physiology-foundations",
      "moduleTitle": "Foundations of Respiratory Physiology",
      "lessonId": "rp-1-4",
      "lessonTitle": "Lung Volumes and Capacities",
      "displayTitle": "Lung Volumes and Capacities",
      "href": "/physiology/RP_1_4_Lung_Volumes_and_Capacities",
      "url": "/physiology/RP_1_4_Lung_Volumes_and_Capacities",
      "estimatedMinutes": 45,
      "patientAge": [
        "adult",
        "pediatric foundational physiology",
        "geriatric"
      ],
      "topics": [
        "lung volumes",
        "lung capacities",
        "tidal volume",
        "inspiratory reserve volume",
        "expiratory reserve volume",
        "residual volume",
        "inspiratory capacity",
        "functional residual capacity",
        "vital capacity",
        "total lung capacity",
        "spirogram",
        "air trapping",
        "obstructive pattern",
        "restrictive pattern",
        "pulmonary function testing"
      ],
      "activityTypes": [
        "calculation",
        "flashcard-deck",
        "guided-case",
        "knowledge-check",
        "matching",
        "single-select",
        "sorting",
        "video"
      ],
      "activities": [
        {
          "id": "rp_1_4_overview_video",
          "type": "video",
          "title": "2-Minute Lung Volumes Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "rp_1_4_spirogram_concept_check",
          "type": "single-select",
          "title": "Spirogram Concept Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_1_4_volume_matching",
          "type": "matching",
          "title": "Volume Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_1_4_capacity_calculation",
          "type": "calculation",
          "title": "Capacity Calculation Practice",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_4_assignment_practice",
          "type": "sorting",
          "title": "Assignment Practice: Label the Volume or Capacity",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_1_4_guided_case",
          "type": "guided-case",
          "title": "Guided Lung Volume Case",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_1_4_knowledge_check",
          "type": "knowledge-check",
          "title": "Lung Volumes Knowledge Check",
          "required": true,
          "estimatedMinutes": 7
        },
        {
          "id": "rp_1_4_flashcards",
          "type": "flashcard-deck",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 6
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.3",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "instruction",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_4_spirogram_concept_check",
            "rp_1_4_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Reviews lung volume terminology used in pulmonary function testing."
        },
        {
          "outlineId": "BOK-I.C.3",
          "coverageLevel": "applied",
          "evidenceType": [
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_4_capacity_calculation",
            "rp_1_4_assignment_practice",
            "rp_1_4_guided_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Uses tidal volume and vital capacity concepts within lung-volume interpretation."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation"
          ],
          "interactionIds": [
            "rp_1_4_capacity_calculation"
          ],
          "estimatedMinutes": 6,
          "notes": "Calculates IC, FRC, VC, and TLC from component lung volumes."
        },
        {
          "outlineId": "BOK-I.C.20",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "single-select",
            "matching"
          ],
          "interactionIds": [
            "rp_1_4_overview_video",
            "rp_1_4_spirogram_concept_check",
            "rp_1_4_volume_matching",
            "rp_1_4_assignment_practice",
            "rp_1_4_guided_case",
            "rp_1_4_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Applies foundational spirometry/spirogram interpretation concepts."
        },
        {
          "outlineId": "BOK-I.C.22",
          "coverageLevel": "assessed",
          "evidenceType": [
            "matching",
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_4_overview_video",
            "rp_1_4_volume_matching",
            "rp_1_4_capacity_calculation",
            "rp_1_4_assignment_practice",
            "rp_1_4_guided_case",
            "rp_1_4_knowledge_check"
          ],
          "estimatedMinutes": 14,
          "notes": "Identifies and calculates lung volumes and capacities."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_1_4_capacity_calculation",
            "rp_1_4_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Evaluates calculated lung capacities and reserve-volume changes."
        },
        {
          "outlineId": "BOK-I.D.21",
          "coverageLevel": "applied",
          "evidenceType": [
            "single-select",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_4_spirogram_concept_check",
            "rp_1_4_guided_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Interprets basic spirogram patterns relevant to obstruction and restriction."
        },
        {
          "outlineId": "BOK-I.D.23",
          "coverageLevel": "assessed",
          "evidenceType": [
            "matching",
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_1_4_overview_video",
            "rp_1_4_volume_matching",
            "rp_1_4_capacity_calculation",
            "rp_1_4_assignment_practice",
            "rp_1_4_guided_case",
            "rp_1_4_knowledge_check"
          ],
          "estimatedMinutes": 14,
          "notes": "Differentiates obstructive air-trapping and restrictive low-volume patterns."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Pulmonary function and ventilatory mechanics",
          "patientConditionType": "Basic lung volume interpretation",
          "conditionTags": [
            "spirogram",
            "VT",
            "IRV",
            "ERV",
            "RV",
            "VC",
            "TLC"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "classroom, student lab, pulmonary diagnostics orientation, simulation"
        },
        {
          "patientConditionCategory": "Pulmonary function and disease pattern recognition",
          "patientConditionType": "Obstructive versus restrictive lung volume changes",
          "conditionTags": [
            "air trapping",
            "increased residual volume",
            "increased FRC",
            "decreased TLC",
            "decreased vital capacity"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "pulmonary diagnostics, acute care orientation, simulation, board preparation"
        }
      ],
      "sourceFile": "RP_1_4_Lung_Volumes_and_Capacities.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "acid-base-gas-transport-and-control",
      "moduleTitle": "Acid-Base, Gas Transport, and Respiratory Control",
      "lessonId": "rp-2-1-acid-base-physiology-kidney-compensation",
      "lessonTitle": "Acid-Base Physiology & Kidney Compensation",
      "displayTitle": "Acid-Base Physiology & Kidney Compensation",
      "href": "/physiology/RP_2_1_Acid_Base_Physiology_Kidney_Compensation",
      "url": "/physiology/RP_2_1_Acid_Base_Physiology_Kidney_Compensation",
      "estimatedMinutes": 75,
      "patientAge": [
        "adult",
        "older adult",
        "adolescent concepts where applicable"
      ],
      "topics": [
        "acid-base physiology",
        "carbon dioxide transport",
        "bicarbonate buffer system",
        "carbonic anhydrase",
        "chloride shift",
        "Bohr effect",
        "Haldane effect",
        "respiratory control centers",
        "dorsal respiratory group",
        "ventral respiratory group",
        "pneumotaxic center",
        "apneustic center",
        "respiratory acidosis",
        "respiratory alkalosis",
        "metabolic acidosis",
        "metabolic alkalosis",
        "anion gap",
        "delta ratio",
        "renal compensation",
        "bicarbonate reabsorption",
        "titratable acid",
        "ammoniagenesis",
        "Winter formula",
        "ABG interpretation",
        "mixed acid-base disorders",
        "Kussmaul respirations"
      ],
      "activityTypes": [
        "calculation-sort",
        "classification",
        "flashcards",
        "guided-case",
        "knowledge-check",
        "matching",
        "quiz",
        "video"
      ],
      "activities": [
        {
          "id": "rp_2_1_overview_video",
          "type": "video",
          "title": "Acid-Base & Kidney Compensation Overview",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_2_1_equilibrium_check",
          "type": "quiz",
          "title": "Equilibrium Concept Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_2_1_co2_transport_forms",
          "type": "matching",
          "title": "CO2 Transport Forms",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_1_bohr_haldane_check",
          "type": "quiz",
          "title": "Bohr-Haldane Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_1_control_center_matching",
          "type": "matching",
          "title": "Control Center Matching",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_1_disorder_classification",
          "type": "classification",
          "title": "Disorder Classification Sort",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_1_anion_gap_sort",
          "type": "calculation-sort",
          "title": "Anion Gap and Delta Ratio Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_1_alkalosis_maintenance_check",
          "type": "quiz",
          "title": "Alkalosis Maintenance Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_1_renal_mechanism_sort",
          "type": "matching",
          "title": "Renal Mechanism Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_1_worked_abg_cases",
          "type": "guided-case",
          "title": "Worked ABG Cases",
          "required": true,
          "estimatedMinutes": 14
        },
        {
          "id": "rp_2_1_knowledge_check",
          "type": "knowledge-check",
          "title": "Acid-Base Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_2_1_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 5
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_1_disorder_classification",
            "rp_2_1_worked_abg_cases"
          ],
          "estimatedMinutes": 7,
          "notes": "Reviews ABG, electrolyte, and renal-function data for acid-base interpretation."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_1_worked_abg_cases",
            "rp_2_1_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Determines patient condition from acid-base, compensation, and clinical-context clues."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_1_disorder_classification",
            "rp_2_1_worked_abg_cases"
          ],
          "estimatedMinutes": 5,
          "notes": "Connects breathing pattern, mental status, and work of breathing to acid-base status."
        },
        {
          "outlineId": "BOK-I.C.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "classification",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_1_disorder_classification",
            "rp_2_1_worked_abg_cases",
            "rp_2_1_knowledge_check"
          ],
          "estimatedMinutes": 16,
          "notes": "Interprets ABG variables and acid-base patterns."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation-sort",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_1_anion_gap_sort",
            "rp_2_1_worked_abg_cases"
          ],
          "estimatedMinutes": 10,
          "notes": "Calculates anion gap and delta ratio as acid-base interpretation support."
        },
        {
          "outlineId": "BOK-I.D.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "classification",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_1_disorder_classification",
            "rp_2_1_worked_abg_cases",
            "rp_2_1_knowledge_check"
          ],
          "estimatedMinutes": 16,
          "notes": "Evaluates ABG results and expected compensation."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation-sort",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_1_anion_gap_sort",
            "rp_2_1_worked_abg_cases"
          ],
          "estimatedMinutes": 10,
          "notes": "Evaluates cardiopulmonary calculations related to acid-base interpretation."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_1_worked_abg_cases",
            "rp_2_1_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Connects ventilation changes to PaCO2 and pH correction."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_1_worked_abg_cases",
            "rp_2_1_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Supports care-plan recommendations when ABG interpretation indicates risk or mixed disorder."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Acid-base imbalance / ABG interpretation / respiratory failure risk",
          "conditionTags": [
            "respiratory acidosis",
            "respiratory alkalosis",
            "metabolic acidosis",
            "metabolic alkalosis",
            "mixed acid-base disorder",
            "renal compensation"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "ICU",
            "ED",
            "acute care",
            "laboratory review",
            "mechanical ventilation assessment"
          ]
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Inappropriate compensation or mixed acid-base disorder requiring escalation",
          "conditionTags": [
            "Winter formula",
            "anion gap",
            "delta ratio",
            "COPD exacerbation",
            "DKA",
            "vomiting",
            "diuretics",
            "renal tubular acidosis"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "ICU",
            "ED",
            "acute care",
            "rapid response",
            "transport"
          ]
        }
      ],
      "sourceFile": "RP_2_1_Acid_Base_Physiology_Kidney_Compensation.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "respiratory-control-vq-and-gas-exchange",
      "moduleTitle": "Respiratory Control, Ventilation, and V/Q Matching",
      "lessonId": "rp-2-2-neural-control-ventilation-respiratory-drives-vq-ratio",
      "lessonTitle": "Neural Control of Ventilation, Respiratory Drives & V/Q Ratio",
      "displayTitle": "Neural Control of Ventilation, Respiratory Drives & V/Q Ratio",
      "href": "/physiology/RP_2_2_Neural_Control_Ventilation_VQ_Ratio",
      "url": "/physiology/RP_2_2_Neural_Control_Ventilation_VQ_Ratio",
      "estimatedMinutes": 80,
      "patientAge": [
        "adult",
        "older adult",
        "adolescent concepts where applicable"
      ],
      "topics": [
        "neural control of ventilation",
        "hypercapnic respiratory drive",
        "hypoxemic respiratory drive",
        "central chemoreceptors",
        "peripheral chemoreceptors",
        "carotid body",
        "aortic body",
        "blood-brain barrier",
        "CSF pH",
        "dorsal respiratory group",
        "ventral respiratory group",
        "phrenic nerve",
        "minute ventilation",
        "alveolar ventilation",
        "COPD oxygen target",
        "oxygen-induced hypercapnia",
        "V/Q ratio",
        "V/Q mismatch",
        "low V/Q",
        "high V/Q",
        "dead space",
        "shunt",
        "100 percent oxygen shunt test",
        "P(A-a)O2 gradient",
        "pulmonary embolism",
        "ARDS",
        "asthma V/Q mismatch",
        "refractory hypoxemia"
      ],
      "activityTypes": [
        "classification",
        "flashcards",
        "guided-case",
        "knowledge-check",
        "matching",
        "quiz",
        "sequencing",
        "video"
      ],
      "activities": [
        {
          "id": "rp_2_2_overview_video",
          "type": "video",
          "title": "Respiratory Drives and V/Q Ratio Overview",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_2_2_hypercapnic_cascade_sort",
          "type": "sequencing",
          "title": "Hypercapnic Cascade Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_2_peripheral_chemoreceptor_sort",
          "type": "matching",
          "title": "Peripheral Chemoreceptor Sort",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_2_drive_classification_quiz",
          "type": "quiz",
          "title": "Drive Classification Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_2_copd_oxygen_management_quiz",
          "type": "quiz",
          "title": "COPD Oxygen Management Quiz",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_2_vq_state_classification",
          "type": "classification",
          "title": "V/Q State Classification",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_2_shunt_quiz",
          "type": "quiz",
          "title": "Shunt Quiz",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_2_clinical_causes_sort",
          "type": "matching",
          "title": "Clinical Causes Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_2_integrated_case",
          "type": "guided-case",
          "title": "Integrated Clinical Case",
          "required": true,
          "estimatedMinutes": 12
        },
        {
          "id": "rp_2_2_knowledge_check",
          "type": "knowledge-check",
          "title": "Neural Control Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_2_2_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 5
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_overview_video",
            "rp_2_2_drive_classification_quiz",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Reviews ABG values and oxygen response for respiratory-drive and V/Q abnormalities."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_vq_state_classification",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Determines condition from COPD oxygen response, V/Q mismatch, dead space, or shunt cues."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_overview_video",
            "rp_2_2_drive_classification_quiz",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Assesses respiratory rate, tidal volume, mental status, and signs of ventilatory-drive suppression."
        },
        {
          "outlineId": "BOK-I.C.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "quiz",
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_overview_video",
            "rp_2_2_drive_classification_quiz",
            "rp_2_2_vq_state_classification",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 12,
          "notes": "Uses ABG values to classify V/Q and respiratory-drive patterns."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_vq_state_classification",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Uses P(A-a)O2 and oxygen-response logic as cardiopulmonary calculation support."
        },
        {
          "outlineId": "BOK-I.D.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "quiz",
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_overview_video",
            "rp_2_2_drive_classification_quiz",
            "rp_2_2_vq_state_classification",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 12,
          "notes": "Evaluates ABG patterns associated with shunt, dead space, and hypercapnia."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_2_integrated_case",
            "rp_2_2_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Evaluates calculation-supported V/Q and oxygen-response findings."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_copd_oxygen_management_quiz",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Applies COPD oxygen safety and hypoxemia escalation concepts."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_2_copd_oxygen_management_quiz",
            "rp_2_2_integrated_case",
            "rp_2_2_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Selects and titrates oxygen therapy based on respiratory-drive and V/Q physiology."
        },
        {
          "outlineId": "BOK-III.C.6",
          "coverageLevel": "introduced",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_2_shunt_quiz",
            "rp_2_2_integrated_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Introduces recruitment/PEEP-type escalation for shunt physiology."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Respiratory drive abnormality / COPD oxygen-induced hypercapnia / acute hypercapnic respiratory failure",
          "conditionTags": [
            "COPD",
            "hypercapnic drive blunting",
            "hypoxemic drive",
            "oxygen titration",
            "BiPAP",
            "respiratory acidosis"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "ED",
            "ICU",
            "acute care",
            "transport",
            "rapid response"
          ]
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "V/Q mismatch, shunt, or dead-space ventilation causing hypoxemia",
          "conditionTags": [
            "pulmonary embolism",
            "ARDS",
            "asthma",
            "pneumonia",
            "shunt",
            "dead space",
            "low V/Q",
            "high V/Q",
            "refractory hypoxemia"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "ED",
            "ICU",
            "acute care",
            "mechanical ventilation assessment"
          ]
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Hypoxemia requiring oxygen response interpretation and escalation",
          "conditionTags": [
            "100 percent oxygen challenge",
            "P(A-a)O2 gradient",
            "oxygen response",
            "PEEP",
            "prone positioning",
            "alveolar recruitment"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "ICU",
            "ED",
            "acute care"
          ]
        }
      ],
      "sourceFile": "RP_2_2_Neural_Control_Ventilation_VQ_Ratio.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "respiratory-control-vq-and-gas-exchange",
      "moduleTitle": "Respiratory Control, Ventilation, Oxygenation, and V/Q Matching",
      "lessonId": "rp-2-3-assessment-treatment-hypoxia-vq-calculations-physiologic-oxygenation",
      "lessonTitle": "Assessment & Treatment of Hypoxia, V/Q Calculations & Physiologic Oxygenation",
      "displayTitle": "Assessment & Treatment of Hypoxia, V/Q Calculations & Physiologic Oxygenation",
      "href": "/physiology/RP_2_3_Assessment_Treatment_Hypoxia_VQ_Calculations",
      "url": "/physiology/RP_2_3_Assessment_Treatment_Hypoxia_VQ_Calculations",
      "estimatedMinutes": 80,
      "patientAge": [
        "adult",
        "older adult",
        "adolescent concepts where applicable"
      ],
      "topics": [
        "hypoxemia",
        "hypoxia",
        "oxygenation assessment",
        "acute hypoxemia signs",
        "cyanosis late sign",
        "pulse oximetry",
        "arterial blood gas PaO2",
        "age-adjusted PaO2",
        "altitude-adjusted PaO2",
        "barometric pressure",
        "minute ventilation",
        "cardiac output",
        "stroke volume",
        "V/Q ratio calculation",
        "low V/Q",
        "high V/Q",
        "shunt",
        "dead space",
        "pulmonary embolism",
        "COPD oxygen management",
        "PEEP",
        "oxygen therapy",
        "refractory hypoxemia",
        "physiologic oxygenation",
        "tissue hypoxia",
        "anemic hypoxia",
        "cardiac output and oxygen delivery"
      ],
      "activityTypes": [
        "calculation",
        "calculation-sort",
        "classification",
        "diagnostic-sort",
        "flashcards",
        "guided-case",
        "knowledge-check",
        "matching",
        "quiz",
        "video"
      ],
      "activities": [
        {
          "id": "rp_2_3_overview_video",
          "type": "video",
          "title": "Hypoxemia Assessment and V/Q Calculations Overview",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_2_3_hypoxemia_vs_hypoxia_quiz",
          "type": "quiz",
          "title": "Hypoxemia vs Hypoxia Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_3_eleven_stages_sort",
          "type": "matching",
          "title": "Eleven Stages Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_3_severity_classification_sort",
          "type": "classification",
          "title": "Severity Classification Sort",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_3_age_altitude_sort",
          "type": "calculation-sort",
          "title": "Age and Altitude Adjustment Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_3_vq_calculation_practice",
          "type": "calculation",
          "title": "V/Q Calculation Practice",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_2_3_vq_interpretation_sort",
          "type": "classification",
          "title": "V/Q Interpretation Sort",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_3_shunt_dead_space_sort",
          "type": "diagnostic-sort",
          "title": "Shunt Dead Space Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_3_four_case_studies",
          "type": "guided-case",
          "title": "Four Case Studies",
          "required": true,
          "estimatedMinutes": 14
        },
        {
          "id": "rp_2_3_knowledge_check",
          "type": "knowledge-check",
          "title": "RP 2.3 Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_2_3_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 5
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_overview_video",
            "rp_2_3_hypoxemia_vs_hypoxia_quiz",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Reviews ABG and hemoglobin context for oxygenation status."
        },
        {
          "outlineId": "BOK-I.A.7",
          "coverageLevel": "applied",
          "evidenceType": [
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_severity_classification_sort",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Uses SpO2, PaO2, and clinical trends to evaluate oxygenation status."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_3_four_case_studies",
            "rp_2_3_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Determines patient condition from hypoxemia, hypoxia, V/Q, shunt, and dead-space patterns."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "matching",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_eleven_stages_sort",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 8,
          "notes": "Assesses progressive acute hypoxemia signs and decompensation clues."
        },
        {
          "outlineId": "BOK-I.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_severity_classification_sort",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Uses noninvasive monitoring data such as SpO2 trends in oxygenation assessment."
        },
        {
          "outlineId": "BOK-I.C.5",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_overview_video",
            "rp_2_3_hypoxemia_vs_hypoxia_quiz",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Uses ABG PaO2 and related values for oxygenation assessment."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation-sort",
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_eleven_stages_sort",
            "rp_2_3_age_altitude_sort",
            "rp_2_3_vq_calculation_practice",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 16,
          "notes": "Calculates age-adjusted PaO2, altitude-adjusted PaO2, minute ventilation, cardiac output, and V/Q ratio."
        },
        {
          "outlineId": "BOK-I.D.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "classification",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_severity_classification_sort",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Evaluates noninvasive oxygenation data and severity categories."
        },
        {
          "outlineId": "BOK-I.D.5",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_overview_video",
            "rp_2_3_hypoxemia_vs_hypoxia_quiz",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 6,
          "notes": "Evaluates ABG oxygenation findings."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation-sort",
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_2_3_eleven_stages_sort",
            "rp_2_3_age_altitude_sort",
            "rp_2_3_vq_calculation_practice",
            "rp_2_3_four_case_studies"
          ],
          "estimatedMinutes": 16,
          "notes": "Evaluates calculation-supported oxygenation and V/Q findings."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "diagnostic-sort",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_3_shunt_dead_space_sort",
            "rp_2_3_four_case_studies",
            "rp_2_3_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Recommends actions to minimize hypoxemia based on mechanism."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "diagnostic-sort",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_3_shunt_dead_space_sort",
            "rp_2_3_four_case_studies",
            "rp_2_3_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Supports oxygenation and ventilation through oxygen, PEEP/CPAP/NIV, and escalation reasoning."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_2_3_four_case_studies",
            "rp_2_3_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Recommends escalation when oxygenation data or V/Q calculations worsen."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Hypoxemia or tissue hypoxia requiring recognition and intervention",
          "conditionTags": [
            "hypoxemia",
            "hypoxia",
            "cyanosis",
            "confusion",
            "lactic acidosis",
            "SpO2",
            "PaO2",
            "oxygen therapy"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "ED",
            "ICU",
            "acute care",
            "rapid response",
            "transport"
          ]
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "V/Q mismatch, shunt, dead space, or pulmonary embolism physiology",
          "conditionTags": [
            "V/Q ratio",
            "minute ventilation",
            "cardiac output",
            "shunt",
            "dead space",
            "PE",
            "COPD",
            "atelectasis",
            "pneumonia",
            "PEEP"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "ED",
            "ICU",
            "acute care",
            "mechanical ventilation assessment"
          ]
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Oxygenation calculations and individualized oxygen targets",
          "conditionTags": [
            "age-adjusted PaO2",
            "altitude-adjusted PaO2",
            "barometric pressure",
            "oxygen target",
            "refractory hypoxemia"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "acute care",
            "outpatient assessment",
            "altitude considerations",
            "board exam scenarios"
          ]
        }
      ],
      "sourceFile": "RP_2_3_Assessment_Treatment_Hypoxia_VQ_Calculations.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "gas-exchange-oxygenation-and-ventilatory-control",
      "moduleTitle": "Gas Exchange, Oxygenation, and Ventilatory Control",
      "lessonId": "rp_2_4_sleep_disordered_breathing_sleep_studies_clinical_interpretation",
      "lessonTitle": "Sleep-Disordered Breathing, Sleep Studies & Clinical Interpretation",
      "displayTitle": "RP 2.4 Sleep-Disordered Breathing, Sleep Studies & Clinical Interpretation",
      "href": "/physiology/RP_2_4_Sleep_Disordered_Breathing_Sleep_Studies",
      "url": "/physiology/RP_2_4_Sleep_Disordered_Breathing_Sleep_Studies",
      "estimatedMinutes": 70,
      "patientAge": [
        "Adult",
        "Pediatric"
      ],
      "topics": [
        "sleep-disordered breathing",
        "obstructive sleep apnea",
        "central sleep apnea",
        "apnea",
        "hypopnea",
        "snoring",
        "AHI",
        "ODI",
        "polysomnography",
        "home sleep study",
        "sleep architecture",
        "REM sleep",
        "oxygen desaturation",
        "CPAP",
        "BiPAP",
        "backup rate",
        "positional therapy",
        "Cheyne-Stokes respiration",
        "sleep-related hypoventilation",
        "RPSGT"
      ],
      "activityTypes": [
        "calculation",
        "flashcards",
        "guided_case",
        "knowledge_check",
        "quiz",
        "sorting",
        "video"
      ],
      "activities": [
        {
          "id": "rp_2_4_overview_video",
          "type": "video",
          "title": "3-Minute Overview: Sleep-Disordered Breathing",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_2_4_sleep_architecture_quiz",
          "type": "quiz",
          "title": "Sleep Architecture Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_4_event_type_classification",
          "type": "sorting",
          "title": "Event Type Classification",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_ahi_calculation",
          "type": "calculation",
          "title": "AHI Calculation",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_oxygen_data_interpretation",
          "type": "sorting",
          "title": "Oxygen Data Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_osa_csa_sort",
          "type": "sorting",
          "title": "OSA vs CSA Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_positional_therapy_quiz",
          "type": "quiz",
          "title": "Positional Therapy Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_2_4_study_type_selection",
          "type": "sorting",
          "title": "Study Type Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_treatment_selection",
          "type": "sorting",
          "title": "Treatment Selection Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_2_4_sleep_study_clinical_case",
          "type": "guided_case",
          "title": "Sleep Study Clinical Case",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "rp_2_4_knowledge_check",
          "type": "knowledge_check",
          "title": "Sleep Study Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_2_4_glossary_deck",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.6",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_oxygen_data_interpretation",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Interprets sleep study data, event indices, symptoms, and oxygen saturation trends."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_positional_therapy_quiz",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Assesses sleep-disordered breathing risk, symptoms, and nocturnal hypoxemia clues."
        },
        {
          "outlineId": "BOK-I.C.14",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_oxygen_data_interpretation",
            "rp_2_4_study_type_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Recognizes overnight oximetry and sleep-study monitoring data."
        },
        {
          "outlineId": "BOK-I.C.15",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_treatment_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Recognizes CPAP/NPPV titration concepts in sleep-disordered breathing."
        },
        {
          "outlineId": "BOK-I.D.15",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sorting",
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_2_4_oxygen_data_interpretation",
            "rp_2_4_sleep_study_clinical_case",
            "rp_2_4_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Evaluates overnight oximetry/oxygen desaturation data."
        },
        {
          "outlineId": "BOK-I.D.16",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_ahi_calculation",
            "rp_2_4_treatment_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 12,
          "notes": "Calculates/interprets AHI and matches PAP treatment to event type."
        },
        {
          "outlineId": "BOK-I.E.12",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_study_type_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Selects home sleep study versus polysomnography based on scenario."
        },
        {
          "outlineId": "BOK-II.A.4",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_treatment_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Differentiates CPAP, BiPAP, and backup-rate ventilation interfaces for sleep therapy."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_2_4_treatment_selection",
            "rp_2_4_sleep_study_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Selects oxygenation/ventilation support for OSA, CSA, and nocturnal hypoventilation."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_2_4_sleep_study_clinical_case",
            "rp_2_4_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Uses event type, AHI, desaturation burden, and symptoms to modify treatment plans."
        },
        {
          "outlineId": "BOK-III.I.2",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_2_4_sleep_study_clinical_case",
            "rp_2_4_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Communicates PAP rationale, positional therapy limits, and adherence implications."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Sleep-disordered breathing / obstructive sleep apnea",
          "conditionTags": [
            "OSA",
            "AHI",
            "CPAP",
            "oxygen desaturation",
            "positional OSA"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "Outpatient / sleep laboratory / home care"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Central sleep apnea / Cheyne-Stokes respiration",
          "conditionTags": [
            "CSA",
            "central apnea",
            "BiPAP backup rate",
            "heart failure",
            "opioids"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Sleep laboratory / inpatient / home care"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Chronic cardiopulmonary disease with nocturnal hypoxemia",
          "conditionTags": [
            "COPD",
            "sleep-related hypoventilation",
            "supplemental oxygen",
            "NIV"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Outpatient / home care / inpatient"
        },
        {
          "patientConditionCategory": "Children-Pediatric",
          "patientConditionType": "Sleep-disordered breathing risk and polysomnography interpretation",
          "conditionTags": [
            "pediatric OSA",
            "tonsils",
            "sleep study"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "Outpatient / sleep laboratory"
        }
      ],
      "sourceFile": "RP_2_4_Sleep_Disordered_Breathing_Sleep_Studies.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "cardiovascular-pulmonary-integration",
      "moduleTitle": "Cardiovascular System, Hemodynamics, and Cardiopulmonary Integration",
      "lessonId": "rp-3-1-cardiovascular-system-cardiac-electrophysiology",
      "lessonTitle": "Cardiovascular System & Cardiac Electrophysiology",
      "displayTitle": "RP 3.1 Cardiovascular System & Cardiac Electrophysiology",
      "href": "/physiology/RP_3_1_Cardiovascular_System_Cardiac_Electrophysiology",
      "url": "/physiology/RP_3_1_Cardiovascular_System_Cardiac_Electrophysiology",
      "estimatedMinutes": 80,
      "patientAge": [
        "Adult",
        "Geriatric",
        "Pediatric"
      ],
      "topics": [
        "heart chambers",
        "blood flow pathway",
        "cardiac valves",
        "cardiac cycle",
        "hemodynamics",
        "cardiac output",
        "stroke volume",
        "systemic vascular resistance",
        "Frank-Starling law",
        "action potential",
        "refractory periods",
        "electrical conduction system",
        "SA node",
        "AV node",
        "Bundle of His",
        "Purkinje fibers",
        "ECG waveforms",
        "heart sounds",
        "electrolyte effects on ECG",
        "hyperkalemia",
        "hypokalemia",
        "calcium abnormalities"
      ],
      "activityTypes": [
        "calculation",
        "flashcards",
        "guided-case",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "rp_3_1_overview_video",
          "type": "video",
          "title": "3-Minute Overview: Cardiac Anatomy & Electrophysiology",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_3_1_blood_flow_quiz",
          "type": "quiz",
          "title": "Blood Flow Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_3_1_valve_location_sort",
          "type": "sort",
          "title": "Valve Location Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_cardiac_cycle_sort",
          "type": "sort",
          "title": "Cardiac Cycle Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_cardiac_output_calculation",
          "type": "calculation",
          "title": "Cardiac Output Calculation",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_action_potential_sort",
          "type": "sort",
          "title": "Action Potential Phase Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_conduction_pathway_sort",
          "type": "sort",
          "title": "Conduction Pathway Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_ecg_waveform_sort",
          "type": "sort",
          "title": "ECG Waveform Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_1_cardiac_case",
          "type": "guided-case",
          "title": "Cardiac Electrophysiology Case",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "rp_3_1_knowledge_check",
          "type": "knowledge-check",
          "title": "Cardiac Electrophysiology Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_3_1_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "sort",
            "guided-case"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Correlates electrolyte abnormalities with ECG and cardiopulmonary findings."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided-case"
          ],
          "interactionIds": [
            "rp_3_1_blood_flow_quiz",
            "rp_3_1_cardiac_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Assesses vital signs and signs of hemodynamic instability."
        },
        {
          "outlineId": "BOK-I.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sort",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_3_1_ecg_waveform_sort",
            "rp_3_1_cardiac_case",
            "rp_3_1_knowledge_check"
          ],
          "estimatedMinutes": 14,
          "notes": "Interprets ECG waveforms, conduction pathway, and rhythm-relevant cardiac electrophysiology."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_output_calculation"
          ],
          "estimatedMinutes": 5,
          "notes": "Calculates cardiac output from heart rate and stroke volume."
        },
        {
          "outlineId": "BOK-I.D.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sort",
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_3_1_ecg_waveform_sort",
            "rp_3_1_cardiac_case",
            "rp_3_1_knowledge_check"
          ],
          "estimatedMinutes": 14,
          "notes": "Evaluates ECG findings and electrolyte-related ECG changes."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_output_calculation",
            "rp_3_1_cardiac_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Evaluates cardiac output calculations as part of oxygen-delivery reasoning."
        },
        {
          "outlineId": "BOK-I.D.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "calculation",
            "guided-case"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_output_calculation",
            "rp_3_1_cardiac_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Applies hemodynamic concepts including heart rate, stroke volume, cardiac output, and SVR."
        },
        {
          "outlineId": "BOK-II.B.4",
          "coverageLevel": "introduced",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_case",
            "rp_3_1_knowledge_check"
          ],
          "estimatedMinutes": 4,
          "notes": "Recognizes cardiovascular monitoring abnormalities as patient-safety concerns."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided-case",
            "knowledge-check"
          ],
          "interactionIds": [
            "rp_3_1_cardiac_case",
            "rp_3_1_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Escalates when rhythm, perfusion, or hemodynamic data indicate unstable oxygen delivery."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Cardiovascular and cardiopulmonary instability",
          "patientConditionType": "conduction delays, bradycardia, electrolyte-related ECG changes, low cardiac output",
          "conditionTags": [
            "AV block",
            "hyperkalemia",
            "bradycardia",
            "hypotension",
            "low cardiac output"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "in hospital, intensive care, emergency care, monitored care"
        },
        {
          "patientConditionCategory": "Respiratory care patients requiring hemodynamic interpretation",
          "patientConditionType": "cardiopulmonary monitoring findings that alter oxygen delivery and intervention priority",
          "conditionTags": [
            "cardiac output",
            "stroke volume",
            "SVR",
            "blood pressure",
            "ECG"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "critical care, emergency care, post-operative care, telemetry"
        }
      ],
      "sourceFile": "RP_3_1_Cardiovascular_System_Cardiac_Electrophysiology.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "cardiovascular-hemodynamics-and-pathology",
      "moduleTitle": "Cardiovascular Hemodynamics and Pathology",
      "lessonId": "rp_3_2_cardiac_pathology_hemodynamics",
      "lessonTitle": "Cardiac Pathology & Hemodynamics",
      "displayTitle": "RP 3.2 Cardiac Pathology & Hemodynamics",
      "href": "/physiology/RP_3_2_Cardiac_Pathology_Hemodynamics",
      "url": "/physiology/RP_3_2_Cardiac_Pathology_Hemodynamics",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Older adult",
        "Pediatric concepts as applicable to congenital valve atresia"
      ],
      "topics": [
        "cardiac pathology",
        "hemodynamics",
        "myocardial ischemia",
        "myocardial injury",
        "myocardial infarction",
        "ST elevation",
        "inverted T waves",
        "Q waves",
        "valve stenosis",
        "valve regurgitation",
        "valve atresia",
        "mitral stenosis",
        "heart failure",
        "CHF",
        "S3 gallop",
        "pulmonary crackles",
        "preload",
        "afterload",
        "contractility",
        "cardiac output",
        "stroke volume",
        "CVP",
        "PAP",
        "PCWP",
        "Swan-Ganz catheter",
        "jugular venous distension",
        "pulse pressure"
      ],
      "activityTypes": [
        "calculation",
        "flashcards",
        "guided_case",
        "knowledge_check",
        "quiz",
        "sorting",
        "video"
      ],
      "activities": [
        {
          "id": "rp_3_2_overview_video",
          "type": "video",
          "title": "3-Minute Overview: Cardiac Pathology & Hemodynamics",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_3_2_ischemia_injury_infarction_ecg_sort",
          "type": "sorting",
          "title": "Ischemia-Injury-Infarction ECG Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_valve_type_sort",
          "type": "sorting",
          "title": "Valve Type Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_valve_complication_sort",
          "type": "sorting",
          "title": "Valve Complication Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_murmur_auscultation_sort",
          "type": "sorting",
          "title": "Murmur Auscultation Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_chf_auscultation_quiz",
          "type": "quiz",
          "title": "CHF Auscultation Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_3_2_sv_determinants_sort",
          "type": "sorting",
          "title": "SV Determinants Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_elevated_pressure_sort",
          "type": "sorting",
          "title": "Elevated Pressure Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_2_physical_assessment_quiz",
          "type": "quiz",
          "title": "Physical Assessment Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_3_2_cardiac_output_calculations",
          "type": "calculation",
          "title": "Cardiac Output Calculations",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_3_2_clinical_case",
          "type": "guided_case",
          "title": "Cardiac Pathology Clinical Case",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "rp_3_2_knowledge_check",
          "type": "knowledge_check",
          "title": "Cardiac Pathology Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_3_2_glossary_deck",
          "type": "flashcards",
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
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 4,
          "notes": "Reviews cardiopulmonary history related to ischemia, valve disease, and heart failure."
        },
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_ischemia_injury_infarction_ecg_sort",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Evaluates cardiac biomarkers and laboratory context with cardiac pathology."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_physical_assessment_quiz",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Assesses perfusion, dyspnea, orthopnea, edema, pulse pressure, and low-output signs."
        },
        {
          "outlineId": "BOK-I.B.3",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "sorting"
          ],
          "interactionIds": [
            "rp_3_2_murmur_auscultation_sort",
            "rp_3_2_chf_auscultation_quiz"
          ],
          "estimatedMinutes": 6,
          "notes": "Assesses auscultation findings including crackles, S3, and murmurs."
        },
        {
          "outlineId": "BOK-I.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_ischemia_injury_infarction_ecg_sort",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Recognizes ischemia, injury, and infarction ECG patterns."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation"
          ],
          "interactionIds": [
            "rp_3_2_cardiac_output_calculations"
          ],
          "estimatedMinutes": 6,
          "notes": "Calculates cardiac output and related hemodynamic values."
        },
        {
          "outlineId": "BOK-I.D.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sorting",
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_2_ischemia_injury_infarction_ecg_sort",
            "rp_3_2_clinical_case",
            "rp_3_2_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Evaluates ECG patterns and clinical implications in cardiac pathology."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_cardiac_output_calculations",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Evaluates cardiac output calculations in hemodynamic interpretation."
        },
        {
          "outlineId": "BOK-I.D.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sorting",
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_elevated_pressure_sort",
            "rp_3_2_physical_assessment_quiz",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 14,
          "notes": "Interprets PAP, PCWP, CVP, cardiac output, pulse pressure, and heart-failure findings."
        },
        {
          "outlineId": "BOK-I.E.11",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_2_clinical_case",
            "rp_3_2_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Recognizes when hemodynamic monitoring data are needed for cardiopulmonary assessment."
        },
        {
          "outlineId": "BOK-II.A.23",
          "coverageLevel": "applied",
          "evidenceType": [
            "sorting",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_2_elevated_pressure_sort",
            "rp_3_2_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Identifies arterial lines, CVP monitoring, and Swan-Ganz pulmonary artery catheter monitoring."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_2_clinical_case",
            "rp_3_2_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Prioritizes oxygenation support for cardiac pulmonary edema and post-MI heart failure."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_2_clinical_case",
            "rp_3_2_knowledge_check"
          ],
          "estimatedMinutes": 6,
          "notes": "Uses evolving ECG, pressure, and assessment findings to escalate and communicate deterioration."
        },
        {
          "outlineId": "BOK-III.I.1",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_2_clinical_case",
            "rp_3_2_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Communicates cardiac output and hemodynamic interpretation to the interprofessional team."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Acute coronary syndrome / myocardial ischemia-injury-infarction",
          "conditionTags": [
            "inverted T waves",
            "ST elevation",
            "Q waves",
            "troponin",
            "STEMI"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "Emergency department / ICU / acute care"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Congestive heart failure / cardiogenic pulmonary edema",
          "conditionTags": [
            "S3 gallop",
            "bibasilar crackles",
            "PCWP",
            "pulmonary edema",
            "low output"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "ICU / acute care / telemetry"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Valve disease and hemodynamic complications",
          "conditionTags": [
            "mitral stenosis",
            "regurgitation",
            "atrial fibrillation",
            "stroke risk",
            "endocarditis"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": "acute care / cardiology / ICU"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Invasive hemodynamic monitoring interpretation",
          "conditionTags": [
            "CVP",
            "PAP",
            "PCWP",
            "Swan-Ganz",
            "cardiac output",
            "stroke volume"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "ICU / critical care"
        }
      ],
      "sourceFile": "RP_3_2_Cardiac_Pathology_Hemodynamics.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "cardiopulmonary-integration",
      "moduleTitle": "Cardiopulmonary Integration and Hemodynamics",
      "lessonId": "rp-3-3-fluid-volume-overload",
      "lessonTitle": "Fluid Volume Overload",
      "displayTitle": "RP 3.3 Fluid Volume Overload",
      "href": "/physiology/RP_3_3_Fluid_Volume_Overload",
      "url": "/physiology/RP_3_3_Fluid_Volume_Overload",
      "estimatedMinutes": 55,
      "patientAge": [
        "adult",
        "geriatric",
        "pediatric concepts as applicable"
      ],
      "topics": [
        "fluid volume overload",
        "hypervolemia",
        "pulmonary edema",
        "CHF",
        "cardiorenal syndrome",
        "BUN",
        "creatinine",
        "urinalysis",
        "BNP",
        "intake and output",
        "urine output",
        "diuretics",
        "fluid restriction",
        "respiratory therapy assessment"
      ],
      "activityTypes": [
        "calculation",
        "flashcards",
        "guided_case",
        "knowledge_check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "rp_3_3_overview_video",
          "type": "video",
          "title": "3-Minute Overview: Fluid Volume Overload",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_3_3_clinical_signs_sort",
          "type": "sort",
          "title": "Clinical Signs Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_3_bun_creatinine_sort",
          "type": "sort",
          "title": "BUN & Creatinine Sort",
          "required": true,
          "estimatedMinutes": 7
        },
        {
          "id": "rp_3_3_io_calculations",
          "type": "calculation",
          "title": "I&O Calculations",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_3_3_rt_treatment_quiz",
          "type": "quiz",
          "title": "RT Treatment Quiz",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_3_clinical_case",
          "type": "guided_case",
          "title": "Fluid Overload Clinical Case",
          "required": true,
          "estimatedMinutes": 12
        },
        {
          "id": "rp_3_3_knowledge_check",
          "type": "knowledge_check",
          "title": "Fluid Overload Knowledge Check",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "rp_3_3_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 7
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "sort",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_bun_creatinine_sort",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Interprets BUN, creatinine, electrolytes, urinalysis, and BNP/pro-BNP in fluid-balance context."
        },
        {
          "outlineId": "BOK-I.A.7",
          "coverageLevel": "applied",
          "evidenceType": [
            "calculation",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_io_calculations",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Interprets intake/output trends, urine output, and daily weight change."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_3_clinical_case",
            "rp_3_3_knowledge_check"
          ],
          "estimatedMinutes": 7,
          "notes": "Determines whether dyspnea is consistent with fluid overload, CHF, renal impairment, or bronchospasm."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "sort",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_clinical_signs_sort",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Identifies clinical findings consistent with fluid volume overload or dehydration."
        },
        {
          "outlineId": "BOK-I.B.3",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_rt_treatment_quiz",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Differentiates crackles/pulmonary edema from bronchospasm."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation"
          ],
          "interactionIds": [
            "rp_3_3_io_calculations"
          ],
          "estimatedMinutes": 6,
          "notes": "Calculates intake/output and urine-output trends relevant to respiratory care decisions."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_io_calculations",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 8,
          "notes": "Evaluates I&O and urine-output calculations in fluid imbalance."
        },
        {
          "outlineId": "BOK-I.D.8",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_3_clinical_case",
            "rp_3_3_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Integrates BNP, I&O, and hemodynamic signs in fluid-overload assessment."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_3_rt_treatment_quiz",
            "rp_3_3_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Supports oxygenation and positioning when dyspnea is caused by pulmonary edema."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_3_rt_treatment_quiz",
            "rp_3_3_clinical_case",
            "rp_3_3_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Recommends escalation or care-plan changes when bronchodilator therapy is not the indicated response."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Cardiopulmonary / renal fluid balance",
          "patientConditionType": "Fluid volume overload, CHF, pulmonary edema, cardiorenal syndrome, and renal/liver lab-pattern differentiation",
          "conditionTags": [
            "fluid overload",
            "CHF",
            "pulmonary edema",
            "BUN",
            "creatinine",
            "I&O",
            "diuretics"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "acute care",
            "ICU",
            "emergency department",
            "simulation",
            "student lab"
          ]
        },
        {
          "patientConditionCategory": "Respiratory distress differential",
          "patientConditionType": "Pulmonary edema versus bronchospasm treatment decision",
          "conditionTags": [
            "crackles",
            "wheezing",
            "albuterol",
            "furosemide",
            "hypoxemia",
            "fluid restriction"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "acute care",
            "ICU",
            "emergency department",
            "bedside assessment"
          ]
        }
      ],
      "sourceFile": "RP_3_3_Fluid_Volume_Overload.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "respiratory-physiology",
      "courseTitle": "PulmoCore Respiratory Physiology",
      "moduleId": "cardiopulmonary-integration",
      "moduleTitle": "Cardiopulmonary Integration and Neonatal Transition",
      "lessonId": "rp-3-4-newborn-assessment-apgar-scoring",
      "lessonTitle": "Newborn Assessment & APGAR Scoring",
      "displayTitle": "RP 3.4 Newborn Assessment & APGAR Scoring",
      "href": "/physiology/RP_3_4_Newborn_Assessment_APGAR_Scoring",
      "url": "/physiology/RP_3_4_Newborn_Assessment_APGAR_Scoring",
      "estimatedMinutes": 60,
      "patientAge": [
        "neonate",
        "newborn",
        "premature infant"
      ],
      "topics": [
        "newborn assessment",
        "APGAR scoring",
        "neonatal transition",
        "fetal shunts",
        "foramen ovale",
        "ductus arteriosus",
        "ductus venosus",
        "pulmonary vascular resistance",
        "first breath",
        "surfactant",
        "functional residual capacity",
        "acrocyanosis",
        "central cyanosis",
        "neonatal resuscitation",
        "positive pressure ventilation",
        "persistent fetal circulation",
        "persistent pulmonary hypertension of the newborn"
      ],
      "activityTypes": [
        "calculator",
        "flashcards",
        "guided_case",
        "knowledge_check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "rp_3_4_overview_video",
          "type": "video",
          "title": "Lesson Overview Video: Neonatal Transition & APGAR Scoring",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_3_4_shunt_sort",
          "type": "sort",
          "title": "Fetal Shunt Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "rp_3_4_pvr_quiz",
          "type": "quiz",
          "title": "PVR Quiz",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "rp_3_4_criteria_sort",
          "type": "sort",
          "title": "APGAR Criteria Sort",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "rp_3_4_interpretation_sort",
          "type": "sort",
          "title": "Score Interpretation Sort",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "rp_3_4_apgar_calculator",
          "type": "calculator",
          "title": "APGAR Practice Calculator",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "rp_3_4_clinical_case",
          "type": "guided_case",
          "title": "APGAR Clinical Case",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_3_4_knowledge_check",
          "type": "knowledge_check",
          "title": "APGAR Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "rp_3_4_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.5",
          "coverageLevel": "applied",
          "evidenceType": [
            "sort",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_shunt_sort",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 7,
          "notes": "Reviews neonatal transition and fetal-shunt concepts relevant to perinatal assessment."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "applied",
          "evidenceType": [
            "calculator",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_apgar_calculator",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 9,
          "notes": "Determines newborn condition from APGAR scoring and neonatal transition findings."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "sort",
            "calculator",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_criteria_sort",
            "rp_3_4_apgar_calculator",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 14,
          "notes": "Assesses appearance, pulse, grimace, activity, and respiratory effort."
        },
        {
          "outlineId": "BOK-I.D.2",
          "coverageLevel": "reinforced",
          "evidenceType": [
            "sort",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_interpretation_sort",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 5,
          "notes": "Uses neonatal monitoring/assessment trends to interpret transition concerns."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculator",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_apgar_calculator",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 10,
          "notes": "Calculates and interprets APGAR scores."
        },
        {
          "outlineId": "BOK-II.A.8",
          "coverageLevel": "introduced",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_pvr_quiz",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 4,
          "notes": "Recognizes when neonatal stimulation, suctioning, oxygen, and PPV/resuscitation support may be needed."
        },
        {
          "outlineId": "BOK-III.A.3",
          "coverageLevel": "applied",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_4_clinical_case",
            "rp_3_4_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Connects low APGAR findings with airway and ventilation support needs."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "applied",
          "evidenceType": [
            "calculator",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_apgar_calculator",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Minimizes hypoxemia risk through newborn transition and resuscitation readiness reasoning."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "applied",
          "evidenceType": [
            "quiz",
            "guided_case"
          ],
          "interactionIds": [
            "rp_3_4_pvr_quiz",
            "rp_3_4_clinical_case"
          ],
          "estimatedMinutes": 6,
          "notes": "Selects appropriate oxygenation and ventilation support based on newborn response."
        },
        {
          "outlineId": "BOK-III.G.1",
          "coverageLevel": "introduced",
          "evidenceType": [
            "guided_case",
            "knowledge_check"
          ],
          "interactionIds": [
            "rp_3_4_clinical_case",
            "rp_3_4_knowledge_check"
          ],
          "estimatedMinutes": 5,
          "notes": "Recognizes neonatal findings requiring escalation in a high-risk delivery-room situation."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Neonatal and pediatric",
          "patientConditionType": "Newborn transition and neonatal assessment",
          "conditionTags": [
            "APGAR scoring",
            "first breath",
            "fetal shunts",
            "PVR transition",
            "acrocyanosis"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "delivery room",
            "simulation lab",
            "newborn nursery",
            "NICU orientation"
          ]
        },
        {
          "patientConditionCategory": "Neonatal and pediatric",
          "patientConditionType": "Newborn respiratory distress and resuscitation readiness",
          "conditionTags": [
            "low APGAR",
            "apnea",
            "bradycardia",
            "PPV",
            "chest compressions"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "delivery room",
            "simulation lab",
            "acute care",
            "NICU"
          ]
        }
      ],
      "sourceFile": "RP_3_4_Newborn_Assessment_APGAR_Scoring.html",
      "mappingStatus": "first-pass-conservative",
      "mappingNotes": "Mapped only to NBRC line items directly supported by the lesson metadata, topics, activities, and content-outline tasks. Remaining gaps are not force-filled."
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "aerosol-medication-delivery",
      "moduleTitle": "Aerosol Medication Delivery Devices",
      "lessonId": "re_aerosol_delivery",
      "lessonTitle": "Aerosol Drug Therapy — Devices, Technique, Deposition & Clinical Delivery",
      "displayTitle": "Aerosol Drug Therapy",
      "href": "/equipment/RE_Aerosol_Delivery",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Pediatric"
      ],
      "setting": [
        "Emergency department and acute care",
        "ICU",
        "Emergency department",
        "and inpatient care",
        "Emergency and acute care"
      ],
      "topics": [
        "aerosol drug therapy",
        "aerosol devices",
        "mass median aerodynamic diameter",
        "MMAD",
        "particle deposition",
        "metered dose inhaler",
        "MDI technique",
        "spacer",
        "valved holding chamber",
        "breath-actuated MDI",
        "soft mist inhaler",
        "Respimat",
        "dry powder inhaler",
        "DPI technique",
        "small volume nebulizer",
        "jet nebulizer",
        "ultrasonic nebulizer",
        "vibrating mesh nebulizer",
        "VMN",
        "residual volume",
        "dead volume",
        "HFNC aerosol delivery",
        "mechanical ventilator aerosol delivery",
        "HME removal",
        "device selection",
        "infection control",
        "aerosol hazards"
      ],
      "activityTypes": [
        "flashcards",
        "guided-case",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "re_aerosol_delivery_overview_video",
          "type": "video",
          "title": "Lesson Overview Video",
          "required": false,
          "estimatedMinutes": 3
        },
        {
          "id": "re_aerosol_delivery_mmad_deposition_sort",
          "type": "sort",
          "title": "MMAD Deposition Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_aerosol_delivery_mdi_technique_check",
          "type": "quiz",
          "title": "MDI Technique Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_aerosol_delivery_dpi_appropriateness_check",
          "type": "quiz",
          "title": "DPI Appropriateness Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_aerosol_delivery_device_selection_sort",
          "type": "sort",
          "title": "Device Selection Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_aerosol_delivery_acute_asthma_case",
          "type": "guided-case",
          "title": "Acute Asthma Device Selection Case",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "re_aerosol_delivery_knowledge_check",
          "type": "knowledge-check",
          "title": "Aerosol Therapy Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_aerosol_delivery_flashcards",
          "type": "flashcards",
          "title": "Glossary & Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 5
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Medication orders, diagnosis, age, inspiratory ability, ventilator status, oxygen device, and contraindications are reviewed before aerosol device selection."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Patient technique, coordination, inspiratory ability, adverse response, bronchospasm, and ineffective aerosol delivery are assessed."
        },
        {
          "outlineId": "BOK-II.A.6",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Jet, ultrasonic, and vibrating mesh nebulizers are assembled, operated, and troubleshot."
        },
        {
          "outlineId": "BOK-II.A.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "MDI, DPI, spacer/VHC, and soft-mist inhaler technique and troubleshooting are covered."
        },
        {
          "outlineId": "BOK-II.A.17",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Inhaled medication delivery device selection, particle deposition, ventilator/HFNC delivery, residual volume, and delivery factors are addressed."
        },
        {
          "outlineId": "BOK-II.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Single-patient-use and aerosol infection-control practices are applied."
        },
        {
          "outlineId": "BOK-II.B.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Aerosol equipment cleaning and nebulizer contamination risk are addressed."
        },
        {
          "outlineId": "BOK-III.D.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "guided-case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_aerosol_delivery_mmad_deposition_sort",
            "re_aerosol_delivery_mdi_technique_check",
            "re_aerosol_delivery_dpi_appropriateness_check",
            "re_aerosol_delivery_device_selection_sort",
            "re_aerosol_delivery_acute_asthma_case",
            "re_aerosol_delivery_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Aerosolized medication therapy is selected and delivered using appropriate patient/device technique."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Severe asthma or COPD exacerbation requiring aerosol device selection",
          "conditionTags": [
            "asthma",
            "COPD",
            "SVN",
            "DPI contraindication",
            "severe distress",
            "bronchodilator delivery"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Emergency department and acute care"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "Mechanically ventilated patient requiring inline aerosol delivery",
          "conditionTags": [
            "ventilator",
            "VMN",
            "HME removal",
            "inline aerosol",
            "circuit resistance"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "ICU"
        },
        {
          "patientConditionCategory": "Adults",
          "patientConditionType": "HFNC patient requiring aerosol therapy",
          "conditionTags": [
            "HFNC",
            "VMN",
            "flow",
            "FiO2",
            "aerosol placement"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, ICU, and inpatient care"
        },
        {
          "patientConditionCategory": "Pediatric and Neonatal",
          "patientConditionType": "Child requiring aerosol delivery with spacer mask or nebulizer mask",
          "conditionTags": [
            "pediatric aerosol",
            "spacer mask",
            "SVN mask",
            "coordination"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Emergency and acute care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "airway-management-equipment",
      "moduleTitle": "Airway Management Equipment and Procedures",
      "lessonId": "re_airway_management",
      "lessonTitle": "Airway Management Equipment & Procedures",
      "displayTitle": "Airway Management Equipment & Procedures",
      "href": "/equipment/RE_Airway_Management",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal"
      ],
      "setting": [
        "Emergency department",
        "ICU",
        "operating room",
        "neonatal resuscitation",
        "prehospital",
        "transport"
      ],
      "topics": [
        "airway anatomy",
        "Mallampati classification",
        "airway opening maneuvers",
        "mask ventilation",
        "manual resuscitators",
        "OPA",
        "NPA",
        "LMA",
        "endotracheal tube",
        "cuff pressure",
        "laryngoscope blades",
        "capnography",
        "chest X-ray confirmation",
        "right mainstem intubation",
        "tracheostomy",
        "cricothyrotomy"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "re_airway_management_overview_video",
          "type": "video",
          "title": "Overview Video: Airway Management Equipment",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "re_airway_management_mallampati_sort",
          "type": "sort",
          "title": "Mallampati Classification Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_management_airway_adjunct_quiz",
          "type": "quiz",
          "title": "Airway Adjunct Selection Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_airway_management_cuff_pressure_quiz",
          "type": "quiz",
          "title": "Cuff Pressure Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_airway_management_confirmation_sort",
          "type": "sort",
          "title": "Confirmation Method Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_management_device_selection_sort",
          "type": "sort",
          "title": "Airway Device Selection Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_management_case_studies",
          "type": "case",
          "title": "Airway Management Case Studies",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "re_airway_management_knowledge_check",
          "type": "knowledge-check",
          "title": "Airway Management Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_airway_management_glossary_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Airway risk, obstruction, hypoxemia, and need for airway support are assessed from patient presentation."
        },
        {
          "outlineId": "BOK-I.C.16",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Cuff pressure and cuff status are checked as part of artificial airway management."
        },
        {
          "outlineId": "BOK-I.D.17",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Abnormal cuff pressure, tube displacement, obstruction, and confirmation findings are interpreted."
        },
        {
          "outlineId": "BOK-II.A.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Manual resuscitators and related resuscitation equipment are selected and troubleshot."
        },
        {
          "outlineId": "BOK-II.A.10",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Laryngoscope blades, endotracheal tubes, and intubation equipment are covered."
        },
        {
          "outlineId": "BOK-II.A.11",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "OPA, NPA, LMA, ETT, tracheostomy tubes, and accessories are selected and managed."
        },
        {
          "outlineId": "BOK-III.A.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Mallampati classification and airway risk recognition support difficult-airway planning."
        },
        {
          "outlineId": "BOK-III.A.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Airway opening maneuvers, adjuncts, artificial airways, and airway confirmation are selected based on patient condition."
        },
        {
          "outlineId": "BOK-III.A.4",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Tracheostomy equipment and care considerations are included."
        },
        {
          "outlineId": "BOK-III.H.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_management_mallampati_sort",
            "re_airway_management_airway_adjunct_quiz",
            "re_airway_management_cuff_pressure_quiz",
            "re_airway_management_confirmation_sort",
            "re_airway_management_device_selection_sort",
            "re_airway_management_case_studies",
            "re_airway_management_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Intubation equipment, tube confirmation, and right-mainstem recognition are addressed."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Airway Management",
          "patientConditionType": "Acute airway obstruction or respiratory failure",
          "conditionTags": [
            "unconscious patient",
            "gag reflex",
            "suspected cervical spine injury",
            "failed intubation",
            "right mainstem intubation",
            "cuff pressure abnormality"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, ICU, operating room, neonatal resuscitation, prehospital/transport"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "airway-pharmacology-inhaled-medications",
      "moduleTitle": "Airway Pharmacology and Inhaled Medication Delivery",
      "lessonId": "re_airway_pharmacology",
      "lessonTitle": "Airway Pharmacology — Inhaled Medication Classes, Clinical Use & Patient Safety",
      "displayTitle": "Airway Pharmacology — Inhaled Medication Classes, Clinical Use & Patient Safety",
      "href": "/equipment/RE_Airway_Pharmacology",
      "estimatedMinutes": 55,
      "patientAge": [
        "Adult",
        "Pediatric"
      ],
      "setting": [
        "Emergency department",
        "ICU",
        "acute care",
        "outpatient education",
        "pulmonary clinic"
      ],
      "topics": [
        "inhaled medication therapy",
        "SABA",
        "LABA",
        "rescue vs controller medications",
        "anticholinergics",
        "inhaled corticosteroids",
        "mucolytics",
        "topical airway anesthetics",
        "side effects",
        "patient safety",
        "medication selection"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "re_airway_pharmacology_overview_video",
          "type": "video",
          "title": "Overview Video: Airway Pharmacology",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "re_airway_pharmacology_rescue_controller_sort",
          "type": "sort",
          "title": "Rescue vs Controller Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_pharmacology_steroid_clinical_check",
          "type": "quiz",
          "title": "Corticosteroid Clinical Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_airway_pharmacology_medication_class_matching",
          "type": "sort",
          "title": "Medication Class Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_pharmacology_side_effect_matching",
          "type": "sort",
          "title": "Side Effect Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_airway_pharmacology_tachycardia_case",
          "type": "case",
          "title": "Tachycardia During Albuterol Treatment",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_airway_pharmacology_knowledge_check",
          "type": "knowledge-check",
          "title": "Airway Pharmacology Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_airway_pharmacology_glossary_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_pharmacology_rescue_controller_sort",
            "re_airway_pharmacology_steroid_clinical_check",
            "re_airway_pharmacology_medication_class_matching",
            "re_airway_pharmacology_side_effect_matching",
            "re_airway_pharmacology_tachycardia_case",
            "re_airway_pharmacology_knowledge_check"
          ],
          "estimatedMinutes": 7,
          "notes": "Medication orders, symptoms, breath sounds, vital signs, and contraindications are reviewed before inhaled therapy."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_pharmacology_rescue_controller_sort",
            "re_airway_pharmacology_steroid_clinical_check",
            "re_airway_pharmacology_medication_class_matching",
            "re_airway_pharmacology_side_effect_matching",
            "re_airway_pharmacology_tachycardia_case",
            "re_airway_pharmacology_knowledge_check"
          ],
          "estimatedMinutes": 7,
          "notes": "Therapeutic response and adverse effects such as tachycardia, bronchospasm, and thrush are assessed."
        },
        {
          "outlineId": "BOK-III.D.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_pharmacology_rescue_controller_sort",
            "re_airway_pharmacology_steroid_clinical_check",
            "re_airway_pharmacology_medication_class_matching",
            "re_airway_pharmacology_side_effect_matching",
            "re_airway_pharmacology_tachycardia_case",
            "re_airway_pharmacology_knowledge_check"
          ],
          "estimatedMinutes": 7,
          "notes": "Inhaled medication classes and aerosolized pharmacologic therapy are selected and administered."
        },
        {
          "outlineId": "BOK-III.E.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_airway_pharmacology_rescue_controller_sort",
            "re_airway_pharmacology_steroid_clinical_check",
            "re_airway_pharmacology_medication_class_matching",
            "re_airway_pharmacology_side_effect_matching",
            "re_airway_pharmacology_tachycardia_case",
            "re_airway_pharmacology_knowledge_check"
          ],
          "estimatedMinutes": 7,
          "notes": "Pharmacologic intervention changes are recommended based on response and safety concerns."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Pharmacologic Support",
          "patientConditionType": "Acute or chronic airway disease requiring inhaled medication therapy",
          "conditionTags": [
            "acute bronchospasm",
            "asthma",
            "COPD",
            "cystic fibrosis",
            "tachycardia during albuterol",
            "ICS thrush",
            "acetylcysteine bronchospasm",
            "controller medication misuse"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, ICU, acute care, outpatient education, pulmonary clinic"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "blood-gas-monitoring-sampling-analyzers",
      "moduleTitle": "Blood Gas Monitoring and Diagnostic Analyzers",
      "lessonId": "re_blood_gas_monitoring",
      "lessonTitle": "Blood Gas Monitoring, ABG Sampling, Analyzers, Co-Oximetry, Pulse Oximetry & Transcutaneous Monitoring",
      "displayTitle": "Blood Gas Monitoring",
      "href": "/equipment/RE_Blood_Gas_Monitoring",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal"
      ],
      "setting": [
        "Emergency department",
        "ICU",
        "step-down unit",
        "neonatal",
        "pediatric critical care",
        "transport"
      ],
      "topics": [
        "blood gas monitoring",
        "ABG sampling",
        "arterial puncture",
        "Modified Allen test",
        "sample handling errors",
        "blood gas analyzers",
        "co-oximetry",
        "pulse oximetry",
        "transcutaneous monitoring",
        "quality control",
        "calibration",
        "oxygenation versus ventilation",
        "PaO2",
        "PaCO2",
        "pH",
        "carboxyhemoglobin",
        "methemoglobin"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sequence",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "re_blood_gas_monitoring_overview_video",
          "type": "video",
          "title": "Overview Video: Blood Gas Monitoring",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "re_blood_gas_monitoring_allen_sequence",
          "type": "sequence",
          "title": "Modified Allen Test Sequence",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_blood_gas_monitoring_sample_error_matching",
          "type": "sort",
          "title": "Sample Error Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_blood_gas_monitoring_coox_check",
          "type": "quiz",
          "title": "Co-Oximetry Indication Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_blood_gas_monitoring_qc_failure_check",
          "type": "quiz",
          "title": "QC Failure Response Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_blood_gas_monitoring_pulseox_limitations",
          "type": "sort",
          "title": "Pulse Ox Limitations Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_blood_gas_monitoring_copd_case",
          "type": "case",
          "title": "Blood Gas Monitoring Case Study",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "re_blood_gas_monitoring_knowledge_check",
          "type": "knowledge-check",
          "title": "Blood Gas Monitoring Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_blood_gas_monitoring_glossary_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.C.4",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "ABG sampling technique, Modified Allen test sequence, and sample handling are practiced."
        },
        {
          "outlineId": "BOK-I.C.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Blood gas analysis, co-oximetry, analyzer output, PaO2, PaCO2, pH, and dyshemoglobins are covered."
        },
        {
          "outlineId": "BOK-I.D.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "ABG and hemoximetry results and sampling conditions are interpreted for oxygenation, ventilation, and acid-base status."
        },
        {
          "outlineId": "BOK-I.E.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Blood gas and co-oximetry monitoring are selected when pulse oximetry or clinical appearance is insufficient."
        },
        {
          "outlineId": "BOK-II.A.13",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Blood gas analyzers, point-of-care analyzers, co-oximeters, and quality-control issues are managed."
        },
        {
          "outlineId": "BOK-II.A.21",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulse oximeters and transcutaneous monitors are used and troubleshot as noninvasive monitoring devices."
        },
        {
          "outlineId": "BOK-II.B.4",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Analyzer calibration, quality control, and QC failure response are explicitly addressed."
        },
        {
          "outlineId": "BOK-II.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "re_blood_gas_monitoring_allen_sequence",
            "re_blood_gas_monitoring_sample_error_matching",
            "re_blood_gas_monitoring_coox_check",
            "re_blood_gas_monitoring_qc_failure_check",
            "re_blood_gas_monitoring_pulseox_limitations",
            "re_blood_gas_monitoring_copd_case",
            "re_blood_gas_monitoring_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Safe arterial puncture, patient identification, and sample handling support patient safety."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Monitoring and Diagnostics",
          "patientConditionType": "Blood gas and oxygenation/ventilation assessment",
          "conditionTags": [
            "hypercapnia",
            "hypoxemia",
            "sample handling error",
            "CO poisoning",
            "methemoglobinemia",
            "QC failure",
            "negative Allen test",
            "COPD hypercapnic failure"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, ICU, step-down unit, neonatal/pediatric critical care, transport"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "cardiovascular-monitoring-equipment",
      "moduleTitle": "Cardiovascular Monitoring Equipment & Procedures",
      "lessonId": "equipment-cardiovascular-monitoring-equipment-procedures",
      "lessonTitle": "Cardiovascular Monitoring Equipment & Procedures",
      "displayTitle": "Cardiovascular Monitoring Equipment & Procedures",
      "href": "/equipment/RE_Cardiovascular_Monitoring",
      "estimatedMinutes": 70,
      "patientAge": [
        "Adult",
        "Pediatric"
      ],
      "setting": [
        "ED",
        "ICU",
        "perioperative",
        "inpatient"
      ],
      "topics": [
        "ECG equipment",
        "12-lead ECG",
        "electrode placement",
        "skin preparation",
        "ECG artifact",
        "heart rate calculation",
        "noninvasive blood pressure",
        "arterial line",
        "transducer leveling",
        "phlebostatic axis",
        "pulmonary artery catheter",
        "Swan-Ganz",
        "PAOP",
        "thermodilution",
        "hemodynamics"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "equipment_cardiovascular_overview_video",
          "type": "video",
          "title": "Cardiovascular Monitoring Overview Video",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment_cardiovascular_chest_lead_sort",
          "type": "sort",
          "title": "Chest Lead Placement Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_cardiovascular_hr_calculation",
          "type": "quiz",
          "title": "Heart Rate Calculation Quiz",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_cardiovascular_aline_troubleshooting",
          "type": "quiz",
          "title": "A-Line Troubleshooting Check",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_cardiovascular_pac_measurement_sort",
          "type": "sort",
          "title": "PAC Measurement Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_cardiovascular_device_selection_sort",
          "type": "sort",
          "title": "Cardiovascular Monitoring Device Selection Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_cardiovascular_case_studies",
          "type": "case",
          "title": "Cardiovascular Monitoring Case Studies",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equipment_cardiovascular_knowledge_check",
          "type": "knowledge-check",
          "title": "Cardiovascular Monitoring Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_cardiovascular_flashcards",
          "type": "flashcards",
          "title": "Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_cardiovascular_chest_lead_sort",
            "equipment_cardiovascular_hr_calculation",
            "equipment_cardiovascular_aline_troubleshooting",
            "equipment_cardiovascular_pac_measurement_sort",
            "equipment_cardiovascular_device_selection_sort",
            "equipment_cardiovascular_case_studies",
            "equipment_cardiovascular_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "ECG monitoring setup, 12-lead placement, electrode preparation, and artifact recognition are practiced."
        },
        {
          "outlineId": "BOK-I.D.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_cardiovascular_chest_lead_sort",
            "equipment_cardiovascular_hr_calculation",
            "equipment_cardiovascular_aline_troubleshooting",
            "equipment_cardiovascular_pac_measurement_sort",
            "equipment_cardiovascular_device_selection_sort",
            "equipment_cardiovascular_case_studies",
            "equipment_cardiovascular_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "ECG monitoring results, heart rate calculation, and artifact/unreliable data are interpreted."
        },
        {
          "outlineId": "BOK-I.D.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_cardiovascular_chest_lead_sort",
            "equipment_cardiovascular_hr_calculation",
            "equipment_cardiovascular_aline_troubleshooting",
            "equipment_cardiovascular_pac_measurement_sort",
            "equipment_cardiovascular_device_selection_sort",
            "equipment_cardiovascular_case_studies",
            "equipment_cardiovascular_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Blood pressure, CVP, PAP, PAOP, and cardiac output are evaluated as hemodynamic parameters."
        },
        {
          "outlineId": "BOK-I.E.11",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_cardiovascular_chest_lead_sort",
            "equipment_cardiovascular_hr_calculation",
            "equipment_cardiovascular_aline_troubleshooting",
            "equipment_cardiovascular_pac_measurement_sort",
            "equipment_cardiovascular_device_selection_sort",
            "equipment_cardiovascular_case_studies",
            "equipment_cardiovascular_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Hemodynamic monitoring is selected and interpreted for critical-care monitoring needs."
        },
        {
          "outlineId": "BOK-II.A.23",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_cardiovascular_chest_lead_sort",
            "equipment_cardiovascular_hr_calculation",
            "equipment_cardiovascular_aline_troubleshooting",
            "equipment_cardiovascular_pac_measurement_sort",
            "equipment_cardiovascular_device_selection_sort",
            "equipment_cardiovascular_case_studies",
            "equipment_cardiovascular_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Hemodynamic monitors, transducers, arterial catheters, and PAC measurement states are set up and troubleshot."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Cardiovascular/critical care monitoring",
          "patientConditionType": "Hemodynamic instability, shock, chest pain, dysrhythmia monitoring",
          "conditionTags": [
            "septic shock",
            "cardiogenic shock",
            "ECG artifact",
            "A-line dampening",
            "PAC wedge pressure"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": [
            "ED",
            "ICU",
            "perioperative",
            "inpatient"
          ]
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "humidity-and-aerosol-delivery",
      "moduleTitle": "Humidity, Aerosol, and Airway Conditioning Equipment",
      "lessonId": "equipment-humidity-bland-aerosol-therapy",
      "lessonTitle": "Humidity & Bland Aerosol Therapy — Humidifiers, HMEs, LVNs & Condensation Management",
      "displayTitle": "Equipment — Humidity & Bland Aerosol Therapy",
      "href": "/equipment/RE_Humidity_Aerosol_Therapy",
      "estimatedMinutes": 70,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal"
      ],
      "setting": [
        "ICU",
        "transport",
        "emergency",
        "long-term acute care",
        "Emergency",
        "pediatric",
        "acute care"
      ],
      "topics": [
        "humidity therapy",
        "bland aerosol therapy",
        "absolute humidity",
        "relative humidity",
        "isothermic saturation boundary",
        "HME",
        "heated humidifier",
        "bubble humidifier",
        "large-volume nebulizer",
        "condensation management",
        "artificial airway humidification",
        "tracheostomy humidification"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "equipment_humidity_bland_aerosol_overview_video",
          "type": "video",
          "title": "2-Minute Overview: Humidity & Aerosol Therapy",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment_humidity_bland_aerosol_active_passive_sort",
          "type": "sort",
          "title": "Active vs Passive Sort",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "equipment_humidity_bland_aerosol_heated_humidifier_check",
          "type": "quiz",
          "title": "Heated Humidifier Clinical Check",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_humidity_bland_aerosol_hme_contraindication_check",
          "type": "quiz",
          "title": "HME Contraindication Check",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_humidity_bland_aerosol_device_selection_sort",
          "type": "sort",
          "title": "Device Selection Sort",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_humidity_bland_aerosol_hme_failure_case",
          "type": "case",
          "title": "HME Failure Case Study",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equipment_humidity_bland_aerosol_knowledge_check",
          "type": "quiz",
          "title": "Humidity Therapy Knowledge Check",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equipment_humidity_bland_aerosol_flashcards",
          "type": "flashcards",
          "title": "Humidity & Bland Aerosol Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-II.A.5",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Bubble humidifiers, heated humidifiers, HMEs, and humidification troubleshooting are covered."
        },
        {
          "outlineId": "BOK-II.A.6",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Large-volume nebulizer and bland aerosol delivery equipment are selected and troubleshot."
        },
        {
          "outlineId": "BOK-II.A.14",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Circuit condensate/rainout management and placement concerns are addressed."
        },
        {
          "outlineId": "BOK-II.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Condensate and circuit safety are managed to reduce patient safety and contamination risk."
        },
        {
          "outlineId": "BOK-II.B.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Humidifier, HME, and aerosol system cleaning/disinfection concerns are included."
        },
        {
          "outlineId": "BOK-III.A.6",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equipment_humidity_bland_aerosol_active_passive_sort",
            "equipment_humidity_bland_aerosol_heated_humidifier_check",
            "equipment_humidity_bland_aerosol_hme_contraindication_check",
            "equipment_humidity_bland_aerosol_device_selection_sort",
            "equipment_humidity_bland_aerosol_hme_failure_case",
            "equipment_humidity_bland_aerosol_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Appropriate humidification is selected for artificial airways, mechanical ventilation, tracheostomy, and thick secretions."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Airway management",
          "patientConditionType": "Artificial airway requiring humidity support",
          "conditionTags": [
            "endotracheal tube",
            "tracheostomy",
            "mechanical ventilation",
            "thick secretions"
          ],
          "clinicalJudgmentType": "Device selection and troubleshooting",
          "setting": "ICU, transport, emergency, long-term acute care"
        },
        {
          "patientConditionCategory": "Obstructive and infectious airway disease",
          "patientConditionType": "Upper airway edema, croup, secretion retention",
          "conditionTags": [
            "post-extubation stridor",
            "croup",
            "sputum induction",
            "bland aerosol"
          ],
          "clinicalJudgmentType": "Therapy selection and safety monitoring",
          "setting": "Emergency, pediatric, acute care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "infection-control-safety",
      "moduleTitle": "Infection Control, PPE, and Patient Safety",
      "lessonId": "equipment-infection-control-ppe-isolation-precautions",
      "lessonTitle": "Infection Control, PPE, & Isolation Precautions",
      "displayTitle": "Infection Control, PPE, & Isolation Precautions",
      "href": "/equipment/RE_Infection_Control",
      "estimatedMinutes": 60,
      "patientAge": [
        "adult",
        "pediatric",
        "neonatal"
      ],
      "setting": [
        "Emergency department",
        "ICU",
        "acute care",
        "transport",
        "and procedural environments",
        "Bedside respiratory care"
      ],
      "topics": [
        "infection control",
        "standard precautions",
        "contact precautions",
        "droplet precautions",
        "airborne precautions",
        "PPE",
        "hand hygiene",
        "donning PPE",
        "doffing PPE",
        "N95",
        "PAPR",
        "negative pressure room",
        "aerosol-generating procedures",
        "equipment contamination",
        "healthcare-associated infections"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "matching",
        "quiz",
        "sequencing",
        "video"
      ],
      "activities": [
        {
          "id": "equipment_infection_control_overview_video",
          "type": "video",
          "title": "Video Overview: Infection Control & PPE",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment_infection_control_chain_matching",
          "type": "matching",
          "title": "Chain of Infection Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_infection_control_transmission_mode_check",
          "type": "quiz",
          "title": "Transmission Mode Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_infection_control_handwashing_sequence",
          "type": "sequencing",
          "title": "Handwashing Sequence",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_infection_control_donning_sequence",
          "type": "sequencing",
          "title": "Donning PPE Sequence",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_infection_control_doffing_sequence",
          "type": "sequencing",
          "title": "Doffing PPE Sequence",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_infection_control_isolation_precaution_check",
          "type": "quiz",
          "title": "Isolation Precaution Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_infection_control_agp_escalation_check",
          "type": "quiz",
          "title": "AGP Escalation Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_infection_control_unfolding_case",
          "type": "case",
          "title": "TB Rule-Out Unfolding Case Study",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_infection_control_knowledge_check",
          "type": "quiz",
          "title": "Infection Control Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_infection_control_glossary_flashcards",
          "type": "flashcards",
          "title": "Glossary & Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 6
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_infection_control_chain_matching",
            "equipment_infection_control_transmission_mode_check",
            "equipment_infection_control_handwashing_sequence",
            "equipment_infection_control_donning_sequence",
            "equipment_infection_control_doffing_sequence",
            "equipment_infection_control_isolation_precaution_check",
            "equipment_infection_control_agp_escalation_check",
            "equipment_infection_control_unfolding_case",
            "equipment_infection_control_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Patient history, symptoms, suspected pathogens, and isolation status are reviewed to identify infection risk."
        },
        {
          "outlineId": "BOK-II.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_infection_control_chain_matching",
            "equipment_infection_control_transmission_mode_check",
            "equipment_infection_control_handwashing_sequence",
            "equipment_infection_control_donning_sequence",
            "equipment_infection_control_doffing_sequence",
            "equipment_infection_control_isolation_precaution_check",
            "equipment_infection_control_agp_escalation_check",
            "equipment_infection_control_unfolding_case",
            "equipment_infection_control_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Standard, contact, droplet, airborne, and AGP precautions are selected and applied."
        },
        {
          "outlineId": "BOK-II.B.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_infection_control_chain_matching",
            "equipment_infection_control_transmission_mode_check",
            "equipment_infection_control_handwashing_sequence",
            "equipment_infection_control_donning_sequence",
            "equipment_infection_control_doffing_sequence",
            "equipment_infection_control_isolation_precaution_check",
            "equipment_infection_control_agp_escalation_check",
            "equipment_infection_control_unfolding_case",
            "equipment_infection_control_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Respiratory equipment cross-contamination, cleaning, and disinfection practices are addressed."
        },
        {
          "outlineId": "BOK-II.B.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_infection_control_chain_matching",
            "equipment_infection_control_transmission_mode_check",
            "equipment_infection_control_handwashing_sequence",
            "equipment_infection_control_donning_sequence",
            "equipment_infection_control_doffing_sequence",
            "equipment_infection_control_isolation_precaution_check",
            "equipment_infection_control_agp_escalation_check",
            "equipment_infection_control_unfolding_case",
            "equipment_infection_control_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Biohazard and contamination handling principles are applied during PPE and equipment scenarios."
        },
        {
          "outlineId": "BOK-III.G.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_infection_control_chain_matching",
            "equipment_infection_control_transmission_mode_check",
            "equipment_infection_control_handwashing_sequence",
            "equipment_infection_control_donning_sequence",
            "equipment_infection_control_doffing_sequence",
            "equipment_infection_control_isolation_precaution_check",
            "equipment_infection_control_agp_escalation_check",
            "equipment_infection_control_unfolding_case",
            "equipment_infection_control_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "PPE escalation and isolation response are applied during urgent suspected airborne infection scenarios."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Infectious and communicable respiratory disease",
          "patientConditionType": "Known or suspected airborne, droplet, or contact-transmitted infection",
          "conditionTags": [
            "TB",
            "measles",
            "varicella",
            "influenza",
            "RSV",
            "COVID-19",
            "MRSA",
            "C. difficile"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, ICU, acute care, transport, and procedural environments"
        },
        {
          "patientConditionCategory": "Patient and provider safety",
          "patientConditionType": "Aerosol-generating respiratory therapy procedures",
          "conditionTags": [
            "nebulizer",
            "HFNC",
            "NIV",
            "suctioning",
            "intubation",
            "bronchoscopy"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Bedside respiratory care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "medical-gas-oxygen-supply-systems",
      "moduleTitle": "Medical Gas Storage, Safety, and Oxygen Supply Systems",
      "lessonId": "equipment-medical-gas-storage-cylinders-regulators-flowmeters-oxygen-supply-systems",
      "lessonTitle": "Medical Gas Storage, Cylinders, Regulators, Flowmeters & Oxygen Supply Systems",
      "displayTitle": "Medical Gas Storage, Cylinders, Regulators, Flowmeters & Oxygen Supply Systems",
      "href": "/equipment/RE_Medical_Gas_Systems",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal"
      ],
      "setting": [
        "Inpatient",
        "transport",
        "emergency",
        "and home care"
      ],
      "topics": [
        "medical gas systems",
        "oxygen cylinders",
        "cylinder factors",
        "oxygen transport",
        "flowmeters",
        "regulators",
        "PISS",
        "DISS",
        "cylinder color coding",
        "bulk oxygen",
        "wall outlets",
        "oxygen concentrators",
        "liquid oxygen",
        "medical gas safety",
        "duration calculations"
      ],
      "activityTypes": [
        "calculation",
        "case-study",
        "flashcards",
        "knowledge-check",
        "matching",
        "quiz",
        "sequencing",
        "video"
      ],
      "activities": [
        {
          "id": "equipment-medical-gas-overview-video",
          "type": "video",
          "title": "Overview Video: Medical Gas Systems",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment-medical-gas-cylinder-color-matching",
          "type": "matching",
          "title": "Cylinder Color Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment-medical-gas-flowmeter-selection-check",
          "type": "quiz",
          "title": "Flowmeter Selection Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment-medical-gas-piss-diss-check",
          "type": "quiz",
          "title": "PISS vs DISS Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment-medical-gas-regulator-setup-sequence",
          "type": "sequencing",
          "title": "Regulator Setup Sequence",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment-medical-gas-duration-calculation-check",
          "type": "calculation",
          "title": "Duration Calculation Check",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment-medical-gas-oxygen-transport-case",
          "type": "case-study",
          "title": "Oxygen Transport Case Study",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equipment-medical-gas-knowledge-check",
          "type": "knowledge-check",
          "title": "Medical Gas Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment-medical-gas-glossary-flashcards",
          "type": "flashcards",
          "title": "Medical Gas Glossary Flashcards",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Patient and environmental condition are evaluated before transport or oxygen supply selection."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Cylinder duration and transport-readiness calculations are practiced."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Calculated gas duration is interpreted to decide whether transport is safe."
        },
        {
          "outlineId": "BOK-II.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Medical gas delivery interfaces, flowmeters, outlets, regulators, and supply options are selected."
        },
        {
          "outlineId": "BOK-II.A.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Medical gas delivery devices, gas connections, PISS/DISS systems, and oxygen supply components are managed."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Oxygen supply options are selected to maintain/titrate oxygenation support."
        },
        {
          "outlineId": "BOK-III.D.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Specialty gas concepts and medical gas safety are included."
        },
        {
          "outlineId": "BOK-III.G.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case-study",
            "knowledge-check",
            "matching",
            "quiz",
            "sequencing"
          ],
          "interactionIds": [
            "equipment-medical-gas-cylinder-color-matching",
            "equipment-medical-gas-flowmeter-selection-check",
            "equipment-medical-gas-piss-diss-check",
            "equipment-medical-gas-regulator-setup-sequence",
            "equipment-medical-gas-duration-calculation-check",
            "equipment-medical-gas-oxygen-transport-case",
            "equipment-medical-gas-knowledge-check"
          ],
          "estimatedMinutes": 9,
          "notes": "Oxygen cylinder duration and supply planning are applied to patient transport."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Equipment management and patient safety",
          "patientConditionType": "Oxygen supply planning and failure prevention",
          "conditionTags": [
            "oxygen transport",
            "medical gas safety",
            "cylinder duration",
            "flowmeter troubleshooting",
            "oxygen supply failure"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Inpatient, transport, emergency, and home care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "oxygen-delivery-and-medical-gas-therapy",
      "moduleTitle": "Oxygen Delivery and Medical Gas Therapy",
      "lessonId": "equipment-medical-gas-therapy-oxygen-delivery-devices-hfnc-air-entrainment-heliox-oxygen-escalation",
      "lessonTitle": "Medical Gas Therapy, Oxygen Delivery Devices, HFNC, Air Entrainment, Heliox & Oxygen Escalation",
      "displayTitle": "Equipment — Oxygen Delivery Devices, HFNC, Air Entrainment & Heliox",
      "href": "/equipment/RE_Oxygen_Delivery",
      "estimatedMinutes": 80,
      "patientAge": [
        "Adult",
        "Pediatric",
        "Neonatal"
      ],
      "setting": [
        "Emergency department",
        "acute care",
        "ICU",
        "and transport",
        "Emergency department and pediatric acute care",
        "Emergency department and critical care"
      ],
      "topics": [
        "oxygen therapy",
        "oxygen delivery devices",
        "nasal cannula",
        "simple mask",
        "partial rebreather",
        "nonrebreather",
        "Venturi mask",
        "air entrainment",
        "magic box method",
        "air oxygen ratio",
        "total flow",
        "high-flow nasal cannula",
        "HFNC",
        "oxygen blender",
        "heliox",
        "inhaled nitric oxide",
        "hyperbaric oxygen",
        "oxygen escalation",
        "CO poisoning",
        "COPD oxygen titration",
        "oxygen toxicity",
        "absorption atelectasis"
      ],
      "activityTypes": [
        "calculation",
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sequence",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "equipment_oxygen_delivery_overview_video",
          "type": "video",
          "title": "Oxygen Delivery Devices Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment_oxygen_delivery_low_high_flow_classification",
          "type": "sort",
          "title": "Low vs High Flow Classification",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_oxygen_delivery_simple_mask_minimum_flow",
          "type": "quiz",
          "title": "Simple Mask Minimum Flow Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_oxygen_delivery_nrb_indications",
          "type": "quiz",
          "title": "NRB Indication Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_oxygen_delivery_magic_box_calculation",
          "type": "calculation",
          "title": "Magic Box Calculation Check",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_oxygen_delivery_hfnc_setup_order",
          "type": "sequence",
          "title": "HFNC Setup Order",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_oxygen_delivery_heliox_corrected_flow",
          "type": "calculation",
          "title": "Heliox Corrected Flow Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_oxygen_delivery_escalation_case",
          "type": "case",
          "title": "Oxygen Escalation Case Study",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equipment_oxygen_delivery_knowledge_check",
          "type": "knowledge-check",
          "title": "Oxygen Delivery Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_oxygen_delivery_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcards",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "SpO2, PaO2, PaCO2, pH, work of breathing, and signs of oxygenation/ventilation adequacy are assessed."
        },
        {
          "outlineId": "BOK-I.C.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Venturi total flow, air-to-oxygen ratio, FiO2 estimates, and heliox correction calculations are practiced."
        },
        {
          "outlineId": "BOK-I.C.19",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Oxygen titration is performed using device setup, FiO2 targets, and clinical response."
        },
        {
          "outlineId": "BOK-I.D.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Oxygen delivery calculations are interpreted for safe therapy decisions."
        },
        {
          "outlineId": "BOK-I.D.20",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Oxygen titration results and escalation needs are evaluated."
        },
        {
          "outlineId": "BOK-II.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Nasal cannula, masks, Venturi, reservoirs, HFNC, and related oxygen interfaces are selected and set up."
        },
        {
          "outlineId": "BOK-II.A.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Medical gas delivery devices, blenders, air entrainment, and heliox equipment are managed."
        },
        {
          "outlineId": "BOK-II.A.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "HFNC setup, flow, oxygen blender, and humidification needs are covered."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Hypoxemia is minimized through device selection and escalation."
        },
        {
          "outlineId": "BOK-III.C.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Oxygenation support is initiated, maintained, titrated, and escalated."
        },
        {
          "outlineId": "BOK-III.D.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "calculation",
            "case",
            "knowledge-check",
            "quiz",
            "sequence",
            "sort"
          ],
          "interactionIds": [
            "equipment_oxygen_delivery_low_high_flow_classification",
            "equipment_oxygen_delivery_simple_mask_minimum_flow",
            "equipment_oxygen_delivery_nrb_indications",
            "equipment_oxygen_delivery_magic_box_calculation",
            "equipment_oxygen_delivery_hfnc_setup_order",
            "equipment_oxygen_delivery_heliox_corrected_flow",
            "equipment_oxygen_delivery_escalation_case",
            "equipment_oxygen_delivery_knowledge_check"
          ],
          "estimatedMinutes": 10,
          "notes": "Heliox, inhaled nitric oxide, hyperbaric oxygen, and other specialty gases are introduced."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Obstructive Lung Disease",
          "patientConditionType": "COPD exacerbation with oxygen titration and hypercapnic respiratory failure risk",
          "conditionTags": [
            "COPD",
            "hypoxemia",
            "hypercapnia",
            "Venturi",
            "HFNC",
            "NIV"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department, acute care, ICU, and transport"
        },
        {
          "patientConditionCategory": "Airway Obstruction",
          "patientConditionType": "Upper airway obstruction requiring heliox consideration",
          "conditionTags": [
            "croup",
            "stridor",
            "heliox",
            "work of breathing"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": "Emergency department and pediatric acute care"
        },
        {
          "patientConditionCategory": "Toxic Inhalation",
          "patientConditionType": "Smoke inhalation or carbon monoxide exposure requiring high FiO2 despite normal pulse oximetry",
          "conditionTags": [
            "carbon monoxide",
            "smoke inhalation",
            "nonrebreather",
            "co-oximetry"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Emergency department and critical care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "assessment-monitoring-and-bedside-equipment",
      "moduleTitle": "Assessment, Monitoring, and Bedside Equipment",
      "lessonId": "equipment-patient-assessment-equipment-procedures",
      "lessonTitle": "RT Patient Assessment Equipment & Procedures",
      "displayTitle": "Equipment: RT Patient Assessment Equipment & Procedures",
      "href": "/equipment/RE_Patient_Assessment_Equipment",
      "estimatedMinutes": 70,
      "patientAge": [
        "adult",
        "pediatric",
        "neonatal"
      ],
      "setting": [
        "Emergency department",
        "ICU",
        "acute care",
        "clinical lab"
      ],
      "topics": [
        "patient assessment equipment",
        "IPPA",
        "inspection",
        "palpation",
        "percussion",
        "auscultation",
        "stethoscope",
        "pulse oximetry",
        "blood pressure cuff",
        "thermometer",
        "pulse assessment",
        "respiratory rate",
        "breath sounds",
        "adventitious sounds",
        "tactile fremitus",
        "SpO2 limitations",
        "carbon monoxide poisoning",
        "cuff sizing",
        "clinical escalation"
      ],
      "activityTypes": [
        "case-study",
        "clinical-check",
        "flashcards",
        "knowledge-check",
        "matching",
        "sequencing",
        "video"
      ],
      "activities": [
        {
          "id": "equipment_patient_assessment_overview_video",
          "type": "video",
          "title": "Patient Assessment Equipment Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equipment_patient_assessment_ippa_sequence",
          "type": "sequencing",
          "title": "IPPA Sequence",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equipment_patient_assessment_percussion_notes",
          "type": "matching",
          "title": "Percussion Notes Matching",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equipment_patient_assessment_lung_sound_matching",
          "type": "matching",
          "title": "Lung Sound Matching",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "equipment_patient_assessment_stethoscope_escalation",
          "type": "clinical-check",
          "title": "Stethoscope Escalation Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_patient_assessment_pulse_ox_clinical",
          "type": "clinical-check",
          "title": "Pulse Oximeter Clinical Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_patient_assessment_bp_cuff_clinical",
          "type": "clinical-check",
          "title": "BP Cuff Clinical Check",
          "required": true,
          "estimatedMinutes": 3
        },
        {
          "id": "equipment_patient_assessment_case_study",
          "type": "case-study",
          "title": "Assessment Case Study",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_patient_assessment_knowledge_check",
          "type": "knowledge-check",
          "title": "Assessment Equipment Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equipment_patient_assessment_flashcards",
          "type": "flashcards",
          "title": "Patient Assessment Equipment Flashcards",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.7",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Vital signs and bedside monitoring trends are reviewed during patient assessment."
        },
        {
          "outlineId": "BOK-I.A.8",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Patient condition is determined from vital signs, appearance, work of breathing, breath sounds, and distress signs."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Inspection and interview-based respiratory assessment findings are practiced."
        },
        {
          "outlineId": "BOK-I.B.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Palpation and tactile fremitus are included in the IPPA assessment workflow."
        },
        {
          "outlineId": "BOK-I.B.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Auscultation, lung sound identification, and escalation findings are practiced."
        },
        {
          "outlineId": "BOK-I.C.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulse oximetry and bedside noninvasive monitoring equipment are selected and used."
        },
        {
          "outlineId": "BOK-I.D.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulse oximeter limitations and noninvasive monitoring data are interpreted."
        },
        {
          "outlineId": "BOK-II.A.21",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulse oximeters, blood pressure cuffs, thermometers, stethoscopes, and bedside monitors are used and troubleshot."
        },
        {
          "outlineId": "BOK-III.C.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case-study",
            "clinical-check",
            "knowledge-check",
            "matching",
            "sequencing"
          ],
          "interactionIds": [
            "equipment_patient_assessment_ippa_sequence",
            "equipment_patient_assessment_percussion_notes",
            "equipment_patient_assessment_lung_sound_matching",
            "equipment_patient_assessment_stethoscope_escalation",
            "equipment_patient_assessment_pulse_ox_clinical",
            "equipment_patient_assessment_bp_cuff_clinical",
            "equipment_patient_assessment_case_study",
            "equipment_patient_assessment_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Escalation for hypoxemia, stridor, silent chest, central cyanosis, and abnormal assessment findings is practiced."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Patient assessment",
          "patientConditionType": "Bedside evaluation and monitoring",
          "conditionTags": [
            "dyspnea",
            "hypoxemia",
            "respiratory distress",
            "abnormal breath sounds",
            "vital sign abnormality"
          ],
          "clinicalJudgmentType": "Information Gathering",
          "setting": [
            "Emergency department",
            "ICU",
            "acute care",
            "clinical lab"
          ]
        },
        {
          "patientConditionCategory": "Patient safety",
          "patientConditionType": "Equipment limitations and escalation",
          "conditionTags": [
            "CO poisoning",
            "silent chest",
            "stridor",
            "pneumothorax",
            "incorrect BP cuff size"
          ],
          "clinicalJudgmentType": "Decision Making",
          "setting": [
            "Emergency department",
            "ICU",
            "acute care"
          ]
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "professional-practice-documentation-and-clinical-reporting",
      "moduleTitle": "Professional Practice, Documentation, and Clinical Reporting",
      "lessonId": "equipment-professionalism-communication-documentation-clinical-reporting",
      "lessonTitle": "Professionalism, Communication, Documentation & Clinical Reporting",
      "displayTitle": "Equipment: Professionalism, Communication, Documentation & Clinical Reporting",
      "href": "/equipment/RE_Professionalism_Documentation",
      "estimatedMinutes": 60,
      "patientAge": [
        "adult",
        "pediatric",
        "neonatal"
      ],
      "setting": [
        "Inpatient",
        "outpatient",
        "emergency",
        "and clinical education environments"
      ],
      "topics": [
        "professionalism",
        "communication",
        "clinical documentation",
        "HIPAA",
        "patient confidentiality",
        "workplace gossip",
        "cultural diversity",
        "professional image",
        "case study documentation",
        "chief complaint",
        "history of present illness",
        "RT charting",
        "end-of-shift report",
        "physician orders",
        "order abbreviations",
        "while awake",
        "PRN",
        "chain of command",
        "unsupervised clinical skills"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "equip_prof_doc_overview_video",
          "type": "video",
          "title": "Professionalism & Documentation Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "equip_prof_doc_professional_sort",
          "type": "sort",
          "title": "Professional vs Unprofessional Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equip_prof_doc_hipaa_check",
          "type": "quiz",
          "title": "HIPAA Scenario Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equip_prof_doc_documentation_sort",
          "type": "sort",
          "title": "Documentation Sort",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "equip_prof_doc_order_interpretation",
          "type": "quiz",
          "title": "Order Interpretation Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "equip_prof_doc_case_studies",
          "type": "case",
          "title": "Professionalism & Documentation Case Studies",
          "required": true,
          "estimatedMinutes": 10
        },
        {
          "id": "equip_prof_doc_knowledge_check",
          "type": "quiz",
          "title": "Professionalism Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "equip_prof_doc_flashcards",
          "type": "flashcards",
          "title": "Flashcard Mastery Deck",
          "required": false,
          "estimatedMinutes": 10
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Orders, treatment schedules, clinical documentation, patient reports, HPI, and objective findings are reviewed."
        },
        {
          "outlineId": "BOK-I.B.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Patient communication, subjective/objective information gathering, and confidentiality concerns are addressed."
        },
        {
          "outlineId": "BOK-III.E.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Documentation supports treatment recommendations, clarification needs, and respiratory care plan communication."
        },
        {
          "outlineId": "BOK-III.G.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Closed-loop and handoff communication are applied in clinical reporting scenarios."
        },
        {
          "outlineId": "BOK-III.I.1",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Interdisciplinary communication, chain of command, and provider clarification are practiced."
        },
        {
          "outlineId": "BOK-III.I.2",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "equip_prof_doc_professional_sort",
            "equip_prof_doc_hipaa_check",
            "equip_prof_doc_documentation_sort",
            "equip_prof_doc_order_interpretation",
            "equip_prof_doc_case_studies",
            "equip_prof_doc_knowledge_check"
          ],
          "estimatedMinutes": 8,
          "notes": "Patient/caregiver communication and professional education principles are included."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Professional Practice and Patient Safety",
          "patientConditionType": "Clinical communication, documentation, and confidentiality",
          "conditionTags": [
            "HIPAA",
            "documentation",
            "handoff",
            "orders",
            "professionalism"
          ],
          "clinicalJudgmentType": "Information Gathering and Decision Making",
          "setting": "Inpatient, outpatient, emergency, and clinical education environments"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    },
    {
      "courseId": "equipment",
      "courseTitle": "PulmoCore Respiratory Equipment & Procedures",
      "moduleId": "pulmonary-function-testing-equipment",
      "moduleTitle": "Pulmonary Function Testing, Spirometry, Peak Flow and Respiratory Pressure Devices",
      "lessonId": "re_pulmonary_function_testing",
      "lessonTitle": "Pulmonary Function Testing, Spirometry, Peak Flow & Respiratory Pressure Devices",
      "displayTitle": "Equipment — Pulmonary Function Testing, Spirometry, Peak Flow & Respiratory Pressure Devices",
      "href": "/equipment/RE_Pulmonary_Function_Testing",
      "estimatedMinutes": 75,
      "patientAge": [
        "Adult",
        "Pediatric"
      ],
      "setting": [
        "ED",
        "outpatient pulmonary lab",
        "bedside assessment",
        "Pulmonary function lab",
        "ICU",
        "acute care"
      ],
      "topics": [
        "pulmonary function testing",
        "spirometry",
        "peak expiratory flow",
        "FEV1",
        "FVC",
        "FEV1/FVC ratio",
        "obstructive disease",
        "restrictive disease",
        "body plethysmography",
        "gas dilution",
        "MIP",
        "MEP",
        "calibration"
      ],
      "activityTypes": [
        "case",
        "flashcards",
        "knowledge-check",
        "quiz",
        "sort",
        "video"
      ],
      "activities": [
        {
          "id": "re_pulmonary_function_testing_overview_video",
          "type": "video",
          "title": "Pulmonary Function Testing Overview",
          "required": false,
          "estimatedMinutes": 2
        },
        {
          "id": "re_pulmonary_function_testing_calibration_sequence",
          "type": "sort",
          "title": "Calibration Sequence",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_pulmonary_function_testing_peak_flow_zone_check",
          "type": "quiz",
          "title": "Peak Flow Zone Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_pulmonary_function_testing_fvc_maneuver_steps",
          "type": "sort",
          "title": "FVC Maneuver Steps",
          "required": true,
          "estimatedMinutes": 5
        },
        {
          "id": "re_pulmonary_function_testing_obstructive_restrictive_sort",
          "type": "sort",
          "title": "Obstructive vs Restrictive Sort",
          "required": true,
          "estimatedMinutes": 6
        },
        {
          "id": "re_pulmonary_function_testing_body_box_indication_check",
          "type": "quiz",
          "title": "Body Box Indication Check",
          "required": true,
          "estimatedMinutes": 4
        },
        {
          "id": "re_pulmonary_function_testing_asthma_case",
          "type": "case",
          "title": "PFT Asthma Case Study",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_pulmonary_function_testing_knowledge_check",
          "type": "knowledge-check",
          "title": "PFT Knowledge Check",
          "required": true,
          "estimatedMinutes": 8
        },
        {
          "id": "re_pulmonary_function_testing_glossary_flashcards",
          "type": "flashcards",
          "title": "Glossary Flashcard Deck",
          "required": false,
          "estimatedMinutes": 8
        }
      ],
      "nbrcAlignment": [
        {
          "outlineId": "BOK-I.A.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulmonary function testing results, validity, obstructive/restrictive patterns, and peak-flow trends are interpreted."
        },
        {
          "outlineId": "BOK-I.C.20",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Spirometry setup, calibration, and forced vital capacity maneuvers are practiced."
        },
        {
          "outlineId": "BOK-I.C.22",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Lung volume measurement concepts, body plethysmography, and gas dilution are covered."
        },
        {
          "outlineId": "BOK-I.C.23",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "MIP/NIF and MEP respiratory muscle pressure device use is addressed."
        },
        {
          "outlineId": "BOK-I.D.3",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Peak flow zones and asthma monitoring trends are interpreted."
        },
        {
          "outlineId": "BOK-I.D.21",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Spirometry results are interpreted for obstructive/restrictive patterns and bronchodilator response."
        },
        {
          "outlineId": "BOK-I.D.23",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Lung volume results are interpreted for air trapping and restrictive patterns."
        },
        {
          "outlineId": "BOK-I.D.24",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Respiratory muscle strength results are interpreted for neuromuscular weakness escalation."
        },
        {
          "outlineId": "BOK-I.E.6",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulmonary function testing is selected/recommended when abnormal findings require comprehensive testing."
        },
        {
          "outlineId": "BOK-II.A.18",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Portable spirometer and peak-flow equipment are selected and used."
        },
        {
          "outlineId": "BOK-II.A.19",
          "coverageLevel": "assessed",
          "evidenceType": [
            "case",
            "knowledge-check",
            "quiz",
            "sort"
          ],
          "interactionIds": [
            "re_pulmonary_function_testing_calibration_sequence",
            "re_pulmonary_function_testing_peak_flow_zone_check",
            "re_pulmonary_function_testing_fvc_maneuver_steps",
            "re_pulmonary_function_testing_obstructive_restrictive_sort",
            "re_pulmonary_function_testing_body_box_indication_check",
            "re_pulmonary_function_testing_asthma_case",
            "re_pulmonary_function_testing_knowledge_check"
          ],
          "estimatedMinutes": 9,
          "notes": "Pulmonary function laboratory equipment, calibration, body box, and gas dilution devices are addressed."
        }
      ],
      "dcjAlignment": [
        {
          "patientConditionCategory": "Obstructive Lung Disease",
          "patientConditionType": "Asthma and COPD",
          "conditionTags": [
            "asthma",
            "COPD",
            "air trapping",
            "bronchodilator response"
          ],
          "clinicalJudgmentType": "Interpret pulmonary function data and select next assessment step",
          "setting": "ED, outpatient pulmonary lab, bedside assessment"
        },
        {
          "patientConditionCategory": "Restrictive and Neuromuscular Conditions",
          "patientConditionType": "Restrictive patterns and ventilatory muscle weakness",
          "conditionTags": [
            "restriction",
            "neuromuscular weakness",
            "MIP",
            "NIF",
            "MEP"
          ],
          "clinicalJudgmentType": "Identify reduced volumes and respiratory muscle weakness requiring escalation",
          "setting": "Pulmonary function lab, ICU, acute care"
        }
      ],
      "mappingStatus": "first-pass-conservative"
    }
  ];

  const COURSE_ID_ALIASES = {
    "pulmocore-assessment": "pulmonary-assessment",
    "pulmocore-pulmonary-assessment": "pulmonary-assessment",
    "foundations-of-respiratory-care": "foundations",
    "pulmocore-foundations": "foundations",
    "pulmocore-physiology": "respiratory-physiology",
    "pulmocore-respiratory-physiology": "respiratory-physiology"
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
