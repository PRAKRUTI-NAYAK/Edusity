import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../VideoPlayer/demo.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  // Function to handle closing the video player when clicking outside the video
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false); // Close video when clicked outside the video
    }
  };

  return (
    <>
      {/* Use dynamic className based on playState to show/hide the player */}
      <div
        className={`video-player ${playState ? "" : "hide"}`}
        ref={player}
        onClick={closePlayer}
      >
        <video
          src={video}
          controls
          muted
          autoPlay={playState} // Only autoplay if playState is true
        />
      </div>
    </>
  );
};

export default VideoPlayer;
