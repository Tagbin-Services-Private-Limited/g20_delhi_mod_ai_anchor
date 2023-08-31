import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Remote from "./Remote";
import VideoPlayer from "./VideoPlayer";


function App() {

  return (

    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Remote />} />
          <Route exact path="/video" element={<VideoPlayer/>} />
        </Routes>
      
    </BrowserRouter>

  );
}

export default App;
