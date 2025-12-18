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
    }
  ],
  fear: [
    {
      verse: "Do not fear, for I am with you. — Isaiah 41:10",
      interpretation: "Fear weakens when presence is acknowledged."
    }
  ],
  grief: [
    {
      verse: "The Lord is close to the brokenhearted. — Psalm 34:18",
      interpretation: "God does not stand at a distance from pain."
    }
  ],
  sadness: [
    {
      verse: "Weeping may endure for a night, but joy comes in the morning. — Psalm 30:5",
      interpretation: "Morning does not erase night, but it does replace it."
    }
  ],
  confusion: [
    {
      verse: "Trust in the Lord with all your heart. — Proverbs 3:5",
      interpretation: "Clarity is optional. Trust is not."
    }
  ],
  loneliness: [
    {
      verse: "Never will I leave you; never will I forsake you. — Hebrews 13:5",
      interpretation: "Presence does not require visibility."
    }
  ],
  doubt: [
    {
      verse: "Lord, I believe; help my unbelief. — Mark 9:24",
      interpretation: "Faith can limp and still move forward."
    }
  ],
  weariness: [
    {
      verse: "Come to me, all who are weary. — Matthew 11:28",
      interpretation: "Rest is offered, not earned."
    }
  ]
};

function getDevotionalForDay() {
  const entries = devotionals[currentCategory];
  const index = Math.abs(dayOffset) % entries.length;
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

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

updateDate();
updateDevotional();
