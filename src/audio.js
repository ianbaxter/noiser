import './index.css';

let audioContext, osc, filter, amp, lfo, delay, delaySource, feedback;

class AudioChunk {

    init() {
        audioContext = new(window.AudioContext || window.webkitAudioContext)();

        // Set gain/amp
        amp = audioContext.createGain();
        amp.gain.setValueAtTime(1, audioContext.currentTime);
        
        // Set filter
        filter = audioContext.createBiquadFilter();
        filter.type = "lowshelf";
        filter.frequency.setValueAtTime(1000, audioContext.currentTime);
        filter.gain.setValueAtTime(25, audioContext.currentTime);

        // Set oscillator
        osc = audioContext.createOscillator();
        osc.type = "sine";
        osc.frequency.value = 440;

        // Set lfo
        lfo = audioContext.createOscillator();
        lfo.type = "sine";
        lfo.frequency.value = 20;

        // Connect nodes
        lfo.connect(amp.gain);
        osc.connect(filter);
        filter.connect(amp);
        lfo.start();
        osc.start();
    }

    start() {
        amp.connect(audioContext.destination);

        // Set delay
        delaySource = amp;
        delay = audioContext.createDelay();
        delay.delayTime.value = 0.5;

        feedback = audioContext.createGain();
        feedback.gain.value = 0.8;

        delay.connect(feedback);
        feedback.connect(delay);
        delaySource.connect(delay);
        delaySource.connect(audioContext.destination);
        delay.connect(audioContext.destination);
    }

    stop() {
        amp.disconnect(audioContext.destination);
        delay.disconnect(audioContext.destination);
    }

    changeFreq(oscFreq) {
        console.log(oscFreq);
        osc.frequency.value = oscFreq;
    }

    changeFilterFreq(filterFreq) {
        console.log(filterFreq);
        filter.frequency.value = filterFreq;
    }

    changeAmp(volume) {
        console.log(volume);
        amp.gain.value = volume;
    }

    changeLfoSpeed(amount) {
        console.log(amount);
        lfo.frequency.value = amount;
    }

    changeDelayTime(time) {
        console.log(time);
        delay.delayTime.value = time;
    }

    changeDelayFeedback(amount) {
        console.log(amount);
        feedback.gain.value = amount;
    }
}

export default AudioChunk;