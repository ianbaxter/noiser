import React, { Component } from "react";
import './index.css';
import AudioChunk from "./audio";

let audioChunk = new AudioChunk();

class App extends Component {
  state = {
    playing: false,
  }

  componentDidMount() { 
    audioChunk.init();
  }
  
  startSynth = playing => {
    if (playing) {
      audioChunk.stop();
      this.setState({playing: false});
    } else {
      audioChunk.start();
      this.setState({playing: true});
    }
  }

  handleChange({ target }) {
    console.log(target);
    switch (target.name) {
      case "freq":
        audioChunk.changeFreq(target.value)
        break;
      case "filter-freq":
        audioChunk.changeFilterFreq(target.value)
        break;
      case "amp":
        audioChunk.changeAmp(target.value)
        break;
      case "lfo":
        audioChunk.changeLfoSpeed(target.value)
        break;
      case "delay-time":
        audioChunk.changeDelayTime(target.value)
        break;
      case "delay-feedback":
        audioChunk.changeDelayFeedback(target.value)
        break;
    }
  }

  render() {
    return (
      <div>
        <button 
          className="btn-play"
          onClick={() => this.startSynth(this.state.playing)}
        >
          {this.state.playing ? "Stop" : "Play"}
        </button>
        <div>
          <input 
            type='range' 
            name="freq" 
            min='20' 
            max='8000' 
            step='1'
            onInput={ this.handleChange } 
          />
          <label for="freq">Osc Frequency</label>
        </div>
        <div>
          <input 
            type='range' 
            name="filter-freq" 
            min='20' 
            max='2000' 
            step='1'
            onInput={ this.handleChange } 
          />
          <label for="filter-freq">Filter Frequency</label>
        </div>
        <div>
          <input 
            type='range' 
            name="amp" 
            min='0' 
            max='1' 
            step='0.01'
            onInput={ this.handleChange } 
          />
          <label for="amp">Volume</label>
        </div>
        <div>
          <input 
            type='range' 
            name="lfo" 
            min='1' 
            max='100' 
            step='1'
            onInput={ this.handleChange } 
          />
          <label for="lfo">Lfo</label>
        </div>
        <div>
          <input 
            type='range' 
            name="delay-time" 
            min='0.1' 
            max='6' 
            step='0.1'
            onInput={ this.handleChange } 
          />
          <label for="delay-time">Delay Time</label>
        </div>
        <div>
          <input 
            type='range' 
            name="delay-feedback" 
            min='0' 
            max='0.9' 
            step='0.1'
            onInput={ this.handleChange } 
          />
          <label for="delay-feedback">Delay Feedback</label>
        </div>
      </div>
    );
  }
}

export default App;
