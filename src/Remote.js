// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import data from './Data/data.json';
import { io } from 'socket.io-client';

function Remote() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const socket = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleToggle = () => {
    socket.current.emit('camera', !isCameraOn);
    setIsCameraOn(prevState => !prevState);
    
  };

  useEffect(() => {

    socket.current = io.connect('http://192.168.1.176:8000');
    if(socket.current){
      socket.current.on('cam', (msg) => {
  setIsCameraOn(msg);
      });
    }
    return () => {
      socket.current.disconnect();
    };
  }, []);
  const handleSearch = (term) => {
    const filteredResults = data.filter((entry) =>
      entry.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSearchTerm(term);
  };

  const handleClear = () => {
    setSearchResults([]);
    setSearchTerm('');
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
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      <div className='row d-flex align-items-center justify-content-center pt-5'>
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
      </div>
    </div>
  );
}

export default Remote;
