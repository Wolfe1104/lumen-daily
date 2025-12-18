const devotionals = {
  anxiety: {
    verse: "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
    interpretation: "Anxiety tells you everything depends on you. This verse dismantles that lie. You are not carrying life alone, and you never were."
  },
  fear: {
    verse: "Do not fear, for I am with you. — Isaiah 41:10",
    interpretation: "Fear survives on isolation. Presence destroys it. This promise does not remove danger, but it removes abandonment."
  },
  grief: {
    verse: "The Lord is close to the brokenhearted. — Psalm 34:18",
    interpretation: "Grief is not a failure of faith. It is proof of love. God does not wait for you to heal before drawing near."
  },
  sadness: {
    verse: "Weeping may endure for a night, but joy comes in the morning. — Psalm 30:5",
    interpretation: "This is not denial. It is endurance. Night is real, but it is not permanent."
  },
  confusion: {
    verse: "Trust in the Lord with all your heart. — Proverbs 3:5",
    interpretation: "Understanding is comforting, but trust is braver. Faith begins where explanations end."
  },
  loneliness: {
    verse: "Never will I leave you; never will I forsake you. — Hebrews 13:5",
    interpretation: "Loneliness feels like absence. This promise speaks of unseen presence that does not clock out."
  },
  doubt: {
    verse: "Lord, I believe; help my unbelief. — Mark 9:24",
    interpretation: "Doubt is not rebellion. It is honesty. Faith that asks for help is still faith."
  },
  weariness: {
    verse: "Come to me, all who are weary and burdened. — Matthew 11:28",
    interpretation: "Rest is not a reward for strength. It is an invitation for the exhausted."
  }
};

function loadDevotional(type) {
  document.getElementById("verse").innerText = devotionals[type].verse;
  document.getElementById("interpretation").innerText = devotionals[type].interpretation;
}

function setDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").innerText = today.toLocaleDateString(undefined, options);
}

setDate();
loadDevotional("anxiety");
