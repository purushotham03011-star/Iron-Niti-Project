// Sakhi Knowledge Base (Strategic Mentor Persona)
const sakhiKnowledge = [
    {
        keywords: ["guilt", "guilty", "sorry", "ambitious", "ambition"],
        response: "That guilt is a byproduct of societal conditioning designed to make you 'balance' instead of 'lead'. In the Iron Lady ecosystem, ambition isn't a fault—it's your greatest asset. Are you ready to develop an unapologetic winning mindset?",
        title: "Mindset Shift"
    },
    {
        keywords: ["program", "difference", "which one", "help me choose", "level"],
        response: "It depends on your current 'battlefield.' If you're navigating office politics, Leadership Essentials is your best start. If you are aiming for the C-Suite and a ₹1 Crore+ salary, our Master of Business Warfare is the strategic choice. Where are you in your career journey right now?",
        title: "Strategic Choice"
    },
    {
        keywords: ["who", "founder", "behind", "rajesh", "suvarna", "simon"],
        response: "Our leadership includes visionaries like Rajesh Bhat (Founder) and Suvarna Hegde (CEO), along with global experts like Simon Newman (former CEO of Aviva). They bring real-world 'Business War' tactics to help you win.",
        title: "Iron Leadership"
    },
    {
        keywords: ["struggle", "balancing", "difficult", "hard", "work home"],
        response: "Struggling or 'balancing' is a sign your current tactics are outdated. You need to shift to 'Strategic Winning'. Our programs teach you the Iron Protocol to dominate the workplace without sacrifice.",
        title: "Strategic Winning"
    },
    {
        keywords: ["leadership", "essentials", "pitching"],
        response: "Leadership Essentials focus on Shameless Pitching and mastering office politics. It's the baseline for any aspiring woman leader who wants to be seen and heard.",
        title: "Leadership Essentials"
    },
    {
        keywords: ["business warfare", "crore", "cxo", "senior"],
        response: "Master of Business Warfare is our elite program for senior professionals and CXOs aiming to reach the ₹1 Crore+ income band through unconventional strategies.",
        title: "Business Warfare"
    }
];

const strategies = [
    "Winning the Business War requires you to stop compromising. Choose strategic dominance.",
    "Shameless Pitching is not arrogance; it is the Iron Protocol for visibility.",
    "Breakthrough Growth happens when you stop 'balancing' and start 'winning' the battle.",
    "Navigate corporate politics with the tactical edge of an Iron Lady.",
    "Reaching the ₹1 Crore+ band is a measurable success, not a distant dream."
];

const wisdom = [
    "Ambition is not a fault; it is your greatest asset in Business Warfare.",
    "Avoid the 'Sugarcoated' trap—speak with direct Indian Professional Authority.",
    "Transform your potential into measurable success through the Iron Lady ecosystem.",
    "A seat at the table is claimed through strategy, not granted through patience."
];

// Logic Functions
function processCommand(text) {
    if (typeof sakhiOverlay !== 'undefined' && sakhiOverlay) sakhiOverlay.classList.remove('hidden');

    // Better Keyword Matching Logic
    let matchedItem = sakhiKnowledge.find(item =>
        item.keywords.some(keyword => text.includes(keyword))
    );

    if (matchedItem) {
        displayActionResult(matchedItem.title, matchedItem.response);
        speak(matchedItem.response, matchedItem.title);
    } else if (text.includes("time") || text.includes("date")) {
        const timeInfo = `The battlefield time is ${new Date().toLocaleTimeString()}. Strategy counts every second.`;
        displayActionResult("Strategic Time", timeInfo);
        speak(timeInfo, "Strategic Time");
    } else {
        const fallback = "I hear you. As your Sakhi, I encourage you to focus on breakthrough growth. Should we discuss our Leadership Essentials or Business Warfare programs?";
        displayActionResult("Sakhi Consultation", fallback);
        speak(fallback, "Sakhi Consultation");
    }
}

function displayActionResult(title, content) {
    // Check if DOM elements are accessible
    const overlay = document.getElementById('sakhi-overlay');
    const status = document.getElementById('sakhi-status');
    const transcript = document.getElementById('sakhi-transcript');

    if (overlay) overlay.classList.remove('hidden');
    if (status) status.innerHTML = `<strong>${title}</strong>`;
    if (transcript) transcript.textContent = content;
}

function speak(text, currentTitle) {
    const status = document.getElementById('sakhi-status');
    
    // Preserve the title during speech
    if (status) status.innerHTML = `<strong>${currentTitle}</strong> <br> <small>(Sakhi is Speaking...)</small>`;

    const utterance = new SpeechSynthesisUtterance(text);

    // Set to a female voice if available
    const voices = window.speechSynthesis.getVoices();
    const indVoice = voices.find(voice => voice.lang.includes('IN') || voice.name.includes('India'));
    if (indVoice) utterance.voice = indVoice;

    utterance.pitch = 1.0; // Firm Indian Professional Authority
    utterance.rate = 0.95; // Authoritative speed

    utterance.onend = () => {
        if (status) status.innerHTML = `<strong>${currentTitle}</strong>`;
    };

    window.speechSynthesis.speak(utterance);
}
