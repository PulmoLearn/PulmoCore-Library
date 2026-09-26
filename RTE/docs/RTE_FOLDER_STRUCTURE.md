# PulmoLearn RTE — Canonical Folder Structure

Treat **`RTE/` as the root folder**. URLs are root-relative, so a canonical lesson lives at:
`/RTE/{TOPIC_CODE}/{lesson-file}.html`

The lesson registry currently defines **248 canonical lessons across 44 topic-code folders**.

```text
RTE/
├── index.html                         # Main RTE dashboard/index (current: RTE-index-v4)
├── nbrc-outline-map.js                # 2027 NBRC outline registry/filtering map
├── rte-lesson-registry.js             # Canonical 248-lesson routing registry
├── rte-lesson-registry.json           # JSON/source copy of lesson registry
├── rte-learner-engine.js              # Learner progress/state engine
├── rte-lesson-bridge.js               # Shared lesson navigation/progress bridge
├── rte-diagnostic-engine.js           # Pretest/diagnostic engine
├── rte-question-bank.js               # LIVE bank filename used by pretest; deploy v58 here
├── rte-question-bank-v58.js           # Versioned production bank/archive copy
├── rte-question-bank-v58.json         # Canonical editable/source bank
│
├── pretest/
│   └── index.html                     # RTE pretest (source artifact: RTE-pretest.html)
│
├── docs/                              # Keep documentation OUT of learner-facing routes
│   ├── RTE_FOLDER_STRUCTURE.md
│   ├── rte-learner-engine-README.md
│   ├── rte-lesson-bridge-README.md
│   ├── nbrc-outline-map-README.md
│   ├── question-bank/
│   │   ├── UPLOAD_MAP.md
│   │   ├── coverage-audit.json
│   │   └── integrity-audit.json
│   └── source-crosswalks/
│       ├── PulmoLearn_RTE_Authoring_Ready_MicroLesson_Registry.pdf
│       └── PulmoLearn_RTE_MicroLessons_by_NBRC_Content_Outline_REVISED.pdf
│
├── archive/                           # Do not load these from production pages
│   ├── index-history/
│   │   ├── RTE-index.html
│   │   ├── RTE-index-v2.html
│   │   ├── RTE-index-v3.html
│   │   └── RTE-index-v4.html
│   ├── prototypes/
│   │   ├── dashboard/
│   │   └── diagnostic/
│   └── question-bank-history/         # Optional: old v4-v57 bank snapshots
│
├── TOPIC FOLDERS (canonical lesson HTML lives directly in each code folder)
│   ├── PA/    # Patient Assessment & Clinical Data Gathering
│   ├── ABG/    # ABGs, Acid-Base & Ventilation Assessment
│   ├── GX/    # Oxygenation, Gas Exchange & Oxygen Transport
│   ├── O2/    # Oxygen Therapy & Delivery Devices
│   ├── GAS/    # Medical Gas Systems & Specialty Gases
│   ├── HUM/    # Humidification & Aerosol Systems
│   ├── AER/    # Aerosol Drug Delivery & Inhaler Devices
│   ├── PHARM/    # Respiratory Pharmacology
│   ├── AIR/    # Airway Management & Airway Adjuncts
│   ├── AA/    # Artificial Airways & Tracheostomy Management
│   ├── SUC/    # Suctioning & Secretion Management
│   ├── ACL/    # Airway Clearance & Lung Expansion
│   ├── MVF/    # Mechanical Ventilation Fundamentals
│   ├── MVS/    # Ventilator Settings, Timing & Calculations
│   ├── VGR/    # Ventilator Graphics & Patient-Ventilator Interaction
│   ├── ALM/    # Ventilator Alarms & Troubleshooting
│   ├── DVM/    # Disease-Specific Mechanical Ventilation
│   ├── RES/    # Advanced/Rescue Ventilation & Air-Leak Syndromes
│   ├── NIV/    # Noninvasive Ventilation & CPAP
│   ├── LIB/    # Liberation, SBTs & Extubation
│   ├── PFT/    # Pulmonary Function Testing
│   ├── MON/    # Capnography & Noninvasive Monitoring
│   ├── CV/    # Cardiovascular Assessment, ECG & Resuscitation
│   ├── HEM/    # Hemodynamics & Cardiopulmonary Oxygen Delivery
│   ├── IMG/    # Chest Imaging & Diagnostic Procedures
│   ├── PROC/    # Bronchoscopy & Respiratory Procedures
│   ├── PLE/    # Pleural Disease, Chest Tubes & Drainage Systems
│   ├── OBS/    # Obstructive Pulmonary Disease
│   ├── RST/    # Restrictive, Neuromuscular & Chest-Wall Disease
│   ├── INF/    # Pneumonia, Infection & Acute Respiratory Failure
│   ├── ARDS/    # ARDS & Severe Refractory Hypoxemia
│   ├── SLP/    # Sleep-Disordered Breathing
│   ├── NEO/    # Neonatal Respiratory Care
│   ├── PED/    # Pediatric Respiratory Care
│   ├── EM/    # Emergency, Trauma, Burn & Toxic Exposure
│   ├── ALT/    # Altitude, Diving & Dysbaric Emergencies
│   ├── TRN/    # Transport, Disaster & Emergency Equipment
│   ├── HOME/    # Home Respiratory Care
│   ├── REHAB/    # Pulmonary Rehabilitation, Smoking Cessation & Self-Management
│   ├── EDU/    # Patient/Family Education & Communication
│   ├── IPC/    # Infection Prevention, Equipment Processing & Safety
│   ├── QC/    # Quality Control, Calibration & Equipment Performance
│   ├── LAB/    # Laboratory Data & Relevant Nonrespiratory Findings
│   ├── QEP/    # Respiratory Care Quality, Protocols & Departmental Practice
```

## What should be live in `/RTE/`

The production runtime files should stay at the **RTE root** because the current index/pretest use root-relative references such as `/RTE/rte-lesson-registry.js`.

- `index.html`
- `nbrc-outline-map.js`
- `rte-lesson-registry.js`
- `rte-learner-engine.js`
- `rte-lesson-bridge.js`
- `rte-diagnostic-engine.js`
- `rte-question-bank.js`
- `pretest/index.html`
- the 44 topic-code folders containing the 248 canonical lesson HTML files

## Question-bank naming rule

The current pretest loads `/RTE/rte-question-bank.js`.

Therefore:
- Keep `rte-question-bank-v58.js` as the **versioned master/archive**.
- Upload an identical copy named **`rte-question-bank.js`** as the live production file.
- Keep `rte-question-bank-v58.json` as source/backup; the browser does not need it unless code explicitly fetches JSON.

## What NOT to upload into the live root

Older index versions, prototypes, old question-bank versions, QA reports, PDFs, and authoring documents should live under `docs/` or `archive/`, not mixed into the learner-facing RTE root.
