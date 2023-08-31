import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Make sure to install socket.io-client

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('http://localhost:3000/vid/default.mp4');
  const [transitionClass, setTransitionClass] = useState('');
  
  useEffect(() => {
    const socket = io('http://192.168.1.176:8000'); // Replace with your server URL

    socket.on('receive', (msg) => {
      setTransitionClass('fade-out');
      setTimeout(() => {
        setVideoSrc(`http://localhost:3000/vid/${msg}.mp4`);
        setTransitionClass('fade-in');
      }, 500);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Load the new video source when it changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    // <div className={!videoSrc.includes('default')?`video-container ${transitionClass}`:''}>
      <video
        ref={videoRef}
        id="background-video"
        autoPlay
        playsInline
        muted
        onEnded={() => {
            if(!videoSrc.includes('default'))
         { videoRef.current.currentTime = 0;}
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    // </div>
  );
}
