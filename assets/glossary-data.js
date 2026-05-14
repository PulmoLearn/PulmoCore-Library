/**
 * PulmoLearn Central Glossary
 * ─────────────────────────────────────────────────────────────
 * All glossary terms for every lesson in one place.
 * Add new lesson terms by copying the pattern below.
 *
 * Each term object has:
 *   term       — the clinical term
 *   definition — plain-language definition
 *   rt         — RT-specific clinical relevance
 *   lessons    — array of lesson IDs this term appears in
 *
 * To add a new lesson's terms:
 *   1. Copy the ALS block below as a template
 *   2. Replace terms with your lesson's glossaryTerms array
 *   3. Add the lesson ID to the lessons array on each term
 * ─────────────────────────────────────────────────────────────
 */

const PULMO_GLOSSARY = [

  // ── ALS ───────────────────────────────────────────────────
  { term: "ALS", definition: "Amyotrophic lateral sclerosis is a progressive motor neuron disease that weakens voluntary muscles, including those needed for breathing, cough, speech, and swallowing.", rt: "RTs monitor ventilatory muscle decline, cough effectiveness, secretion clearance, and need for NIV or airway support.", lessons: ["als"] },
  { term: "Motor neuron disease", definition: "A disorder affecting nerve cells that control voluntary skeletal muscles.", rt: "Explains why respiratory failure in ALS is neuromuscular rather than primarily lung-tissue disease.", lessons: ["als"] },
  { term: "Diaphragm weakness", definition: "Reduced strength of the main inspiratory muscle.", rt: "Causes reduced vital capacity, orthopnea, nocturnal hypoventilation, and eventual ventilatory failure.", lessons: ["als", "guillain_barre", "myasthenia_gravis"] },
  { term: "Nocturnal hypoventilation", definition: "Inadequate ventilation during sleep, often presenting before daytime ventilatory failure.", rt: "Morning headaches, sleep disruption, daytime somnolence, and rising CO₂ should prompt evaluation.", lessons: ["als", "guillain_barre", "kyphoscoliosis", "sleep_apnea"] },
  { term: "FVC", definition: "Forced vital capacity; the volume exhaled forcefully after a full inhalation.", rt: "Serial FVC helps track respiratory muscle decline in neuromuscular disease.", lessons: ["als", "guillain_barre", "myasthenia_gravis", "copd", "asthma"] },
  { term: "SVC", definition: "Slow vital capacity; the volume exhaled slowly after a full inhalation.", rt: "Often easier than FVC for weak neuromuscular patients.", lessons: ["als", "guillain_barre"] },
  { term: "MIP/NIF", definition: "Maximal inspiratory pressure or negative inspiratory force; a measure of inspiratory muscle strength.", rt: "Declining values suggest weakening ventilatory muscles and may indicate need for ventilatory support.", lessons: ["als", "guillain_barre", "myasthenia_gravis"] },
  { term: "MEP", definition: "Maximal expiratory pressure; a measure of expiratory muscle strength.", rt: "Low MEP indicates impaired cough and secretion clearance risk.", lessons: ["als", "guillain_barre"] },
  { term: "Peak cough flow", definition: "The highest airflow generated during cough.", rt: "Low values indicate ineffective cough and need for cough augmentation strategies.", lessons: ["als", "guillain_barre", "myasthenia_gravis"] },
  { term: "Bulbar dysfunction", definition: "Weakness affecting speech, swallowing, airway protection, and secretion handling.", rt: "Raises aspiration risk and may reduce tolerance of mask NIV.", lessons: ["als", "guillain_barre"] },
  { term: "Aspiration", definition: "Entry of secretions, food, liquid, or gastric contents into the airway.", rt: "Can trigger pneumonia, atelectasis, hypoxemia, and acute respiratory decline.", lessons: ["als", "guillain_barre", "near_drowning", "pneumonia"] },
  { term: "NIV", definition: "Noninvasive ventilation delivered by mask or mouthpiece without an artificial airway.", rt: "A key intervention for chronic hypoventilation, acute respiratory failure, and neuromuscular disease.", lessons: ["als", "copd", "ards", "guillain_barre", "kyphoscoliosis", "sleep_apnea"] },
  { term: "BiPAP", definition: "Bilevel positive airway pressure that supports inspiration and expiration with different pressure levels.", rt: "Common mode used to support ventilation in ALS, COPD, and other conditions.", lessons: ["als", "copd", "sleep_apnea", "kyphoscoliosis"] },
  { term: "Cough assist", definition: "Mechanical insufflation-exsufflation that helps move secretions by simulating a stronger cough.", rt: "Useful when expiratory muscles cannot clear secretions effectively.", lessons: ["als", "guillain_barre", "myasthenia_gravis"] },
  { term: "Air stacking", definition: "Technique using sequential breaths to increase lung volume before cough.", rt: "Can improve cough volume when appropriate and tolerated.", lessons: ["als"] },
  { term: "Orthopnea", definition: "Shortness of breath when lying flat.", rt: "High-yield clue for diaphragm weakness or cardiogenic pulmonary edema.", lessons: ["als", "cardiogenic_pulmonary_edema"] },
  { term: "Hypoventilation", definition: "Inadequate alveolar ventilation resulting in CO₂ retention.", rt: "Must be distinguished from hypoxemia; treatment is ventilatory support, not oxygen alone.", lessons: ["als", "kyphoscoliosis", "guillain_barre", "sleep_apnea"] },
  { term: "Hypercapnia", definition: "Elevated CO₂ in the blood (PaCO₂ >45 mmHg).", rt: "Indicates ventilatory failure; requires support of ventilation, not just supplemental oxygen.", lessons: ["als", "copd", "kyphoscoliosis", "guillain_barre"] },
  { term: "Tracheostomy", definition: "A surgical airway opening through the anterior neck into the trachea.", rt: "May be needed for long-term ventilatory support or airway protection in progressive neuromuscular disease.", lessons: ["als"] },
  { term: "Secretion retention", definition: "Inability to clear mucus or respiratory secretions from the airway.", rt: "Leads to atelectasis, infection, and acute respiratory decline; requires active airway clearance strategies.", lessons: ["als", "guillain_barre", "cystic_fibrosis", "bronchiectasis"] },

  // ── ARDS ──────────────────────────────────────────────────
  { term: "ARDS", definition: "Acute respiratory distress syndrome; diffuse alveolar injury causing refractory hypoxemia and decreased lung compliance.", rt: "Requires lung-protective ventilation strategies to minimize barotrauma and volutrauma.", lessons: ["ards"] },
  { term: "Berlin Definition", definition: "The 2012 classification system for ARDS based on PaO₂/FiO₂ ratio: mild (200–300), moderate (100–200), severe (<100).", rt: "Guides ventilator management and prognosis in ARDS.", lessons: ["ards"] },
  { term: "PaO₂/FiO₂ ratio", definition: "The ratio of arterial oxygen partial pressure to inspired oxygen fraction; used to classify ARDS severity.", rt: "A falling P/F ratio indicates worsening oxygenation failure.", lessons: ["ards"] },
  { term: "Lung-protective ventilation", definition: "A ventilator strategy using low tidal volumes (4–6 mL/kg IBW) and limited plateau pressures to prevent ventilator-induced lung injury.", rt: "Standard of care in ARDS; reduces mortality.", lessons: ["ards"] },
  { term: "PEEP", definition: "Positive end-expiratory pressure; pressure maintained in the airway at the end of exhalation to prevent alveolar collapse.", rt: "Improves oxygenation in ARDS by recruiting collapsed alveoli.", lessons: ["ards", "rds"] },
  { term: "Prone positioning", definition: "Placing a mechanically ventilated patient face-down to improve ventilation-perfusion matching and oxygenation.", rt: "Used in severe ARDS; improves dorsal lung recruitment.", lessons: ["ards"] },
  { term: "Plateau pressure", definition: "Airway pressure measured at end-inspiration with no airflow; reflects alveolar pressure.", rt: "Should be kept below 30 cmH₂O in lung-protective ventilation.", lessons: ["ards"] },
  { term: "Driving pressure", definition: "Plateau pressure minus PEEP; reflects the stress applied to the respiratory system per breath.", rt: "Higher driving pressures are associated with worse outcomes in ARDS.", lessons: ["ards"] },
  { term: "Refractory hypoxemia", definition: "Oxygen levels that do not improve despite high FiO₂.", rt: "Hallmark of ARDS; requires escalation of ventilatory support strategies.", lessons: ["ards"] },

  // ── ASTHMA ────────────────────────────────────────────────
  { term: "Asthma", definition: "A chronic inflammatory airway disease characterized by variable airflow obstruction, bronchospasm, and airway hyperresponsiveness.", rt: "Managed with bronchodilators, anti-inflammatory agents, and monitoring for status asthmaticus.", lessons: ["asthma"] },
  { term: "Bronchospasm", definition: "Sudden constriction of the bronchial smooth muscle causing airway narrowing.", rt: "Treated with short-acting beta-2 agonists (albuterol) and anticholinergics.", lessons: ["asthma"] },
  { term: "Status asthmaticus", definition: "Severe, prolonged asthma exacerbation that does not respond to standard bronchodilator therapy.", rt: "Requires escalation including IV magnesium, heliox, and possible intubation.", lessons: ["asthma"] },
  { term: "Peak flow", definition: "Maximum airflow rate during a forced exhalation; measured with a peak flow meter.", rt: "Used to monitor asthma control and severity zones (green/yellow/red).", lessons: ["asthma"] },
  { term: "Albuterol", definition: "A short-acting beta-2 agonist bronchodilator that relaxes bronchial smooth muscle.", rt: "First-line rescue medication for acute bronchospasm in asthma and COPD.", lessons: ["asthma", "copd"] },
  { term: "Airway hyperresponsiveness", definition: "An exaggerated bronchospastic response to triggers such as allergens, cold air, or exercise.", rt: "A defining feature of asthma that drives the need for controller therapy.", lessons: ["asthma"] },
  { term: "Heliox", definition: "A mixture of helium and oxygen that reduces turbulent airflow in narrowed airways.", rt: "Used in severe asthma or upper airway obstruction to reduce work of breathing.", lessons: ["asthma"] },

  // ── COPD ──────────────────────────────────────────────────
  { term: "COPD", definition: "Chronic obstructive pulmonary disease; a progressive condition with persistent airflow limitation from emphysema and/or chronic bronchitis.", rt: "Managed with bronchodilators, pulmonary rehab, oxygen therapy, and exacerbation prevention.", lessons: ["copd"] },
  { term: "GOLD staging", definition: "Global Initiative for Chronic Obstructive Lung Disease classification of COPD severity based on FEV₁.", rt: "Guides pharmacological and non-pharmacological management.", lessons: ["copd"] },
  { term: "FEV₁", definition: "Forced expiratory volume in one second; the volume exhaled in the first second of a forced exhalation.", rt: "Primary measure of airflow limitation in obstructive lung disease.", lessons: ["copd", "asthma"] },
  { term: "Air trapping", definition: "Incomplete emptying of alveoli during exhalation, causing increased residual volume.", rt: "Leads to hyperinflation and barrel chest in COPD; worsens dynamic hyperinflation.", lessons: ["copd", "asthma"] },
  { term: "Pursed-lip breathing", definition: "Breathing technique where exhalation is done through pursed lips to slow airflow and reduce air trapping.", rt: "Taught to COPD patients to improve exhalation and reduce dyspnea.", lessons: ["copd"] },
  { term: "Hypoxic drive", definition: "A theoretical concern that supplemental oxygen may blunt respiratory drive in chronic hypercapnic COPD patients.", rt: "Titrate oxygen to SpO₂ 88–92% in known or suspected chronic hypercapnia.", lessons: ["copd"] },

  // ── PULMONARY EMBOLISM ────────────────────────────────────
  { term: "Pulmonary embolism", definition: "Obstruction of a pulmonary artery by a blood clot, causing dead space ventilation and hypoxemia.", rt: "Sudden dyspnea, hypoxemia, and chest pain in a patient with risk factors should raise suspicion.", lessons: ["pulmonary_embolism"] },
  { term: "Dead space ventilation", definition: "Ventilation of lung units that receive no perfusion, contributing to wasted ventilation.", rt: "Increases in PE and other conditions that reduce pulmonary blood flow.", lessons: ["pulmonary_embolism", "ards"] },
  { term: "Wells criteria", definition: "A clinical scoring tool to estimate the pre-test probability of pulmonary embolism.", rt: "Guides decision to pursue imaging or anticoagulation.", lessons: ["pulmonary_embolism"] },
  { term: "V/Q mismatch", definition: "Imbalance between ventilation and perfusion in the lung, causing hypoxemia.", rt: "A key mechanism in PE, pneumonia, atelectasis, and ARDS.", lessons: ["pulmonary_embolism", "pneumonia", "ards", "atelectasis"] },

  // ── PNEUMONIA ─────────────────────────────────────────────
  { term: "Pneumonia", definition: "Infection of the lung parenchyma causing alveolar consolidation, impaired gas exchange, and inflammatory response.", rt: "RT manages oxygenation, secretion clearance, positioning, and escalation to ventilatory support.", lessons: ["pneumonia"] },
  { term: "Consolidation", definition: "Filling of alveolar spaces with fluid, pus, or cells, replacing air with dense material.", rt: "Causes dullness to percussion, bronchial breath sounds, and reduced oxygenation.", lessons: ["pneumonia"] },
  { term: "CURB-65", definition: "A scoring tool for community-acquired pneumonia severity based on confusion, urea, respiratory rate, blood pressure, and age.", rt: "Guides hospitalization and ICU admission decisions.", lessons: ["pneumonia"] },

  // ── NEONATAL RDS ──────────────────────────────────────────
  { term: "Surfactant", definition: "A phospholipid mixture produced by type II pneumocytes that reduces alveolar surface tension and prevents collapse.", rt: "Deficiency in premature infants causes RDS; exogenous surfactant is the primary treatment.", lessons: ["rds", "mas"] },
  { term: "CPAP", definition: "Continuous positive airway pressure; delivers constant positive pressure to keep airways open.", rt: "First-line respiratory support for neonatal RDS and obstructive sleep apnea.", lessons: ["rds", "sleep_apnea", "copd"] },
  { term: "Grunting", definition: "Expiratory sound produced when the glottis partially closes during exhalation to maintain lung volume.", rt: "A sign of respiratory distress in neonates; indicates need for assessment and support.", lessons: ["rds", "ttn"] },

  // ── SLEEP APNEA ───────────────────────────────────────────
  { term: "Apnea", definition: "Cessation of airflow for 10 seconds or more during sleep.", rt: "Central apneas lack effort; obstructive apneas retain effort against a closed airway.", lessons: ["sleep_apnea"] },
  { term: "AHI", definition: "Apnea-hypopnea index; the number of apneas and hypopneas per hour of sleep.", rt: "Mild OSA: 5–14/hr; Moderate: 15–29/hr; Severe: ≥30/hr.", lessons: ["sleep_apnea"] },
  { term: "OSA", definition: "Obstructive sleep apnea; repeated upper airway collapse during sleep causing apneas.", rt: "Treated with CPAP; RTs perform titrations and troubleshoot adherence.", lessons: ["sleep_apnea"] },

  // ── SHARED CORE TERMS ─────────────────────────────────────
  { term: "SpO₂", definition: "Peripheral oxygen saturation measured by pulse oximetry.", rt: "A useful but indirect measure; does not reflect ventilation or CO₂ status.", lessons: ["als", "ards", "asthma", "copd", "pneumonia", "rds"] },
  { term: "PaCO₂", definition: "Partial pressure of carbon dioxide in arterial blood; normal is 35–45 mmHg.", rt: "Elevated values indicate hypoventilation; reduced values indicate hyperventilation.", lessons: ["als", "ards", "copd", "guillain_barre"] },
  { term: "PaO₂", definition: "Partial pressure of oxygen in arterial blood; normal is 80–100 mmHg on room air.", rt: "Used alongside SpO₂ to assess oxygenation in critically ill patients.", lessons: ["ards", "pneumonia", "copd"] },
  { term: "Work of breathing", definition: "The effort required to move air in and out of the lungs.", rt: "Increased WOB is a key indicator of respiratory distress requiring intervention.", lessons: ["als", "ards", "asthma", "copd", "rds"] },
  { term: "Atelectasis", definition: "Collapse of alveoli or a lung segment, reducing gas exchange surface area.", rt: "Prevented and treated with lung expansion therapy, positioning, and airway clearance.", lessons: ["atelectasis", "als", "pneumonia", "rds"] },
  { term: "Tidal volume", definition: "The volume of air moved with each normal breath; approximately 500 mL in adults.", rt: "Target 4–6 mL/kg IBW in lung-protective ventilation for ARDS.", lessons: ["ards", "als"] },
  { term: "Compliance", definition: "The ability of the lungs and chest wall to expand; reduced in restrictive diseases and ARDS.", rt: "Low compliance requires higher pressures to deliver the same tidal volume.", lessons: ["ards", "rds", "kyphoscoliosis", "interstitial_lung_disease"] },
  { term: "Resistance", definition: "Opposition to airflow in the airways; increased in obstructive diseases.", rt: "High resistance in asthma and COPD requires bronchodilators and proper exhalation time.", lessons: ["asthma", "copd"] },
  { term: "Pneumothorax", definition: "Air in the pleural space causing lung collapse.", rt: "Tension pneumothorax is a life-threatening emergency requiring immediate decompression.", lessons: ["pneumothorax"] },
  { term: "Pleural effusion", definition: "Fluid accumulation in the pleural space.", rt: "Restricts lung expansion; large effusions may require drainage.", lessons: ["pleural_effusion"] },

]

// Make available globally
window.PULMO_GLOSSARY = PULMO_GLOSSARY
