
import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import AWS from 'aws-sdk';
import {Buffer} from 'buffer';
import draw from './utilities'
import * as tf from '@tensorflow/tfjs';
import io from 'socket.io-client';
AWS.config.update({
    accessKeyId: "AKIAXJJIYLL3J7PUBPQW",
    secretAccessKey: "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",
    region: "ap-south-1",
});

const rekognition = new AWS.Rekognition();

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const socket = useRef(null); // Initialize socket reference
  const [captureMode, setCaptureMode] = useState(false);
  const [captureImage, setCaptureImage] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [name,setName]= useState('')
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [timer, setTimer] = useState(null);
  const [lang,setSelectedLanguage]= useState('fr')
  const canvasRef = useRef(null);
  
  const blazeface = require('@tensorflow-models/blazeface')
  useEffect(() => {
    socket.current = io.connect('localhost:8000');
    socket.current.emit('camera', true);
        socket.current.on('cam', (msg) => {
            console.log(msg)
    setIsCameraOn(msg);
        });
        socket.current.on('receive', (msg) => {
          console.log(msg)
          setSelectedLanguage(msg);
              });
    const interval = setInterval(() => {
        if(isCameraOn){
   runFacedetection();
        } 
    }, 1000); // Capture image every 5 seconds
    const sendSocketMessage = () => {
        socket.current.emit('camera', false);
      };
  
      // Attach the event listener to the 'beforeunload' event
      window.addEventListener('beforeunload', sendSocketMessage);
    return () =>{ clearInterval(interval);       window.removeEventListener('beforeunload', sendSocketMessage); socket.current.disconnect();  }// Clean up the interval on component unmount
  }, []);
  const runFacedetection = async () => {

    const model = await blazeface.load()
    console.log("FaceDetection Model is Loaded..") 

      detect(model);
  
 
}
const returnTensors = false;

const detect = async (model) => {
 
    if(
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ){
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
   
        //Set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
   
        //Set canvas height and width
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;

        // Make detections

        const prediction = await model.estimateFaces(video, returnTensors);

        console.log(prediction)
if(prediction.length==1){
  socket.current.emit("send",lang)
}
        const ctx = canvasRef.current.getContext("2d");
       
        draw(prediction, ctx)
      }

    }


    return (
      <>
      {isCameraOn&&
      <div className="App">
        <header className="App-header">
          <Webcam
           ref={webcamRef}
           style={{
             position: "absolute",
             marginLeft: "auto",
             marginRight: "auto",
             top:100,
             left:0,
             right:80,
             textAlign: "center",
             zIndex:9,
             width:640,
             height:480,
          }}
           />
  
          <canvas
           ref={canvasRef}
           style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top:100,
            left:0,
            right:80,
            textAlign: "center",
            zIndex:9,
            width:640,
            height:480,
         }}
          />
          
 
           
          <div>
         <h2>Search Results</h2>
         Hi {name.split('.')[0]}
       </div>
        </header>
      </div>
        }
        </>
    );
};

export default WebcamCapture;