// ============================================================
// Election Journey — Data Layer
// All election stages, role-specific insights, and AI prompts
// ============================================================

const PERSONAS = [
  {
    id: "first-time-voter",
    label: "First-Time Voter",
    icon: "🗳️",
    color: "#6C63FF",
    description: "New to elections? Start here.",
  },
  {
    id: "election-officer",
    label: "Election Officer",
    icon: "🏛️",
    color: "#00C9A7",
    description: "Understand the machinery behind elections.",
  },
  {
    id: "candidate",
    label: "Candidate",
    icon: "🎤",
    color: "#FF6B6B",
    description: "Running for office? Know the rules.",
  },
  {
    id: "journalist",
    label: "Journalist",
    icon: "📰",
    color: "#FFC107",
    description: "Cover elections with clarity.",
  },
];

const STAGES = [
  {
    id: 1,
    title: "Voter Registration",
    subtitle: "The foundation of democracy",
    icon: "📋",
    color: "#6C63FF",
    gradient: "linear-gradient(135deg, #6C63FF 0%, #3B33CC 100%)",
    steps: [
      {
        title: "Check Your Eligibility",
        detail:
          "You must be a citizen aged 18 or above on the qualifying date. Eligibility is determined by age, citizenship, and residency in the constituency. Non-resident citizens may also register under specific provisions.",
      },
      {
        title: "Gather Required Documents",
        detail:
          "Prepare proof of identity (Aadhaar, Passport, Driving License), proof of address, and a recent passport-sized photograph. These documents are verified during the registration process.",
      },
      {
        title: "Fill Form 6 (Online or Offline)",
        detail:
          "Form 6 is the official application for inclusion of a name in the electoral roll. It can be submitted online through the National Voter Service Portal or offline at the nearest Electoral Registration Office.",
      },
      {
        title: "Verification by BLO",
        detail:
          "A Booth Level Officer (BLO) visits your address to verify details. The BLO confirms your identity, residence, and cross-checks with existing records to prevent duplicate entries.",
      },
      {
        title: "Receive Your Voter ID (EPIC)",
        detail:
          "Once approved, you receive the Electors Photo Identity Card (EPIC) — your official voter ID. This card is used for identification at the polling booth on election day.",
      },
    ],
    forYou: {
      "first-time-voter":
        "As a first-time voter, registering is your gateway to making your voice heard. The process takes about 2-4 weeks. Start early!",
      "election-officer":
        "You oversee the enrollment drives and BLO deployments. Ensuring accuracy in the electoral roll is your primary duty.",
      candidate:
        "Before filing your nomination, verify that your own voter registration is active and current in the constituency you wish to contest.",
      journalist:
        "Track enrollment numbers and demographic data — registration drives are a key indicator of voter engagement and can predict turnout.",
    },
    didYouKnow:
      "India has the world's largest electoral roll with over 950 million registered voters. The Election Commission conducts continuous updates to keep it accurate.",
    quickAsks: [
      "How do I check if I'm already registered?",
      "Can I register online?",
      "What if my address has changed?",
    ],
  },
  {
    id: 2,
    title: "Candidate Nomination",
    subtitle: "Who stands for the people?",
    icon: "📝",
    color: "#00C9A7",
    gradient: "linear-gradient(135deg, #00C9A7 0%, #008B74 100%)",
    steps: [
      {
        title: "Meet the Eligibility Criteria",
        detail:
          "Candidates must be citizens of India, at least 25 years old for Lok Sabha (30 for Rajya Sabha), and registered as a voter in any constituency. Disqualifications include criminal convictions, holding offices of profit, and unsound mind.",
      },
      {
        title: "File Nomination Papers",
        detail:
          "Submit nomination papers to the Returning Officer during the notification period. Papers include personal details, party affiliation (if any), assets and liabilities declaration, and criminal record disclosure.",
      },
      {
        title: "Pay the Security Deposit",
        detail:
          "General candidates pay ₹25,000 for Lok Sabha (₹10,000 for state assemblies). SC/ST candidates pay half. The deposit is forfeited if the candidate fails to secure 1/6th of the total valid votes.",
      },
      {
        title: "Scrutiny of Nominations",
        detail:
          "The Returning Officer examines each nomination for compliance with legal requirements. Candidates can be rejected for incomplete forms, ineligibility, or failure to meet procedural requirements.",
      },
      {
        title: "Withdrawal & Final Candidate List",
        detail:
          "Candidates may withdraw their nomination before the deadline. After withdrawal closes, the final list of contesting candidates is published and allotment of election symbols is done.",
      },
    ],
    forYou: {
      "first-time-voter":
        "You'll see candidate lists published in newspapers and online. Check their criminal records and asset declarations — it's public information!",
      "election-officer":
        "Scrutiny of nomination papers is one of the most legally sensitive tasks. Every rejection must be justified and documented.",
      candidate:
        "File multiple sets of nomination papers as a safety measure. Ensure every proposer's signature is verified and all documents are in order.",
      journalist:
        "The nomination phase reveals the real contest. Track party tickets, rebel candidates, and turncoat alliances for the real story.",
    },
    didYouKnow:
      "In the 2024 Lok Sabha elections, over 8,000 candidates filed nominations across 543 constituencies. The average number of candidates per seat was 15.",
    quickAsks: [
      "What are the asset disclosure requirements?",
      "Can an independent candidate win?",
      "How are election symbols allotted?",
    ],
  },
  {
    id: 3,
    title: "Campaign & Rallies",
    subtitle: "The battle for hearts and minds",
    icon: "📢",
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #CC3333 100%)",
    steps: [
      {
        title: "Campaign Period Begins",
        detail:
          "The official campaign period begins after the final candidate list is published. The Election Commission sets guidelines including spending limits, code of conduct, and restrictions on certain types of appeals.",
      },
      {
        title: "Model Code of Conduct (MCC)",
        detail:
          "The MCC is a set of guidelines for political parties and candidates. It covers general conduct, meetings, processions, polling day behavior, and use of government machinery. Violations are monitored by EC observers.",
      },
      {
        title: "Campaign Spending Limits",
        detail:
          "Lok Sabha candidates can spend up to ₹95 lakh (varies by state). Every expenditure must be documented. The EC deploys expenditure observers and even uses videography teams to monitor spending.",
      },
      {
        title: "Media & Social Media Regulations",
        detail:
          "All political ads require pre-certification. Social media posts by candidates are tracked. A 'silence period' of 48 hours before polling prohibits any campaigning, including on social media.",
      },
      {
        title: "Campaign Silence Period",
        detail:
          "Campaigning must stop 48 hours before polling. This period allows voters to reflect without influence. Any violation can lead to disqualification or criminal prosecution.",
      },
    ],
    forYou: {
      "first-time-voter":
        "Don't be swayed by last-minute promises. Research candidates' track records, attend debates, and verify claims before making your choice.",
      "election-officer":
        "Deploy flying squads and static surveillance teams. Monitor cash movements, liquor distribution, and Model Code violations actively.",
      candidate:
        "Every rupee counts — literally. Maintain meticulous expenditure records. The EC's expenditure observers are watching closely.",
      journalist:
        "This is where the stories are. Follow the money, fact-check claims, and report on MCC violations. Your coverage shapes public opinion.",
    },
    didYouKnow:
      "India's 2024 general elections saw an estimated campaign expenditure of ₹1.35 lakh crore, making it one of the most expensive elections in the world.",
    quickAsks: [
      "What happens if MCC is violated?",
      "How are campaign finances tracked?",
      "What is the silence period?",
    ],
  },
  {
    id: 4,
    title: "Voting Day",
    subtitle: "Your moment of power",
    icon: "🗳️",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    steps: [
      {
        title: "Polling Booth Setup",
        detail:
          "Each booth is set up with EVMs (Electronic Voting Machines) and VVPATs (Voter Verifiable Paper Audit Trail). Presiding officers and polling agents from each party ensure fair conduct. Booths are accessible and include ramps for disabled voters.",
      },
      {
        title: "Voter Identification",
        detail:
          "Present your EPIC or any approved photo ID (12 alternatives accepted). The polling officer verifies your identity against the electoral roll, applies indelible ink to your finger, and issues a voter slip.",
      },
      {
        title: "Casting Your Vote on the EVM",
        detail:
          "Enter the voting compartment alone. Press the button next to your chosen candidate's name and symbol on the EVM. A beep confirms your vote. The VVPAT displays a paper slip for 7 seconds for verification.",
      },
      {
        title: "VVPAT Verification",
        detail:
          "The VVPAT prints a slip showing the candidate name and symbol you voted for. This paper trail ensures transparency and can be used for auditing if disputes arise. 5 VVPAT slips per assembly segment are now mandatorily counted.",
      },
      {
        title: "NOTA Option",
        detail:
          "If no candidate appeals to you, choose NOTA (None Of The Above). While NOTA votes don't affect results currently, a high NOTA count signals voter dissatisfaction and pushes parties to field better candidates.",
      },
    ],
    forYou: {
      "first-time-voter":
        "Your first vote is special! Arrive early (booths open at 7 AM), carry your voter ID, and don't be nervous — the process takes just 2-3 minutes.",
      "election-officer":
        "Ensure all EVMs are tested with mock polls before voting begins. Handle any technical issues swiftly. Maintain a secure, orderly environment.",
      candidate:
        "Deploy trained polling agents at every booth. They are your eyes and ears. Report any irregularities immediately to the Returning Officer.",
      journalist:
        "Track voter turnout hourly. Watch for incidents at sensitive booths. Voter enthusiasm (or lack thereof) is the day's biggest story.",
    },
    didYouKnow:
      "India uses over 5.5 million EVMs and VVPATs in a general election. Each EVM can record up to 2,000 votes and has a battery life of over 10 years.",
    quickAsks: [
      "What if my name is missing from the list?",
      "Can I vote without a voter ID?",
      "What is NOTA?",
    ],
  },
  {
    id: 5,
    title: "Counting & Results",
    subtitle: "The verdict unfolds",
    icon: "📊",
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    steps: [
      {
        title: "EVM Strong Room Security",
        detail:
          "After polling, EVMs are sealed and stored in strong rooms under 24/7 security with CCTV surveillance. Candidates' agents can observe the strong rooms. Any unauthorized access is a criminal offense.",
      },
      {
        title: "Counting Day Process",
        detail:
          "On counting day, EVMs are brought to designated counting centers. Postal ballots are counted first, followed by EVM results. Each round reveals results from a set of booths, building the picture progressively.",
      },
      {
        title: "VVPAT Verification Counting",
        detail:
          "Mandatory verification of VVPAT slips from 5 randomly selected polling stations per assembly segment. This cross-verification ensures EVM results match the paper trail, adding an extra layer of transparency.",
      },
      {
        title: "Declaring the Winner",
        detail:
          "The candidate with the most valid votes wins (First-Past-The-Post system). The Returning Officer declares the result and issues a certificate of election. The winner can then take the oath of office.",
      },
      {
        title: "Handling Disputes & Recounts",
        detail:
          "Any candidate can request a recount before results are declared. Election petitions challenging results can be filed in the High Court within 45 days. The court can order a fresh election if irregularities are proven.",
      },
    ],
    forYou: {
      "first-time-voter":
        "Watch the counting live on TV or online! Results come in rounds. Early trends can be misleading — wait for final results before celebrating.",
      "election-officer":
        "Counting day is high-stakes. Ensure meticulous round-wise documentation. Every challenged vote must be handled by the book.",
      candidate:
        "Station your counting agents at every table. They can challenge suspicious votes. Keep your legal team on standby for any disputes.",
      journalist:
        "Counting day is a marathon, not a sprint. Report trends carefully — postal ballots can swing results. Verify before you broadcast.",
    },
    didYouKnow:
      "In the 2024 elections, counting of votes across all 543 Lok Sabha constituencies was completed in a single day — a massive logistical achievement.",
    quickAsks: [
      "How does the First-Past-The-Post system work?",
      "Can EVMs be hacked?",
      "What happens in case of a tie?",
    ],
  },
  {
    id: 6,
    title: "Government Formation",
    subtitle: "From ballot to governance",
    icon: "🏛️",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    steps: [
      {
        title: "Majority & Coalition Building",
        detail:
          "The party or alliance with a majority (272+ seats in Lok Sabha) is invited to form the government. If no single party has a majority, coalition negotiations begin. The President invites the leader most likely to prove majority.",
      },
      {
        title: "Swearing-In Ceremony",
        detail:
          "The Prime Minister and Council of Ministers take their oath of office administered by the President. Cabinet ministers, ministers of state, and deputy ministers are allocated portfolios based on experience and political considerations.",
      },
      {
        title: "Floor Test",
        detail:
          "The newly formed government must prove its majority on the floor of the Lok Sabha within a specified period. Members vote for or against confidence in the government. Failure means the government falls.",
      },
      {
        title: "Opposition & Shadow Governance",
        detail:
          "The largest party not in government becomes the official opposition. If they have 10% of seats, their leader becomes the Leader of Opposition — a position of constitutional importance with a role in key appointments.",
      },
      {
        title: "Governance Begins",
        detail:
          "Parliament convenes for its first session. The President's address outlines the government's agenda. Budget sessions, question hours, and legislative debates keep democracy alive between elections.",
      },
    ],
    forYou: {
      "first-time-voter":
        "Your vote helped shape this government. Stay engaged — attend gram sabhas, write to your MP, and use RTI to hold them accountable.",
      "election-officer":
        "Your work made this transition of power possible. Archive all election records systematically for future reference and legal requirements.",
      candidate:
        "Whether you won or lost, your role in democracy continues. Winners must serve their constituents; others prepare for the next cycle.",
      journalist:
        "The story doesn't end with government formation. Track promises vs. performance. The 100-day report card is your next big piece.",
    },
    didYouKnow:
      "India has seen 17 Lok Sabhas since independence. The country has had coalition governments for most of the period since 1989, reflecting its diverse political landscape.",
    quickAsks: [
      "What is a vote of no confidence?",
      "How are cabinet portfolios decided?",
      "What powers does the opposition have?",
    ],
  },
];

// AI response templates (simulated — replace with actual API calls)
const AI_RESPONSES = {
  "How do I check if I'm already registered?":
    "You can check your voter registration status on the National Voter Service Portal (voters.eci.gov.in). Enter your details like name, age, and constituency, or use your EPIC number to search directly. You can also call the voter helpline 1950 or visit your local BLO office.",

  "Can I register online?":
    "Yes! You can register online through the National Voter Service Portal (nvsp.in) or the Voter Helpline App. Fill Form 6 online, upload your documents, and track your application status. The BLO will still visit for physical verification.",

  "What if my address has changed?":
    "If you've moved within the same constituency, fill Form 8A (correction of entries). If you've moved to a new constituency, fill Form 6 for new registration and Form 7 to delete your old entry. Both can be done online.",

  "What are the asset disclosure requirements?":
    "Every candidate must declare all movable and immovable assets, bank balances, investments, and liabilities — for themselves, their spouse, and dependents. This affidavit is public and can be viewed on the EC website.",

  "Can an independent candidate win?":
    "Absolutely! While rare, independent candidates have won elections. In the 2024 elections, several independents won Lok Sabha seats. They can even become kingmakers in hung parliaments by supporting coalition formation.",

  "How are election symbols allotted?":
    "Recognized national and state parties have reserved symbols. Registered unrecognized parties and independents choose from a list of 'free symbols' provided by the EC. The Returning Officer allots symbols to avoid confusion.",

  "What happens if MCC is violated?":
    "The EC can issue warnings, bar candidates from campaigning, or file FIRs. Severe violations can lead to debarment from contesting. The EC's flying squads and surveillance teams actively monitor compliance.",

  "How are campaign finances tracked?":
    "Candidates must maintain daily accounts of all expenses. The EC deploys expenditure observers who monitor spending through video surveillance, income tax teams, and bank account monitoring. Exceeding limits can lead to disqualification.",

  "What is the silence period?":
    "The 48-hour silence period before polling day prohibits all campaigning — rallies, ads, social media posts, even door-to-door visits. This gives voters time to reflect and make informed choices without last-minute influence.",

  "What if my name is missing from the list?":
    "Don't panic! You can file Form 6 for inclusion even close to elections. On polling day, if your name is missing, you may be able to vote using Form 7 (tendered ballot) if you can prove your identity. Contact your BLO immediately.",

  "Can I vote without a voter ID?":
    "Yes! While EPIC is preferred, 12 alternative IDs are accepted, including Aadhaar, Passport, Driving License, PAN Card, and bank passbook with photo. The key is that your name must be on the electoral roll.",

  "What is NOTA?":
    "NOTA (None Of The Above) allows you to reject all candidates. Introduced in 2013 by Supreme Court order, it's the last button on the EVM. While NOTA votes don't currently affect the result, a high NOTA count is a powerful signal of voter dissatisfaction.",

  "How does the First-Past-The-Post system work?":
    "In FPTP, the candidate with the most votes wins — no minimum percentage required. So even with 30% of votes, a candidate can win if all others get less. This system tends to produce decisive results but can mean the 'winner' doesn't represent the majority.",

  "Can EVMs be hacked?":
    "EVMs are standalone devices with no internet/WiFi/Bluetooth connectivity. They use one-time programmable chips that cannot be reprogrammed. The EC conducts rigorous testing and allows 'EVM challenges' to prove their integrity. VVPATs add a paper verification layer.",

  "What happens in case of a tie?":
    "If two candidates get exactly the same number of votes, the Returning Officer decides the winner by drawing lots. While extremely rare, this has happened in Indian elections. The process is fully transparent with all agents present.",

  "What is a vote of no confidence?":
    "Any Lok Sabha member can introduce a no-confidence motion if they have support of 50 members. If the motion passes by simple majority, the government must resign. The PM can also call for a confidence vote proactively.",

  "How are cabinet portfolios decided?":
    "The Prime Minister has the sole discretion to allocate portfolios. Factors include seniority, expertise, regional representation, coalition compulsions, and political considerations. The PM can reshuffle the cabinet at any time.",

  "What powers does the opposition have?":
    "The opposition can question the government, introduce motions, participate in committee work, and demand accountability. The Leader of Opposition is part of selection committees for key appointments like CBI Director and CVC.",
};

// Fallback AI response
function getAIResponse(question) {
  // Check for exact matches first
  if (AI_RESPONSES[question]) {
    return AI_RESPONSES[question];
  }

  // Simple keyword matching for custom questions
  const lower = question.toLowerCase();

  if (lower.includes("register") || lower.includes("registration"))
    return "Voter registration is handled through Form 6, which can be submitted online via nvsp.in or offline at your local Electoral Registration Office. You'll need proof of identity, proof of address, and a passport photo. The BLO will verify your details, and your EPIC card will be issued within 2-4 weeks.";

  if (lower.includes("evm") || lower.includes("machine"))
    return "Electronic Voting Machines (EVMs) are used across India for elections. They're standalone devices with no network connectivity, making them tamper-proof. Each EVM has a control unit (with the presiding officer) and a balloting unit (in the voting compartment). VVPATs provide a paper trail for verification.";

  if (lower.includes("vote") || lower.includes("voting"))
    return "To vote in Indian elections, you need to be registered on the electoral roll and carry a valid photo ID. At the polling booth, your identity is verified, indelible ink is applied to your finger, and you cast your vote on the EVM in a private compartment. The entire process takes 2-3 minutes.";

  if (lower.includes("candidate") || lower.includes("nomination"))
    return "To become a candidate, you must be an Indian citizen, meet the age requirement (25 for Lok Sabha, 30 for Rajya Sabha), and be a registered voter. Filing involves submitting nomination papers, paying a security deposit, and declaring assets and criminal records. The Returning Officer scrutinizes all papers for compliance.";

  if (lower.includes("count") || lower.includes("result"))
    return "After polling, EVMs are stored in secured strong rooms. On counting day, postal ballots are counted first, then EVM results are revealed in rounds. VVPAT slips from 5 random stations per assembly segment are verified. The candidate with the most votes wins under the FPTP system.";

  if (lower.includes("government") || lower.includes("coalition"))
    return "The party or alliance with 272+ Lok Sabha seats forms the government. The President invites the leader to take oath as PM. The new government must prove majority through a floor test. If no clear majority exists, coalition negotiations determine who forms the government.";

  if (lower.includes("campaign") || lower.includes("rally"))
    return "Election campaigns in India are governed by the Model Code of Conduct. Candidates have spending limits (₹95 lakh for Lok Sabha), must pre-certify all political ads, and must stop campaigning 48 hours before polling. The EC monitors compliance through observers and flying squads.";

  return "That's a great question about the Indian electoral process! The Election Commission of India (ECI) oversees all aspects of elections — from voter registration to result declaration. India's democracy is the world's largest, with over 950 million voters. For specific details, I recommend visiting eci.gov.in or the Voter Helpline App.";
}

export { PERSONAS, STAGES, AI_RESPONSES, getAIResponse };
