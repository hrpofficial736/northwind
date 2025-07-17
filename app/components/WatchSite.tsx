import React from 'react';
import { X } from 'lucide-react';



const WatchSite = ({onClose }) => {
  return (
    <div className="relative h-[100vh] w-full inline-block">
      
      <button
        onClick={onClose}
        className="absolute top-4 right-6 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-1 hover:scale-110"
        aria-label="Close video"
      >
        <X size={20} />
      </button>

      
      <video
       className="object-cover h-full w-full rounded-2xl"
        muted
        autoPlay
        loop
        playsInline
        src={"/assets/videos/siteVideo.mp4"}
      > 
      </video>
    </div>
  );
};

export default WatchSite;