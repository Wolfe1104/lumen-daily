 let dayOffset = 0;
let currentCategory = "anxiety";

function generateYearDevotionals(category) {
  const verses = [];
  for (let day = 1; day <= 365; day++) {
    verses.push({
      verse: `${category.toUpperCase()} — Day ${day}: "The Lord is near to all who call on Him." — Psalm ${((day % 150) || 150)}:${(day % 20) + 1}`,
      interpretation: `This devotional corresponds to day ${day} of the year. Whatever you’re carrying today does not get the final word.`
    });
  }
  return verses;
}

const devotionals = {
  anxiety: generateYearDevotionals("anxiety"),
  fear: generateYearDevotionals("fear"),
  grief: generateYearDevotionals("grief"),
  sadness: generateYearDevotionals("sadness"),
  confusion: generateYearDevotionals("confusion"),
  loneliness: generateYearDevotionals("loneliness"),
  doubt: generateYearDevotionals("doubt"),
  weariness: generateYearDevotionals("weariness")
};

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24)) - 1;
}

function updateDevotional() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  let dayIndex = getDayOfYear(date);
  if (dayIndex < 0) dayIndex += 365;
  if (dayIndex >= 365) dayIndex %= 365;

  const devotional = devotionals[currentCategory][dayIndex];

  document.getElementById("verse").innerText = devotional.verse;
  document.getElementById("interpretation").innerText = devotional.interpretation;
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
  }
}

function setCategory(category) {
  currentCategory = category;
  updateDevotional();
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
