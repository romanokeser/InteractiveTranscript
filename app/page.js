// YourComponent.js
'use client';
import React, { useState, useRef } from 'react';
import "./globals.css";
import styles from "./page.module.css";
import ReactPlayer from 'react-player';

const hardcodedTranscript = [
  { word: 'Uvedite', timestamps: [5, 0.08] },
  { word: 'vi', timestamps: [2, 0.2] },
  { word: 'njete,', timestamps: [3, 0.56] },
  { word: 'našta', timestamps: [42, 0.72] },
  { word: 'liče,', timestamps: [0.72, 0.88] },
  { word: 'kako', timestamps: [0.88, 1.06] },
  { word: 'bi', timestamps: [1.06, 1.18] },
  { word: 'življavanje.', timestamps: [1.18, 1.3] },
];

const AudioPlayerWithTimestamps = () => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleClickWord = (timestamp) => {
    audioRef.current.seekTo(timestamp);
    setCurrentTime(timestamp);
  };

  return (
    <div>
      <p>Current Time: {currentTime}</p>
      <div>
        {hardcodedTranscript.map((wordObj, index) => (
          <span
            key={index}
            className={`${styles.word} ${hoveredWord === wordObj.word ? styles.hovered : ''}`}
            onClick={() => handleClickWord(wordObj.timestamps[0] + wordObj.timestamps[1])}
            onMouseEnter={() => setHoveredWord(wordObj.word)}
            onMouseLeave={() => setHoveredWord(null)}
            >
            {wordObj.word}{' '}
          </span>
        ))}
      </div>
            <div>
              <ReactPlayer
                ref={audioRef}
                url='/Audio/leomujic.wav'
                controls={true}
                playing={true}
                onProgress={(e) => setCurrentTime(e.playedSeconds)}
              />
            </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <p>Audio player</p>
        <p>Here comes the transcript</p>
        <AudioPlayerWithTimestamps />
      </div>
    </main>
  );
}
