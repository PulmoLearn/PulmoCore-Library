(() => {
  "use strict";

  const ASSET_ROOT =
    "/competencies/hand-hygiene-isolation/assets/";

  const assetMap = {
    "alcohol-rub": {
      label: "Alcohol-based rub",
      file: ASSET_ROOT + "alcohol-rub.png"
    },

    "soap-paper-towels": {
      label: "Soap + paper towels",
      file: ASSET_ROOT + "soap-paper-towels.png"
    },

    "gloves": {
      label: "Gloves",
      file: ASSET_ROOT + "gloves.png"
    },

    "gown": {
      label: "Gown",
      file: ASSET_ROOT + "gown.png"
    },

    "surgical-mask": {
      label: "Surgical mask",
      file: ASSET_ROOT + "surgical-mask.png"
    },

    "n95-mask": {
      label: "N95 mask",
      file: ASSET_ROOT + "n95-mask.png"
    },

    "face-shield": {
      label: "Face shield",
      file: ASSET_ROOT + "face-shield.png"
    },

    "distractor": {
      label: "Stethoscope",
      file: ASSET_ROOT + "distractor.png"
    }
  };


  const signChoices = [
    {
      id: "airborne",
      title: "Airborne Precautions",
      subtitle: "N95 respirator required",
      image: ASSET_ROOT + "sign-airborne.png",
      fallbackClass: "airborne"
    },

    {
      id: "droplet",
      title: "Droplet Precautions",
      subtitle: "Surgical mask + eye protection",
      image: ASSET_ROOT + "sign-droplet.png",
      fallbackClass: "droplet"
    },

    {
      id: "contact",
      title: "Contact Precautions",
      subtitle: "Gown + gloves",
      image: ASSET_ROOT + "sign-contact.png",
      fallbackClass: "contact"
    },

    {
      id: "none",
      title: "No Isolation Sign",
      subtitle: "Standard precautions only",
      image: ASSET_ROOT + "sign-none.png",
      fallbackClass: "none"
    }
  ];


  const scenarios = [
    {
      id: "airborne",
      patient: "Maria R., 42 years",
      caseText:
        "Persistent cough, fever, night sweats, and weight loss. Pulmonary tuberculosis is being evaluated.",
      correctSign: "airborne",
      correctPPE: ["n95-mask"],
      supplies: [
        "alcohol-rub",
        "soap-paper-towels",
        "n95-mask"
      ],
      signFeedback:
        "Correct. Suspected pulmonary tuberculosis requires airborne precautions. The patient’s door should display an Airborne Precautions sign.",
      wrongSignFeedback:
        "Not quite. Because pulmonary tuberculosis is suspected, this patient requires airborne precautions.",
      ppeFeedback:
        "Correct. Before entering, the healthcare worker should wear a fitted N95 respirator.",
      supplyFeedback:
        "Correct. For this patient, gather hand-hygiene supplies and an N95 respirator."
    },

    {
      id: "droplet",
      patient: "James T., 68 years",
      caseText:
        "Fever, cough, body aches, and positive influenza testing. The patient is sneezing frequently.",
      correctSign: "droplet",
      correctPPE: [
        "surgical-mask",
        "face-shield"
      ],
      supplies: [
        "alcohol-rub",
        "soap-paper-towels",
        "surgical-mask",
        "face-shield"
      ],
      signFeedback:
        "Correct. Influenza is managed with droplet precautions. The patient’s door should display a Droplet Precautions sign.",
      wrongSignFeedback:
        "Not quite. This patient’s influenza symptoms require droplet precautions.",
      ppeFeedback:
        "Correct. Before entering, the healthcare worker should wear a surgical mask and eye protection or a face shield.",
      supplyFeedback:
        "Correct. For this patient, gather hand-hygiene supplies, a surgical mask, and eye protection."
    },

    {
      id: "contact",
      patient: "Linda P., 74 years",
      caseText:
        "Frequent watery diarrhea after recent antibiotic use. Stool testing is positive for C. difficile.",
      correctSign: "contact",
      correctPPE: [
        "gown",
        "gloves"
      ],
      supplies: [
        "alcohol-rub",
        "soap-paper-towels",
        "gown",
        "gloves"
      ],
      signFeedback:
        "Correct. C. difficile requires contact precautions. The patient’s door should display a Contact Precautions sign.",
      wrongSignFeedback:
        "Not quite. This patient requires contact precautions.",
      ppeFeedback:
        "Correct. Before entering, the healthcare worker should wear a gown and gloves.",
      supplyFeedback:
        "Correct. For this patient, gather hand-hygiene supplies, a gown, and gloves."
    },

    {
      id: "standard",
      patient: "Noah B., 27 years",
      caseText:
        "Stable postoperative appendectomy patient with no known transmissible infection and no isolation order.",
      correctSign: "none",
      correctPPE: [],
      supplies: [
        "alcohol-rub",
        "soap-paper-towels"
      ],
      signFeedback:
        "Correct. No additional isolation precautions are ordered, so no isolation sign is needed. Standard precautions still apply.",
      wrongSignFeedback:
        "Not quite. This patient does not need an isolation sign. Standard precautions still apply.",
      ppeFeedback:
        "Correct. No isolation-specific PPE is required before entering. Standard precautions still apply, and task-based PPE would be added only if needed.",
      supplyFeedback:
        "Correct. For this patient, standard hand-hygiene supplies are needed, but no isolation-specific PPE is required."
    }
  ];


  const handHygiene = {
    alcohol: {
      prompt:
        "Place the alcohol-based hand-rub actions in the order listed in the competency.",
      steps: [
        "Dispense an appropriate amount of antiseptic product into the palm.",
        "Rub hands together, covering palms, fingers, between fingers, under nails, and around cuticles.",
        "Continue rubbing until the product is dry."
      ]
    },

    soap: {
      prompt:
        "Place the antimicrobial soap and warm-water actions in the order listed in the competency.",
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


  const $ =
    (selector, root = document) =>
      root.querySelector(selector);

  const $$ =
    (selector, root = document) =>
      [...root.querySelectorAll(selector)];


  function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
      const j =
        Math.floor(Math.random() * (i + 1));

      [copy[i], copy[j]] =
        [copy[j], copy[i]];
    }

    return copy;
  }


  function sameMembers(a, b) {
    const aa =
      [...a].sort();

    const bb =
      [...b].sort();

    return (
      aa.length === bb.length &&
      aa.every(
        (value, index) =>
          value === bb[index]
      )
    );
  }


  function setFeedback(element, type, html) {
    element.className =
      `feedback show ${type}`;

    element.innerHTML =
      html;
  }


  function clearFeedback(element) {
    element.className =
      "feedback";

    element.innerHTML =
      "";
  }


  function showSection(index) {
    state.section =
      Math.max(
        0,
        Math.min(
          6,
          Number(index)
        )
      );

    $$(".lesson-section").forEach(
      (section, i) => {
        section.classList.toggle(
          "active",
          i === state.section
        );
      }
    );

    $$(".nav-step").forEach(
      (button, i) => {
        button.classList.toggle(
          "active",
          i === state.section
        );
      }
    );

    $("#progressText").textContent =
      `${state.section + 1} of 7`;

    $("#progressBar").style.width =
      `${((state.section + 1) / 7) * 100}%`;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function makeAssetVisual(key) {
    const asset =
      assetMap[key];

    const wrap =
      document.createElement("div");

    const img =
      document.createElement("img");

    img.src =
      asset.file;

    img.alt =
      asset.label;

    const fallback =
      document.createElement("div");

    fallback.className =
      "asset-fallback";

    fallback.textContent =
      `${asset.file.split("/").pop()} placeholder`;

    img.addEventListener(
      "load",
      () => {
        fallback.style.display =
          "none";

        img.style.display =
          "inline-block";
      }
    );

    img.addEventListener(
      "error",
      () => {
        img.style.display =
          "none";

        fallback.style.display =
          "grid";
      }
    );

    wrap.append(
      img,
      fallback
    );

    return wrap;
  }


  const workerImage =
    $("#workerImage");

  const workerFallback =
    $("#workerFallback");

  workerImage.addEventListener(
    "load",
    () => {
      workerImage.classList.add(
        "loaded"
      );

      workerFallback.style.display =
        "none";
    }
  );

  workerImage.addEventListener(
    "error",
    () => {
      workerImage.classList.remove(
        "loaded"
      );

      workerFallback.style.display =
        "";
    }
  );


  function currentScenario() {
    return scenarios[
      state.scenarioIndex
    ];
  }


  function renderScenarioSummary(targetId) {
    const target =
      document.getElementById(
        targetId
      );

    if (!target) {
      return;
    }

    const sc =
      currentScenario();

    target.innerHTML = `
      <p class="patient-name">${sc.patient}</p>
      <p class="patient-case">${sc.caseText}</p>
    `;
  }


  function renderScenario() {
    state.scenarioChoice =
      null;

    renderScenarioSummary(
      "scenarioCase"
    );

    renderScenarioSummary(
      "supplyScenarioSummary"
    );

    renderScenarioSummary(
      "ppeScenarioSummary"
    );

    clearFeedback(
      $("#scenarioFeedback")
    );

    const wrap =
      $("#scenarioChoices");

    wrap.innerHTML =
      "";

    signChoices.forEach(
      sign => {
        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          "sign-card";

        button.dataset.choice =
          sign.id;


        const img =
          document.createElement(
            "img"
          );

        img.src =
          sign.image;

        img.alt =
          sign.title;


        const fallback =
          document.createElement(
            "div"
          );

        fallback.className =
          `sign-fallback ${sign.fallbackClass}`;

        fallback.innerHTML = `
          <div>
            <strong>${sign.title}</strong>
            <div class="sign-subtitle">${sign.subtitle}</div>
          </div>
        `;


        img.addEventListener(
          "load",
          () => {
            img.style.display =
              "block";

            fallback.style.display =
              "none";
          }
        );


        img.addEventListener(
          "error",
          () => {
            img.style.display =
              "none";

            fallback.style.display =
              "grid";
          }
        );


        const title =
          document.createElement(
            "span"
          );

        title.className =
          "sign-title";

        title.textContent =
          sign.title;


        button.append(
          img,
          fallback,
          title
        );


        button.addEventListener(
          "click",
          () => {
            state.scenarioChoice =
              sign.id;

            $$(".sign-card", wrap)
              .forEach(
                card =>
                  card.classList.remove(
                    "selected"
                  )
              );

            button.classList.add(
              "selected"
            );
          }
        );


        wrap.appendChild(
          button
        );
      }
    );

    renderSupplies();

    renderPPE();
  }


  $("#checkScenario")
    .addEventListener(
      "click",
      () => {
        const fb =
          $("#scenarioFeedback");

        const sc =
          currentScenario();

        if (!state.scenarioChoice) {
          setFeedback(
            fb,
            "incorrect",
            "<strong>Select a sign first.</strong>"
          );

          return;
        }

        if (
          state.scenarioChoice ===
          sc.correctSign
        ) {
          setFeedback(
            fb,
            "correct",
            `<strong>Correct.</strong> ${sc.signFeedback.replace(/^Correct\.\s*/,"")}`
          );
        } else {
          setFeedback(
            fb,
            "incorrect",
            `<strong>Not quite.</strong> ${sc.wrongSignFeedback.replace(/^Not quite\.\s*/,"")}`
          );
        }
      }
    );


  $("#newScenario")
    .addEventListener(
      "click",
      () => {
        state.scenarioIndex =
          (
            state.scenarioIndex +
            1
          ) %
          scenarios.length;

        renderScenario();
      }
    );


  function renderSupplies() {
    state.selectedSupplies =
      new Set();

    clearFeedback(
      $("#supplyFeedback")
    );

    renderScenarioSummary(
      "supplyScenarioSummary"
    );

    const wrap =
      $("#supplyGrid");

    wrap.innerHTML =
      "";

    Object.keys(
      assetMap
    ).forEach(
      key => {
        const button =
          document.createElement(
            "button"
          );

        button.className =
          "asset-card";

        button.type =
          "button";

        button.appendChild(
          makeAssetVisual(key)
        );


        const label =
          document.createElement(
            "span"
          );

        label.className =
          "asset-label";

        label.textContent =
          assetMap[key].label;


        button.appendChild(
          label
        );


        button.addEventListener(
          "click",
          () => {
            if (
              state.selectedSupplies.has(
                key
              )
            ) {
              state.selectedSupplies.delete(
                key
              );

              button.classList.remove(
                "selected"
              );
            } else {
              state.selectedSupplies.add(
                key
              );

              button.classList.add(
                "selected"
              );
            }
          }
        );


        wrap.appendChild(
          button
        );
      }
    );
  }


  $("#checkSupplies")
    .addEventListener(
      "click",
      () => {
        const expected =
          currentScenario().supplies;

        const actual =
          [
            ...state.selectedSupplies
          ];

        const fb =
          $("#supplyFeedback");

        if (
          sameMembers(
            expected,
            actual
          )
        ) {
          setFeedback(
            fb,
            "correct",
            `<strong>${currentScenario().supplyFeedback}</strong>`
          );
        } else {
          setFeedback(
            fb,
            "incorrect",
            "<strong>Not quite.</strong> Recheck the hand-hygiene supplies and isolation-specific PPE needed for this patient."
          );
        }
      }
    );


  $("#resetSupplies")
    .addEventListener(
      "click",
      renderSupplies
    );


  function renderPPE() {
    state.selectedPPE =
      [];

    clearFeedback(
      $("#ppeFeedback")
    );

    renderScenarioSummary(
      "ppeScenarioSummary"
    );

    const tray =
      $("#ppeTray");

    tray.innerHTML =
      "";

    renderEquipped();


    [
      "n95-mask",
      "surgical-mask",
      "gown",
      "gloves",
      "face-shield"
    ].forEach(
      key => {
        const button =
          document.createElement(
            "button"
          );

        button.className =
          "ppe-card";

        button.type =
          "button";

        button.draggable =
          true;

        button.dataset.asset =
          key;


        button.appendChild(
          makeAssetVisual(key)
        );


        const label =
          document.createElement(
            "span"
          );

        label.className =
          "asset-label";

        label.textContent =
          assetMap[key].label;


        button.appendChild(
          label
        );


        button.addEventListener(
          "dragstart",
          event => {
            event.dataTransfer.setData(
              "text/plain",
              key
            );
          }
        );


        button.addEventListener(
          "click",
          () =>
            addPPE(key)
        );


        tray.appendChild(
          button
        );
      }
    );
  }


  function addPPE(key) {
    if (
      !key ||
      state.selectedPPE.includes(
        key
      )
    ) {
      return;
    }

    state.selectedPPE.push(
      key
    );

    renderEquipped();
  }


  function renderEquipped() {
    const wrap =
      $("#equippedPPE");

    wrap.innerHTML =
      "";

    state.selectedPPE.forEach(
      key => {
        const chip =
          document.createElement(
            "button"
          );

        chip.type =
          "button";

        chip.className =
          "equipped-chip";

        chip.textContent =
          `${assetMap[key].label} ×`;

        chip.title =
          `Remove ${assetMap[key].label}`;

        chip.addEventListener(
          "click",
          () => {
            state.selectedPPE =
              state.selectedPPE.filter(
                item =>
                  item !== key
              );

            renderEquipped();
          }
        );

        wrap.appendChild(
          chip
        );
      }
    );
  }


  $("#workerTarget")
    .addEventListener(
      "dragover",
      event =>
        event.preventDefault()
    );


  $("#workerTarget")
    .addEventListener(
      "drop",
      event => {
        event.preventDefault();

        addPPE(
          event.dataTransfer.getData(
            "text/plain"
          )
        );
      }
    );


  $("#checkPPE")
    .addEventListener(
      "click",
      () => {
        const fb =
          $("#ppeFeedback");

        const correct =
          sameMembers(
            state.selectedPPE,
            currentScenario().correctPPE
          );

        if (correct) {
          setFeedback(
            fb,
            "correct",
            `<strong>${currentScenario().ppeFeedback}</strong>`
          );
        } else {
          setFeedback(
            fb,
            "incorrect",
            "<strong>Not quite.</strong> Adjust the PPE to match the current patient case before entering the room."
          );
        }
      }
    );


  $("#resetPPE")
    .addEventListener(
      "click",
      renderPPE
    );


  function renderSequence() {
    state.selectedSequence =
      [];

    clearFeedback(
      $("#sequenceFeedback")
    );

    $("#routePrompt").textContent =
      handHygiene[
        state.route
      ].prompt;


    $$(".route-button")
      .forEach(
        button => {
          button.classList.toggle(
            "active",
            button.dataset.route ===
              state.route
          );
        }
      );


    const wrap =
      $("#sequenceItems");

    wrap.innerHTML =
      "";


    shuffle(
      handHygiene[
        state.route
      ].steps
    ).forEach(
      step => {
        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          "sequence-btn";


        const num =
          document.createElement(
            "span"
          );

        num.className =
          "sequence-number";

        num.textContent =
          "—";


        const text =
          document.createElement(
            "span"
          );

        text.textContent =
          step;


        button.append(
          num,
          text
        );


        button.addEventListener(
          "click",
          () => {
            if (
              state.selectedSequence.includes(
                step
              )
            ) {
              return;
            }

            state.selectedSequence.push(
              step
            );

            num.textContent =
              state.selectedSequence.length;

            button.classList.add(
              "selected"
            );
          }
        );


        wrap.appendChild(
          button
        );
      }
    );
  }


  $$(".route-button")
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            state.route =
              button.dataset.route;

            renderSequence();
          }
        );
      }
    );


  $("#checkSequence")
    .addEventListener(
      "click",
      () => {
        const expected =
          handHygiene[
            state.route
          ].steps;

        const fb =
          $("#sequenceFeedback");

        const correct =
          expected.length ===
            state.selectedSequence.length
          &&
          expected.every(
            (step, index) =>
              step ===
              state.selectedSequence[
                index
              ]
          );

        if (correct) {
          setFeedback(
            fb,
            "correct",
            "<strong>Correct.</strong> The hand-hygiene actions are in the order listed in the competency."
          );
        } else {
          setFeedback(
            fb,
            "incorrect",
            "<strong>Not quite.</strong> Reset and try the sequence again."
          );
        }
      }
    );


  $("#resetSequence")
    .addEventListener(
      "click",
      renderSequence
    );


  function renderDoff() {
    state.doffSelection =
      [];

    clearFeedback(
      $("#doffFeedback")
    );

    const wrap =
      $("#doffList");

    wrap.innerHTML =
      "";


    shuffle(
      doffSteps
    ).forEach(
      step => {
        const button =
          document.createElement(
            "button"
          );

        button.type =
          "button";

        button.className =
          "sequence-btn";


        const num =
          document.createElement(
            "span"
          );

        num.className =
          "sequence-number";

        num.textContent =
          "—";


        const text =
          document.createElement(
            "span"
          );

        text.textContent =
          step;


        button.append(
          num,
          text
        );


        button.addEventListener(
          "click",
          () => {
            if (
              state.doffSelection.includes(
                step
              )
            ) {
              return;
            }

            state.doffSelection.push(
              step
            );

            num.textContent =
              state.doffSelection.length;

            button.classList.add(
              "selected"
            );
          }
        );


        wrap.appendChild(
          button
        );
      }
    );
  }


  $("#checkDoff")
    .addEventListener(
      "click",
      () => {
        const fb =
          $("#doffFeedback");

        const correct =
          doffSteps.length ===
            state.doffSelection.length
          &&
          doffSteps.every(
            (step, index) =>
              step ===
              state.doffSelection[
                index
              ]
          );

        if (correct) {
          setFeedback(
            fb,
            "correct",
            "<strong>Correct.</strong> The PPE removal, disposal, and final hand-hygiene steps match the competency."
          );
        } else {
          setFeedback(
            fb,
            "incorrect",
            "<strong>Not quite.</strong> Reset and try the sequence again."
          );
        }
      }
    );


  $("#resetDoff")
    .addEventListener(
      "click",
      renderDoff
    );


  $$(".nav-step")
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () =>
            showSection(
              button.dataset.section
            )
        );
      }
    );


  $$(".next-section")
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () =>
            showSection(
              state.section + 1
            )
        );
      }
    );


  $("#restartLesson")
    .addEventListener(
      "click",
      () => {
        state.scenarioIndex =
          0;

        state.route =
          "alcohol";

        renderScenario();

        renderSequence();

        renderDoff();

        showSection(0);
      }
    );


  renderScenario();

  renderSequence();

  renderDoff();

  showSection(0);
})();
