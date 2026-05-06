const courses = [
  {
    id: "als",
    title: "ALS",
    file: "ALS.html",
    category: "Neuromuscular Disorders"
  },
  {
    id: "flail-chest",
    title: "Flail Chest",
    file: "FlailChest.html",
    category: "Trauma"
  },
  {
    id: "guillain-barre",
    title: "Guillain-Barré Syndrome",
    file: "GuillainBarre.html",
    category: "Neuromuscular Disorders"
  },
  {
    id: "interstitial-lung-disease",
    title: "Interstitial Lung Disease",
    file: "InterstitialLungDisease.html",
    category: "Restrictive Lung Diseases"
  },
  {
    id: "kyphoscoliosis",
    title: "Kyphoscoliosis",
    file: "Kyphoscoliosis.html",
    category: "Restrictive Disorders"
  },
  {
    id: "lung-cancer",
    title: "Lung Cancer",
    file: "LungCancer.html",
    category: "Pulmonary Diseases"
  },
  {
    id: "mas",
    title: "Meconium Aspiration Syndrome",
    file: "MAS.html",
    category: "Neonatal Disorders"
  },
  {
    id: "myasthenia-gravis",
    title: "Myasthenia Gravis",
    file: "MyastheniaGravis.html",
    category: "Neuromuscular Disorders"
  },
  {
    id: "near-drowning",
    title: "Near Drowning",
    file: "NearDrowning.html",
    category: "Emergency Respiratory Conditions"
  },
  {
    id: "pals",
    title: "PALS",
    file: "PALS.html",
    category: "Pediatric Critical Care"
  },
  {
    id: "pleural-effusion",
    title: "Pleural Effusion",
    file: "PleuralEffusion.html",
    category: "Pleural Disorders"
  },
  {
    id: "pneumonia",
    title: "Pneumonia",
    file: "Pneumonia.html",
    category: "Infectious Diseases"
  },
  {
    id: "pneumothorax",
    title: "Pneumothorax",
    file: "Pneumothorax.html",
    category: "Pleural Disorders"
  },
  {
    id: "pulmonary-embolism",
    title: "Pulmonary Embolism",
    file: "PulmonaryEmbolism.html",
    category: "Pulmonary Vascular Disorders"
  },
  {
    id: "rds",
    title: "Respiratory Distress Syndrome",
    file: "RDS.html",
    category: "Neonatal Disorders"
  },
  {
    id: "rsv",
    title: "RSV",
    file: "RSV.html",
    category: "Pediatric Respiratory Diseases"
  },
  {
    id: "sleep-apnea",
    title: "Sleep Apnea",
    file: "SleepApnea.html",
    category: "Sleep Disorders"
  },
  {
    id: "smoke-inhalation",
    title: "Smoke Inhalation",
    file: "SmokeInhalation.html",
    category: "Emergency Respiratory Conditions"
  },
  {
    id: "ttn",
    title: "Transient Tachypnea of the Newborn",
    file: "TTN.html",
    category: "Neonatal Disorders"
  },
  {
    id: "tuberculosis",
    title: "Tuberculosis",
    file: "Tuberculosis.html",
    category: "Infectious Diseases"
  }
];

/* =========================================
   PULMOCORE COURSE MENU SYSTEM
========================================= */

function getCourseProgress(courseFile) {
  const progress = JSON.parse(localStorage.getItem("pulmocoreProgress") || "{}");
  return progress[courseFile] || {
    completed: false,
    percent: 0
  };
}

function initializeCourseMenu() {
  const menuButton = document.getElementById("courseMenuButton");
  const menuDropdown = document.getElementById("courseDropdown");

  if (!menuButton || !menuDropdown) return;

  menuDropdown.innerHTML = "";

  courses.forEach(course => {
    const progress = getCourseProgress(course.file);

    let statusText = "Not Started";

    if (progress.completed) {
      statusText = "✅ Complete";
    } else if (progress.percent > 0) {
      statusText = `🟡 ${progress.percent}%`;
    }

    const item = document.createElement("a");
    item.href = course.file;
    item.className = "course-menu-item";

    item.innerHTML = `
      <div class="course-menu-title">${course.title}</div>
      <div class="course-menu-status">${statusText}</div>
    `;

    menuDropdown.appendChild(item);
  });

  menuButton.addEventListener("click", () => {
    menuDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".course-menu-wrapper")) {
      menuDropdown.classList.remove("show");
    }
  });
}

/* =========================================
   LESSON PROGRESS TRACKING
========================================= */

function saveLessonProgress(courseFile, percent, completed = false) {
  const progress = JSON.parse(localStorage.getItem("pulmocoreProgress") || "{}");

  progress[courseFile] = {
    percent,
    completed
  };

  localStorage.setItem("pulmocoreProgress", JSON.stringify(progress));
}

/* =========================================
   AUTO INIT
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeCourseMenu();
});