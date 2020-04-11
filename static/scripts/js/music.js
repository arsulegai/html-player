// create web audio api context
var audioCtx;

function playNote(frequency, duration) {
  // create Oscillator node
  var gain = audioCtx.createGain();
  gain.connect(audioCtx.destination);

  var oscillator = audioCtx.createOscillator();
  var analyser = audioCtx.createAnalyser();

  var sound_track = document.getElementById('sound_track');
  var draw_context = sound_track.getContext('2d');
  gain.connect(analyser);
  freqs = new Uint8Array(analyser.frequencyBitCount);
  analyser.getByteFrequencyData(freqs);
  draw_context.clearRect(0, 0, sound_track.width, sound_track.height);
  draw_context.fillStyle = "#00CCFF";
  bars = 1000;
  for (var i=0; i < bars; i++) {
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(freqs[i]/2);
    draw_context.fillRect(bar_x, sound_track.height, bar_width, bar_height);
  }

  // Options - sine, square, sawtooth, triangle, custom
  oscillator.type = 'triangle';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
      playTrack();
    }, duration);
}

function playTrack() {
  if (track.length > 0) {
    note = track.pop();
    playNote(note[0], 1000 * 100 * note[1] / (tempo * beat))
  }
}

// Key frequencies. Refer to https://www.ece.iastate.edu/~alexs/classes/2016_Spring_575/HW/HW5/files/piano-key-freq-wikipedia.pdf
const silence = 0;

const c4 = 261.626;
const d4 = 293.665;
const d4_sharp = 311.127;
const g4 = 391.995;
const f4 = 349.228;

const c3 = 130.813;
const d3 = 146.832;
const d3_sharp = 155.563;
const e3 = 164.814;
const f3 = 174.614;
const g3 = 195.998;
const g3_sharp = 207.652;
const a3 = 220.000;
const a3_sharp = 233.082;
const b3 = 246.942;

const a2_sharp = 116.541;
const b2 = 123.471;
const g2 = 97.9989;

// twinkle track
twinkle = [
  [c3, 2], [c3, 2], [g3, 2], [g3, 2], [a3, 2], [a3, 2], [g3, 2], [silence, 2],
  [f3, 2], [f3, 2], [e3, 2], [e3, 2], [d3, 2], [d3, 2], [c3, 2], [silence, 2],
  [g3, 2], [g3, 2], [f3, 2], [f3, 2], [e3, 2], [e3, 2], [d3, 2], [silence, 2],
  [g3, 2], [g3, 2], [f3, 2], [f3, 2], [e3, 2], [d3, 2], [c3, 2], [silence, 2]
];

// London Bridge
london = [
  [g3, 1.5], [a3, 0.5], [g3, 1], [f3, 1], [e3, 1], [f3, 1], [g3, 2], [d3, 1], [e3, 1], [f3, 2], [e3, 1], [f3, 1], [g3, 2],
  [g3, 1.5], [a3, 0.5], [g3, 1], [f3, 1], [e3, 1], [f3, 1], [g3, 2], [d3, 2], [g3, 2], [e3, 1], [c3, 2], [silence, 1]
];

// Theme
theme = [
  [e3, 1], [e3, 1], [f3, 1], [g3, 1], [g3, 1], [f3, 1], [e3, 1], [d3, 1], [c3, 1], [c3, 1], [d3, 1], [e3, 1], [e3, 1], [d3, 1], [d3, 2], [silence, 0],
  [e3, 1], [e3, 1], [f3, 1], [g3, 1], [g3, 1], [f3, 1], [e3, 1], [d3, 1], [c3, 1], [c3, 1], [d3, 1], [e3, 1], [d3, 1], [c3, 1], [c3, 2], [silence, 0]
];

// Titan
titan = [
  [c3, 2], [b2, 1], [c3, 1], [d3, 2], [c3, 1], [d3, 1], [e3, 2], [d3, 1], [e3, 1], [g3, 1], [f3, 1], [e3, 1], [d3, 1],
  [c3, 2], [b2, 1], [c3, 1], [d3, 2], [c3, 1], [d3, 1], [e3, 2], [d3, 1], [e3, 1], [g3, 1], [f3, 1], [e3, 1], [d3, 1],
  [c3, 1], [c4, 1], [c4, 1], [c4, 1], [c4, 1], [b3, 1], [a3, 1], [g3, 1], [f3, 1], [a3, 1], [a3, 1], [a3, 1], [a3, 1], [g3, 1], [f3, 1], [e3, 1],
  [d3, 1], [f3, 1], [f3, 1], [f3, 1], [f3, 1], [e3, 1], [g3, 1], [f3, 1], [e3, 1], [d3, 1], [c3, 1], [b2, 1], [c3, 2], [silence, 2]
];

// Airtel
airtel = [
  [c3, 2], [c3, 1], [c3, 1], [c3, 2], [g3, 2], [d3, 1], [d3_sharp, 1], [d3, 1], [c3, 1], [a2_sharp, 2], [d3, 2],
  [c3, 1], [d3, 1], [c3, 1], [a2_sharp, 1], [c3, 1], [d3, 1], [d3_sharp, 2], [d3, 2], [c3, 1], [a2_sharp, 1], [g2, 2], [silence, 2],
  [c4, 2], [g3, 2], [a3_sharp, 2], [f3, 2], [g3, 2], [f3, 2], [d3_sharp, 2], [c3, 2],
  [d3_sharp, 2], [f3, 2], [g3, 2], [g3_sharp, 2], [f3, 3], [silence, 1], [d3_sharp, 1], [d3, 1], [c3, 1], [silence, 1]
];

anisutide = [
  [c3, 1], [d3, 1], [d3_sharp, 1], [c3, 1], [b2, 2], [silence, 1], [c3, 2], [d3, 1], [d3_sharp, 1], [c3, 1], [b2, 1],
  [g4, 2], [silence, 1], [g4, 1], [f4, 1], [d4_sharp, 1], [d4, 1], [d4_sharp, 2], [g4, 2], [f4, 1], [d4_sharp, 1], [d4, 1], [c4, 1], [d4, 1], [d4_sharp, 1]
];

// tempo for the track
tempo = 100;
beat = 4;

function play(which, whichTempo) {
  audioCtx = new window.AudioContext();
  tempo = whichTempo;
  track = which.slice().reverse();
  playTrack();
}
