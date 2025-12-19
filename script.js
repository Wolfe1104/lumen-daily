let dayOffset = 0;
let currentCategory = "anxiety";

// Swipe detection variables
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // minimum distance for swipe

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
    "Come to me, all who labor and are heavy laden, and I will give you rest. — Matthew 11:28"
  ],
  fear: [
    "For God has not given us a spirit of fear, but of power, love, and a sound mind. — 2 Timothy 1:7",
    "The Lord is my light and my salvation—whom shall I fear? — Psalm 27:1",
    "Do not fear, for I am with you. — Isaiah 41:10",
    "Perfect love drives out fear. — 1 John 4:18",
    "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. — Psalm 23:4",
    "The Lord is on my side; I will not fear. What can man do to me? — Psalm 118:6",
    "Have I not commanded you? Be strong and courageous. — Joshua 1:9",
    "Peace I leave with you; my peace I give to you. — John 14:27",
    "When I am afraid, I put my trust in you. — Psalm 56:3",
    "Say to those who have an anxious heart, 'Be strong; fear not!' — Isaiah 35:4"
  ],
  grief: [
    "The Lord is close to the brokenhearted and saves the crushed in spirit. — Psalm 34:18",
    "Blessed are those who mourn, for they shall be comforted. — Matthew 5:4",
    "He will wipe every tear from their eyes. — Revelation 21:4",
    "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. — Psalm 73:26",
    "He heals the brokenhearted and binds up their wounds. — Psalm 147:3",
    "For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning. — Psalm 30:5"
  ],
  sadness: [
    "Weeping may endure for a night, but joy comes in the morning. — Psalm 30:5",
    "Why are you downcast, O my soul? Hope in God. — Psalm 42:11",
    "The joy of the Lord is your strength. — Nehemiah 8:10",
    "You have turned my mourning into dancing. — Psalm 30:11",
    "He heals the brokenhearted and binds up their wounds. — Psalm 147:3"
  ],
  confusion: [
    "God is not the author of confusion, but of peace. — 1 Corinthians 14:33",
    "Trust in the Lord with all your heart and lean not on your own understanding. — Proverbs 3:5",
    "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",
    "If any of you lacks wisdom, let him ask of God. — James 1:5"
  ],
  loneliness: [
    "I will never leave you nor forsake you. — Hebrews 13:5",
    "The Lord is near to all who call on Him. — Psalm 145:18",
    "Even if my father and mother forsake me, the Lord will receive me. — Psalm 27:10",
    "When you pass through the waters, I will be with you. — Isaiah 43:2"
  ],
  doubt: [
    "Lord, I believe; help my unbelief. — Mark 9:24",
    "If you have faith as small as a mustard seed… nothing will be impossible for you. — Matthew 17:20",
    "Blessed are those who have not seen and yet believe. — John 20:29",
    "The Lord is faithful to all His promises. — Psalm 145:13"
  ],
  weariness: [
    "Come to me, all who are weary, and I will give you rest. — Matthew 11:28",
    "He gives strength to the weary. — Isaiah 40:29",
    "Let us not grow weary in doing good. — Galatians 6:9",
    "Those who hope in the Lord will renew their strength. They will soar on wings like eagles. — Isaiah 40:31"
  ]
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
    "Jesus calls the weary not to work harder, but to come closer. True rest is found in His presence."
  ],
  fear: [
    "Fear is not your inheritance. God has given you power, love, and a sound mind — claim them today.",
    "Darkness cannot stand where God's light shines. He is your salvation — fear has no rightful place.",
    "Fear asks 'What if?' God answers 'I am with you.' Let His presence silence every doubt.",
    "Perfect love leaves no room for fear. Rest in the completeness of God's love for you.",
    "The valley may be dark, but your Shepherd walks it with you. No evil can touch what He protects.",
    "With God on your side, human threats lose their power. Fear bows to divine alliance.",
    "Courage is God's command because His presence is guaranteed. Step forward in faith.",
    "Jesus' peace is not temporary — it is eternal. Receive it and let fear flee.",
    "Fear loses its grip the moment you place your trust in God.",
    "Your God is coming with salvation. Let that truth quiet every fearful heart."
  ],
  grief: [
    "God draws nearest when your heart is broken. He is not distant in your pain.",
    "Mourning is not wasted — Jesus promises comfort to those who grieve.",
    "One day, every tear will be personally wiped away by God's own hand.",
    "When everything fails, God remains your strength and eternal portion.",
    "He doesn't just see your wounds — He binds them with tender healing.",
    "Joy comes after the night of weeping — His favor lasts a lifetime."
  ],
  sadness: [
    "Night may bring weeping, but God's dawn always brings joy.",
    "Your soul has reason to hope — place it fully in God alone.",
    "True strength is found not in circumstance, but in the joy of the Lord.",
    "God transforms mourning into dancing — He renews your spirit.",
    "He heals the brokenhearted and binds up their wounds."
  ],
  confusion: [
    "God brings peace, not confusion. Trust in His order today.",
    "Leaning on limited understanding leads to confusion — acknowledge Him for clarity.",
    "God's Word lights every step — even when the path feels unclear.",
    "Wisdom is a gift freely given to those who ask in faith."
  ],
  loneliness: [
    "God's promise is unbreakable — He will never leave or forsake you.",
    "He is near to all who call on Him in truth.",
    "Even if all others abandon you, the Lord receives you with open arms.",
    "Through every deep water, He walks with you."
  ],
  doubt: [
    "Honest doubt brought to Jesus receives help for unbelief.",
    "Even small faith can move mountains — God honors what you have.",
    "Believing without seeing is deeply blessed by God.",
    "God's faithfulness to His promises removes grounds for doubt."
  ],
  weariness: [
    "Jesus invites the exhausted to find true soul-rest in Him.",
    "God gives fresh strength to those who feel depleted.",
    "Persevere in good — your harvest is coming.",
    "Hope in the Lord brings renewed strength like eagles' wings."
  ]
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

// Swipe to open menu (works on Android)
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - do nothing or close if open
    if (document.getElementById("side-menu").classList.contains("open")) {
      toggleMenu();
    }
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - open menu
    if (!document.getElementById("side-menu").classList.contains("open")) {
      toggleMenu();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  updateDevotional();
});
