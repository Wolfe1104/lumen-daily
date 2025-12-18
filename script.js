 let dayOffset = 0;
let currentCategory = "anxiety";

const devotionals = {
  anxiety: [
    {
      verse: "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
      interpretation: "Anxiety convinces you everything depends on you. This verse says you were never meant to carry life alone."
    },
    {
      verse: "When anxiety was great within me, your consolation brought joy. — Psalm 94:19",
      interpretation: "God does not scold anxious hearts. He comforts them."
    },
    {
      verse: "Peace I leave with you; my peace I give you. — John 14:27",
      interpretation: "Peace is not the absence of chaos. It is the presence of Christ within it."
    },
    {
      verse: "Do not be anxious about anything. — Philippians 4:6",
      interpretation: "This is not a command to suppress fear, but an invitation to redirect it."
    }
  ],
  fear: [
    {
      verse: "Do not fear, for I am with you. — Isaiah 41:10",
      interpretation: "Fear weakens when presence is acknowledged."
    },
    {
      verse: "The Lord is my light and my salvation—whom shall I fear? — Psalm 27:1",
      interpretation: "Fear loses authority when light is named."
    }
  ],
  grief: [
    {
      verse: "The Lord is close to the brokenhearted. — Psalm 34:18",
      interpretation: "God does not stand at a distance from pain."
    },
    {
      verse: "Blessed are those who mourn. — Matthew 5:4",
      interpretation: "Grief is not rushed. It is honored."
    }
  ],
  sadness: [
    {
      verse: "Weeping may endure for a night, but joy comes in the morning. — Psalm 30:5",
      interpretation: "Night is real. It is not permanent."
    }
  ],
  confusion: [
    {
      verse: "Trust in the Lord with all your heart. — Proverbs 3:5",
      interpretation: "Faith does not require clarity to move forward."
    }
  ],
  loneliness: [
    {
      verse: "Never will I leave you; never will I forsake you. — Hebrews 13:5",
      interpretation: "Presence does not depend on proximity."
    }
  ],
  doubt: [
    {
      verse: "Lord, I believe; help my unbelief. — Mark 9:24",
      interpretation: "Faith can ask for help without breaking."
    }
  ],
  weariness: [
    {
      verse: "Come to me, all who are weary. — Matthew 11:28",
      interpretation: "Rest is offered, not earned."
    }
  ]
};

function getDayIndex() {
  const baseDate = new Date(2024, 0, 1);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + dayOffset);
  return Math.floor((currentDate - baseDate) / (1000 * 60 * 60 * 24));
}

function getDevotionalForDay() {
  const entries = devotionals[currentCategory];
  const index = Math.abs(getDayIndex()) % entries.length;
  return entries[index];
}

function updateDevotional() {
  const devotional = getDevotionalForDay();
  document.getElementById("verse").innerText = devotional.verse;
  document.getElementById("interpretation").innerText = devotional.interpretation;
}

function updateDate() {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
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
