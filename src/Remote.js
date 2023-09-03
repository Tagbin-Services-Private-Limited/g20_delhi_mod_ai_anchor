// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import data from './Data/data.json';
import { io } from 'socket.io-client';

function Remote() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('default');

  const [vipMode, setVipMode] = useState(false);

  // Function to handle the checkbox change event
  const handleCheckboxChange = () => {
    // Toggle the VIP mode state when the checkbox is clicked
    setVipMode(!vipMode);
  };

  const handleLanguageChange = (event) => {
    if(!vipMode){
    if(!isCameraOn){
      setSelectedLanguage(event.target.value);
      socket.current.emit('send', event.target.value);
      alert("playing" +" "+event.target.value+ " "+"video")
      }else{
        alert("please turn off webcam first!")
    
      }
    }else{
      setSelectedLanguage(event.target.value)
    }
    
  };
  const socket = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleToggle = () => {
    socket.current.emit('camera', !isCameraOn);
    setIsCameraOn(prevState => !prevState);
    
  };

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
  

  useEffect(() => {

    socket.current = io.connect('http://192.168.0.104:8000');
    if(socket.current){
      socket.current.on('cam', (msg) => {
  setIsCameraOn(msg);
      });

      socket.current.on('receive', (msg) => {
        setSelectedLanguage(msg);
            });
    }
    return () => {
      socket.current.disconnect();
    };
  }, []);
  const handleSearch = (term) => {

      socket.current.emit('camera', false);
    
    
      socket.current.emit('lang-send', {name:term,lang:selectedLanguage});

      setVipMode(false)
      setSearchTerm('')
      alert("playing" +" "+term+ " "+"video")
      
  };





  const handlePlay = (name) => {
    if(!isCameraOn){
    socket.current.emit('send', name);
    alert("playing" +" "+name+ " "+"video")
    }else{
      alert("please turn off webcam first!")
      alert("playing" +" "+name+ " "+"video")
    }
  }



  const handleStop = (name) => {
    if(!isCameraOn){
      socket.current.emit('send', name);
      }else{
        alert("please turn off webcam first!")
      }
  }

  return (
    <div className='main text-center' >
      <img className='logo' src='./logo_g20.png' />
      <div>
  
      <button className='clear-btn my-2' onClick={handleToggle}>
        {isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
      </button>
      {isCameraOn ? <p>Camera is currently on</p>:<p>Camera is currently off</p>}
    </div>
    <br/>
    
    <label htmlFor="languageSelect">Select a language:</label>
    <br/>
      <select className='clear-btn my-2' id="languageSelect" onChange={handleLanguageChange} value={selectedLanguage}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
      <br/>
      <br/>
      <label>
        VIP Mode:
        <input
          type="checkbox"
          checked={vipMode}
          onChange={handleCheckboxChange}
        />
      </label>
      <p>VIP Mode is {vipMode ? 'on' : 'off'}.</p>
      <br/>
      {vipMode?
      <SearchBar onSearch={handleSearch}  />
      :''}
      {/* <div className='row d-flex align-items-center justify-content-center pt-5'>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <>
            <div className='card col-4 m-2 d-flex align-items-center justify-content-center' style={{height: "20vh", widt: "40vw"}} key={result.id}>

              <h2>{result.id}-{result.name}</h2>
              <div className='d-flex align-items-center justify-content-center'>
                <button className='play  mx-2' onClick={() => { handlePlay(result.name)}
                }>Play <img src='./play-circle.svg' /></button>
               
                <button className='stop  mx-2' onClick={()=>{handleStop('default')}}>Stop <img src='./stop.svg' /></button>
              </div>

              </div>
            </>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div> */}
    </div>
  );
}

export default Remote;
