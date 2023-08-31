// src/App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import data from './Data/data.json';

function Remote() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handlePlay = () => {
    console.log('play');
  }

  const handlePause = () => {
    console.log('pause');
  }

  const handleStop = () => {
    console.log('stop');
  }

  return (
    <div className='main text-center' >
      <img className='logo' src='./logo_g20.png' />
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      <div className='row d-flex align-items-center justify-content-center pt-5'>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <>
            <div className='card col-4 m-2 d-flex align-items-center justify-content-center' style={{height: "20vh", widt: "40vw"}} key={result.id}>

              <h2>{result.id}-{result.name}</h2>
              <div className='d-flex align-items-center justify-content-center'>
                <button className='play  mx-2' onClick={() => { handlePlay()}
                }>Play <img src='./play-circle.svg' /></button>
                <button className='pause  mx-2' onClick={()=>{handlePause()}}>Pause <img src='./pause-circle.svg' /></button>
                <button className='stop  mx-2' onClick={()=>{handleStop()}}>Stop <img src='./stop.svg' /></button>
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
