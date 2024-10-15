import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';


const PlayerControls = ({ currentSong, isPlaying, setIsPlaying }) => {
  
  const soundRef = useRef(null);

  const playSong = () => {
    if (currentSong && !soundRef.current) {
      soundRef.current = new Howl({
        src: [currentSong.url],
        html5: true  // Enables playing large files by using HTML5 Audio
      });
      soundRef.current.play();
      setIsPlaying(true);
    } else if (soundRef.current) {
      soundRef.current.play();
    }
  };

  const pauseSong = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playSong();
    } else {
      pauseSong();
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.stop(); // Cleanup to stop the sound if unmounted
        soundRef.current = null;
      }
    };
  }, [currentSong, isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white flex justify-center items-center space-x-4">
      {/* <button 
        onClick={() => setIsPlaying(!isPlaying)} 
        className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition-colors"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div>{currentSong ? currentSong.title : "No song selected"}</div> */}
    </div>
  );

};

export default PlayerControls;


