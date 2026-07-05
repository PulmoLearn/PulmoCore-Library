/*
  PulmoLearn / PulmoCore
  NBRC RT Detailed Content Outline Registry
  Effective January 2027

  Purpose:
  - Canonical outline IDs for lesson metadata and dashboard filtering.
  - Lesson files should map to these IDs using window.PULMO_LESSON.nbrcAlignment.
  - Program dashboards can use this file to build line-item coverage reports.

  Suggested lesson mapping shape:
  window.PULMO_LESSON.nbrcAlignment = [
    {
      outlineId: "BOK-I.D.7",
      coverageLevel: "assessed",
      evidenceType: ["instruction", "case-study", "calculation", "knowledge-check"],
      interactionIds: ["ards_pf_ratio_activity"],
      estimatedMinutes: 8
    }
  ];
*/
(function (global) {
  "use strict";

  const COVERAGE_LEVELS = [
    { id: "introduced", label: "Introduced", description: "Mentioned or explained briefly." },
    { id: "reinforced", label: "Reinforced", description: "Taught with examples or repeated across lessons." },
    { id: "applied", label: "Applied", description: "Used in clinical reasoning, cases, calculations, or decision-making." },
    { id: "assessed", label: "Assessed", description: "Learner must apply it in an activity, case, calculation, or knowledge check." }
  ];

  const EVIDENCE_TYPES = [
    "instruction",
    "video",
    "case-study",
    "guided-case",
    "knowledge-check",
    "calculation",
    "matching",
    "sorting",
    "sequence",
    "simulation",
    "flashcard",
    "glossary",
    "clinical-pearl",
    "board-prep"
  ];

  const COGNITIVE_LEVELS = ["recall", "application", "analysis", "integration", "ethics"];

  const OUTLINE = {
    schemaVersion: "2026.07.05",
    outlineId: "NBRC-RT-DCO-2027",
    title: "NBRC Respiratory Therapy Examination Detailed Content Outline",
    effectiveDate: "2027-01",
    sourceNote: "Based on NBRC RT Detailed Content Outline effective January 2027. Use official NBRC document as source of truth for legal/accreditation wording.",
    exam: {
      scoredItems: 160,
      breadthOfKnowledgeItems: 100,
      depthOfClinicalJudgmentItems: 60,
      pretestItems: 25,
      totalItemsAdministered: 185,
      timeLimitHours: 4
    },
    coverageLevels: COVERAGE_LEVELS,
    evidenceTypes: EVIDENCE_TYPES,
    cognitiveLevels: COGNITIVE_LEVELS,
    breadthOfKnowledge: [
      {
        id: "BOK-I",
        domainId: "I",
        title: "Patient Data",
        itemCount: 25,
        sections: [
          {
            id: "BOK-I.A",
            sectionId: "I.A",
            title: "Evaluate Data in the Patient Record",
            itemCount: 3,
            items: [
              { id: "BOK-I.A.1", label: "Patient history", examples: ["history of present illness (HPI)", "social, family, and medical history", "consultations/orders", "medication reconciliation", "notes/flowsheet", "DNR status/advance directives", "vaccination status"] },
              { id: "BOK-I.A.2", label: "Laboratory results", examples: ["CBC and differential", "IgE", "electrolytes", "coagulation studies", "Gram stain, culture, and sensitivities", "respiratory pathogen studies", "cardiac biomarkers", "blood gas analysis and/or hemoximetry (CO-oximetry)"] },
              { id: "BOK-I.A.3", label: "Pulmonary function testing results", examples: ["spirometry", "lung volumes", "DLCO"] },
              { id: "BOK-I.A.4", label: "Imaging study results", examples: ["chest radiograph", "CT scan", "ultrasonography and/or echocardiography", "ventilation/perfusion scan", "ECG"] },
              { id: "BOK-I.A.5", label: "Maternal and perinatal / neonatal history", examples: ["APGAR scores", "gestational age", "L/S ratio"] },
              { id: "BOK-I.A.6", label: "Sleep study results", examples: ["apnea-hypopnea index (AHI)"] },
              { id: "BOK-I.A.7", label: "Trends in monitoring results", examples: ["fluid balance", "vital signs/hemodynamics", "intracranial pressure", "ventilator liberation parameters", "pulmonary mechanics for screening", "transtracheal cuff pressure", "pulse oximetry and hemoximetry", "capnography", "transcutaneous monitoring"] },
              { id: "BOK-I.A.8", label: "Determination of a patient's condition", examples: [] }
            ]
          },
          {
            id: "BOK-I.B",
            sectionId: "I.B",
            title: "Perform Clinical Assessment",
            itemCount: 6,
            items: [
              { id: "BOK-I.B.1", label: "Evaluating a patient through observation or interview", examples: ["general appearance", "mental status/LOC/orientation/agitation/ability to cooperate", "level of pain", "shortness of breath, cough, sputum, exercise tolerance", "signs of labored breathing", "vaping or smoking history", "occupational and environmental exposures", "activities of daily living", "airway characteristics", "neonatal characteristics", "skin integrity", "learning needs", "social determinants of health and healthcare barriers"] },
              { id: "BOK-I.B.2", label: "Evaluating a patient through palpation", examples: ["pulse, rhythm, intensity", "asymmetrical chest movements", "crepitus", "tenderness", "tactile rhonchi", "tracheal deviation"] },
              { id: "BOK-I.B.3", label: "Auscultating to assess cardiopulmonary system", examples: ["breath sounds", "heart sounds", "adventitious sounds", "diminished or absent sounds"] },
              { id: "BOK-I.B.4", label: "Evaluating a patient’s chest radiograph", examples: [] }
            ]
          },
          {
            id: "BOK-I.C",
            sectionId: "I.C",
            title: "Perform Procedures to Gather Clinical Information",
            itemCount: 5,
            items: [
              { id: "BOK-I.C.1", label: "ECG", examples: [] },
              { id: "BOK-I.C.2", label: "Noninvasive monitoring", examples: ["SpO2", "SpCO", "capnography", "transcutaneous"] },
              { id: "BOK-I.C.3", label: "Mechanics of spontaneous ventilation linked to tidal volume, minute volume, maximal inspiratory pressure, and vital capacity", examples: [] },
              { id: "BOK-I.C.4", label: "Blood gas sample collection", examples: [] },
              { id: "BOK-I.C.5", label: "Blood gas analysis / hemoximetry (CO-oximetry)", examples: [] },
              { id: "BOK-I.C.6", label: "Oxygen titration with exercise", examples: [] },
              { id: "BOK-I.C.7", label: "Cardiopulmonary calculations", examples: ["P(A-a)O2", "VD/VT", "P/F", "OI", "SpO2/FiO2"] },
              { id: "BOK-I.C.8", label: "Pulmonary compliance and airway resistance", examples: [] },
              { id: "BOK-I.C.9", label: "Plateau pressure", examples: [] },
              { id: "BOK-I.C.10", label: "Auto-PEEP", examples: [] },
              { id: "BOK-I.C.11", label: "Spontaneous breathing trial (SBT)", examples: [] },
              { id: "BOK-I.C.12", label: "Apnea monitoring", examples: [] },
              { id: "BOK-I.C.13", label: "Apnea test (brain death determination)", examples: [] },
              { id: "BOK-I.C.14", label: "Overnight pulse oximetry / transcutaneous CO2 monitoring", examples: [] },
              { id: "BOK-I.C.15", label: "CPAP / NPPV titration during sleep", examples: [] },
              { id: "BOK-I.C.16", label: "Cuff status", examples: ["tracheal", "supraglottic airway"] },
              { id: "BOK-I.C.17", label: "Sputum sample characteristics", examples: [] },
              { id: "BOK-I.C.18", label: "6-minute walk test", examples: [] },
              { id: "BOK-I.C.19", label: "Oxygen titration", examples: [] },
              { id: "BOK-I.C.20", label: "Spirometry", examples: [] },
              { id: "BOK-I.C.21", label: "DLCO", examples: [] },
              { id: "BOK-I.C.22", label: "Lung volumes", examples: [] },
              { id: "BOK-I.C.23", label: "Tests of respiratory muscle strength", examples: ["MIP", "MEP", "MVV"] },
              { id: "BOK-I.C.24", label: "Mini-BAL", examples: [] }
            ]
          },
          {
            id: "BOK-I.D",
            sectionId: "I.D",
            title: "Evaluate Procedure Results",
            itemCount: 7,
            items: [
              { id: "BOK-I.D.1", label: "ECG", examples: [] },
              { id: "BOK-I.D.2", label: "Noninvasive monitoring", examples: ["SpO2", "SpCO", "capnography", "transcutaneous"] },
              { id: "BOK-I.D.3", label: "Peak flow", examples: [] },
              { id: "BOK-I.D.4", label: "Mechanics of spontaneous ventilation linked to tidal volume, minute volume, maximal inspiratory pressure, and vital capacity", examples: [] },
              { id: "BOK-I.D.5", label: "Blood gas analysis / hemoximetry (CO-oximetry)", examples: [] },
              { id: "BOK-I.D.6", label: "Oxygen titration with exercise", examples: [] },
              { id: "BOK-I.D.7", label: "Cardiopulmonary calculations", examples: ["P(A-a)O2", "VD/VT", "P/F", "OI", "SpO2/FiO2"] },
              { id: "BOK-I.D.8", label: "Hemodynamic parameters", examples: [] },
              { id: "BOK-I.D.9", label: "Pulmonary compliance and airway resistance", examples: [] },
              { id: "BOK-I.D.10", label: "Plateau pressure", examples: [] },
              { id: "BOK-I.D.11", label: "Auto-PEEP", examples: [] },
              { id: "BOK-I.D.12", label: "Spontaneous breathing trial (SBT)", examples: [] },
              { id: "BOK-I.D.13", label: "Apnea monitoring", examples: [] },
              { id: "BOK-I.D.14", label: "Apnea test (brain death determination)", examples: [] },
              { id: "BOK-I.D.15", label: "Overnight pulse oximetry / transcutaneous CO2 monitoring", examples: [] },
              { id: "BOK-I.D.16", label: "CPAP / NPPV titration during sleep", examples: [] },
              { id: "BOK-I.D.17", label: "Cuff status", examples: ["tracheal", "supraglottic airway"] },
              { id: "BOK-I.D.18", label: "Sputum sample characteristics", examples: [] },
              { id: "BOK-I.D.19", label: "6-minute walk test", examples: [] },
              { id: "BOK-I.D.20", label: "Oxygen titration", examples: [] },
              { id: "BOK-I.D.21", label: "Spirometry", examples: [] },
              { id: "BOK-I.D.22", label: "DLCO", examples: [] },
              { id: "BOK-I.D.23", label: "Lung volumes", examples: [] },
              { id: "BOK-I.D.24", label: "Tests of respiratory muscle strength", examples: ["MIP", "MEP", "MVV"] },
              { id: "BOK-I.D.25", label: "Mini-BAL", examples: [] }
            ]
          },
          {
            id: "BOK-I.E",
            sectionId: "I.E",
            title: "Recommend Diagnostic Procedures",
            itemCount: 4,
            items: [
              { id: "BOK-I.E.1", label: "Testing for tuberculosis", examples: [] },
              { id: "BOK-I.E.2", label: "Laboratory tests", examples: ["CBC and differential", "IgE", "electrolytes", "coagulation studies", "sputum culture and sensitivities", "cardiac biomarkers", "respiratory pathogen studies"] },
              { id: "BOK-I.E.3", label: "Imaging studies", examples: [] },
              { id: "BOK-I.E.4", label: "Bronchoscopy – diagnostic, therapeutic", examples: [] },
              { id: "BOK-I.E.5", label: "Bronchoalveolar lavage (BAL)", examples: [] },
              { id: "BOK-I.E.6", label: "Pulmonary function testing", examples: ["spirometry", "lung volumes", "DLCO"] },
              { id: "BOK-I.E.7", label: "Noninvasive monitoring", examples: ["SpO2", "SpCO", "capnography", "transcutaneous"] },
              { id: "BOK-I.E.8", label: "Blood gas and/or hemoximetry (CO-oximetry)", examples: [] },
              { id: "BOK-I.E.9", label: "ECG", examples: [] },
              { id: "BOK-I.E.10", label: "Exhaled gas analysis", examples: ["CO2", "CO"] },
              { id: "BOK-I.E.11", label: "Hemodynamic monitoring", examples: [] },
              { id: "BOK-I.E.12", label: "Sleep studies", examples: [] },
              { id: "BOK-I.E.13", label: "Thoracentesis", examples: [] }
            ]
          }
        ]
      },
      {
        id: "BOK-II",
        domainId: "II",
        title: "Management of Devices and Patient Safety Procedures",
        itemCount: 25,
        sections: [
          {
            id: "BOK-II.A",
            sectionId: "II.A",
            title: "Troubleshoot Devices During and After Assembling",
            itemCount: 19,
            items: [
              { id: "BOK-II.A.1", label: "Medical gas delivery interfaces", examples: ["mask", "cannula"] },
              { id: "BOK-II.A.2", label: "Medical gas delivery and/or clinical analyzing devices", examples: ["concentrator", "liquid system", "flowmeter", "regulator", "gas cylinder", "blender", "air compressor", "gas analyzer"] },
              { id: "BOK-II.A.3", label: "Heated high-flow devices", examples: [] },
              { id: "BOK-II.A.4", label: "CPAP / NPPV with patient interfaces", examples: [] },
              { id: "BOK-II.A.5", label: "Humidifiers", examples: [] },
              { id: "BOK-II.A.6", label: "Nebulizers", examples: [] },
              { id: "BOK-II.A.7", label: "Inhalers and accessories", examples: ["MDI", "DPI", "SMI", "spacer", "valved holding chamber"] },
              { id: "BOK-II.A.8", label: "Resuscitation equipment", examples: ["self-inflating resuscitator", "flow-inflating resuscitator", "T-piece resuscitator", "defibrillator"] },
              { id: "BOK-II.A.9", label: "Mechanical ventilators", examples: [] },
              { id: "BOK-II.A.10", label: "Intubation equipment", examples: ["direct laryngoscope", "video laryngoscope", "flexible fiberoptic bronchoscope"] },
              { id: "BOK-II.A.11", label: "Artificial airways and accessories", examples: ["cuff manometer", "endotracheal tube", "supraglottic airway", "tracheostomy/laryngectomy tube"] },
              { id: "BOK-II.A.12", label: "Suctioning equipment", examples: ["regulator", "canister", "tubing", "catheter"] },
              { id: "BOK-II.A.13", label: "Blood analyzers", examples: ["hemoximetry (CO-oximetry)", "point of care", "blood gas"] },
              { id: "BOK-II.A.14", label: "Breathing circuits", examples: [] },
              { id: "BOK-II.A.15", label: "Hyperinflation devices", examples: [] },
              { id: "BOK-II.A.16", label: "Secretion clearance devices", examples: [] },
              { id: "BOK-II.A.17", label: "Inhaled gas or medication delivery devices", examples: ["He/O2", "nitric oxide", "epoprostenol"] },
              { id: "BOK-II.A.18", label: "Portable spirometer", examples: [] },
              { id: "BOK-II.A.19", label: "Lung testing equipment in a pulmonary function laboratory", examples: [] },
              { id: "BOK-II.A.20", label: "Chest drainage system", examples: [] },
              { id: "BOK-II.A.21", label: "Noninvasive monitoring", examples: ["pulse oximeter", "capnometer", "transcutaneous"] },
              { id: "BOK-II.A.22", label: "Bronchoscopes", examples: [] },
              { id: "BOK-II.A.23", label: "Hemodynamic monitors, transducers, and arterial catheters", examples: [] }
            ]
          },
          {
            id: "BOK-II.B",
            sectionId: "II.B",
            title: "Ensure Infection Prevention or Control, Safety, and Performance of Quality Assurance Procedures",
            itemCount: 6,
            items: [
              { id: "BOK-II.B.1", label: "Adhering to infection prevention / control policies and procedures", examples: ["Standard Precautions", "donning/doffing", "isolation"] },
              { id: "BOK-II.B.2", label: "Adhering to disinfection policies and procedures", examples: [] },
              { id: "BOK-II.B.3", label: "Proper handling of biohazardous materials", examples: [] },
              { id: "BOK-II.B.4", label: "Performing quality control procedures", examples: ["blood analyzers", "gas analyzers", "pulmonary function equipment for testing", "mechanical ventilators", "noninvasive monitors"] },
              { id: "BOK-II.B.5", label: "Initiating protocols to prevent ventilator-associated events (VAE)", examples: [] }
            ]
          }
        ]
      },
      {
        id: "BOK-III",
        domainId: "III",
        title: "Initiation and Modification of Interventions",
        itemCount: 50,
        sections: [
          {
            id: "BOK-III.A",
            sectionId: "III.A",
            title: "Maintain a Patent Airway Including the Care of Artificial Airways",
            itemCount: 6,
            items: [
              { id: "BOK-III.A.1", label: "Proper positioning of a patient", examples: [] },
              { id: "BOK-III.A.2", label: "Recognizing a difficult airway", examples: [] },
              { id: "BOK-III.A.3", label: "Establishing and managing a patient’s airway", examples: ["nasopharyngeal airway", "oropharyngeal airway", "supraglottic airway", "endotracheal tube", "tracheostomy tube", "laryngectomy tube", "speaking valve", "tube exchanger", "video laryngoscope", "bougie"] },
              { id: "BOK-III.A.4", label: "Performing tracheostomy care", examples: [] },
              { id: "BOK-III.A.5", label: "Exchanging artificial airways", examples: [] },
              { id: "BOK-III.A.6", label: "Maintaining adequate humidification", examples: [] },
              { id: "BOK-III.A.7", label: "Performing extubation", examples: [] }
            ]
          },
          {
            id: "BOK-III.B",
            sectionId: "III.B",
            title: "Perform Airway Clearance and Lung Expansion Techniques",
            itemCount: 4,
            items: [
              { id: "BOK-III.B.1", label: "Postural drainage, percussion, or vibration", examples: [] },
              { id: "BOK-III.B.2", label: "Suctioning", examples: ["nasotracheal", "oropharyngeal", "artificial airway"] },
              { id: "BOK-III.B.3", label: "Mechanical devices", examples: ["high-frequency chest wall oscillation", "vibratory PEP", "oscillating lung expansion", "insufflation/exsufflation"] },
              { id: "BOK-III.B.4", label: "Assisted cough", examples: ["huff", "abdominal thrust"] },
              { id: "BOK-III.B.5", label: "Hyperinflation therapy", examples: [] },
              { id: "BOK-III.B.6", label: "Inspiratory muscle training", examples: [] }
            ]
          },
          {
            id: "BOK-III.C",
            sectionId: "III.C",
            title: "Support Oxygenation and Ventilation",
            itemCount: 10,
            items: [
              { id: "BOK-III.C.1", label: "Minimizing hypoxemia", examples: ["patient positioning", "airway clearance"] },
              { id: "BOK-III.C.2", label: "Initiating, maintaining, and titrating oxygenation support", examples: ["oxygen therapy", "heated high-flow devices", "CPAP by mask or nasal interface"] },
              { id: "BOK-III.C.3", label: "Initiating, maintaining, and titrating mechanical ventilation settings", examples: ["invasive mechanical ventilation", "noninvasive ventilation", "high-frequency ventilation", "alarms"] },
              { id: "BOK-III.C.4", label: "Recognizing and correcting patient-ventilator dyssynchrony", examples: [] },
              { id: "BOK-III.C.5", label: "Using ventilator graphics", examples: [] },
              { id: "BOK-III.C.6", label: "Performing lung recruitment maneuvers", examples: [] },
              { id: "BOK-III.C.7", label: "Liberating a patient from mechanical ventilation", examples: [] }
            ]
          },
          {
            id: "BOK-III.D",
            sectionId: "III.D",
            title: "Administer Medications and Specialty Gases",
            itemCount: 3,
            items: [
              { id: "BOK-III.D.1", label: "Aerosolized therapies", examples: ["antimicrobials", "pulmonary vasodilators", "bronchodilators", "mucolytics", "steroids", "antifibrinolytics", "anticoagulants"] },
              { id: "BOK-III.D.2", label: "Endotracheal instillation", examples: [] },
              { id: "BOK-III.D.3", label: "Specialty gases", examples: ["He/O2", "inhaled NO"] }
            ]
          },
          {
            id: "BOK-III.E",
            sectionId: "III.E",
            title: "Make or Recommend Changes to the Respiratory Care Plan",
            itemCount: 10,
            items: [
              { id: "BOK-III.E.1", label: "Treatment termination for a severe complication or adverse event", examples: [] },
              { id: "BOK-III.E.2", label: "Recommendations", examples: ["initiation of treatment based on patient response", "treatment of pneumothorax", "adjustment of fluid balance", "treatment of electrolyte imbalances", "insertion or change of artificial airway", "liberation from mechanical ventilation", "extubation", "discontinuation of treatment based on patient response", "consultation from a specialist", "patient positioning", "oxygen therapy", "humidification", "airway clearance", "hyperinflation", "mechanical ventilation"] },
              { id: "BOK-III.E.3", label: "Recommendations for pharmacologic interventions", examples: ["bronchodilators", "anti-inflammatory drugs", "mucolytics", "inhaled pulmonary vasodilators", "vasoactives and antiarrhythmics", "antimicrobials", "sedatives and hypnotics", "analgesics", "narcotic and benzodiazepine antagonists", "neuromuscular blocking and reversal agents", "diuretics", "surfactants", "antifibrinolytics", "biologics for asthma", "CFTR modulators for cystic fibrosis", "changes to drug, dosage, frequency, mode, or concentration"] }
            ]
          },
          {
            id: "BOK-III.F",
            sectionId: "III.F",
            title: "Use Evidence-Based Practice",
            itemCount: 3,
            items: [
              { id: "BOK-III.F.1", label: "Adherence to respiratory-driven protocols", examples: ["oxygen titration", "weaning", "aerosol therapy"] },
              { id: "BOK-III.F.2", label: "Classification of disease severity", examples: [] },
              { id: "BOK-III.F.3", label: "Application of national or international guidelines for diseases / conditions", examples: ["ARDS", "asthma", "COPD", "brain death", "cystic fibrosis"] }
            ]
          },
          {
            id: "BOK-III.G",
            sectionId: "III.G",
            title: "Provide Respiratory Care in High-Risk Situations",
            itemCount: 5,
            items: [
              { id: "BOK-III.G.1", label: "Emergency", examples: ["cardiopulmonary emergencies excluding CPR", "neonatal resuscitation", "disaster management", "medical emergency team (MET)"] },
              { id: "BOK-III.G.2", label: "Closed loop communication", examples: [] },
              { id: "BOK-III.G.3", label: "Patient transport", examples: ["land/air between hospitals", "within a hospital"] },
              { id: "BOK-III.G.4", label: "Debriefing following adverse patient events", examples: [] }
            ]
          },
          {
            id: "BOK-III.H",
            sectionId: "III.H",
            title: "Assist a Physician or Provider in Performing Procedures",
            itemCount: 4,
            items: [
              { id: "BOK-III.H.1", label: "Intubation", examples: [] },
              { id: "BOK-III.H.2", label: "Bronchoscopy", examples: [] },
              { id: "BOK-III.H.3", label: "Specialized bronchoscopy", examples: ["endobronchial ultrasound (EBUS)", "electromagnetic navigational bronchoscopy (ENB)"] },
              { id: "BOK-III.H.4", label: "Thoracentesis", examples: [] },
              { id: "BOK-III.H.5", label: "Tracheotomy", examples: [] },
              { id: "BOK-III.H.6", label: "Chest tube insertion", examples: [] },
              { id: "BOK-III.H.7", label: "Insertion of arterial or venous catheter", examples: [] },
              { id: "BOK-III.H.8", label: "Moderate (conscious) sedation", examples: [] },
              { id: "BOK-III.H.9", label: "Cardioversion", examples: [] },
              { id: "BOK-III.H.10", label: "Withdrawal of life support", examples: [] }
            ]
          },
          {
            id: "BOK-III.I",
            sectionId: "III.I",
            title: "Interact with Team Members, Patients, and Families",
            itemCount: 5,
            items: [
              { id: "BOK-III.I.1", label: "Interdisciplinary team", examples: ["transitioning care/handoffs", "responding to proposed care plan modifications", "communicating concerns leading to escalation of care", "providing education about respiratory care services", "patient-centered interactions", "trauma-informed interactions", "culturally aware interactions"] },
              { id: "BOK-III.I.2", label: "Patient and family education", examples: ["safety and infection control", "home care and related equipment", "smoking/vaping cessation", "exercise", "pulmonary rehabilitation", "asthma management", "COPD management", "cystic fibrosis management", "tracheostomy care", "ventilator dependent care"] }
            ]
          }
        ]
      }
    ],
    depthOfClinicalJudgment: {
      itemCount: 60,
      patientConditionTypes: [
        {
          id: "DCJ-ADULT",
          label: "Adults",
          itemCount: 50,
          categories: [
            {
              id: "DCJ-ADULT-A",
              label: "Chronic Lung Disease",
              itemCount: 17,
              examples: ["COPD", "asthma", "restrictive lung disease", "bronchiectasis", "cystic fibrosis"],
              subtypes: [
                { id: "DCJ-ADULT-A.1", label: "intubation and invasive mechanical ventilation", itemCount: 5 },
                { id: "DCJ-ADULT-A.2", label: "noninvasive management", itemCount: 6, examples: ["medical treatment", "noninvasive positive pressure ventilation"] },
                { id: "DCJ-ADULT-A.3", label: "outpatient management", itemCount: 3, examples: ["medical treatment", "discharge planning", "rehabilitation"] },
                { id: "DCJ-ADULT-A.4", label: "evaluation for a new diagnosis", itemCount: 3 }
              ]
            },
            { id: "DCJ-ADULT-B", label: "Trauma", itemCount: 4 },
            { id: "DCJ-ADULT-C", label: "Cardiovascular", itemCount: 5, examples: ["heart failure", "arrhythmia", "pulmonary hypertension", "myocardial ischemia/infarction", "pulmonary embolism", "shock"] },
            { id: "DCJ-ADULT-D", label: "Neurological or Neuromuscular", itemCount: 4 },
            {
              id: "DCJ-ADULT-E",
              label: "Medical",
              itemCount: 15,
              subtypes: [
                { id: "DCJ-ADULT-E.1", label: "infectious disease", itemCount: 5 },
                { id: "DCJ-ADULT-E.2", label: "acute respiratory distress syndrome", itemCount: 5 },
                { id: "DCJ-ADULT-E.3", label: "other", itemCount: 5, examples: ["immunocompromised", "obesity", "drug toxicity"] }
              ]
            },
            { id: "DCJ-ADULT-F", label: "Pre- and Post-Operative Care", itemCount: 5 }
          ]
        },
        {
          id: "DCJ-CHILD",
          label: "Children",
          itemCount: 10,
          categories: [
            { id: "DCJ-CHILD-A", label: "Pediatric", itemCount: 4, examples: ["asthma", "infectious disease", "bronchiolitis", "chronic lung disease of prematurity", "congenital defect"] },
            {
              id: "DCJ-CHILD-B",
              label: "Neonatal",
              itemCount: 6,
              subtypes: [
                { id: "DCJ-CHILD-B.1", label: "resuscitation", itemCount: 3 },
                { id: "DCJ-CHILD-B.2", label: "Respiratory Distress Syndrome", itemCount: 3 }
              ]
            }
          ]
        }
      ],
      clinicalJudgmentTypes: [
        { id: "CJ-IG", label: "Information Gathering", itemCount: 20, description: "Choose what to assess or interpret information." },
        { id: "CJ-DM", label: "Decision Making", itemCount: 40, description: "Decide what to add, modify, continue, or discontinue." }
      ],
      settings: [
        { id: "SETTING-HOSPITAL", label: "In a hospital", itemCount: 46 },
        { id: "SETTING-OUTSIDE-HOSPITAL", label: "Outside a hospital", itemCount: 14 }
      ]
    },
    patientAge: [
      { id: "AGE-NEONATAL", label: "Neonatal", description: "Birth to 1 month of age" },
      { id: "AGE-PEDIATRIC", label: "Pediatric", description: "1 month to 17 years of age" },
      { id: "AGE-ADULT-GENERAL", label: "Adult or General" }
    ]
  };

  function flattenBreadthItems(outline) {
    return (outline.breadthOfKnowledge || []).flatMap(domain =>
      (domain.sections || []).flatMap(section =>
        (section.items || []).map(item => ({
          ...item,
          domainId: domain.domainId,
          domainTitle: domain.title,
          sectionId: section.sectionId,
          sectionTitle: section.title,
          parentDomainId: domain.id,
          parentSectionId: section.id
        }))
      )
    );
  }

  function getBreadthItem(outlineId) {
    return flattenBreadthItems(OUTLINE).find(item => item.id === outlineId) || null;
  }

  function getSection(sectionId) {
    for (const domain of OUTLINE.breadthOfKnowledge) {
      const section = (domain.sections || []).find(sec => sec.id === sectionId || sec.sectionId === sectionId);
      if (section) return { ...section, domainId: domain.domainId, domainTitle: domain.title, parentDomainId: domain.id };
    }
    return null;
  }

  function normalizeLessonAlignment(lesson) {
    const raw = lesson && (lesson.nbrcAlignment || (lesson.nbrc && lesson.nbrc.alignment) || []);
    return raw.map(entry => {
      const item = getBreadthItem(entry.outlineId);
      return {
        ...entry,
        outlineItem: item,
        validOutlineId: Boolean(item),
        coverageLevel: entry.coverageLevel || "introduced",
        evidenceType: Array.isArray(entry.evidenceType) ? entry.evidenceType : (entry.evidenceType ? [entry.evidenceType] : [])
      };
    });
  }

  function summarizeRegistryCoverage(lessons) {
    const allItems = flattenBreadthItems(OUTLINE);
    const summary = new Map(allItems.map(item => [item.id, {
      outlineId: item.id,
      label: item.label,
      domainId: item.domainId,
      domainTitle: item.domainTitle,
      sectionId: item.sectionId,
      sectionTitle: item.sectionTitle,
      lessons: [],
      highestCoverageLevel: null,
      assessed: false,
      estimatedMinutes: 0
    }]));

    (lessons || []).forEach(lesson => {
      normalizeLessonAlignment(lesson).forEach(entry => {
        if (!entry.validOutlineId) return;
        const row = summary.get(entry.outlineId);
        row.lessons.push({
          lessonId: lesson.lessonId,
          lessonTitle: lesson.lessonTitle || lesson.title || lesson.displayTitle,
          courseId: lesson.courseId,
          courseTitle: lesson.courseTitle || lesson.courseName,
          coverageLevel: entry.coverageLevel,
          evidenceType: entry.evidenceType,
          interactionIds: entry.interactionIds || [],
          estimatedMinutes: entry.estimatedMinutes || 0
        });
        row.estimatedMinutes += entry.estimatedMinutes || 0;
        row.assessed = row.assessed || entry.coverageLevel === "assessed" || entry.evidenceType.includes("knowledge-check") || entry.evidenceType.includes("case-study");
        const rank = { introduced: 1, reinforced: 2, applied: 3, assessed: 4 };
        if (!row.highestCoverageLevel || (rank[entry.coverageLevel] || 0) > (rank[row.highestCoverageLevel] || 0)) {
          row.highestCoverageLevel = entry.coverageLevel;
        }
      });
    });

    return Array.from(summary.values()).map(row => ({
      ...row,
      lessonCount: row.lessons.length,
      coverageStatus: row.lessons.length === 0 ? "gap" : (row.assessed ? "assessed" : "covered")
    }));
  }

  global.NBRC_RT_DCO_2027 = OUTLINE;
  global.NBRC_RT_DCO_2027_HELPERS = {
    flattenBreadthItems,
    getBreadthItem,
    getSection,
    normalizeLessonAlignment,
    summarizeRegistryCoverage
  };
})(typeof window !== "undefined" ? window : globalThis);
