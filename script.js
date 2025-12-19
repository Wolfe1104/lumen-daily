let dayOffset = 0;
let currentCategory = "anxiety";

// Swipe detection
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 60; // Increased for reliability on mobile

const versePools = {
  anxiety: [ /* same as before */ ],
  // ... all other categories unchanged
};

const interpretations = {
  anxiety: [ /* same as before */ ],
  // ... all other categories unchanged
};

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function updateDevotional() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  const verses = versePools[currentCategory] || versePools.anxiety;
  const interps = interpretations[currentCategory] || ["God speaks tenderly to you today."];

  const idx = getDayOfYear(date) % verses.length;
  const verse = verses[idx];
  const fullInterp = interps[idx] || "This truth is God's gentle whisper to your soul today.";

  document.getElementById("verse").innerText = verse;
  document.getElementById("modal-verse").innerText = verse;

  const introText = fullInterp.length > 120 ? fullInterp.substring(0, 120) + '... (tap for full reflection)' : fullInterp;
  document.getElementById("intro").innerText = introText;
  document.getElementById("full-interpretation").innerText = fullInterp;
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
  if (!isNaN(value) && value >= 1 && value <= 365) {
    const today = new Date();
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const targetDay = new Date(today.getFullYear(), 0, value);
    dayOffset = Math.floor((targetDay - yearStart) / 86400000);
    updateDate();
    updateDevotional();
    document.getElementById("jumpInput").value = "";
  }
}

function setCategory(category) {
  currentCategory = category;
  toggleMenu(); // Close menu after selection
  updateDevotional();
}

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("open");
  overlay.classList.toggle("active");
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) closeModal();
};

// Swipe detection - now more sensitive and reliable
document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe right - open menu
      if (!document.getElementById("side-menu").classList.contains("open")) {
        toggleMenu();
      }
    } else {
      // Swipe left - close menu if open
      if (document.getElementById("side-menu").classList.contains("open")) {
        toggleMenu();
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
