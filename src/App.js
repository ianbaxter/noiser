import React, { Component } from "react";
import './index.css';
import AudioChunk from "./audio";

let audioChunk = new AudioChunk;

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

  render() {
    return (
      <button 
        className="btn-play"
        onClick={() => this.startSynth(this.state.playing)}
      >
        {this.state.playing ? "Stop" : "Play"}
      </button>
    );
  }
}

export default App;
