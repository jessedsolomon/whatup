import React from "react";
import "./styles.css";

interface AppState {
  playing: boolean;
}

export default class App extends React.Component<{}, AppState> {
  audio: HTMLAudioElement | null;

  constructor(props: {}) {
    super(props);

    this.audio = null;

    this.state = {
      playing: false
    };
  }

  play() {
    if (this.audio && !this.state.playing) {
      this.setState({ playing: true });

      this.audio.play();

      this.audio.onended = () => this.setState({ playing: false });
    }
  }

  render() {
    return (
      <div className="App">
        <audio
          ref={(audio) => (audio ? (this.audio = audio) : null)}
          src="/whatup-son.wav"
        ></audio>
        <button
          className={this.state.playing ? "active" : ""}
          onClick={() => this.play()}
        >
          Whatup Son
        </button>
      </div>
    );
  }
}
