const recognition = new window.webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

const transcription = document.getElementById('transcription');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
    if (startButton.textContent === 'Start') {
        startButton.textContent = 'Stop';
        recognition.start();
    } else {
        startButton.textContent = 'Start';
        recognition.stop();
    }
});

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    transcription.value = transcript;
};

recognition.onerror = (event) => {
    console.error(`Speech recognition error: ${event.error}`);
};
