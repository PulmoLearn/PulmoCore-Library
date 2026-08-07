(() => {
  "use strict";

  const assetMap = {
    "alcohol-rub": { label: "Alcohol-based rub", file: "assets/alcohol-rub.png" },
    "soap-paper-towels": { label: "Soap + paper towels", file: "assets/soap-paper-towels.png" },
    "gloves": { label: "Gloves", file: "assets/gloves.png" },
    "gown": { label: "Gown", file: "assets/gown.png" },
    "surgical-mask": { label: "Surgical mask", file: "assets/surgical-mask.png" },
    "n95-mask": { label: "N95 mask", file: "assets/n95-mask.png" },
    "face-shield": { label: "Face shield", file: "assets/face-shield.png" },
    "distractor": { label: "Unneeded item", file: "assets/distractor.png" }
  };

  const scenarios = [
    {
      id: "contact",
      prompt: "The patient chart indicates CONTACT precautions.",
      correct: "contact",
      correctPPE: ["gown", "gloves"],
      supplies: ["alcohol-rub", "soap-paper-towels", "gown", "gloves"],
      feedback: "Contact precautions: put on a gown that covers the torso and wrists, fasten it in the back, then put on gloves over the gown sleeves."
    },
    {
      id: "droplet",
      prompt: "The patient chart indicates DROPLET precautions.",
      correct: "droplet",
      correctPPE: ["face-shield", "surgical-mask"],
      supplies: ["alcohol-rub", "soap-paper-towels", "face-shield", "surgical-mask"],
      feedback: "Droplet precautions: use goggles or a face shield for eye protection and a surgical mask."
    },
    {
      id: "airborne",
      prompt: "The patient chart indicates AIRBORNE precautions.",
      correct: "airborne",
      correctPPE: ["n95-mask"],
      supplies: ["alcohol-rub", "soap-paper-towels", "n95-mask"],
      feedback: "Airborne precautions: use a fitted N95 mask or respirator and ensure a tight seal."
    }
  ];

  const handHygiene = {
    alcohol: {
      prompt: "Place the alcohol-based hand-rub actions in the order listed in the competency.",
      steps: [
        "Dispense an appropriate amount of antiseptic product into the palm.",
        "Rub hands together, covering palms, fingers, between fingers, under nails, and around cuticles.",
        "Continue rubbing until the product is dry."
      ]
    },
    soap: {
      prompt: "Place the antimicrobial soap and warm-water actions in the order listed in the competency.",
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
    selectedSupplies: new Set(),
    selectedPPE: [],
    route: "alcohol",
    selectedSequence: [],
    doffSelection: []
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

  function showSection(index) {
    state.section = Math.max(0, Math.min(6, Number(index)));
    $$(".lesson-section").forEach((section, i) => section.classList.toggle("active", i === state.section));
    $$(".nav-step").forEach((button, i) => button.classList.toggle("active", i === state.section));
    $("#progressText").textContent = `${state.section + 1} of 7`;
    $("#progressBar").style.width = `${((state.section + 1) / 7) * 100}%`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function makeAssetVisual(key) {
    const asset = assetMap[key];
    const wrap = document.createElement("div");
    wrap.className = "asset-visual";

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

  // IMAGE OVERRIDE FOR WORKER
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

  // SCENARIO
  function currentScenario() {
    return scenarios[state.scenarioIndex];
  }

  function renderScenario() {
    state.scenarioChoice = null;
    $("#scenarioPrompt").textContent = currentScenario().prompt;
    clearFeedback($("#scenarioFeedback"));

    const wrap = $("#scenarioChoices");
    wrap.innerHTML = "";

    ["standard", "contact", "droplet", "airborne"].forEach(type => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.type = "button";
      button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      button.addEventListener("click", () => {
        state.scenarioChoice = type;
        $$(".choice-btn", wrap).forEach(b => b.classList.remove("selected"));
        button.classList.add("selected");
      });
      wrap.appendChild(button);
    });

    renderSupplies();
    renderPPE();
  }

  $("#checkScenario").addEventListener("click", () => {
    const fb = $("#scenarioFeedback");
    if (!state.scenarioChoice) {
      setFeedback(fb, "incorrect", "<strong>Select an isolation precaution first.</strong>");
      return;
    }
    if (state.scenarioChoice === currentScenario().correct) {
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${currentScenario().feedback}`);
    } else {
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Review the isolation type shown in the patient chart.");
    }
  });

  $("#newScenario").addEventListener("click", () => {
    state.scenarioIndex = (state.scenarioIndex + 1) % scenarios.length;
    renderScenario();
  });

  // SUPPLY SELECTION
  function renderSupplies() {
    state.selectedSupplies = new Set();
    clearFeedback($("#supplyFeedback"));
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
      setFeedback(fb, "correct", "<strong>Correct.</strong> You gathered the hand-hygiene supplies and the precaution-specific PPE listed for this scenario.");
    } else {
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Recheck both the hand-hygiene supplies and the PPE needed for the current precaution.");
    }
  });

  $("#resetSupplies").addEventListener("click", renderSupplies);

  // PPE DRAG / CLICK
  function renderPPE() {
    state.selectedPPE = [];
    clearFeedback($("#ppeFeedback"));
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
      setFeedback(fb, "correct", `<strong>Correct.</strong> ${currentScenario().feedback}`);
    } else {
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Adjust the PPE so it matches the current isolation precaution.");
    }
  });

  $("#resetPPE").addEventListener("click", renderPPE);

  // HAND HYGIENE SEQUENCE
  function renderSequence() {
    state.selectedSequence = [];
    clearFeedback($("#sequenceFeedback"));
    $("#routePrompt").textContent = handHygiene[state.route].prompt;

    $$(".route-button").forEach(button => {
      button.classList.toggle("active", button.dataset.route === state.route);
    });

    const wrap = $("#sequenceItems");
    wrap.innerHTML = "";

    shuffle(handHygiene[state.route].steps).forEach(step => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sequence-btn";

      const num = document.createElement("span");
      num.className = "sequence-number";
      num.textContent = "—";

      const text = document.createElement("span");
      text.textContent = step;

      button.append(num, text);
      button.addEventListener("click", () => {
        if (state.selectedSequence.includes(step)) return;
        state.selectedSequence.push(step);
        num.textContent = state.selectedSequence.length;
        button.classList.add("selected");
      });

      wrap.appendChild(button);
    });
  }

  $$(".route-button").forEach(button => {
    button.addEventListener("click", () => {
      state.route = button.dataset.route;
      renderSequence();
    });
  });

  $("#checkSequence").addEventListener("click", () => {
    const expected = handHygiene[state.route].steps;
    const fb = $("#sequenceFeedback");
    const correct = expected.length === state.selectedSequence.length &&
      expected.every((step, index) => step === state.selectedSequence[index]);

    if (correct) {
      setFeedback(fb, "correct", "<strong>Correct.</strong> The hand-hygiene actions are in the order listed in the competency.");
    } else {
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Reset and try the sequence again.");
    }
  });

  $("#resetSequence").addEventListener("click", renderSequence);

  // DOFFING SEQUENCE
  function renderDoff() {
    state.doffSelection = [];
    clearFeedback($("#doffFeedback"));
    const wrap = $("#doffList");
    wrap.innerHTML = "";

    shuffle(doffSteps).forEach(step => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sequence-btn";

      const num = document.createElement("span");
      num.className = "sequence-number";
      num.textContent = "—";

      const text = document.createElement("span");
      text.textContent = step;

      button.append(num, text);
      button.addEventListener("click", () => {
        if (state.doffSelection.includes(step)) return;
        state.doffSelection.push(step);
        num.textContent = state.doffSelection.length;
        button.classList.add("selected");
      });

      wrap.appendChild(button);
    });
  }

  $("#checkDoff").addEventListener("click", () => {
    const fb = $("#doffFeedback");
    const correct = doffSteps.length === state.doffSelection.length &&
      doffSteps.every((step, index) => step === state.doffSelection[index]);

    if (correct) {
      setFeedback(fb, "correct", "<strong>Correct.</strong> The PPE removal, disposal, and final hand-hygiene steps match the competency.");
    } else {
      setFeedback(fb, "incorrect", "<strong>Not quite.</strong> Reset and try the sequence again.");
    }
  });

  $("#resetDoff").addEventListener("click", renderDoff);

  // NAVIGATION
  $$(".nav-step").forEach(button => {
    button.addEventListener("click", () => showSection(button.dataset.section));
  });

  $$(".next-section").forEach(button => {
    button.addEventListener("click", () => showSection(state.section + 1));
  });

  $("#restartLesson").addEventListener("click", () => {
    state.scenarioIndex = 0;
    state.route = "alcohol";
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
