// ============================================================
// Election Journey — Data Layer  v3.0
// FULLY ROLE-DIFFERENTIATED
//
// Every content block — step titles, step details, quick asks,
// did-you-know facts, subtitles, and forYou insights — is keyed
// by persona. When a user switches role, every word changes.
//
// Roles: voter | returning | candidate | journalist
//
// Usage in render.js:
//   const s = STAGES[state.stage]
//   const steps    = s.steps[state.persona]       // [{main, detail}]
//   const quickAsks= s.quickAsks[state.persona]   // [string]
//   const dyk      = s.didYouKnow[state.persona]  // string
//   const fyi      = s.forYou[state.persona]      // string
//   const title    = s.title[state.persona]       // string
//   const subtitle = s.subtitle[state.persona]    // string
// ============================================================


const PERSONAS = [
    { id: "voter", label: "First-time Voter", icon: "🗳️", color: "#6C63FF", description: "New to elections? Start here." },
    { id: "returning", label: "Returning Voter", icon: "🔄", color: "#3B82F6", description: "You've voted before — go deeper." },
    { id: "candidate", label: "Candidate", icon: "🎤", color: "#FF6B6B", description: "Running for office? Know the rules." },
    { id: "journalist", label: "Journalist", icon: "📰", color: "#FFC107", description: "Cover elections with clarity." },
];


const STAGES = [

    // ── STAGE 1 ── Voter Registration ───────────────────────
    {
        id: 1, icon: "1", label: "Registration", color: "#6C63FF",
        when: "Ongoing — closes weeks before polling",

        title: {
            voter: "How to get on the electoral roll",
            returning: "Keeping your registration current",
            candidate: "Registration rules that affect your race",
            journalist: "How India registers 970 million voters",
        },
        subtitle: {
            voter: "Your gateway to voting",
            returning: "Don't assume — verify",
            candidate: "Your foundation before nomination",
            journalist: "The world's largest civic exercise",
        },

        steps: {
            voter: [
                { main: "Check your eligibility first", detail: "You must be an Indian citizen, at least 18 years old on the qualifying date, and resident in your constituency. If you are 17, you can pre-register — your vote activates on your 18th birthday." },
                { main: "Collect your documents", detail: "You need proof of identity (Aadhaar, Passport, or Driving License), proof of your current address, and one recent passport-size photograph. The address on your document must match where you actually live." },
                { main: "Fill Form 6 — online is fastest", detail: "Go to voters.eci.gov.in or download the Voter Helpline App. Fill Form 6, upload your documents, and submit. You can track your application status on the same portal. The whole process takes 10 minutes." },
                { main: "A Booth Level Officer will visit you", detail: "After you apply, a BLO (government official assigned to your neighbourhood) visits your address to confirm you live there. Be available — if the BLO cannot reach you, your application may be delayed or rejected." },
                { main: "Receive your Voter ID card (EPIC)", detail: "Once approved, your Electors Photo Identity Card is issued. Keep it safe. If you lose it, 12 other photo IDs are accepted at the polling booth — Aadhaar, Passport, PAN, Driving License, and more." },
            ],
            returning: [
                { main: "Verify your registration is still active", detail: "Electoral rolls are revised annually. Voters who have not participated in recent elections or whose address the BLO could not verify may have been quietly deleted. Check voters.eci.gov.in to confirm your name is still there." },
                { main: "Update your address if you have moved", detail: "Moved within the same constituency? File Form 8A. Moved to a new constituency? File Form 6 for new registration and Form 7 to delete your old entry. Both are available online and take 2–4 weeks to process." },
                { main: "Correct errors in your existing entry", detail: "Name spelling mistakes, wrong date of birth, or a missing photo can be corrected using Form 8. Do not wait until election season — corrections take time and the roll locks weeks before polling." },
                { main: "Link your mobile number to your EPIC", detail: "Linking your mobile number means you receive booth information, election date alerts, and roll revision notices directly. Update via the Voter Helpline App or at your local ERO office." },
                { main: "Download your e-EPIC as a digital backup", detail: "The EC now issues a digital Voter ID (e-EPIC) as a downloadable PDF from voters.eci.gov.in. Keep it on your phone as a backup in case your physical card is lost before polling day." },
            ],
            candidate: [
                { main: "Confirm your own registration before anything else", detail: "A candidate must be a registered voter somewhere in India — not necessarily the constituency you contest. Your registration must be active and error-free before you file nomination papers. The Returning Officer checks this first." },
                { main: "Study the constituency roll composition", detail: "The electoral roll determines who can vote for you. Request booth-wise roll data from the ERO. Analyse the demographic composition — age, gender, community distribution — through EC published data. Every campaign decision flows from this." },
                { main: "Monitor roll revisions in your target constituency", detail: "Electoral rolls are revised twice a year. A large influx of new registrations or deletions can swing a close seat. Your party's booth workers must cross-check the roll after every revision and report suspicious bulk changes." },
                { main: "Watch for bogus registrations and targeted deletions", detail: "Electoral fraud sometimes involves bulk registrations of non-existent voters or deletion of genuine voters from rival communities. File RTIs for booth-level data and compare against census population figures if numbers look suspicious." },
                { main: "Run legal voter registration drives in your constituency", detail: "Parties and candidates can legally conduct registration drives to help eligible citizens enroll. This is one of the most effective — and entirely legal — ways to build political goodwill, especially among first-time youth voters." },
            ],
            journalist: [
                { main: "Understand the scale of what you're covering", detail: "India's electoral roll has over 970 million registered voters across 543 Lok Sabha and 4,000+ State Assembly constituencies. It is updated by 800,000+ Booth Level Officers twice a year. This is the foundation of all election coverage." },
                { main: "Track registration trends as engagement indicators", detail: "Year-on-year growth in voter registration — especially 18–19 year olds — is a leading indicator of election enthusiasm. The EC releases constituency-level enrollment data publicly. First-time voter surges have decided multiple recent elections." },
                { main: "Investigate roll manipulation stories", detail: "Bulk deletions, ghost voters, or sudden spikes in new registrations in specific localities are red flags. File RTIs for booth-level data and cross-reference with census population figures. Discrepancies are a story in every election cycle." },
                { main: "Cover the BLO network and its failures", detail: "India's 800,000+ BLOs form one of the largest civic verification systems in the world. Their accuracy — and failures — determines whether legitimate voters are disenfranchised. The human error rate in this system is a consistently underreported story." },
                { main: "Report on the gender and youth registration gap", detail: "India has historically had more men than women registered to vote. The EC runs targeted drives to close this. Tracking the gender gap constituency-by-constituency — and mapping it against women's turnout — makes for powerful data journalism." },
            ],
        },

        forYou: {
            voter: "Registering is the single most important step. Without it, you simply cannot vote. Do it today at voters.eci.gov.in. The process takes 10 minutes online and the BLO visits within 2 weeks.",
            returning: "Don't assume your registration is valid. Electoral rolls are pruned every year. Voters who missed the last election are sometimes deleted. Verify your name right now — not two weeks before polling.",
            candidate: "Your voter registration is the first thing the Returning Officer checks when you file your nomination. An error or deletion here can invalidate your candidacy before the race even begins. Check today.",
            journalist: "India's voter registration system is the world's largest civic administrative exercise — 800,000+ BLOs, twice-yearly revisions, and a roll larger than the entire population of Europe. Start your election coverage here, not on polling day.",
        },

        didYouKnow: {
            voter: "You can register to vote at age 17 — your vote activates on your 18th birthday. You do not need to wait until you turn 18 to start the Form 6 process.",
            returning: "India's electoral roll is revised twice a year using January 1 and July 1 as qualifying dates. Voters who haven't participated in recent elections and couldn't be located by the BLO are routinely deleted — often without notification.",
            candidate: "The 18–29 age group had 96.8 million registered voters in the 2024 Lok Sabha elections — the largest youth voter cohort in Indian history. First-time voter registration drives in marginal seats can change outcomes.",
            journalist: "India has over 970 million registered voters — more than the combined population of the United States and the European Union. The electoral roll is maintained by a network of 800,000+ Booth Level Officers, one per 1,000–1,500 voters.",
        },

        quickAsks: {
            voter: ["How do I register online?", "What documents do I need?", "How long does registration take?"],
            returning: ["How do I check if my name was deleted?", "How do I update my address?", "What is the e-EPIC digital voter ID?"],
            candidate: ["Can I contest a constituency I don't live in?", "How do I get booth-level roll data?", "What is a BLO and what powers do they have?"],
            journalist: ["Where can I get constituency-level enrollment data?", "How are ghost voters detected and removed?", "What is the gender gap in voter registration across India?"],
        },
    },


    // ── STAGE 2 ── Candidate Nomination ─────────────────────
    {
        id: 2, icon: "2", label: "Nominations", color: "#00C9A7",
        when: "2–4 weeks before voting",

        title: {
            voter: "Who gets to stand in your election",
            returning: "How the candidate list is really formed",
            candidate: "Your nomination — step by step",
            journalist: "The nomination phase: where the real story begins",
        },
        subtitle: {
            voter: "Anyone eligible can stand",
            returning: "The affidavit tells all",
            candidate: "One technical error ends your race",
            journalist: "Tickets, rebels, and the real alliance map",
        },

        steps: {
            voter: [
                { main: "Any eligible citizen can stand for election", detail: "Any Indian citizen aged 25 or above (30 for Rajya Sabha) who is a registered voter can contest. They do not need to belong to a political party — independent candidates win regularly. Your ballot may have 10–20 candidates." },
                { main: "Candidates must declare their criminal record publicly", detail: "Every candidate files a sworn affidavit disclosing all pending criminal cases. This is a public document. Go to affidavit.eci.gov.in and look up every candidate in your constituency before deciding who deserves your vote." },
                { main: "Candidates must declare all their wealth", detail: "Assets and liabilities of the candidate, their spouse, and their dependents must all be declared on affidavit — land, property, bank balances, investments, vehicles, and debts. This is public information. Use it." },
                { main: "A final candidate list is published", detail: "After the scrutiny and withdrawal window closes, the Returning Officer publishes the final list of candidates who will appear on the ballot. This is when you find out exactly who you will be choosing between." },
                { main: "Election symbols are assigned to help every voter", detail: "Recognised parties use reserved symbols (the lotus, the hand, the cycle). Independents choose from EC's free symbols list. Symbols help voters who cannot read identify candidates on the EVM — they are not decorative." },
            ],
            returning: [
                { main: "Party ticket allocation is internal politics made visible", detail: "Which candidate gets a party ticket is decided internally — often by the national high command for Lok Sabha seats. Candidates denied tickets who stand as rebels are a key dynamic. Follow who filed and who withdrew to map the real internal power structure." },
                { main: "Compare affidavits across elections", detail: "EC archives every affidavit from 2004 onwards at affidavit.eci.gov.in. Compare a candidate's declared wealth in 2019 vs 2024. The Association for Democratic Reforms publishes easy summaries. Unexplained growth is a legitimate question." },
                { main: "Understand the security deposit and what forfeiture means", detail: "Every candidate pays ₹25,000 for Lok Sabha (₹12,500 for SC/ST). If they fail to get more than 1/6th of valid votes, the deposit is forfeited. Counting deposits forfeited after results tells you how fragmented the vote actually was." },
                { main: "The withdrawal deadline reveals alliance architecture", detail: "The 2-day withdrawal window after scrutiny is when coalition deals finalise. Candidates from allied parties who withdraw to consolidate votes behind a common candidate reveal seat-sharing arrangements that were never publicly announced." },
                { main: "Candidate count shapes the competitive nature of a seat", detail: "A crowded field (10+ candidates) benefits the front-runner under First-Past-The-Post because votes split. A clean two-way contest is genuinely competitive. The final candidate count is the quickest proxy for how tight a seat actually is." },
            ],
            candidate: [
                { main: "Confirm your full eligibility before spending anything", detail: "You must be an Indian citizen, at least 25 years old, a registered voter anywhere in India, not hold an office of profit, not be an undischarged insolvent, and not have been convicted of an offence carrying 2+ years imprisonment. Confirm every point before spending a rupee." },
                { main: "File multiple nomination sets — this is not optional", detail: "File at least 2–3 sets of nomination papers as insurance. The Returning Officer scrutinises every paper and can reject on technical grounds — a missing signature, wrong date, ineligible proposer. One clerical error in one set can end your candidacy." },
                { main: "Your affidavit is your most legally exposed document", detail: "Every asset, every pending case, every family member's property must be declared accurately. False declarations are a criminal offence under Section 125A of the Representation of the People Act. Opponents and journalists will scrutinise every line the moment it is filed." },
                { main: "Pay your security deposit by bank draft — not cash", detail: "₹25,000 for Lok Sabha (₹12,500 for SC/ST). Cash is not accepted — use a bank draft or government treasury receipt. Budget for losing this deposit if it is your first contest in a competitive seat where you may not reach 1/6th of votes." },
                { main: "Train your agents on your election symbol immediately", detail: "The moment the final candidate list is published, your symbol is assigned. Rural voters often identify candidates by symbol rather than name on the EVM. Begin symbol recognition training with your booth workers the same day your symbol is confirmed." },
            ],
            journalist: [
                { main: "The nomination phase is richer than polling day", detail: "Who gets a party ticket, who is denied and turns rebel, which alliances form or collapse, which sitting MPs are dropped — all of this happens in the nomination window. This phase has more information density than any other period in the election." },
                { main: "Read every affidavit — it is gold", detail: "Affidavits are published at affidavit.eci.gov.in the same day they are filed. Asset comparisons across elections, undisclosed criminal cases, and educational qualification claims are investigatable leads hiding in plain public view." },
                { main: "Track security deposit forfeitures after results", detail: "After results, the list of candidates who forfeited their deposit (got less than 1/6th of votes) reveals how fragmented the vote was and which parties ran token candidates. It is an underreported dataset that reveals real electoral geography." },
                { main: "Cover nomination rejections as news", detail: "Rejections must be justified in writing by the Returning Officer. Controversial rejections — where a strong candidate's papers are rejected on technical grounds — are legally challengeable and often the most significant story in that constituency." },
                { main: "Map alliance architecture through withdrawal patterns", detail: "Who withdraws on the last day reveals seat-sharing deals never publicly announced. Cross-reference withdrawal lists against party membership across all contested constituencies to map the real alliance structure versus the stated one." },
            ],
        },

        forYou: {
            voter: "Every candidate's criminal record and wealth declaration is public at affidavit.eci.gov.in. Look up your constituency's candidates now. This is the most powerful research tool a voter has — and most voters never use it.",
            returning: "Compare this election's candidate affidavits against 2019 on adrindia.org. The ADR publishes side-by-side comparisons. Unexplained asset growth is a legitimate question to raise publicly — these are sworn legal documents.",
            candidate: "File three nomination sets. Arrive early on nomination day. Have your proposer's voter ID verified in advance. One technical error in one document can end your candidacy before the race begins — no sympathy, no extensions.",
            journalist: "File an RTI for every rejected nomination in your focus constituencies. Rejections framed as technical but appearing political are the most important story in this phase — and the most undercovered.",
        },

        didYouKnow: {
            voter: "In 2024, over 8,300 candidates contested 543 Lok Sabha seats — an average of 15 per seat. In a crowded race, a candidate can win with as little as 20–25% of the vote under India's First-Past-The-Post system.",
            returning: "The mandatory criminal and asset disclosure requirement was introduced by a 2002 Supreme Court order — not by Parliament. Lawmakers tried repeatedly to dilute it. The Court rejected every attempt.",
            candidate: "More than 600 nomination papers were rejected during scrutiny in the 2024 Lok Sabha elections — almost all for incorrect or incomplete paperwork. Filing multiple nomination sets is the only protection against this.",
            journalist: "The Association for Democratic Reforms has analysed every candidate affidavit since 2004. Their database is one of the most comprehensive and underused investigative resources in Indian political journalism.",
        },

        quickAsks: {
            voter: ["How do I look up a candidate's criminal record?", "What is in a candidate's affidavit?", "Can an independent candidate actually win?"],
            returning: ["How do I compare a candidate's wealth across elections?", "What does forfeiting the security deposit reveal?", "Who decides which candidate gets a party ticket?"],
            candidate: ["What exactly disqualifies a candidate from contesting?", "Can I contest from any constituency in India?", "What happens if my nomination papers are rejected?"],
            journalist: ["Where are nomination affidavits published and when?", "How do I investigate a false asset declaration?", "What is the withdrawal window and why does it matter strategically?"],
        },
    },


    // ── STAGE 3 ── Campaign Period ───────────────────────────
    {
        id: 3, icon: "3", label: "Campaign", color: "#FF6B6B",
        when: "Final list published to 48 hrs before poll",

        title: {
            voter: "How to cut through the campaign noise",
            returning: "What campaigns are and aren't allowed to do",
            candidate: "Running a legal, effective campaign",
            journalist: "Covering the campaign — money, rules, and access",
        },
        subtitle: {
            voter: "Information overload is the real challenge",
            returning: "The MCC is the referees' rulebook",
            candidate: "Every rupee must be documented",
            journalist: "Follow the money, not the rally",
        },

        steps: {
            voter: [
                { main: "You will be targeted with a lot of misleading information", detail: "During a campaign you receive WhatsApp forwards, social media ads, pamphlets, and robocalls from all sides. Use the EC's fact-check portal and established news organisations to verify claims before believing or sharing them." },
                { main: "Attend a public meeting if you can", detail: "Rallies and town halls are where candidates speak directly and take questions. Attending at least one event per major candidate gives you a direct sense of their communication, their promises, and — crucially — the questions they avoid." },
                { main: "Read the party manifestos — they are your benchmark", detail: "Every major party releases a formal manifesto of policy promises. They are not legally binding, but comparing what was promised in the last election versus what was delivered is the most legitimate basis for your voting decision." },
                { main: "The silence period gives you space to decide", detail: "All campaigning stops 48 hours before your polling booth opens. No rallies, ads, or social media canvassing. Use this period to make your final decision without new information being thrown at you — that is the law's intention." },
                { main: "Do not accept gifts or money from candidates", detail: "Accepting cash, liquor, or gifts in exchange for your vote is an electoral offence — for both giver and receiver. Report it on the EC's cVIGIL app anonymously. Flying squads must respond within 100 minutes." },
            ],
            returning: [
                { main: "The Model Code of Conduct restricts the ruling government", detail: "From the announcement day, the ruling government cannot announce new schemes, make appointments, or use government vehicles for political advantage. Violations can be reported to EC observers who are deployed in every constituency." },
                { main: "Campaign spending limits are strict — and routinely gamed", detail: "Lok Sabha candidates are capped at ₹95 lakh. Actual spending by major party candidates routinely exceeds this — the cap applies to declared expenses only. Understanding this gap is central to understanding how Indian elections actually work." },
                { main: "All political advertisements require pre-certification", detail: "TV, radio, and print political ads must be pre-approved by the Media Certification and Monitoring Committee (MCMC) before airing. Social media largely escapes this net — which is why online disinformation is now the primary concern." },
                { main: "Match promises against the previous term's record", detail: "The most useful thing a returning voter does during the campaign is compare this election's promises with last election's promises and what was actually delivered. PRS India tracks legislative performance constituency-by-constituency." },
                { main: "Use cVIGIL to report violations in real time", detail: "The EC's cVIGIL app lets you report MCC violations with geotagged photo or video. Reports must be acted on within 100 minutes by flying squads. It is one of the most effective citizen enforcement tools in any democracy in the world." },
            ],
            candidate: [
                { main: "Appoint a campaign expenditure agent on Day 1", detail: "Every campaign expense — banners, vehicles, food at rallies, social media ads, fuel — must be logged with date, amount, and purpose. Sloppy accounts are the most common reason successful candidates face post-election disqualification proceedings." },
                { main: "Know exactly what the Model Code allows and prohibits", detail: "You cannot use government vehicles, staff, or buildings for campaign purposes. You cannot make appeals based on religion, caste, or community. You cannot distribute cash or gifts. Violations result in EC notices, FIRs, and in severe cases debarment." },
                { main: "Pre-certify every advertisement before it airs", detail: "Every paid political ad — TV, radio, print, large hoardings — requires pre-approval from the district MCMC. Apply early; the committee has a queue. Unapproved ads are taken down and you receive a formal notice that creates a paper trail against you." },
                { main: "Your social media is monitored — treat it as a broadcast", detail: "The EC's Social Media Monitoring Cells track your accounts. Paid promotions on Facebook and Google are subject to the same pre-certification rules as traditional ads. Assign a team member to manage digital compliance daily throughout the campaign." },
                { main: "Calculate your silence period deadline precisely", detail: "At exactly 48 hours before your constituency's polling start time, all campaigning must cease — rallies, WhatsApp messages, social media posts, door-to-door visits. Calculate this moment exactly and communicate it to your entire team in advance." },
            ],
            journalist: [
                { main: "Follow the money — campaign finance is the story", detail: "Track EC expenditure observers, income tax cash seizures, and flying squad activity in your focus constituencies. The EC publishes daily seizure data by district. Mapping seizures against constituency competitiveness is one of the most data-rich angles available." },
                { main: "Cover MCC violations as a running story", detail: "The EC's MCC tracker publishes every notice issued to parties and candidates. These are public documents. A cluster of violations from one party or constituency reveals where the most competitive — and most lawless — races are happening." },
                { main: "Investigate the gap between declared and actual spending", detail: "Declared spending is designed to fall below the legal limit. Research estimates actual spending at 3–5x the declared amount. The mechanics of how money moves through shell organisations, contractors, and cash is the investigation every election needs and few deliver." },
                { main: "Report on silence period enforcement on digital platforms", detail: "The 48-hour silence period was designed before social media existed. The EC's ability to enforce it on WhatsApp, Instagram, and YouTube is limited and inconsistent. This structural gap between old rules and new media is the defining campaign regulatory story." },
                { main: "Use cVIGIL data for data journalism", detail: "The EC releases aggregate cVIGIL complaint data by constituency and category. High complaint density in specific areas is a proxy for competitive seat intensity and MCC violation hotspots — a story available to anyone willing to request the data." },
            ],
        },

        forYou: {
            voter: "You will be overwhelmed with information in the next few weeks. Pick 2–3 sources you trust and stick with them. The EC's cVIGIL app lets you report cash or gift distribution anonymously with a photo — enforcement must respond in 100 minutes.",
            returning: "The gap between a candidate's previous promises and their actual record is your most powerful voting tool. PRS India tracks every MP's attendance, questions asked, and bills supported — look up your sitting MP right now, before the campaign noise takes over.",
            candidate: "Campaign finance is where most winning candidates get tripped up. The spending limit is absolute — not a guideline. A single disqualification petition filed by your opponent in the High Court can undo your election victory on financial grounds alone.",
            journalist: "The EC publishes daily cash and liquor seizure data by district during elections. Mapping these seizures against constituency competitiveness is one of the most data-rich investigative angles in election journalism — and almost no one covers it systematically.",
        },

        didYouKnow: {
            voter: "The EC's cVIGIL app received over 2 million complaints during the 2024 general election campaign period — with a mandated 100-minute flying squad response time. It is one of the world's most responsive election complaint mechanisms.",
            returning: "The Model Code of Conduct has no statutory basis — it is not a law passed by Parliament. Its entire authority rests on the EC's constitutional standing and the threat of enforcement action. It works because candidates fear the EC, not because they could go to jail for violations.",
            candidate: "India's 2024 elections saw total campaign seizures of over ₹9,900 crore in cash, liquor, drugs, and freebies — a record, and approximately 10x the amount seized in the 2014 elections.",
            journalist: "India's 2024 elections are estimated to have cost ₹1.35 lakh crore in total campaign expenditure — making it the most expensive election in world history, exceeding US presidential campaign costs.",
        },

        quickAsks: {
            voter: ["How do I report vote buying?", "Where can I fact-check election claims?", "What are parties legally bound to deliver from their manifesto?"],
            returning: ["What is the cVIGIL app and how does it work?", "How do I check my MP's track record?", "What is the government restricted from doing during campaign period?"],
            candidate: ["What exactly counts as a campaign expense?", "How do I pre-certify a social media advertisement?", "What is the penalty for exceeding the spending limit?"],
            journalist: ["Where does the EC publish daily MCC violation data?", "How does campaign finance actually move through the system?", "What is the MCMC and how does advertisement pre-certification work?"],
        },
    },


    // ── STAGE 4 ── Voting Day ────────────────────────────────
    {
        id: 4, icon: "4", label: "Voting day", color: "#3B82F6",
        when: "Polling day — 7 AM to 6 PM",

        title: {
            voter: "What happens when you walk into the booth",
            returning: "Voting day — what's changed and what to watch",
            candidate: "Managing your booth network on polling day",
            journalist: "Reporting polling day — access, data, and incidents",
        },
        subtitle: {
            voter: "Under 3 minutes, for 5 years of power",
            returning: "The VVPAT changes everything",
            candidate: "Your agents are your eyes and ears",
            journalist: "Turnout is the day's running story",
        },

        steps: {
            voter: [
                { main: "Know your polling booth before the day", detail: "Your booth address is on your Voter Information Slip, delivered by your BLO before polling day. Also available on the Voter Helpline App. Know exactly where to go before election morning — do not look it up on the day when networks are overloaded." },
                { main: "Arrive at 7 AM — the first hour is the quietest", detail: "Booths open at 7 AM sharp. The first hour almost always has the shortest queues. Arriving at opening time means you vote and leave in under 15 minutes. Midday queues at popular booths can mean a 45-minute wait or more." },
                { main: "Carry any one valid photo ID", detail: "Your EPIC Voter ID is preferred. If you lost it, 12 alternatives are accepted: Aadhaar, Passport, Driving License, PAN card, MNREGA job card, bank passbook with photo, and more. Your name must be on the electoral roll — the ID is just for identity verification." },
                { main: "Vote privately on the EVM — it is completely secret", detail: "You enter a screened compartment alone. Press the button next to your chosen candidate. A beep confirms your vote. The VVPAT machine shows a paper slip of your choice for 7 seconds — check it matches what you intended. Nobody can see or change your vote." },
                { main: "The indelible ink is your proof of voting", detail: "Ink is applied to your left index finger before you leave. It stays for 2–3 weeks and prevents double-voting. If someone tries to get you to vote again after this, it is a serious electoral offence — report it to the Presiding Officer immediately." },
            ],
            returning: [
                { main: "Verify your polling booth has not moved", detail: "Booth addresses change between elections due to voter redistribution. Do not assume your 2019 booth is the same in 2024. Verify your assigned booth on the Voter Helpline App or your Voter Information Slip before polling day." },
                { main: "The VVPAT is mandatory — use it actively", detail: "Since 2019 every EVM is paired with a VVPAT printer. After you vote, a paper slip showing your candidate's name and symbol appears for 7 seconds. Look at it. If it does not match what you pressed, alert the Presiding Officer before leaving the compartment." },
                { main: "You have the right to challenge impersonation", detail: "If you arrive and are told someone has already voted in your name, you have the right to file a written complaint with the Presiding Officer on the spot. They must record it formally. Do not simply leave — your vote was stolen and you have legal options." },
                { main: "NOTA is a legitimate choice — not a wasted vote", detail: "If no candidate meets your standard, NOTA (None Of The Above) is the last button on every EVM. It has been mandatory since a 2013 Supreme Court order. A high NOTA count sends a public signal of voter dissatisfaction that political parties take seriously." },
                { main: "Track live turnout data on election day", detail: "The EC's Voter Turnout App updates constituency-level turnout roughly every 2 hours on polling day. Comparing live figures against 2019 historical data gives you a real-time read on which communities are mobilised — and which are staying home." },
            ],
            candidate: [
                { main: "Your polling agents are your most critical asset today", detail: "Every booth must have your trained agent present from 7 AM to close. They can observe the entire process, challenge impersonation attempts, and must report irregularities in writing to the Presiding Officer — not on social media first." },
                { main: "Set up a booth-wise reporting system before dawn", detail: "Establish a communication structure where every booth agent reports turnout numbers to a central coordinator every 2 hours. Real-time booth-wise turnout data tells you exactly which areas need voter mobilisation and where your support is dropping." },
                { main: "Transport for voters is permitted — if done equally", detail: "Arranging transport for voters is allowed, but only if you provide it to all voters regardless of who they intend to vote for. Providing partisan transport only for your supporters violates the MCC. Document every vehicle deployed with timestamps." },
                { main: "Do not enter the 100-metre exclusion zone", detail: "Candidates are prohibited from coming within 100 metres of a polling booth on polling day. No campaigning, no canvassing, not even standing nearby. Violations are grounds for an immediate FIR. Your agent represents you inside the process." },
                { main: "Every complaint your agent files must be in writing", detail: "Any irregularity your polling agent observes must be logged in the booth's complaint register with a signed entry. Verbal complaints without written records are legally worthless. This paper trail is essential if you challenge the result later." },
            ],
            journalist: [
                { main: "Know your access rights before you arrive", detail: "Accredited journalists can be present at polling booths but cannot enter the voting compartment or the 100-metre exclusion zone. EC media passes define exactly where you can go. Obtain accreditation from the EC Media Cell before polling day — walk-in access is not guaranteed." },
                { main: "Hourly turnout data is your analytical backbone", detail: "The EC's Voter Turnout App updates every 2 hours on polling day. Comparing real-time figures against 2019 booth-by-booth data reveals which communities are mobilised. This is the most data-rich thing you can do on polling day and requires no special access." },
                { main: "Document booth capturing and intimidation incidents precisely", detail: "Booth capturing — forcibly taking over a polling station — is a serious electoral offence. If you witness or receive credible reports, document with video, get an official statement from the Returning Officer, and report to the EC before publishing. Speed matters but accuracy more so." },
                { main: "Exit poll publication rules are strict", detail: "Exit polls cannot be published until all election phases are complete and the last booth has closed. Publishing early is a legal violation. More importantly, exit polls in India have had significant historical inaccuracies — always flag their limitations prominently in your reporting." },
                { main: "File the accessibility story every cycle", detail: "Every polling station is legally required to have ramp access, drinking water, shade, and separate queues for women and elderly voters. Whether these requirements are actually met is a consistently reportable story that reveals the gap between EC policy and ground reality." },
            ],
        },

        forYou: {
            voter: "The entire voting process — check-in, voting, ink — takes under 3 minutes once you reach the front. Arrive at 7 AM, carry one photo ID, and check the VVPAT paper slip for 7 seconds before leaving the compartment.",
            returning: "If someone has already voted in your name, do not leave the booth — file a written complaint with the Presiding Officer on the spot. You have the legal right to a tendered ballot. Leaving without documenting this forfeits your ability to challenge it later.",
            candidate: "Your polling agents have more legal power than most candidates use. They can formally challenge a voter's identity, demand that complaints be entered in the register, and request that any EVM showing signs of malfunction be replaced. Train them to use every tool — not just observe.",
            journalist: "The EC's Voter Turnout App is publicly accessible and updates every 2 hours. Comparing live turnout against historical booth-by-booth figures is the most data-rich thing you can do on polling day and requires no special access or official sources.",
        },

        didYouKnow: {
            voter: "Indelible ink for Indian elections has been made exclusively by Mysore Paints and Varnish Ltd — a government company — since 1962. Over 26 million vials have been supplied across all elections. It cannot be removed for 2–3 weeks by any household chemical.",
            returning: "India deployed 5.5 million EVMs and VVPATs across 1.04 million polling stations in 2024. The logistics of transporting, testing, deploying, and retrieving these machines takes several weeks of military-level planning.",
            candidate: "A candidate can be disqualified post-election if their polling agent is found to have committed a corrupt practice — even if the candidate was personally uninvolved. You are legally responsible for your agents' conduct throughout polling day.",
            journalist: "The 2024 Lok Sabha election recorded 65.8% turnout — representing over 640 million actual votes cast. It is the largest democratic exercise in human history, exceeding the combined voter participation of the US, UK, Germany, and France.",
        },

        quickAsks: {
            voter: ["What do I do if my name is missing at the booth?", "Can I vote without my voter ID card?", "What is NOTA and does it count?"],
            returning: ["What changed about VVPAT verification rules since 2019?", "Can I track live voter turnout on election day?", "What is a tendered ballot?"],
            candidate: ["What can my polling agent legally challenge?", "How close to the booth can I go on polling day?", "What exactly is the 100-metre exclusion zone?"],
            journalist: ["How do I get EC media accreditation for polling day?", "When can exit polls legally be published?", "Where can I access live constituency turnout data?"],
        },
    },


    // ── STAGE 5 ── Counting & Results ────────────────────────
    {
        id: 5, icon: "5", label: "Counting", color: "#8B5CF6",
        when: "Results day — usually 8 AM onwards",

        title: {
            voter: "How your vote gets counted",
            returning: "What counting day actually looks like",
            candidate: "Protecting your result through the count",
            journalist: "Reporting counting day — the marathon you cannot get wrong",
        },
        subtitle: {
            voter: "Rounds, rounds, rounds",
            returning: "Postal ballots can reverse everything",
            candidate: "Agent fatigue is your biggest risk",
            journalist: "Verify before you broadcast",
        },

        steps: {
            voter: [
                { main: "Your EVM is sealed and moved to a strong room", detail: "After the last vote, the EVM is sealed in the presence of candidates' agents, tagged, logged, and transported under armed escort to a designated strong room with 24/7 CCTV. It stays there until counting day — typically days or weeks later." },
                { main: "Counting happens at a central counting centre", detail: "All EVMs from multiple booths are brought to one counting centre per constituency. The entire count happens in one place with all candidates' agents present throughout. You can follow live updates on results.eci.gov.in." },
                { main: "Results come in multiple rounds", detail: "Counting proceeds in rounds, each covering a batch of booths. Cumulative totals are announced after each round. A candidate leading after round 2 may trail after round 8. Do not treat early rounds as final — dramatic reversals happen regularly." },
                { main: "Postal ballots are counted before EVMs", detail: "Votes cast by post — from military personnel, paramilitary, and government staff posted away from home — are counted before EVM results begin. In close contests, postal ballots have reversed what looked like certain leads." },
                { main: "The winner is declared on Form 20", detail: "The candidate with the most votes wins — no minimum percentage required. The Returning Officer prepares Form 20 (the official result sheet), signs it in the presence of all agents, and declares the result. This signed document is the legal proof of the election outcome." },
            ],
            returning: [
                { main: "Strong room security can be observed by candidates' agents", detail: "Between polling and counting, EVMs are stored in sealed strong rooms with round-the-clock armed guard, CCTV, and candidates' agents permitted to observe from outside. If you have concerns about integrity, agents can request to inspect the seals at any time." },
                { main: "Postal ballots have decided close elections", detail: "Postal ballot counting begins before EVMs and can establish early leads that EVM rounds reverse — or confirm. In 2019, several Lok Sabha seats changed hands once postal ballots were tallied. Never call a close result until all postal ballots are counted." },
                { main: "VVPAT verification is now mandatory", detail: "Five randomly selected polling stations per assembly segment undergo mandatory VVPAT paper slip verification. The paper count must match the EVM tally exactly. Any discrepancy triggers a formal investigation before results can be declared." },
                { main: "Thin margins mean legal vulnerability", detail: "Under FPTP, a win is a win whether by 500 votes or 500,000. But results won by less than 1,000 votes face the highest rate of post-election High Court petitions. Historically, the tightest margins generate the most litigation." },
                { main: "A recount can be requested before declaration", detail: "Any candidate can formally request a recount before Form 20 is signed. The Returning Officer can grant or deny it. If granted, it happens in the presence of all agents. This request must be made on the counting floor — not after you leave the centre." },
            ],
            candidate: [
                { main: "Your counting agent is your legal representative at the table", detail: "Counting agents sit at the counting tables watching every ballot group tallied. They can challenge any vote they believe is invalid and ask for it to be set aside for the Returning Officer's decision. Train them specifically the night before — they must know what to challenge and the exact procedure." },
                { main: "Counting is 12+ hours — agent fatigue is your biggest risk", detail: "Counting days are exhausting. Agents who are tired stop challenging suspicious tallies. Rotate agents in shifts if the rules permit. Provide food and water on site. Most counting irregularities — and fraud — happen in the final rounds when vigilance drops." },
                { main: "Know the VVPAT discrepancy rule precisely", detail: "If there is a discrepancy between EVM results and VVPAT slips in the mandatory 5-station check, the VVPAT count takes precedence by EC rules. Know this — if a discrepancy is dismissed without investigation, that is grounds for a legal challenge in the High Court." },
                { main: "Request a recount before Form 20 is signed", detail: "Once Form 20 is signed and the result declared, your options narrow to a High Court election petition within 45 days — expensive and slow. A recount request on the floor before declaration is faster, cheaper, and more likely to be granted. Know exactly when and how to make this call." },
                { main: "File election expenses within 30 days regardless of outcome", detail: "Win or lose, you must submit a complete account of all campaign expenses to the Returning Officer within 30 days of the declaration. Failure to file is an electoral offence. It can result in disqualification from future elections — the win means nothing if you are disqualified from sitting." },
            ],
            journalist: [
                { main: "Counting day is a marathon — pace your coverage", detail: "Results for all 543 seats come in over 8–12 hours. The instinct to call the overall result early is dangerous. Late phases and postal ballot tallies have reversed apparent majorities multiple times in Indian election history. Never declare an overall winner before at least 400 seats are declared." },
                { main: "Cover postal ballot counting first for context", detail: "Postal ballots are counted before EVMs and disproportionately represent military, paramilitary, and government employee votes — a specific demographic with historically distinct voting patterns. Reporting postal ballot trends early gives essential context to the EVM results that follow." },
                { main: "Build your infrastructure around the EC's results portal", detail: "results.eci.gov.in publishes constituency-level round-by-round results in near real-time as they are transmitted from counting centres. Build your data infrastructure around this portal before counting day. It is the fastest authoritative source — faster than party spokespersons." },
                { main: "Verify before you broadcast — the pressure is enormous", detail: "Breaking the first constituency result creates pressure that has caused major errors in every election cycle. Never broadcast a result until it appears confirmed on the EC portal or via the Returning Officer's official declaration. Exit polls and partial counts have been wrong repeatedly." },
                { main: "Report the margin — not just the winner", detail: "The margin of victory is as important as the result itself. A 500-vote margin is legally vulnerable and signals a competitive seat for the next cycle. A 50,000-vote win is a safe seat. Mapping margins across all 543 constituencies tells the deeper story of how genuinely competitive Indian democracy is." },
            ],
        },

        forYou: {
            voter: "Watch results at results.eci.gov.in — it updates constituency by constituency as each round is counted. Dramatic reversals in early rounds are common. Do not treat a lead after 3 rounds as a final result — wait for all rounds and postal ballots.",
            returning: "Postal ballots are counted before EVMs and can reverse clear leads. In 2019, at least 4 Lok Sabha seats changed hands once postal ballots were added to EVM counts. Never call a tight race until counting is fully complete.",
            candidate: "The most important thing you can do on counting day is keep your agents alert, fed, and communicating with you through every round. Fatigue in the final rounds is where errors and irregularities slip through unchallenged — and where results are stolen.",
            journalist: "The EC's results portal (results.eci.gov.in) is the fastest authoritative source on counting day. Build your data pipeline around it before the day starts. Do not rely on party spokesperson claims — verify every number independently before reporting it.",
        },

        didYouKnow: {
            voter: "All 543 Lok Sabha results in 2024 were declared on a single day — involving hundreds of counting centres, thousands of officers, and billions of individual votes being tallied simultaneously across the length and breadth of India.",
            returning: "India's First-Past-The-Post system means a candidate can win with as little as 22% of the vote in a crowded field. In 2024, several constituency winners were elected with less than one-quarter of total votes cast in their seat.",
            candidate: "Over 1,200 election petitions have been filed in Indian High Courts challenging Lok Sabha results since 2004. The most common grounds are corrupt practices, MCC violations, and counting irregularities — the exact areas your counting agents are responsible for documenting.",
            journalist: "The EC's results portal received over 18 million simultaneous users on 2024 results day — more concurrent traffic than most major streaming platforms on their biggest nights. It remains the world's most-watched real-time democratic data feed.",
        },

        quickAsks: {
            voter: ["How do I watch live counting results?", "What are postal ballots and why do they matter?", "How does First-Past-The-Post actually decide a winner?"],
            returning: ["Can a result be challenged after formal declaration?", "What happens in a mandatory VVPAT verification round?", "What happens if two candidates tie with exactly the same votes?"],
            candidate: ["When exactly can I formally request a recount?", "What happens if the VVPAT and EVM counts don't match?", "How do I file a High Court election petition?"],
            journalist: ["Where is official results data published fastest?", "What are the rules on calling an overall majority on air?", "How do I report a margin that triggers a legal recount request?"],
        },
    },


    // ── STAGE 6 ── Government Formation ─────────────────────
    {
        id: 6, icon: "6", label: "Results", color: "#F59E0B",
        when: "Results day and beyond",

        title: {
            voter: "What your vote actually created",
            returning: "How results become a government",
            candidate: "After the result — what comes next",
            journalist: "Government formation — the story after the story",
        },
        subtitle: {
            voter: "The election was the beginning",
            returning: "Watch the first 100 days",
            candidate: "Win or lose, your obligations continue",
            journalist: "The five-year story starts now",
        },

        steps: {
            voter: [
                { main: "The party with a majority forms the government", detail: "The party or alliance winning 272 or more of 543 Lok Sabha seats has a majority. The President invites their leader to become Prime Minister. If no one reaches 272, coalition talks begin and the outcome can take days to weeks to resolve." },
                { main: "Your MP and the government take their oath of office", detail: "Every winning MP is sworn in at a Parliament ceremony. The PM and Cabinet take a separate oath administered by the President. The oath commits them to upholding the Constitution and serving the nation — it is a legally binding commitment." },
                { main: "The government must prove its majority in a floor test", detail: "Even after swearing in, the new government must formally prove it has majority support by winning a confidence vote on the Lok Sabha floor. Failure means the government must resign — this is not a formality." },
                { main: "Parliament convenes and governance begins", detail: "Once sworn in, Parliament holds its first session. The President delivers an address outlining the government's agenda. Question Hour, budget debates, and legislation begin — this is where your vote's impact starts to be felt concretely." },
                { main: "Your work as a citizen starts now", detail: "Track your MP's attendance, speeches, and voting record on prsindia.org. Use the RTI Act to demand information from government agencies. Attend gram sabha or ward meetings. The election was the beginning — holding the winner accountable is your ongoing democratic role." },
            ],
            returning: [
                { main: "Coalition negotiations reveal real power", detail: "Post-election coalition building involves negotiation over Cabinet portfolios, policy commitments, and sometimes support payments. The President plays a key constitutional role — they can invite the single largest party, or the leader of the largest pre-election alliance, depending on circumstances." },
                { main: "The floor test is the real moment of truth", detail: "A floor test is a confidence vote in the Lok Sabha. Anti-defection rules restrict MPs from voting against their party line. But independent and small party MPs can swing the result. The floor test is where government formation is confirmed — or collapses." },
                { main: "Portfolio allocation shows real coalition power", detail: "The PM has sole discretion over portfolio allocation. Which coalition partner gets Finance, Home, Defence, and Foreign Affairs reveals the actual power balance — regardless of what was stated in alliance press conferences." },
                { main: "The Leader of the Opposition is constitutionally significant", detail: "If the opposition's largest party holds 55+ seats (10% of the house), their leader is officially recognised as Leader of the Opposition — a position with a formal role in appointing the CBI Director, CVC, and Information Commissioners. This post was vacant for a decade from 2014–2024." },
                { main: "Track the first 100 days against manifesto promises", detail: "The first Budget, first Cabinet decisions, and first major legislation reveal whether the manifesto was genuine policy or campaign theatre. The 100-day mark is the standard accountability benchmark. PRS India tracks legislative delivery against promises." },
            ],
            candidate: [
                { main: "If you won — file your expense account within 30 days", detail: "Winning does not exempt you from filing a complete election expense account with the Returning Officer within 30 days of the result. Failure to file is an electoral offence. It can result in disqualification — even from a seat you legitimately won." },
                { main: "If you lost — analyse your booth-wise result immediately", detail: "Request booth-by-booth result data from the Returning Officer. Understand exactly where you won and lost votes, and by what margins. This data is the blueprint for your next campaign. Every successful second-time candidate studied their first loss in detail." },
                { main: "If you won — constituency work starts before Parliament", detail: "Voter expectations begin the morning after results. Establish a local constituency office, hold public meetings, and set up grievance systems before Parliament's first session. MPs who struggle most are those who disappear to Delhi and neglect the constituency that elected them." },
                { main: "Understand the anti-defection law if you are in a coalition", detail: "The Tenth Schedule of the Constitution prohibits MPs from voting against their party's official position without risking disqualification from Parliament. If you won on a coalition ticket, understand your party and coalition obligations fully before the floor test." },
                { main: "Stay engaged whether you won or lost", detail: "Losing candidates who remain visible — attending party events, contesting local body elections, building grassroots networks — are consistently more successful in future elections than those who disappear between cycles. The next election begins the morning after the last one ends." },
            ],
            journalist: [
                { main: "Government formation is where access journalism pays off", detail: "Coalition negotiations happen in private. The journalists who break the formation story are those with deep sourcing built over years across multiple party leaderships simultaneously. There is no shortcut — trust built before the election is the only currency that works here." },
                { main: "The President's invitation decision is underreported", detail: "When no party has a clear majority, the President's decision on whom to invite to form the government is a significant constitutional act. The criteria used — single largest party vs largest pre-election alliance — has differed across hung Parliament situations and deserves careful legal reporting each time." },
                { main: "The floor test is not a formality — cover it as news", detail: "Floor tests have resulted in government collapses, surprise defections, and dramatic reversals in Indian history. Every whipped vote, every abstention, and every last-minute switch is a story. The floor test is the final act of the election — do not bury it in a paragraph." },
                { main: "Build a public manifesto tracker for the full term", detail: "Match every manifesto commitment to a policy outcome and update it quarterly for the full 5-year term. This is the highest-value accountability journalism you can produce post-election — and it compounds in impact the longer it runs." },
                { main: "The opposition beat is as important as the government beat", detail: "Who becomes Leader of the Opposition, how the shadow cabinet is structured, and whether the opposition can function effectively as a check on power are stories with a 5-year arc. Set up the opposition beat on Day 1 — not when the government does something controversial." },
            ],
        },

        forYou: {
            voter: "Democracy does not end on polling day — it begins. Track your MP on prsindia.org. File RTIs. Attend local body meetings. The election gave you a representative; holding them accountable for the next 5 years is your ongoing democratic job.",
            returning: "The first Budget after a new government is the single most revealing document about whether the manifesto was real. Read it against the specific promises made. The gap between the two is the accountability story that matters for the next 5 years.",
            candidate: "File your expense account within 30 days regardless of the result. Then request your booth-wise data from the Returning Officer. That data is the blueprint for your next campaign — it is the most valuable document you will receive from this entire election.",
            journalist: "Coalition negotiations, the floor test, and the first Cabinet allocation are three separate stories with three separate timelines. The government formation story can run 2–4 weeks after results day. Resource your team accordingly — this is not a 48-hour story.",
        },

        didYouKnow: {
            voter: "India has had 17 Lok Sabhas since independence in 1947. The country has seen over 20 governments at the national level — with several coalitions lasting less than a year. The average full-term government has lasted just under 5 years.",
            returning: "India has been governed by coalition or alliance governments for most of the period since 1989. Only BJP in 2014 and 2019 won a single-party outright majority in over 35 years — making coalition politics the norm, not the exception, in Indian democracy.",
            candidate: "The post of Leader of the Opposition was vacant for an entire decade (2014–2024) because no single opposition party won the required 55 Lok Sabha seats. Key appointment committees operated without a constitutionally mandated opposition voice for 10 consecutive years.",
            journalist: "India has completed 17 peaceful transfers of democratic power since independence — without a single break in constitutional order. The peaceful handover of government from one elected leader to another is rarer globally than most people assume.",
        },

        quickAsks: {
            voter: ["How do I hold my elected MP accountable?", "What is a floor test and why does it matter?", "What does the opposition actually do in Parliament?"],
            returning: ["How are Cabinet portfolios decided in a coalition?", "What is the anti-defection law?", "How do I track government promises versus actual delivery?"],
            candidate: ["What is the exact deadline to file election expenses?", "Where do I get my booth-wise result data?", "What does the anti-defection law mean for me as a coalition MP?"],
            journalist: ["How does the President decide who to invite to form government?", "Where can I access public manifesto tracking data?", "What access do journalists have during coalition negotiations?"],
        },
    },

];


// ------------------------------------------------------------
// AI CONFIGURATION
// Used by ai.js to build the system prompt per API call.
// ------------------------------------------------------------

const PERSONA_LABELS = {
    voter: "a first-time voter participating in their very first election",
    returning: "a returning voter who has voted before and wants deeper understanding",
    candidate: "an aspiring political candidate preparing to contest an election",
    journalist: "a journalist covering Indian elections and democratic processes",
};

function buildSystemPrompt(stageIndex, personaId) {
    const stage = STAGES[stageIndex];
    const label = PERSONA_LABELS[personaId] || PERSONA_LABELS.voter;
    const steps = stage.steps[personaId] || stage.steps.voter;
    const fyi = stage.forYou[personaId] || stage.forYou.voter;
    const title = stage.title[personaId] || stage.title.voter;
    const ctx = steps.map(s => `${s.main}: ${s.detail}`).join(" | ");

    return `You are a friendly, expert guide to Indian elections and the democratic process.
The user is ${label}.
They are currently on Stage ${stage.id}: "${title}" (${stage.when}).
Their personalised guidance for this stage is: "${fyi}"
Answer concisely in 2–4 sentences. Define any technical term you use.
Be nonpartisan, civic, and accurate. Tailor every answer to their specific role as ${label}.
Do NOT give generic answers — always relate your response to what matters for this specific role.
Stage context: ${ctx}`;
}


// ------------------------------------------------------------
// FALLBACK RESPONSES — used only when Anthropic API is down
// ------------------------------------------------------------

function getFallbackResponse(question, personaId) {
    const q = question.toLowerCase();
    const role = personaId || "voter";

    const fallbacks = {
        voter: {
            register: "Register at voters.eci.gov.in using Form 6. You need a photo ID and address proof. A BLO verifies your address in person within a few weeks. Your EPIC card arrives after approval.",
            evm: "EVMs are secure standalone voting machines with no internet connection. You press the button next to your candidate, a beep confirms your vote, and the VVPAT shows a paper confirmation slip for 7 seconds.",
            vote: "Arrive at your assigned booth with any valid photo ID. Your identity is verified, indelible ink marks your finger, and you vote privately in the screened compartment. The whole process takes under 3 minutes.",
            default: "The Election Commission of India oversees the entire election process from voter registration to government formation. Visit eci.gov.in or call the voter helpline 1950 for official guidance tailored to your situation.",
        },
        returning: {
            register: "Check your registration at voters.eci.gov.in — rolls are pruned annually and you may have been deleted if you missed previous elections. Update your address using Form 8A (same constituency) or Form 6 plus Form 7 (new constituency).",
            evm: "EVMs are paired with VVPATs since 2019 — every vote generates a paper slip visible for 7 seconds. Five VVPAT boxes per assembly segment are mandatorily verified against the EVM count as a cross-check mechanism.",
            vote: "Verify your polling booth has not changed — booth reassignments happen every cycle. Check your current assigned booth on the Voter Helpline App before polling day. Arrive early; queues build significantly by mid-morning.",
            default: "Much has changed since previous elections — mandatory VVPAT verification, new ID acceptance rules, and the cVIGIL app for real-time violation reporting. Check what's new at eci.gov.in before this cycle.",
        },
        candidate: {
            register: "Your voter registration must be active and error-free before you file nomination papers — the Returning Officer checks this first. Verify at voters.eci.gov.in well before nomination day and correct any errors immediately.",
            evm: "Your polling agents at every booth are your EVM verification mechanism. Train them specifically on the VVPAT process — if a slip doesn't match the button pressed, they must report it to the Presiding Officer in writing immediately, not verbally.",
            vote: "You cannot enter the 100-metre exclusion zone around any polling booth on election day. Your polling agents represent you inside the process. Brief them exhaustively the night before on every challenge procedure and complaint mechanism.",
            default: "The key legal framework governing candidates is the Representation of the People Act 1951 and the EC's conduct instructions. Your election agent and legal team must be across all of it before nomination day — there are no second chances on procedural matters.",
        },
        journalist: {
            register: "Constituency-level enrollment data is publicly available from the EC. Year-on-year registration changes — especially among first-time voters and by demographic group — is one of the most underreported leading indicators of election outcomes.",
            evm: "The EVM integrity debate has significant journalistic history. The EC conducts public EVM challenges and publishes technical specifications. The VVPAT paper trail is the verifiable layer — 5 VVPAT boxes per assembly segment are now mandatorily counted against EVM results.",
            vote: "Access rules for journalists on polling day are strictly defined by EC media accreditation. The Voter Turnout App gives you hourly constituency-level data publicly. Comparing live turnout against historical figures is the most data-rich same-day analytical tool available.",
            default: "The EC publishes enormous amounts of public data — enrollment figures, expenditure disclosures, MCC violation notices, real-time turnout, and candidate affidavits. The best election journalism is almost always built on this public data that everyone has access to but few analyse systematically.",
        },
    };

    const r = fallbacks[role] || fallbacks.voter;
    if (q.includes("register") || q.includes("enrollment") || q.includes("roll")) return r.register;
    if (q.includes("evm") || q.includes("machine") || q.includes("vvpat")) return r.evm;
    if (q.includes("vote") || q.includes("booth") || q.includes("polling")) return r.vote;
    return r.default;
}


// ------------------------------------------------------------
// EXPORTS
// ------------------------------------------------------------

export { PERSONAS, STAGES, PERSONA_LABELS, buildSystemPrompt, getFallbackResponse };