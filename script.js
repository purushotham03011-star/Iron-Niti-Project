// Text Splitting for 3D Animation
const $h1 = document.querySelector("[data-splittext]");
if ($h1) {
    const text = $h1.textContent;
    const letters = text.trim().split("");
    $h1.innerHTML = letters
        .map(
            (char, i) =>
                `<span style="--i: ${i / letters.length};">${char}</span>`
        )
        .join("");
}

// DOM Elements
const textInput = document.getElementById('sakhi-text-input');
const sendBtn = document.getElementById('send-command');
const actionChips = document.querySelectorAll('.action-chip');
const sakhiOverlay = document.getElementById('sakhi-overlay');
const sakhiClose = document.getElementById('close-sakhi');
const sakhiStatus = document.getElementById('sakhi-status');
const sakhiTranscript = document.getElementById('sakhi-transcript');



// Event Listeners for UI
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const cmd = textInput.value.trim();
        if (cmd) {
            processCommand(cmd.toLowerCase());
            textInput.value = '';
        }
    });
}

if (textInput) {
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cmd = textInput.value.trim();
            if (cmd) {
                processCommand(cmd.toLowerCase());
                textInput.value = '';
            }
        }
    });
}

actionChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const type = chip.getAttribute('data-cmd');
        if (type === 'strategy') {
            const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
            displayActionResult("Iron Strategy", randomStrategy);
            speak(randomStrategy, "Iron Strategy");
        } else if (type === 'wisdom') {
            const randomWisdom = wisdom[Math.floor(Math.random() * wisdom.length)];
            displayActionResult("Wisdom of Sakhi", randomWisdom);
            speak(randomWisdom, "Wisdom of Sakhi");
        } else if (type === 'programs') {
            const result = "We offer Leadership Essentials, 100 Board Members, and Master of Business Warfare. Which battle are you fighting?";
            displayActionResult("Iron Lady Programs", result);
            speak(result, "Iron Lady Programs");
        }
    });
});

if (sakhiClose) {
    sakhiClose.addEventListener('click', () => {
        sakhiOverlay.classList.add('hidden');
        if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    });
}


