import React from 'react';
import artistImage from '../assets/Artist.png';

const RightCard = ({ isPlaying, setIsPlaying, handleNext, handlePrevious }) => {
  return (
    <>
   <div className='w-64 bg-gray-900 text-white p-4 flex flex-col justify-between h-screen'>
    <div className="fixed  right-10 bottom-12 bg-red-800 text-white p-4 rounded-lg shadow-lg w-40">
    <h3 className="text-lg font-bold mb-4">Now Playing</h3>
    <img src={artistImage} alt="Artist" className="w-80 h-100 items-center" />
      
      <div className="flex justify-center items-center space-x-4">
        {/* Previous Button */}
        <button 
          onClick={handlePrevious} 
          className=" p-1/4 rounded hover:bg-gray-500 transition-colors"
        >
          ⏮
        </button>
        
        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          className="bg-gray-600 p-1 rounded-full hover:bg-red-500 transition-colors"
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
        
        {/* Next Button */}
        <button 
          onClick={handleNext} 
          className="p-1/4 rounded hover:bg-gray-500 transition-colors"
        >
          ⏭
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default RightCard;


