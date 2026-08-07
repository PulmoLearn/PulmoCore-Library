(() => {
  "use strict";

  const ASSET_ROOT = "/competencies/hand-hygiene-isolation/assets/";

  const assetMap = {
    "alcohol-rub": { label: "Alcohol-based rub", file: ASSET_ROOT + "alcohol-rub.png" },
    "soap-paper-towels": { label: "Soap + paper towels", file: ASSET_ROOT + "soap-paper-towels.png" },
    "gloves": { label: "Gloves", file: ASSET_ROOT + "gloves.png" },
    "gown": { label: "Gown", file: ASSET_ROOT + "gown.png" },
    "surgical-mask": { label: "Surgical mask", file: ASSET_ROOT + "surgical-mask.png" },
    "n95-mask": { label: "N95 mask", file: ASSET_ROOT + "n95-mask.png" },
    "face-shield": { label: "Face shield", file: ASSET_ROOT + "face-shield.png" },
    "distractor": { label: "Stethoscope", file: ASSET_ROOT + "distractor.png" }
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
      caseText: "Persistent cough, fever, night sweats, and weight loss. Pulmonary tuberculosis is being evaluated.",
      correctSign: "airborne",
      correctPPE: ["n95-mask"],
      supplies: ["alcohol-rub", "soap-paper-towels", "n95-mask"],
      signFeedback: "Suspected pulmonary tuberculosis requires airborne precautions. The patient’s door should display an Airborne Precautions sign.",
      wrongSignFeedback: "Because pulmonary tuberculosis is suspected, this patient requires airborne precautions.",
      ppeFeedback: "Before entering, the healthcare worker should wear a fitted N95 respirator.",
      supplyFeedback: "For this patient, gather hand-hygiene supplies and an N95 respirator."
    },
    {
      id: "droplet",
      patient: "James T., 68 years",
      caseText: "Fever, cough, body aches, and positive influenza testing. The patient is sneezing frequently.",
      correctSign: "droplet",
      correctPPE: ["surgical-mask", "face-shield"],
      supplies: ["alcohol-rub", "soap-paper-towels", "surgical-mask", "face-shield"],
      signFeedback: "Influenza is managed with droplet precautions. The patient’s door should display a Droplet Precautions sign.",
      wrongSignFeedback: "This patient’s influenza symptoms require droplet precautions.",
      ppeFeedback: "Before entering, the healthcare worker should wear a surgical mask and eye protection or a face shield.",
      supplyFeedback: "For this patient, gather hand-hygiene supplies, a surgical mask, and eye protection."
    },
    {
      id: "contact",
      patient: "Linda P., 74 years",
      caseText: "Frequent watery diarrhea after recent antibiotic use. Stool testing is positive for C. difficile.",
      correctSign: "contact",
      correctPPE: ["gown", "gloves"],
      supplies: ["alcohol-rub", "soap-paper-towels", "gown", "gloves"],
      signFeedback: "C. difficile requires contact precautions. The patient’s door should display a Contact Precautions sign.",
      wrongSignFeedback: "This patient requires contact precautions.",
      ppeFeedback: "Before entering, the healthcare worker should wear a gown and gloves.",
      supplyFeedback: "For this patient, gather hand-hygiene supplies, a gown, and gloves."
    },
    {
      id: "standard",
      patient: "Noah B., 27 years",
      caseText: "Stable postoperative appendectomy patient with no known transmissible infection and no isolation order.",
      correctSign: "none",
      correctPPE: [],
      supplies: ["alcohol-rub", "soap-paper-towels"],
      signFeedback: "No additional isolation precautions are ordered, so no isolation sign is needed. Standard precautions still apply.",
      wrongSignFeedback: "This patient does not need an isolation sign. Standard precautions still apply.",
      ppeFeedback: "No isolation-specific PPE is required before entering. Standard precautions still apply, and task-based PPE would be added only if needed.",
      supplyFeedback: "For this patient, standard hand-hygiene supplies are needed, but no isolation-specific PPE is required."
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
    "Remove gloves and turn them inside out.",
    "Remove mask and protective eyewear.",
    "Remove the gown.",
    "Dispose of PPE appropriately.",
    "Perform proper hand hygiene."
  ];

  const state = {
    section: 0,
    scenarioIndex: 0,
    scenarioChoice: null,
    signCorrect: false,
    suppliesCorrect: false,
    ppeCorrect: false,
    selectedSupplies: new Set(),
    selectedPPE: [],
    route: "alcohol",
    sequenceOrder: [],
    sequenceCorrect: false,
    doffOrder: [],
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

  function setFeedback(element, type, html) {
    element.className = `feedback show ${type}`;
    element.innerHTML = html;
  }

  function clearFeedback(element) {
    element.className = "feedback";
    element.innerHTML = "";
  }

  function currentScenario() {
    return scenarios[state.scenarioIndex];
  }

  function updatePatientBadges() {
    const text = `Patient ${state.scenarioIndex + 1} of ${scenarios.length}`;
    $("#patientProgressBadge").textContent = text;
    $$(".patient-count-copy").forEach(el => el.textContent = text);
  }

  function updateProgress() {
    if (state.section === 0) {
      $("#progressText").textContent = "Overview";
      $("#progressBar").style.width = "0%";
      return;
    }

    if (state.section >= 1 && state.section <= 3) {
      const patientBase = state.scenarioIndex * 3;
      const patientStep = state.section;
      const completed = patientBase + patientStep;
      const total = scenarios.length * 3 + 2;
      $("#progressText").textContent = `Patient ${state.scenarioIndex + 1} of 4`;
      $("#progressBar").style.width = `${(completed / total) * 100}%`;
      return;
    }

    const total = scenarios.length * 3 + 2;
    const completed = scenarios.length * 3 + (state.section === 4 ? 1 : 2);
    $("#progressText").textContent = state.section === 4 ? "Hand Hygiene" : state.section === 5 ? "PPE Removal" : "Complete";
    $("#progressBar").style.width = state.section === 6 ? "100%" : `${(completed / total) * 100}%`;
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

    window.scrollTo({ top: 0, behavior: "smooth" });
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
      img.style.display = "inline-block";
    });

    img.addEventListener("error", () => {
      img.style.display = "none";
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

  function resetPatientStageState() {
    state.scenarioChoice = null;
    state.signCorrect = false;
    state.suppliesCorrect = false;
    state.ppeCorrect = false;
    state.selectedSupplies = new Set();
    state.selectedPPE = [];

    $("#continueToGather").disabled = true;
    $("#continueToPPE").disabled = true;
    $("#completePatient").disabled = true;
  }

  function renderScenario() {
    renderScenarioSummary("scenarioCase");
    renderScenarioSummary("supplyScenarioSummary");
    renderScenarioSummary("ppeScenarioSummary");
    updatePatientBadges();

    clearFeedback($("#scenarioFeedback"));
    state.scenarioChoice = null;
    state.signCorrect = false;
    $("#continueToGather").disabled = true;

    const wrap = $("#scenarioChoices");
    wrap.innerHTML = "";

    signChoices.forEach(sign => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sign-card";
      button.dataset.choice = sign.id;

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
        $("#continueToGather").disabled = true;
        clearFeedback($("#scenarioFeedback"));

        $$(".sign-card", wrap).forEach(card => card.classList.remove("selected"));
        button.classList.add("selected");
      });

      wrap.appendChild(button);
    });

    renderSupplies();
    renderPPE();
  }

  $("#checkScenario").addEventListener("click", () => {
    const fb = $("#scenarioFeedback");
    const sc = currentScenario();

    if (!state.scenarioChoice) {
      setFeedback(fb, "incorrect", "<strong>Select a sign first.</strong>");
      return;
    }

    if (state.scenarioChoice === sc.correctSign) {
      state.signCorrect = true;
      $("#continueToGather").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${sc.signFeedback}`);
    } else {
      state.signCorrect = false;
      $("#continueToGather").disabled = true;
      setFeedback(fb, "incorrect", `<strong>Not quite.</strong> ${sc.wrongSignFeedback}`);
    }
  });

  $("#continueToGather").addEventListener("click", () => {
    if (!state.signCorrect) return;
    renderSupplies();
    showSection(2);
  });

  function renderSupplies() {
    state.selectedSupplies = new Set();
    state.suppliesCorrect = false;
    $("#continueToPPE").disabled = true;
    clearFeedback($("#supplyFeedback"));
    renderScenarioSummary("supplyScenarioSummary");

    const wrap = $("#supplyGrid");
    wrap.innerHTML = "";

    Object.keys(assetMap).forEach(key => {
      const button = document.createElement("button");
      button.className = "asset-card";
      button.type = "button";
      button.appendChild(makeAssetVisual(key));

      const label = document.createElement("span");
      label.className = "asset-label";
      label.textContent = assetMap[key].label;
      button.appendChild(label);

      button.addEventListener("click", () => {
        state.suppliesCorrect = false;
        $("#continueToPPE").disabled = true;
        clearFeedback($("#supplyFeedback"));

        if (state.selectedSupplies.has(key)) {
          state.selectedSupplies.delete(key);
          button.classList.remove("selected");
        } else {
          state.selectedSupplies.add(key);
          button.classList.add("selected");
        }
      });

      wrap.appendChild(button);
    });
  }

  $("#checkSupplies").addEventListener("click", () => {
    const expected = currentScenario().supplies;
    const actual = [...state.selectedSupplies];
    const fb = $("#supplyFeedback");

    if (sameMembers(expected, actual)) {
      state.suppliesCorrect = true;
      $("#continueToPPE").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${currentScenario().supplyFeedback}`);
    } else {
      state.suppliesCorrect = false;
      $("#continueToPPE").disabled = true;
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Recheck the hand-hygiene supplies and isolation-specific PPE needed for this patient.");
    }
  });

  $("#resetSupplies").addEventListener("click", renderSupplies);

  $("#continueToPPE").addEventListener("click", () => {
    if (!state.suppliesCorrect) return;
    renderPPE();
    showSection(3);
  });

  function renderPPE() {
    state.selectedPPE = [];
    state.ppeCorrect = false;
    $("#completePatient").disabled = true;
    clearFeedback($("#ppeFeedback"));
    renderScenarioSummary("ppeScenarioSummary");

    const tray = $("#ppeTray");
    tray.innerHTML = "";
    renderEquipped();

    ["n95-mask", "surgical-mask", "gown", "gloves", "face-shield"].forEach(key => {
      const button = document.createElement("button");
      button.className = "ppe-card";
      button.type = "button";
      button.draggable = true;
      button.dataset.asset = key;
      button.appendChild(makeAssetVisual(key));

      const label = document.createElement("span");
      label.className = "asset-label";
      label.textContent = assetMap[key].label;
      button.appendChild(label);

      button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", key);
      });

      button.addEventListener("click", () => addPPE(key));
      tray.appendChild(button);
    });
  }

  function addPPE(key) {
    if (!key || state.selectedPPE.includes(key)) return;

    state.selectedPPE.push(key);
    state.ppeCorrect = false;
    $("#completePatient").disabled = true;
    clearFeedback($("#ppeFeedback"));
    renderEquipped();
  }

  function renderEquipped() {
    const wrap = $("#equippedPPE");
    wrap.innerHTML = "";

    state.selectedPPE.forEach(key => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "equipped-chip";
      chip.textContent = `${assetMap[key].label} ×`;
      chip.title = `Remove ${assetMap[key].label}`;

      chip.addEventListener("click", () => {
        state.selectedPPE = state.selectedPPE.filter(item => item !== key);
        state.ppeCorrect = false;
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
    addPPE(event.dataTransfer.getData("text/plain"));
  });

  $("#checkPPE").addEventListener("click", () => {
    const fb = $("#ppeFeedback");
    const correct = sameMembers(state.selectedPPE, currentScenario().correctPPE);

    if (correct) {
      state.ppeCorrect = true;
      $("#completePatient").disabled = false;
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${currentScenario().ppeFeedback}`);
    } else {
      state.ppeCorrect = false;
      $("#completePatient").disabled = true;
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Adjust the PPE to match the current patient case before entering the room.");
    }
  });

  $("#resetPPE").addEventListener("click", renderPPE);

  $("#completePatient").addEventListener("click", () => {
    if (!state.ppeCorrect) return;

    if (state.scenarioIndex < scenarios.length - 1) {
      state.scenarioIndex += 1;
      resetPatientStageState();
      renderScenario();
      showSection(1);
    } else {
      renderSequence();
      showSection(4);
    }
  });

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

    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      clearSortMarks(listType);
      syncOrderFromDOM(listType);
    });

    item.addEventListener("dragover", event => {
      event.preventDefault();
      item.classList.add("drag-over");
    });

    item.addEventListener("dragleave", () => {
      item.classList.remove("drag-over");
    });

    item.addEventListener("drop", event => {
      event.preventDefault();
      item.classList.remove("drag-over");

      const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");
      const dragging = $(".sortable-item.dragging", container);
      if (!dragging || dragging === item) return;

      const items = [...container.children];
      const draggingIndex = items.indexOf(dragging);
      const targetIndex = items.indexOf(item);

      if (draggingIndex < targetIndex) {
        item.after(dragging);
      } else {
        item.before(dragging);
      }

      clearSortMarks(listType);
      syncOrderFromDOM(listType);
    });

    up.addEventListener("click", () => {
      const prev = item.previousElementSibling;
      if (prev) {
        item.parentElement.insertBefore(item, prev);
        clearSortMarks(listType);
        syncOrderFromDOM(listType);
      }
    });

    down.addEventListener("click", () => {
      const next = item.nextElementSibling;
      if (next) {
        next.after(item);
        clearSortMarks(listType);
        syncOrderFromDOM(listType);
      }
    });

    return item;
  }

  function syncOrderFromDOM(listType) {
    const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");
    const order = [...container.children].map(el => el.dataset.step);

    if (listType === "sequence") {
      state.sequenceOrder = order;
      state.sequenceCorrect = false;
      $("#continueToDoff").disabled = true;
    } else {
      state.doffOrder = order;
      state.doffCorrect = false;
      $("#finishLesson").disabled = true;
    }

    updateOrderNumbers(container);
  }

  function updateOrderNumbers(container) {
    [...container.children].forEach((item, index) => {
      $(".order-number", item).textContent = index + 1;
    });
  }

  function clearSortMarks(listType) {
    const container = listType === "sequence" ? $("#sequenceItems") : $("#doffList");
    [...container.children].forEach(item => {
      item.classList.remove("correct-position", "wrong-position");
      $(".sort-status", item).textContent = "";
    });

    if (listType === "sequence") {
      clearFeedback($("#sequenceFeedback"));
    } else {
      clearFeedback($("#doffFeedback"));
    }
  }

  function renderSortable(container, steps, listType) {
    container.innerHTML = "";

    shuffle(steps).forEach(step => {
      container.appendChild(createSortableItem(step, listType));
    });

    syncOrderFromDOM(listType);
  }

  function gradeSortable(container, expected) {
    let correctCount = 0;

    [...container.children].forEach((item, index) => {
      const correct = item.dataset.step === expected[index];
      item.classList.toggle("correct-position", correct);
      item.classList.toggle("wrong-position", !correct);

      const status = $(".sort-status", item);
      status.textContent = correct ? "✓ Correct" : "Adjust";

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
    const fb = $("#sequenceFeedback");

    if (correctCount === expected.length) {
      state.sequenceCorrect = true;
      $("#continueToDoff").disabled = false;
      setFeedback(fb, "correct", "<strong>Correct.</strong> Every hand-hygiene step is in the correct position.");
    } else {
      state.sequenceCorrect = false;
      $("#continueToDoff").disabled = true;
      setFeedback(
        fb,
        "incorrect",
        `<strong>${correctCount} of ${expected.length} positions are correct.</strong> Green steps are already in the right position. Reorder the steps marked “Adjust,” then check again.`
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
    const fb = $("#doffFeedback");

    if (correctCount === doffSteps.length) {
      state.doffCorrect = true;
      $("#finishLesson").disabled = false;
      setFeedback(fb, "correct", "<strong>Correct.</strong> Every PPE-removal step is in the correct position.");
    } else {
      state.doffCorrect = false;
      $("#finishLesson").disabled = true;
      setFeedback(
        fb,
        "incorrect",
        `<strong>${correctCount} of ${doffSteps.length} positions are correct.</strong> Green steps are already in the right position. Reorder the steps marked “Adjust,” then check again.`
      );
    }
  });

  $("#finishLesson").addEventListener("click", () => {
    if (!state.doffCorrect) return;
    showSection(6);
  });

  $("#startPractice").addEventListener("click", () => {
    state.scenarioIndex = 0;
    resetPatientStageState();
    renderScenario();
    showSection(1);
  });

  /* Navigation is display-only for the patient loop:
     prevent skipping ahead into unfinished patient steps. */
  $$(".nav-step").forEach(button => {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.section);

      if (target === 0) {
        showSection(0);
        return;
      }

      if (target === state.section) return;

      /* Allow completed procedural pages once reached; otherwise keep flow gated. */
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
    resetPatientStageState();
    renderScenario();
    renderSequence();
    renderDoff();
    showSection(0);
  });

  renderScenario();
  renderSequence();
  renderDoff();
  showSection(0);
})();
