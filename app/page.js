'use client';
import { useState } from "react";
import "./globals.css";
import styles from "./page.module.css";
import AudioPlayer from "@/components/audioPlayer";
import transcriptData from "@/app/transcriptData.json"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(0); // State to track current time in the audio

  const handleWordClick = (startTime) => {
    setCurrentTime(startTime);
  };

  return (
    <main>
      <div className={styles.main}>
        <p>Audio player</p>
        <p>Here comes the transcript</p>
        <div className={styles.transcript}>
          {transcriptData.captions.map((caption, index) => (
            <span key={index}>
              {caption.content.split(' ').map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  onClick={() => handleWordClick(caption.startTime)}
                  className={styles.word}
                >
                  {word}{' '}
                </span>
              ))}
            </span>
          ))}
        </div>
        <AudioPlayer currentTime={currentTime} /> {/* Pass currentTime to AudioPlayer */}
      </div>
    </main>
  );
}
