// AudioPlayer.js

import React from 'react';

function AudioPlayer() {
  return (
    <div>
      <audio controls>
        <source src="your-audio-file.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
