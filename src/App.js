import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import PlayerControls from "./components/PlayerControls";
import RightCard from "./components/RightCard";
import songs from './data/songs';  // Sample song data

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentSongIndex];

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <SongList songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
        <PlayerControls 
          currentSong={currentSong} 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>

      {/* Right Card with play/pause, next, previous buttons */}
      <RightCard 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default App;


