import React, { useState, useEffect } from "react";
import "./index.css";
import Synth from "./synth";
import Control from "./components/Control";

let synth = new Synth();

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    synth.init();
  }, []);

  const startSynth = (playing) => {
    if (playing) {
      synth.stop();
      setPlaying(false);
    } else {
      synth.start();
      setPlaying(true);
    }
  };

  const toggleRecording = (recording) => {
    if (!recording) {
      synth.startRecording();
      setRecording(true);
    } else {
      synth.stopRecording();
      setRecording(false);
    }
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case "freq":
        synth.changeFreq(target.value);
        break;
      case "filter-freq":
        synth.changeFilterFreq(target.value);
        break;
      case "amp":
        synth.changeAmp(target.value);
        break;
      case "lfo":
        synth.changeLfoSpeed(target.value);
        break;
      case "delay-time":
        synth.changeDelayTime(target.value);
        break;
      case "delay-feedback":
        synth.changeDelayFeedback(target.value);
        break;
      default:
        console.log("Default case");
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <main>
          <div className="synth-interface">
            <div className="top-panel">
              <button
                className="btn btn__on"
                onClick={() => startSynth(playing)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={playing ? "red" : "white"}
                  width="32px"
                  height="32px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
                </svg>
              </button>
              <h1>NOISER</h1>
              <button
                className="btn btn__record"
                onClick={() => toggleRecording(recording)}
                name={recording ? "stop" : "record"}
              >
                {recording ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="red"
                    width="32px"
                    height="32px"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 6h12v12H6z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    width="32px"
                    height="32px"
                  >
                    <path d="M24 24H0V0h24v24z" fill="none" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                )}
              </button>
            </div>
            <div className="main-panel">
              <div className="module module__source">
                <label
                  className="module-title module-title__source"
                  htmlFor="source-module"
                >
                  Source
                </label>
                <div name="source-module" className="controls">
                  <Control
                    name="amp"
                    min="0"
                    max="1"
                    step="0.01"
                    label="DCO Vol"
                    handleChange={handleChange}
                    controlStyle="control__source"
                  />
                  <Control
                    name="freq"
                    min="10"
                    max="8000"
                    step="1"
                    label="DCO Freq"
                    handleChange={handleChange}
                    controlStyle="control__source"
                    defultValue="440"
                  />
                  <Control
                    name="lpf-freq"
                    min="20"
                    max="8000"
                    step="1"
                    label="LPF"
                    handleChange={handleChange}
                    controlStyle="control__source"
                    defultValue="1000"
                  />
                  <Control
                    name="lfo"
                    min="1"
                    max="100"
                    step="1"
                    label="LFO"
                    handleChange={handleChange}
                    controlStyle="control__source"
                    defultValue="20"
                  />
                </div>
              </div>
              <div className="module module__delay">
                <label className="module-title" htmlFor="delay-module">
                  Delay
                </label>
                <div name="delay-module" className="controls">
                  <Control
                    name="delay-time"
                    min="0"
                    max="1.5"
                    step="0.05"
                    label="Time"
                    handleChange={handleChange}
                    controlStyle="control__delay"
                    defultValue="0.5"
                  />
                  <Control
                    name="delay-feedback"
                    min="0"
                    max="0.95"
                    step="0.1"
                    label="Feedback"
                    handleChange={handleChange}
                    controlStyle="control__delay"
                    defultValue="0.8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="info-section">
            <h3>Recordings</h3>
            <ol>
              <audio id="recording" controls></audio>
            </ol>
            <div className="description">
              <p>
                Noiser uses the Web Audio API to create earthshattering dubbed
                out noise.
                <br />
                <br />
                Try sweeping through the frequencies with the digitally
                controlled oscillator (DCO) to build up a wall of noise.
              </p>
            </div>
          </div>
        </main>
        <footer>
          <a href="https://github.com/ianbaxter/noiser">
            <svg viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </svg>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
