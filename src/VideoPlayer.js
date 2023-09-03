import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Make sure to install socket.io-client
import axios from 'axios'
export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('/default.mp4');
  const [transitionClass, setTransitionClass] = useState('');
  const socket = useRef(null);
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese' },
    { code: 'es', name: 'Spanish' },
    { code: 'ar', name: 'Arabic' },
    { code: 'fr', name: 'French' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'tr', name: 'Turkish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'bn', name: 'Bengali' },
    { code: 'default', name: 'default' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('default');
  const [isVip,setVip] = useState(false)


  const handleLanguageChange = (event) => {
  if(isVip){
    setSelectedLanguage(event.target.value);
    setVideoSrc(`/${event.target.value}-vip.mp4`);
  }else{
    setSelectedLanguage(event.target.value);
    socket.current.emit('send', event.target.value);  
  }
    
    
   
  
    
  };
  useEffect(() => {
    socket.current = io.connect('http://192.168.0.104:8000'); // Replace with your server URL

    socket.current.on('receive', (msg) => {
      socket.current.emit('camera', false);
  setSelectedLanguage(msg)
      setTimeout(() => {
        if(isVip && `/${msg}-vip.mp4` !== videoSrc){
          console.log("vip")
          setTransitionClass('fade-out');
        setVideoSrc(`/${msg}-vip.mp4`);
        setTransitionClass('fade-in');
        }else if(`/${msg}.mp4` !== videoSrc){
          setTransitionClass('fade-out');
          setVideoSrc(`/${msg}.mp4`);
          setTransitionClass('fade-in');
        }else{
          setTransitionClass('fade-out');
          setVideoSrc('/default.mp4')
          setTransitionClass('fade-in');
        }
      
   
      }, 500);
   
    });

    socket.current.on('lang-receive',async (msg) => {
      setVip(msg.name)
     

     setSelectedLanguage(msg.lang)
    
      const botResponse = `नमस्ते , ${msg.name} `;
      const apiUrl = 'https://api.elevenlabs.io/v1/text-to-speech/XB0fDUnXU5powFXDhCwa/stream';
      const apiKey = '2309b0976a6ed33eb9de46e6e914e037';
      
      const requestData = {
        text: botResponse,
        model_id: 'eleven_multilingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      };
      
      const headers = {
    
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      };
      const response2 = await axios.post(`${apiUrl}`, requestData, {
        headers,
        responseType: "blob",
      });

      if (response2.status === 200) {
        setTransitionClass('fade-out');
        const audio = new Audio();
        setVideoSrc('/default.mp4')
  audio.src = URL.createObjectURL(response2.data);
  audio.addEventListener('ended', function() {
    // This function will be called when the audio playback ends
    setTransitionClass('fade-out');
    setVideoSrc(`${msg.lang}-vip.mp4`)
    setTransitionClass('fade-in');
    // You can add any additional actions you want to perform here
  });
 
    audio.play();

    setTransitionClass('fade-in');
  
      } else {
  console.log("error")
      }
    
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    // Load the new video source when it changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <div className={`video-container ${transitionClass}`}>
        <select style={{position:"absolute",zIndex:1}} className='clear-btn my-2' id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
      <video
        ref={videoRef}
        id="background-video"
        autoPlay
        loop={videoSrc.includes('default')?true:false}
        playsInline
        onClick={()=>{
          videoRef.current.play()
        }}
        onEnded={() => {
            if(!videoSrc.includes('default'))
         { 
          setVip('');
          setVideoSrc('/default.mp4')
          socket.current.emit('camera', true);
          socket.current.emit('send', 'default');  
          videoRef.current.currentTime = 0;}
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
