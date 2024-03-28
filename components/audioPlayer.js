import React from 'react';

function AudioPlayer({ src }) {
  console.log("src is:" + src);
  return (
    <div>
      <audio controls>
      <source src={process.env.PUBLIC_URL + src} type="audio/wav" />
      </audio>
    </div>

  );
}