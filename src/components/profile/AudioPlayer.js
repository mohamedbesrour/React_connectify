import React, { Component } from 'react';
import music from "./Eye_Of_The_Tiger.mp3";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      isPlaying: false,
    };
  }

  togglePlay = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  stopAudio = () => {
    const audio = this.audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    this.setState({ isPlaying: false });
  };

  render() {
    return (
      <div className="audio-player">
        <audio ref={this.audioRef} controls>
          <source src={music} type="audio/mpeg" />
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button onClick={this.togglePlay}>
          {this.state.isPlaying ? 'Pause' : 'Lecture'}
        </button>
        <button onClick={this.stopAudio}>Stop</button>
      </div>
    );
  }
}

export default AudioPlayer;
