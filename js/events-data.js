const eventsData = [
  {
    id: "best-manager",
    title: "The Goblet of Champions",
    subtitle: "Best Manager",
    icon: "🏆",
    description: "Enter the chambers of The Goblet of Champions at Quest 2026, where leadership isn’t measured by titles but by decisions made when the pressure is at its peak. This isn’t a regular competition; it’s a high-stakes managerial trial where every round feels like a judgment day in the wizarding world of business. From scandal defense to ethical dilemmas, from press firestorms to rapid decision-making under stress, participants will be tested for strategy, clarity, composure, and courage. Only those who can command chaos, defend choices with conviction, and lead with authority will earn their place among the best and claim the ultimate managerial crown.",
    details: {
      type: "Individual Participation",
      rounds: "5 Rounds over 2 Days",
      prize: "₹ 25,000 - ₹ 35,000 (Pool)",
      eligibility: "Open to all"
    },
    pocs: [
      { name: "Ashlin Antony N S", number: "92070 76549" },
      { name: "Naaj Jewad", number: "9633596227" }
    ]
  },
  {
    id: "finance",
    title: "The Wizards of Wall Street",
    subtitle: "Finance Club",
    icon: "📈",
    description: "To simulate a real-world CFO decision-making journey by testing participants on market intelligence, valuation, negotiation, and crisis management through applied finance challenges. A test of ultimate strategic thinking. Navigate the board, outwit your opponents, and claim the throne.",
    details: {
      type: "Team (4-5 members)",
      rounds: "4 Rounds (Quiz, M&A, Negotiation, Boardroom)",
      prize: "₹ 25,000 (Pool)",
      eligibility: "PG / MBA Students Only"
    },
    pocs: [
      { name: "Finance Club Team", number: "" }
    ]
  },
  {
    id: "madx-talents",
    title: "The Chamber of Talents",
    subtitle: "MadX Club",
    icon: "🎭",
    description: "To provide an inclusive platform for students to showcase diverse talents beyond conventional performances, fostering self-expression, confidence, and appreciation of individuality across the campus. Open talent showcase including stand-up comedy, poetry, storytelling, instrumental music, beatboxing, mimicry, art display or any unique talent.",
    details: {
      type: "Solo / Group",
      rounds: "Performance (3-5 mins)",
      prize: "Trophies & Certificates",
      eligibility: "All Students"
    },
    pocs: [
      { name: "MadX Club Team", number: "" }
    ]
  },
  {
    id: "crown-cloak",
    title: "Crown and Cloak",
    subtitle: "Mr. & Miss Quest",
    icon: "👑",
    description: "A pageant-style competition conducted as part of QUEST, the annual Management Fest. A platform for students to exhibit confidence, personality, creativity, and communication skills. Rounds include Introduction, Ramp Walk, and Q&A.",
    details: {
      type: "Individual",
      rounds: "Intro, Ramp Walk, Q&A",
      prize: "Titles & Trophies",
      eligibility: "Registered Quest Participants"
    },
    pocs: [
      { name: "MadX Club Team", number: "" }
    ]
  },
  {
    id: "marketing",
    title: "Triwizard Marketing Tournament",
    subtitle: "Marketing Club",
    icon: "🪄",
    description: "Step into a world where marketing meets magic. We invite you to battle it out in a high-energy, strategy-driven competition inspired by the Triwizard Tournament. Test your marketing knowledge, creativity, and strategic thinking across thrilling wizard-themed challenges. Only the sharpest minds will rise—do you have what it takes to claim the cup?",
    details: {
      type: "Team (3 members)",
      rounds: "3 Rounds (Pitch, Live Sales, Final Strategy)",
      prize: "₹ 15,000 (Pool)",
      eligibility: "UG & PG Students"
    },
    pocs: [
      { name: "Eakashya", number: "8637652018" }
    ]
  },
  {
    id: "b-plan",
    title: "Founder’s Spellbook",
    subtitle: "B-Plan Competition",
    icon: "📜",
    description: "A Hogwarts-inspired Business Plan competition designed to test participants on strategy creation, real-time execution, and pitching skills. Set in the magical world of Hogwarts, teams progress through enchanted rounds that mirror real-world entrepreneurial challenges. The event follows a cumulative evaluation system, rewarding consistency, adaptability, and innovation.",
    details: {
      type: "Team (2-3 members)",
      rounds: "3 Rounds (Concept, Execution, Final Pitch)",
      prize: "TBD",
      eligibility: "Open to all"
    },
    pocs: [
      { name: "Dennis", number: "+91 98191 87317" },
      { name: "Sebin", number: "+91 99612 91782" }
    ]
  }
];

if (typeof window !== 'undefined') {
    window.eventsData = eventsData;
} else {
    module.exports = eventsData;
}
