import './index.css';

let audioContext, osc, filter, gain;

class AudioChunk {

    init() {
        audioContext = new(window.AudioContext || window.webkitAudioContext)();
        gain = audioContext.createGain();
        filter = audioContext.createBiquadFilter();


        osc = audioContext.createOscillator();
        osc.type = "sine";
        osc.frequency.value = 458;
        osc.connect(filter);
        filter.connect(gain);
        osc.start();

        filter.type = "lowshelf";
        filter.frequency.setValueAtTime(1000, audioContext.currentTime);
        filter.gain.setValueAtTime(25, audioContext.currentTime);
    }

    start() {
        gain.connect(audioContext.destination);
    }

    stop() {
        gain.disconnect(audioContext.destination);
    }
}

export default AudioChunk;