// Initialize Audio Context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Define frequencies for notes
const notes = {
  'C': 261.63,
  'E': 329.63,
  'G': 392.00
};

// Function to play a single note
function playSound(note) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime); // Set frequency based on note
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // Volume control

  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5); // Play for 0.5 seconds
}

// Function to play a chord (C major)
function playChord() {
  ['C', 'E', 'G'].forEach(note => playSound(note));
}
