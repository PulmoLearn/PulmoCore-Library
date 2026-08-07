(() => {
  "use strict";

  const ASSET_ROOT = "/competencies/hand-hygiene-isolation/assets/";
  const STICKY_HEADER_OFFSET = 130;

  const assetMap = {
    "gloves": { label: "Gloves", file: ASSET_ROOT + "gloves.png" },
    "gown": { label: "Gown", file: ASSET_ROOT + "gown.png" },
    "surgical-mask": { label: "Surgical mask", file: ASSET_ROOT + "surgical-mask.png" },
    "n95-mask": { label: "N95 mask", file: ASSET_ROOT + "n95-mask.png" },
    "face-shield": { label: "Face shield", file: ASSET_ROOT + "face-shield.png" },
    "single-patient-stethoscope": {
      label: "Single-patient-use stethoscope",
      file: ASSET_ROOT + "distractor.png"
    }
  };

  const signChoices = [
    { id: "airborne", title: "Airborne Precautions", subtitle: "N95 respirator required", image: ASSET_ROOT + "sign-airborne.png", fallbackClass: "airborne" },
    { id: "droplet", title: "Droplet Precautions", subtitle: "Surgical mask + eye protection", image: ASSET_ROOT + "sign-droplet.png", fallbackClass: "droplet" },
    { id: "contact", title: "Contact Precautions", subtitle: "Gown + gloves", image: ASSET_ROOT + "sign-contact.png", fallbackClass: "contact" },
    { id: "none", title: "No Isolation Sign", subtitle: "Standard precautions only", image: ASSET_ROOT + "sign-none.png", fallbackClass: "none" }
  ];

  const scenarios = [
    {
      id: "airborne",
      patient: "Maria R., 42 years",
      caseText: "Persistent cough, fever, night sweats, and weight loss. Pulmonary tuberculosis is being evaluated. Your hands are not visibly soiled.",
      correctSign: "airborne",
      correctHand: "alcohol",
      correctSetup: ["n95-mask"],
      signHints: [
        "Think back to the comparison table: which precaution is associated with a fit-tested respirator?",
        "Use the memory cue: Air → respirator. Tuberculosis is the key clue."
      ],
      handHints: [
        "Nothing in the case says your hands are visibly soiled. Which method did the lesson identify as preferred for routine care?",
        "Routine care + hands not visibly soiled → alcohol-based hand rub."
      ],
      setupHints: [
        "Use the sign you just selected. Which respiratory protection matches Airborne Precautions?",
        "Airborne Precautions require a fit-tested N95 or respirator."
      ],
      signExplanation: "Suspected pulmonary tuberculosis requires Airborne Precautions.",
      handExplanation: "Because your hands are not visibly soiled, alcohol-based hand rub is appropriate for routine hand hygiene.",
      setupExplanation: "Before entering, wear a fitted N95 respirator."
    },

    {
      id: "droplet",
      patient: "James T., 68 years",
      caseText: "Fever, cough, body aches, and positive influenza testing. The patient is sneezing frequently. Your hands are not visibly soiled.",
      correctSign: "droplet",
      correctHand: "alcohol",
      correctSetup: ["surgical-mask", "face-shield"],
      signHints: [
        "Think about the route of spread: coughing and sneezing produce respiratory droplets.",
        "Recall the memory cue: Droplet → mask + eyes."
      ],
      handHints: [
        "Choose the method based on your hands, not the isolation sign. Are they visibly soiled?",
        "Hands not visibly soiled → alcohol-based hand rub."
      ],
      setupHints: [
        "Think back to the Droplet memory cue from the teaching section.",
        "Droplet → surgical mask + eye protection."
      ],
      signExplanation: "Influenza is managed with Droplet Precautions.",
      handExplanation: "With no visible soil, alcohol-based hand rub is appropriate.",
      setupExplanation: "Use a surgical mask plus eye protection or a face shield."
    },

    {
      id: "contact",
      patient: "Linda P., 74 years",
      caseText: "Frequent watery diarrhea after recent antibiotic use. Stool testing is positive for C. difficile. The facility is currently managing a C. difficile outbreak.",
      correctSign: "contact",
      correctHand: "soap",
      correctSetup: ["gown", "gloves", "single-patient-stethoscope"],
      signHints: [
        "Focus on how contamination can spread from the patient and environment by touch.",
        "Use the memory cue: Contact → touch → gown + gloves."
      ],
      handHints: [
        "This case includes a specific circumstance that changes the usual routine hand-hygiene choice.",
        "The facility is managing a C. difficile outbreak; choose soap and water for this practice case."
      ],
      setupHints: [
        "Contact Precautions involve both what you wear and how you prevent equipment from carrying organisms to another patient.",
        "Think: gown + gloves, plus the item in the tray labeled for single-patient use."
      ],
      signExplanation: "C. difficile requires Contact Precautions.",
      handExplanation: "For this practice case, the stated C. difficile outbreak is the specific indication to choose soap and water.",
      setupExplanation: "Wear a gown and gloves and use the single-patient-use stethoscope to reduce cross-transmission through shared equipment."
    },

    {
      id: "standard",
      patient: "Noah B., 27 years",
      caseText: "Stable postoperative appendectomy patient with no known transmissible infection and no isolation order. You are entering to ask questions and check a pulse on intact skin. Your hands are not visibly soiled.",
      correctSign: "none",
      correctHand: "alcohol",
      correctSetup: [],
      signHints: [
        "No additional isolation order is present. Standard Precautions still apply to every patient.",
        "Standard Precautions do not require a special isolation sign."
      ],
      handHints: [
        "Your hands are not visibly soiled. Choose the routine hand-hygiene method.",
        "Routine care + hands not visibly soiled → alcohol-based hand rub."
      ],
      setupHints: [
        "Standard Precautions make gloves task-based. Is this task expected to involve body fluids, mucous membranes, non-intact skin, or contaminated equipment?",
        "For questions and a pulse on intact skin, no isolation-specific PPE or special equipment is required."
      ],
      signExplanation: "No isolation sign is needed. Standard Precautions still apply.",
      handExplanation: "Alcohol-based hand rub is appropriate because your hands are not visibly soiled.",
      setupExplanation: "No isolation-specific PPE or special patient-care equipment is required for the described task. Gloves would be added if the task created an exposure risk."
    }
  ];

  const handHygiene = {
    alcohol: {
      prompt: "Drag the alcohol-based hand-rub actions into the correct order.",
      steps: [
        "Dispense an appropriate amount of antiseptic product into the palm.",
        "Rub hands together, covering palms, fingers, between fingers, under nails, and around cuticles.",
        "Continue rubbing until the product is dry."
      ]
    },
    soap: {
      prompt: "Drag the antimicrobial soap and warm-water actions into the correct order.",
      steps: [
        "Stand at the sink without hands, body, or clothing touching the sink.",
        "Turn on the water and adjust flow and temperature.",
        "Wet forearms and hands thoroughly.",
        "Apply soap liberally to hands and forearms.",
        "Rub firmly to create lather and cover all skin surfaces for a minimum of 15 seconds.",
        "Rinse thoroughly from fingernails to forearms.",
        "Dry thoroughly from fingernails to forearms.",
        "Turn off the faucet with a paper towel and discard it properly.",
        "Allow hands to completely dry before applying gloves."
      ]
    }
  };

  const doffSteps = [
    "Remove gloves, avoiding contact between contaminated glove surfaces and bare skin.",
    "Remove goggles or face shield by handling the headband, ear pieces, or strap rather than the front.",
    "Remove the gown, touching the inside as much as possible and turning the contaminated surface inward.",
    "Remove the mask or respirator without touching the front. If an airborne respirator is worn, remove it after leaving the room and closing the door.",
    "Perform hand hygiene immediately after all PPE is removed."
  ];

  const state = {
    section: 0,
    scenarioIndex: 0,
    scenarioOrder: [0, 1, 2, 3],
    scenarioChoice: null,
    handChoice: null,
    selectedSetup: [],
    signCorrect: false,
    handCorrect: false,
    setupCorrect: false,
    signAttempts: 0,
    handAttempts: 0,
    setupAttempts: 0,
    route: "alcohol",
    sequenceCorrect: false,
    doffCorrect: false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function sameMembers(a, b) {
    const aa = [...a].sort();
    const bb = [...b].sort();
    return aa.length === bb.length && aa.every((value, index) => value === bb[index]);
  }

  function setFeedback(el, type, html) {
    el.className = `feedback show ${type}`;
    el.innerHTML = html;
  }

  function clearFeedback(el) {
    el.className = "feedback";
    el.innerHTML = "";
  }

  function initializeMediaFrames() {
    $$(".teach-asset").forEach(img => {
      const fallback = img.nextElementSibling;
      if (img.dataset.bound === "true") return;
      img.dataset.bound = "true";

      img.addEventListener("load", () => {
        img.classList.add("loaded");
        if (fallback) fallback.style.display = "none";
      });

      img.addEventListener("error", () => {
        img.classList.remove("loaded");
        if (fallback) fallback.style.display = "grid";
      });
    });
  }

  function initScenarioOrder() {
    state.scenarioOrder = shuffle([0, 1, 2, 3]);
  }

  function currentScenario() {
    return scenarios[state.scenarioOrder[state.scenarioIndex]];
  }

  function supportLabel() {
    return ["Guided", "Supported", "Reduced hints", "Independent"][state.scenarioIndex];
  }

  function hintFor(type, attempt) {
    const sc = currentScenario();
    const hints = sc[`${type}Hints`];

    if (state.scenarioIndex === 3) {
      return "Reassess the patient information and the rules from the teaching section, then try again.";
    }

    if (state.scenarioIndex === 2) {
      return hints[0];
    }

    return attempt <= 1 ? hints[0] : hints[1];
  }

  function scrollToCurrentSection() {
    const section = document.querySelector(
      `.lesson-section[data-section-panel="${state.section}"]`
    );
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY - STICKY_HEADER_OFFSET;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth"
    });
  }

  function updateProgress() {
    if (state.section === 0) {
      $("#progressText").textContent = "Teach";
      $("#progressBar").style.width = "7%";
      return;
    }

    if (state.section >= 1 && state.section <= 3) {
      const completed = state.scenarioIndex * 3 + state.section;
      const total = scenarios.length * 3 + 2;
      $("#progressText").textContent = `Patient ${state.scenarioIndex + 1} of 4`;
      $("#progressBar").style.width = `${(completed / total) * 100}%`;
      return;
    }

    if (state.section === 4) {
      $("#progressText").textContent = "Procedure Practice";
      $("#progressBar").style.width = "90%";
    } else if (state.section === 5) {
      $("#progressText").textContent = "Procedure Practice";
      $("#progressBar").style.width = "96%";
    } else {
      $("#progressText").textContent = "Complete";
      $("#progressBar").style.width = "100%";
    }
  }

  function updatePatientBadges() {
    const count = `Patient ${state.scenarioIndex + 1} of ${scenarios.length}`;
    $("#patientProgressBadge").textContent = count;
    $$(".patient-count-copy").forEach(el => el.textContent = count);

    const support = supportLabel();
    ["supportBadge1", "supportBadge2", "supportBadge3"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = support;
    });
  }

  function showSection(index) {
    state.section = Number(index);

    $$(".lesson-section").forEach((section, i) => {
      section.classList.toggle("active", i === state.section);
    });

    $$(".nav-step").forEach((button, i) => {
      button.classList.toggle("active", i === state.section);
    });

    updatePatientBadges();
    updateProgress();

    requestAnimationFrame(scrollToCurrentSection);
  }

  function renderScenarioSummary(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const sc = currentScenario();
    target.innerHTML = `
      <p class="patient-name">${sc.patient}</p>
      <p class="patient-case">${sc.caseText}</p>
    `;
  }

  function resetPatient() {
    state.scenarioChoice = null;
    state.handChoice = null;
    state.selectedSetup = [];
    state.signCorrect = false;
    state.handCorrect = false;
    state.setupCorrect = false;
    state.signAttempts = 0;
    state.handAttempts = 0;
    state.setupAttempts = 0;

    $("#continueToHandHygiene").disabled = true;
    $("#continueToPPE").disabled = true;
    $("#completePatient").disabled = true;
  }

  /* Sign activity */
  function renderSignActivity() {
    renderScenarioSummary("scenarioCase");
    clearFeedback($("#scenarioFeedback"));
    $("#continueToHandHygiene").disabled = true;

    const wrap = $("#scenarioChoices");
    wrap.innerHTML = "";

    const shuffledSigns = shuffle(signChoices);

    shuffledSigns.forEach(sign => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sign-card";

      const img = document.createElement("img");
      img.src = sign.image;
      img.alt = sign.title;

      const fallback = document.createElement("div");
      fallback.className = `sign-fallback ${sign.fallbackClass}`;
      fallback.innerHTML = `
        <div>
          <strong>${sign.title}</strong>
          <div class="sign-subtitle">${sign.subtitle}</div>
        </div>
      `;

      img.addEventListener("load", () => {
        img.style.display = "block";
        fallback.style.display = "none";
      });

      img.addEventListener("error", () => {
        img.style.display = "none";
        fallback.style.display = "grid";
      });

      const title = document.createElement("span");
      title.className = "sign-title";
      title.textContent = sign.title;

      button.append(img, fallback, title);

      button.addEventListener("click", () => {
        state.scenarioChoice = sign.id;
        state.signCorrect = false;
        $("#continueToHandHygiene").disabled = true;
        clearFeedback($("#scenarioFeedback"));
        $$(".sign-card", wrap).forEach(card => card.classList.remove("selected"));
        button.classList.add("selected");
      });

      wrap.appendChild(button);
    });
  }

  $("#checkScenario").addEventListener("click", () => {
    const fb = $("#scenarioFeedback");
    const sc = currentScenario();

    if (!state.scenarioChoice) {
      setFeedback(fb, "incorrect", "<strong>Select a sign first.</strong>");
      return;
    }

    state.signAttempts += 1;

    if (state.scenarioChoice === sc.correctSign) {
      state.signCorrect = true;
      $("#continueToHandHygiene").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${sc.signExplanation}`);
    } else {
      state.signCorrect = false;
      $("#continueToHandHygiene").disabled = true;
      setFeedback(fb, "incorrect", `<strong>Not quite.</strong> ${hintFor("sign", state.signAttempts)}`);
    }
  });

  $("#continueToHandHygiene").addEventListener("click", () => {
    if (!state.signCorrect) return;
    renderHandDecision();
    showSection(2);
  });

  /* Hand hygiene decision */
  function initHandChoiceImages() {
    $$(".hand-choice").forEach(button => {
      const img = $("img", button);
      const fallback = $(".hand-choice-fallback", button);

      img.addEventListener("load", () => {
        img.classList.add("loaded");
        fallback.style.display = "none";
      });

      img.addEventListener("error", () => {
        img.classList.remove("loaded");
        fallback.style.display = "grid";
      });

      button.addEventListener("click", () => {
        state.handChoice = button.dataset.handChoice;
        state.handCorrect = false;
        $("#continueToPPE").disabled = true;
        clearFeedback($("#handHygieneFeedback"));
        $$(".hand-choice").forEach(b => b.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  }

  function renderHandDecision() {
    renderScenarioSummary("handScenarioSummary");
    state.handChoice = null;
    state.handCorrect = false;
    state.handAttempts = 0;
    $("#continueToPPE").disabled = true;
    clearFeedback($("#handHygieneFeedback"));
    $$(".hand-choice").forEach(b => b.classList.remove("selected"));

    $("#handHygienePrompt").innerHTML =
      "<strong>Decision:</strong> Based on this patient and the condition of your hands, which hand-hygiene method is most appropriate before entering?";
  }

  $("#checkHandHygiene").addEventListener("click", () => {
    const fb = $("#handHygieneFeedback");
    const sc = currentScenario();

    if (!state.handChoice) {
      setFeedback(fb, "incorrect", "<strong>Select a hand-hygiene method first.</strong>");
      return;
    }

    state.handAttempts += 1;

    if (state.handChoice === sc.correctHand) {
      state.handCorrect = true;
      $("#continueToPPE").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${sc.handExplanation}`);
    } else {
      state.handCorrect = false;
      $("#continueToPPE").disabled = true;
      setFeedback(fb, "incorrect", `<strong>Not quite.</strong> ${hintFor("hand", state.handAttempts)}`);
    }
  });

  $("#continueToPPE").addEventListener("click", () => {
    if (!state.handCorrect) return;
    renderSetup();
    showSection(3);
  });

  /* PPE + equipment */
  function makeAssetVisual(key) {
    const asset = assetMap[key];
    const wrap = document.createElement("div");

    const img = document.createElement("img");
    img.src = asset.file;
    img.alt = asset.label;

    const fallback = document.createElement("div");
    fallback.className = "asset-fallback";
    fallback.textContent = `${asset.file.split("/").pop()} placeholder`;

    img.addEventListener("load", () => {
      fallback.style.display = "none";
      img.classList.add("loaded");
    });

    img.addEventListener("error", () => {
      img.classList.remove("loaded");
      fallback.style.display = "grid";
    });

    wrap.append(img, fallback);
    return wrap;
  }

  const workerImage = $("#workerImage");
  const workerFallback = $("#workerFallback");

  workerImage.addEventListener("load", () => {
    workerImage.classList.add("loaded");
    workerFallback.style.display = "none";
  });

  workerImage.addEventListener("error", () => {
    workerImage.classList.remove("loaded");
    workerFallback.style.display = "";
  });

  function renderSetup() {
    renderScenarioSummary("ppeScenarioSummary");
    state.selectedSetup = [];
    state.setupCorrect = false;
    state.setupAttempts = 0;
    $("#completePatient").disabled = true;
    clearFeedback($("#ppeFeedback"));

    const tray = $("#ppeTray");
    tray.innerHTML = "";
    renderEquipped();

    ["n95-mask", "surgical-mask", "gown", "gloves", "face-shield", "single-patient-stethoscope"].forEach(key => {
      const button = document.createElement("button");
      button.className = "ppe-card";
      button.type = "button";
      button.draggable = true;
      button.appendChild(makeAssetVisual(key));

      const label = document.createElement("span");
      label.className = "asset-label";
      label.textContent = assetMap[key].label;
      button.appendChild(label);

      button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", key);
      });

      button.addEventListener("click", () => addSetupItem(key));
      tray.appendChild(button);
    });
  }

  function addSetupItem(key) {
    if (!key || state.selectedSetup.includes(key)) return;

    state.selectedSetup.push(key);
    state.setupCorrect = false;
    $("#completePatient").disabled = true;
    clearFeedback($("#ppeFeedback"));
    renderEquipped();
  }

  function renderEquipped() {
    const wrap = $("#equippedPPE");
    wrap.innerHTML = "";

    state.selectedSetup.forEach(key => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "equipped-chip";
      chip.textContent = `${assetMap[key].label} ×`;

      chip.addEventListener("click", () => {
        state.selectedSetup = state.selectedSetup.filter(item => item !== key);
        state.setupCorrect = false;
        $("#completePatient").disabled = true;
        clearFeedback($("#ppeFeedback"));
        renderEquipped();
      });

      wrap.appendChild(chip);
    });
  }

  $("#workerTarget").addEventListener("dragover", event => event.preventDefault());

  $("#workerTarget").addEventListener("drop", event => {
    event.preventDefault();
    addSetupItem(event.dataTransfer.getData("text/plain"));
  });

  $("#checkPPE").addEventListener("click", () => {
    const fb = $("#ppeFeedback");
    const sc = currentScenario();

    state.setupAttempts += 1;

    if (sameMembers(state.selectedSetup, sc.correctSetup)) {
      state.setupCorrect = true;
      $("#completePatient").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${sc.setupExplanation}`);
    } else {
      state.setupCorrect = false;
      $("#completePatient").disabled = true;
      setFeedback(fb, "incorrect", `<strong>Not quite.</strong> ${hintFor("setup", state.setupAttempts)}`);
    }
  });

  $("#resetPPE").addEventListener("click", renderSetup);

  $("#completePatient").addEventListener("click", () => {
    if (!state.setupCorrect) return;

    if (state.scenarioIndex < scenarios.length - 1) {
      state.scenarioIndex += 1;
      resetPatient();
      renderSignActivity();
      showSection(1);
    } else {
      renderSequence();
      showSection(4);
    }
  });

  /* Sortable sequencing */
  function createSortableItem(step, listType) {
    const item = document.createElement("div");
    item.className = "sortable-item";
    item.draggable = true;
    item.dataset.step = step;

    const handle = document.createElement("span");
    handle.className = "drag-handle";
    handle.textContent = "☰";
    handle.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "10px";
    row.style.alignItems = "center";

    const number = document.createElement("span");
    number.className = "order-number";

    const text = document.createElement("span");
    text.textContent = step;

    row.append(number, text);

    const controls = document.createElement("div");
    controls.className = "keyboard-order-controls";

    const up = document.createElement("button");
    up.type = "button";
    up.className = "move-btn";
    up.textContent = "↑";
    up.title = "Move step up";

    const down = document.createElement("button");
    down.type = "button";
    down.className = "move-btn";
    down.textContent = "↓";
    down.title = "Move step down";

    controls.append(up, down);
    content.append(row, controls);

    const status = document.createElement("span");
    status.className = "sort-status";

    item.append(handle, content, status);

    item.addEventListener("dragstart", () => item.classList.add("dragging"));

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      clearSortMarks(listType);
      syncOrder(listType);
    });

    item.addEventListener("dragover", event => {
      event.preventDefault();
      item.classList.add("drag-over");
    });

    item.addEventListener("dragleave", () => item.classList.remove("drag-over"));

    item.addEventListener("drop", event => {
      event.preventDefault();
      item.classList.remove("drag-over");

      const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");
      const dragging = $(".sortable-item.dragging", container);
      if (!dragging || dragging === item) return;

      const items = [...container.children];
      const from = items.indexOf(dragging);
      const to = items.indexOf(item);

      if (from < to) item.after(dragging);
      else item.before(dragging);

      clearSortMarks(listType);
      syncOrder(listType);
    });

    up.addEventListener("click", () => {
      const prev = item.previousElementSibling;
      if (prev) {
        item.parentElement.insertBefore(item, prev);
        clearSortMarks(listType);
        syncOrder(listType);
      }
    });

    down.addEventListener("click", () => {
      const next = item.nextElementSibling;
      if (next) {
        next.after(item);
        clearSortMarks(listType);
        syncOrder(listType);
      }
    });

    return item;
  }

  function syncOrder(listType) {
    const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");

    [...container.children].forEach((item, index) => {
      $(".order-number", item).textContent = index + 1;
    });

    if (listType === "sequence") {
      state.sequenceCorrect = false;
      $("#continueToDoff").disabled = true;
    } else {
      state.doffCorrect = false;
      $("#finishLesson").disabled = true;
    }
  }

  function clearSortMarks(listType) {
    const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");

    [...container.children].forEach(item => {
      item.classList.remove("correct-position", "wrong-position");
      $(".sort-status", item).textContent = "";
    });

    clearFeedback(listType === "sequence" ? $("#sequenceFeedback") : $("#doffFeedback"));
  }

  function renderSortable(container, steps, listType) {
    container.innerHTML = "";
    shuffle(steps).forEach(step => container.appendChild(createSortableItem(step, listType)));
    syncOrder(listType);
  }

  function gradeSortable(container, expected) {
    let correctCount = 0;

    [...container.children].forEach((item, index) => {
      const correct = item.dataset.step === expected[index];

      item.classList.toggle("correct-position", correct);
      item.classList.toggle("wrong-position", !correct);

      $(".sort-status", item).textContent = correct ? "✓ Correct" : "Adjust";

      if (correct) correctCount += 1;
    });

    return correctCount;
  }

  function renderSequence() {
    state.sequenceCorrect = false;
    $("#continueToDoff").disabled = true;
    clearFeedback($("#sequenceFeedback"));
    $("#routePrompt").textContent = handHygiene[state.route].prompt;

    $$(".route-button").forEach(button => {
      button.classList.toggle("active", button.dataset.route === state.route);
    });

    renderSortable($("#sequenceItems"), handHygiene[state.route].steps, "sequence");
  }

  $$(".route-button").forEach(button => {
    button.addEventListener("click", () => {
      state.route = button.dataset.route;
      renderSequence();
    });
  });

  $("#shuffleSequence").addEventListener("click", renderSequence);

  $("#checkSequence").addEventListener("click", () => {
    const expected = handHygiene[state.route].steps;
    const correctCount = gradeSortable($("#sequenceItems"), expected);

    if (correctCount === expected.length) {
      state.sequenceCorrect = true;
      $("#continueToDoff").disabled = false;
      setFeedback(
        $("#sequenceFeedback"),
        "correct",
        "<strong>Correct.</strong> Every hand-hygiene step is in the correct position."
      );
    } else {
      state.sequenceCorrect = false;
      $("#continueToDoff").disabled = true;
      setFeedback(
        $("#sequenceFeedback"),
        "incorrect",
        `<strong>${correctCount} of ${expected.length} positions are correct.</strong> Keep the green steps in place and adjust the others. Think about maintaining clean-to-dirty flow and avoiding recontamination.`
      );
    }
  });

  $("#continueToDoff").addEventListener("click", () => {
    if (!state.sequenceCorrect) return;
    renderDoff();
    showSection(5);
  });

  function renderDoff() {
    state.doffCorrect = false;
    $("#finishLesson").disabled = true;
    clearFeedback($("#doffFeedback"));
    renderSortable($("#doffList"), doffSteps, "doff");
  }

  $("#shuffleDoff").addEventListener("click", renderDoff);

  $("#checkDoff").addEventListener("click", () => {
    const correctCount = gradeSortable($("#doffList"), doffSteps);

    if (correctCount === doffSteps.length) {
      state.doffCorrect = true;
      $("#finishLesson").disabled = false;
      setFeedback(
        $("#doffFeedback"),
        "correct",
        "<strong>Correct.</strong> The sequence limits contact with contaminated PPE surfaces and ends with hand hygiene."
      );
    } else {
      state.doffCorrect = false;
      $("#finishLesson").disabled = true;
      setFeedback(
        $("#doffFeedback"),
        "incorrect",
        `<strong>${correctCount} of ${doffSteps.length} positions are correct.</strong> Keep the green steps in place. For the others, ask: which contaminated surface should be removed next while keeping your hands away from your face and clothing?`
      );
    }
  });

  $("#finishLesson").addEventListener("click", () => {
    if (!state.doffCorrect) return;
    showSection(6);
  });

  $("#startPractice").addEventListener("click", () => {
    state.scenarioIndex = 0;
    initScenarioOrder();
    resetPatient();
    renderSignActivity();
    showSection(1);
  });

  $$(".nav-step").forEach(button => {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.section);

      if (target === 0) {
        showSection(0);
        return;
      }

      if (target === state.section) return;

      if (state.section >= 4 && target >= 4 && target <= state.section) {
        showSection(target);
      }
    });
  });

  $("#restartLesson").addEventListener("click", () => {
    state.scenarioIndex = 0;
    state.route = "alcohol";
    state.sequenceCorrect = false;
    state.doffCorrect = false;
    initScenarioOrder();
    resetPatient();
    renderSignActivity();
    renderSequence();
    renderDoff();
    showSection(0);
  });

  initializeMediaFrames();
  initHandChoiceImages();
  initScenarioOrder();
  renderSignActivity();
  renderSequence();
  renderDoff();
  showSection(0);
})();
