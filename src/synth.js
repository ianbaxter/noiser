let audioContext,
  osc,
  filter,
  amp,
  lfo,
  delay,
  delaySource,
  feedback,
  recorder,
  recordingStream;

audioContext = new (window.AudioContext || window.webkitAudioContext)();

class Synth {
  init() {
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

    // Set delay
    delaySource = amp;
    delay = audioContext.createDelay();
    delay.delayTime.value = 0.5;

    feedback = audioContext.createGain();
    feedback.gain.value = 0.8;

    delay.connect(feedback);
    feedback.connect(delay);
    delaySource.connect(delay);
  }

  start() {
    if (audioContext.state !== "running") {
      audioContext.resume();
    }
    amp.connect(audioContext.destination);
    delaySource.connect(audioContext.destination);
    delay.connect(audioContext.destination);
  }

  stop() {
    amp.disconnect(audioContext.destination);
    delay.disconnect(audioContext.destination);
  }

  changeFreq(oscFreq) {
    console.log("DCO frequency: " + oscFreq + " Hz");
    osc.frequency.value = oscFreq;
  }

  changeFilterFreq(filterFreq) {
    console.log("Filter frequency: " + filterFreq + " Hz");
    filter.frequency.value = filterFreq;
  }

  changeAmp(volume) {
    console.log("Volume: " + volume);
    delaySource.gain.value = volume;
  }

  changeLfoSpeed(amount) {
    console.log("LFO speed: " + amount + " Hz");
    lfo.frequency.value = amount;
  }

  changeDelayTime(time) {
    console.log("Delay time: " + time);
    delay.delayTime.value = time;
  }

  changeDelayFeedback(amount) {
    console.log("Delay feedback: " + amount);
    feedback.gain.value = amount;
  }

  startRecording() {
    recordingStream = audioContext.createMediaStreamDestination();

    // Connect audio sources to recording stream
    amp.connect(recordingStream);
    delaySource.connect(recordingStream);
    delay.connect(recordingStream);

    let options = {
      audioBitsPerSecond: 128000, // Maximum possible
      mimeType: "audio/webm", // Only available audio format
    };
    recorder = new MediaRecorder(recordingStream.stream, options);
    recorder.start();
  }

  stopRecording() {
    recorder.addEventListener("dataavailable", function (e) {
      document.querySelector("#recording").src = URL.createObjectURL(e.data);
      recorder = null;
      recordingStream = null;
    });
    recorder.stop();
  }
}

export default Synth;
