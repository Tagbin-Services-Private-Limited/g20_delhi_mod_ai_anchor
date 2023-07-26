import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './Screen/Gallery';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      {/* <Route path="/about" exact element={<About />} /> */}
      <Route path="/gallery" exact element={<Gallery />} />
     
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
