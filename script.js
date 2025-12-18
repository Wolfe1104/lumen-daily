 let dayOffset = 0;
let currentCategory = "anxiety";

/*
  Generate 365 unique devotionals per category.
  Each day of the year maps to exactly one entry.
*/

function generateYearDevotionals(category) {
  const verses = [];

  for (let day = 1; day <= 365; day++) {
    verses.push({
      verse: `${category.toUpperCase()} — Day ${day}: "The Lord is near to all who call on Him." — Psalm ${((day % 150) || 150)}:${(day % 20) + 1}`,
      interpretation: `Day ${day} reminds you that what you are carrying today is not unseen. This moment matters, and so do you.`
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
  const diff =
    date - start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24)) - 1;
}

function getDevotionalForDay() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  const dayIndex = getDayOfYear(date);
  return devotionals[currentCategory][dayIndex];
}

function updateDevotional() {
  const devotional = getDevotionalForDay();
  document.getElementById("verse").innerText = devotional.verse;
  document.getElementById("interpretation").innerText = devotional.interpretation;
}

function updateDate() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  document.getElementById("date").innerText =
    date.toLocaleDateString(undefined, options);
}

function changeDay(amount) {
  dayOffset += amount;
  updateDate();
  updateDevotional();
}

function setCategory(category) {
  currentCategory = category;
  updateDevotional();
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
