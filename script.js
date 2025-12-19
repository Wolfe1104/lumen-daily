let dayOffset = 0;
let currentCategory = "anxiety";

const versePools = {
  anxiety: [
    "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. — Philippians 4:6-7",
    "Casting all your anxieties on him, because he cares for you. — 1 Peter 5:7",
    "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. — John 14:27",
    "For God gave us a spirit not of fear but of power and love and self-control. — 2 Timothy 1:7",
    "Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved. — Psalm 55:22",
    "When anxiety was great within me, your consolation brought me joy. — Psalm 94:19",
    "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. — Matthew 6:34",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:5-6",
    "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand. — Isaiah 41:10",
    "Come to me, all who labor and are heavy laden, and I will give you rest. — Matthew 11:28",
    // Add more verses for variety...
  ],
  fear: [
    "For God has not given us a spirit of fear, but of power, love, and a sound mind. — 2 Timothy 1:7",
    "The Lord is my light and my salvation—whom shall I fear? — Psalm 27:1",
    "Do not fear, for I am with you. — Isaiah 41:10",
    "Perfect love drives out fear. — 1 John 4:18",
    // Add more...
  ],
  // Add other categories similarly
};

const interpretations = {
  anxiety: [
    "Anxiety convinces you that you must carry tomorrow's weight today. This verse calls you to exchange worry for prayer — and receive a peace that stands guard over your heart like a divine watchman.",
    "To 'cast' is to throw with force. God invites you to hurl every anxiety onto Him — not because He needs it, but because He deeply cares for you.",
    "Jesus doesn't remove every storm, but He gives a peace that remains steady within it. Accept this gift today; it is yours by grace.",
    "God did not give you a spirit of fear. Instead, He equipped you with power to act, love to connect, and a sound mind to choose faith.",
    "Your burdens were never meant to be carried alone. The Lord sustains — He keeps you from falling when everything else shakes.",
    "When anxiety swells like a flood, God's comfort rises higher — turning deep sorrow into unexpected joy.",
    "Tomorrow's troubles are not yours to bear today. This moment has enough grace for this moment's need.",
    "Our understanding is limited; His is infinite. Acknowledge Him, and watch crooked paths become straight.",
    "God's hand is not weak — it upholds you with righteous strength. You are held.",
    "Jesus calls the weary not to work harder, but to come closer. True rest is found in His presence.",
  ],
  // Add matching interpretations for other categories
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
  const interps = interpretations[currentCategory] || ["God speaks tenderly to you today."];

  const idx = dayIndex % verses.length;
  const verse = verses[idx];
  const fullInterp = interps[idx] || "This truth is God's gentle whisper to your soul today.";

  document.getElementById("verse").innerText = verse;
  document.getElementById("modal-verse").innerText = verse;

  const introText = fullInterp.split('.')[0] + '... (tap for more)';
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
  if (versePools[category]) {
    currentCategory = category;
    updateDevotional();
  }
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

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
