import React, { Component } from "react";
import './index.css';
import Synth from "./synth";

let synth = new Synth();

class App extends Component {
  state = {
    playing: false,
    recording: false
  }

  // Initialise audio
  componentDidMount() { 
    synth.init();
  }
  
  startSynth = playing => {
    if (playing) {
      synth.stop();
      this.setState({playing: false});
    } else {
      synth.start();
      this.setState({playing: true});
    }
  }

  toggleRecording = recording => {
    if (!recording) {
      synth.startRecording();
      this.setState({recording: true});
    } else {
      synth.stopRecording();
      this.setState({recording: false});
    }
  }

  handleChange({ target }) {
    switch (target.name) {
      case "freq":
        synth.changeFreq(target.value)
        break;
      case "filter-freq":
        synth.changeFilterFreq(target.value)
        break;
      case "amp":
        synth.changeAmp(target.value)
        break;
      case "lfo":
        synth.changeLfoSpeed(target.value)
        break;
      case "delay-time":
        synth.changeDelayTime(target.value)
        break;
      case "delay-feedback":
        synth.changeDelayFeedback(target.value)
        break;
      default:
        console.log("Default case")
    }
  }

  render() {
    return (
      <div>
        <div className="top">
          <button 
            className="on-btn"
            onClick={() => this.startSynth(this.state.playing)}
          >
            {this.state.playing ? "On" : "Off"}
          </button>
          <p className="title">NOISER</p>
          <button 
            className="record-btn"
            onClick={ () => this.toggleRecording(this.state.recording) }
            name={this.state.recording ? "stop" : "record"}
          >
            <div className={this.state.recording ? "square" : "circle"}></div>
          </button>
        </div>
        <div className="controls">
          <div className="module">
            <label className="module-Title first-module-title" for="delay-module">Source</label>
            <div name="delay-module" className="controls">
              <div className="control first-control">
                <input 
                  type="range"
                  orient="vertical"
                  name="amp" 
                  min='0' 
                  max='1' 
                  step='0.01'
                  onInput={ this.handleChange } 
                />
                <label for="amp">DCO Volume</label>
              </div>
              <div className="control">
                <input 
                  type="range"
                  orient="vertical" 
                  name="freq"
                  defaultValue="440" 
                  min='10' 
                  max='8000' 
                  step='1'
                  onInput={ this.handleChange } 
                />
                <label for="freq">DCO</label>
              </div>
              <div className="control">
                <input 
                  type="range"
                  orient="vertical"
                  name="filter-freq"
                  defaultValue="1000" 
                  min='20' 
                  max='8000' 
                  step='1'
                  onInput={ this.handleChange } 
                />
                <label for="filter-freq">LPF</label>
              </div>
              <div className="control">
                <input 
                  type="range"
                  orient="vertical"
                  name="lfo"
                  defaultValue="20" 
                  min='1' 
                  max='100' 
                  step='1'
                  onInput={ this.handleChange } 
                />
                <label for="lfo">LFO</label>
              </div>
            </div>
          </div>
          <div className="module">
            <label className="module-Title" for="delay-module">Delay</label>
            <div name="delay-module" className="controls">
              <div className="control">
                <input 
                  type="range" 
                  orient="vertical"
                  name="delay-time"
                  defaultValue="0.5" 
                  min='0' 
                  max='1' 
                  step='0.05'
                  onInput={ this.handleChange } 
                />
                <label for="delay-time">Time</label>
              </div>
              <div className="control">
                <input 
                  type="range"
                  orient="vertical"
                  name="delay-feedback"
                  defaultValue="0.8" 
                  min='0' 
                  max='0.9' 
                  step='0.1'
                  onInput={ this.handleChange } 
                />
                <label for="delay-feedback">Feedback</label>
              </div>
            </div>
          </div>
        </div>
        <div className="recording">
        </div>
        <h3>Recordings</h3>
        <ol id="recordingsList">
          <audio id="recording" controls></audio>
        </ol>
        <div class="description">
          <p>
            Noiser uses the Web Audio API to create earthshattering dubbed out noise.
            <br></br>
            <br></br>
            Try sweeping through the frequencies with the digitally controlled oscillator (DCO) to build up a wall of noise.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
