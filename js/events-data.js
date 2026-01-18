const eventsData = [
  // --- MANAGEMENT EVENTS ---
  {
    id: "goblet-champions",
    category: "Management",
    title: "THE GOBLET OF CHAMPIONS",
    subtitle: "BEST MANAGER",
    icon: "🏆",
    description: "Enter the chambers of The Goblet of Champions at Quest 2026, where leadership isn’t measured by titles but by decisions made when the pressure is at its peak. This isn’t a regular competition; it’s a high-stakes managerial trial where every round feels like a judgment day in the wizarding world of business. From scandal defense to ethical dilemmas, from press firestorms to rapid decision-making under stress, participants will be tested for strategy, clarity, composure, and courage. Only those who can command chaos, defend choices with conviction, and lead with authority will earn their place among the best and claim the ultimate managerial crown.",
    details: {
      type: "Individual",
      rounds: "Individual Participation",
      prize: "Individual",
      eligibility: "Open to All"
    },
    pocs: [
      { name: "Ashlin Antony N S", number: "92070 76549" },
      { name: "Naaj Jewad", number: "9633596227" }
    ]
  },
  {
    id: "wall-street-wizards",
    category: "Management",
    title: "The Wizards of Wall Street",
    subtitle: "Finance Club",
    icon: "📈",
    description: "Objective: To simulate a real-world CFO decision-making journey by testing participants on market intelligence, valuation, negotiation, and crisis management through applied finance challenges. \n\nEvent Format: A test of ultimate strategic thinking. Navigate the board, outwit your opponents, and claim the throne.",
    details: {
      type: "Team Size: 4–5",
      rounds: "Expected Participants: 15 teams (75 students)",
      prize: "Finance Club",
      eligibility: "Finance Club"
    },
    pocs: [
      { name: "Finance Club", number: "" }
    ]
  },
  {
    id: "founders-spellbook",
    category: "Management",
    title: "Founder’s Spellbook",
    subtitle: "B-Plan Competition",
    icon: "📜",
    description: "About the Event: A Hogwarts-inspired Business Plan competition designed to test participants on strategy creation, real-time execution, and pitching skills. Set in the magical world of Hogwarts, teams progress through enchanted rounds that mirror real-world entrepreneurial challenges. The event follows a cumulative evaluation system, rewarding consistency, adaptability, and innovation.\n\nEvent Structure: (As defined in full brochure)",
    details: {
      type: "Team Size: 2–3",
      rounds: "3 Rounds",
      prize: "Innovation",
      eligibility: "Open to All"
    },
    pocs: [
      { name: "Dennis", number: "+91 98191 87317" },
      { name: "Sebin", number: "+91 99612 91782" }
    ]
  },
  {
    id: "triwizard-marketing",
    category: "Management",
    title: "THE TRIWIZARD MARKETING TOURNAMENT",
    subtitle: "Marketing Club",
    icon: "🪄",
    description: "Step into a world where marketing meets magic. We invite you to battle it out in a high-energy, strategy-driven competition inspired by the Triwizard Tournament. Test your marketing knowledge, creativity, and strategic thinking across thrilling wizard-themed challenges. Only the sharpest minds will rise—do you have what it takes to claim the cup?",
    details: {
      type: "Team Size: 3",
      rounds: "Marketing Challenges",
      prize: "The Cup",
      eligibility: "Marketing Club"
    },
    pocs: [
      { name: "Eakashya", number: "8637652018" }
    ]
  },

  // --- CULTURAL & CREATIVE EVENTS ---
  {
    id: "chamber-talents",
    category: "Cultural",
    title: "The Chamber of Talents",
    subtitle: "MadX Club",
    icon: "🎭",
    description: "To provide an inclusive platform for students to showcase diverse talents beyond conventional performances, fostering self-expression, confidence, and appreciation of individuality across the campus. Open talent showcase including stand-up comedy, poetry, storytelling, instrumental music, beatboxing, mimicry, art display or any unique talent.",
    details: {
      type: "Individual / Group",
      rounds: "Expected Participants: 25–40 performers",
      prize: "Showcase",
      eligibility: "MadX Club"
    },
    pocs: [
      { name: "MadX Club", number: "" }
    ]
  },
  {
    id: "mr-miss-quest",
    category: "Cultural",
    title: "Mr. Quest & Miss. Quest",
    subtitle: "Crown and Cloak",
    icon: "👑",
    description: "A pageant-style competition conducted as part of QUEST, the annual Management Fest. A platform for students to exhibit confidence, personality, creativity, and communication skills. Rounds include Introduction, Ramp Walk, and Q&A.",
    details: {
      type: "Individual",
      rounds: "Expected Participants: 20–30 contestants",
      prize: "Titles & Trophies",
      eligibility: "Crown and Cloak"
    },
    pocs: [
      { name: "Crown and Cloak", number: "" }
    ]
  },

  // --- SPORTS EVENTS ---
  {
    id: "wizards-crease",
    category: "Sports",
    title: "The Wizard’s Crease",
    subtitle: "Turf Cricket",
    icon: "🏏",
    description: "Cricket brings people together like no other sport. The Wizard's Crease is a turf cricket tournament where teams compete for glory on the pitch. Strategy, skill, and spirit—only one team will lift the trophy.",
    details: {
      type: "Team Size: 7",
      rounds: "Knockout Format",
      prize: "Tournament Winner",
      eligibility: "Cricket Enthusiasts"
    },
    pocs: [
      { name: "Akash Pandey", number: "7224939239" },
      { name: "Raman Pandey", number: "6299676954" }
    ]
  },
  {
    id: "hoops-hallows",
    category: "Sports",
    title: "HOOPS & HALLOWS: THE WIZARD’S COURT",
    subtitle: "Basketball",
    icon: "🏀",
    description: "Basketball at Quest 2026. A fast-paced court battle where every basket counts. Bring your best game to the Wizard's Court.",
    details: {
      type: "Team Size: 7–9",
      rounds: "Court Battle",
      prize: "Championship",
      eligibility: "Basketball Teams"
    },
    pocs: [
      { name: "Aaddhar Dash", number: "9482052669" },
      { name: "Sudeep H M", number: "7338242980" }
    ]
  },
  {
    id: "shuttles-spells",
    category: "Sports",
    title: "SHUTTLES & SPELLS: THE WIZARD’S BADMINTON CUP",
    subtitle: "Badminton",
    icon: "🏸",
    description: "Smash through the competition in Shuttles & Spells. A high-energy badminton tournament designed to test your reflex and stamina.",
    details: {
      type: "1 vs 1 / 2 vs 2",
      rounds: "Badminton Cup",
      prize: "Winner",
      eligibility: "Badminton Players"
    },
    pocs: [
      { name: "Shakket", number: "6374914054" },
      { name: "Piyush", number: "9468147447" }
    ]
  },
  {
    id: "golden-snitch-off",
    category: "Sports",
    title: "The Golden Snitch-off",
    subtitle: "Football",
    icon: "⚽",
    description: "The ultimate football challenge. 7-a-side battle on the field. Do you have the skill to catch the golden glory?",
    details: {
      type: "Team Size: 7",
      rounds: "7-a-side",
      prize: "Football Trophy",
      eligibility: "Football Teams"
    },
    pocs: [
      { name: "Harihar", number: "9994984179" },
      { name: "Amrith", number: "9790215616" }
    ]
  },

  // --- STANDALONE / EXPERIENCE ---
  {
    id: "maker-corner",
    category: "Experience",
    title: "Experience Centre – Maker’s Corner",
    subtitle: "Craft & Magic",
    icon: "🎨",
    description: "Not Just Watched. Crafted by You. \n\n“Words are, in my not-so-humble opinion, our most inexhaustible source of magic.” \n\nBut some magic doesn’t come from words at all- it begins the moment you get your hands involved. \n\nAt Quest 2026, not every experience is meant to be seen from a distance. Some are meant to be touched, shaped, painted, and taken home. The Makers’ Corner is where ideas slow down, and curiosity finally gets time to breathe. \n\nIt is a space filled with pottery, painting, face painting, and simple DIY art activities- not as displays, but as invitations. Sit down at a wheel, pick up a brush, try your hand at face painting with friends, or explore creative DIY tables at your own pace. No instructions to follow, no pressure to get it right.",
    details: {
      type: "Open Entry",
      rounds: "Ongoing Activity",
      prize: "Collect Memories",
      eligibility: "All Participants"
    },
    pocs: [
      { name: "Experience Team", number: "" }
    ]
  },
  {
    id: "great-feast",
    category: "Experience",
    title: "The Great Feast",
    subtitle: "Dining Experience",
    icon: "🍗",
    description: "A magical culinary journey awaiting all participants of Quest 2026.",
    details: {
      type: "Gathering",
      rounds: "Evening",
      prize: "Fine Dining",
      eligibility: "Registered Guests"
    },
    pocs: []
  },
  {
    id: "evening-gala",
    category: "Experience",
    title: "Evening Gala",
    subtitle: "Grand Finale",
    icon: "🎆",
    description: "The grand celebration to end the quest. Performance, awards, and magical moments.",
    details: {
      type: "Celebration",
      rounds: "Final Evening",
      prize: "Memories",
      eligibility: "Open to All"
    },
    pocs: []
  }
];

if (typeof window !== 'undefined') {
    window.eventsData = eventsData;
} else {
    module.exports = eventsData;
}
