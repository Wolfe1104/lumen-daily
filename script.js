let dayOffset = 0;
let currentCategory = "anxiety";

const versePools = {
  anxiety: [ /* your expanded list of 50+ verses */ ],
  fear: [ /* ... */ ],
  // ... all categories
};

const interpretations = {
  anxiety: [ /* matching unique interpretations */ ],
  fear: [ /* ... */ ],
  // ... all categories
};

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function updateDevotional() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  let dayIndex = getDayOfYear(date) % 365;

  const verses = versePools[currentCategory] || versePools.anxiety;
  const interps = interpretations[currentCategory] || ["God meets you tenderly today."];

  const idx = dayIndex % verses.length;
  const verse = verses[idx];
  const fullInterp = interps[idx] || "This truth is God's gentle whisper to your soul today.";

  document.getElementById("verse").innerText = verse;
  document.getElementById("modal-verse").innerText = verse;

  const introText = fullInterp.split('.')[0] + '... (tap for full reflection)';
  document.getElementById("intro").innerText = introText;
  document.getElementById("full-interpretation").innerText = fullInterp;

  document.getElementById("day-counter").innerText = `Day ${dayIndex + 1} of 365`;
}

function updateDate() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  document.getElementById("date").innerText = date.toDateString();
}

function changeDay(amount) {
  dayOffset += amount;
  updateDate();
  updateDevotional();
}

function jumpDays() {
  const value = parseInt(document.getElementById("jumpInput").value, 10);
  if (!isNaN(value)) {
    dayOffset += value;
    updateDate();
    updateDevotional();
    document.getElementById("jumpInput").value = "";
  }
}

function setCategory(category) {
  currentCategory = category;
  updateDevotional();
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
