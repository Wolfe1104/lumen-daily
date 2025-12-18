 const devotionals = {
  anxiety: {
    verse: "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
    interpretation: "Anxiety convinces you that you are alone in carrying the weight. This verse says otherwise. You are not expected to be strong forever. You are invited to release what is crushing you."
  },
  fear: {
    verse: "Do not fear, for I am with you. — Isaiah 41:10",
    interpretation: "Fear thrives in isolation. This promise destroys that illusion. You may feel afraid, but you are not abandoned."
  },
  grief: {
    verse: "The Lord is close to the brokenhearted. — Psalm 34:18",
    interpretation: "Grief does not repel God. It draws Him nearer. Your pain is not something to hide. It is something He enters."
  },
  sadness: {
    verse: "Weeping may stay for the night, but rejoicing comes in the morning. — Psalm 30:5",
    interpretation: "This is not a denial of pain. It is a reminder that sorrow does not get the final word."
  },
  confusion: {
    verse: "Trust in the Lord with all your heart. — Proverbs 3:5",
    interpretation: "Clarity is not required for trust. Faith begins precisely where understanding runs out."
  },
  loneliness: {
    verse: "Never will I leave you; never will I forsake you. — Hebrews 13:5",
    interpretation: "Loneliness lies. Presence does not. Even when unseen, you are held."
  },
  doubt: {
    verse: "Lord, I believe; help my unbelief. — Mark 9:24",
    interpretation: "Doubt is not the opposite of faith. It is often faith asking for help."
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
