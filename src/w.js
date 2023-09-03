
import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import AWS from 'aws-sdk';
import {Buffer} from 'buffer';
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
  const [lang,setSelectedLanguage]= useState('en')
  const startCapture = () => {
    setCaptureMode(true);
  
      if (webcamRef.current) {
        const screenshot = webcamRef.current.getScreenshot();
        setCaptureImage(screenshot);
        setCaptureMode(false);
        if(screenshot){
        searchImage(screenshot);
        }
      }
 
  };
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
      startCapture();
        } 
    }, 4000); // Capture image every 5 seconds
    const sendSocketMessage = () => {
        socket.current.emit('camera', false);
      };
  
      // Attach the event listener to the 'beforeunload' event
      window.addEventListener('beforeunload', sendSocketMessage);
    return () =>{ clearInterval(interval);       window.removeEventListener('beforeunload', sendSocketMessage); socket.current.disconnect();  }// Clean up the interval on component unmount
  }, []);
  const searchImage = async (imageData) => {
    const params = {
      Image: {
        Bytes: Buffer.from(imageData?.split(",")[1], 'base64'),
      },
    };
  
    try {
      const response = await rekognition.detectFaces(params).promise();
  
      if (response.FaceDetails.length === 1) {
        // Only one face detected, take action if it's a real human face
        const faceDetail = response.FaceDetails[0];
        const confidenceThreshold = 80; // Set your confidence threshold here

        // Check if the face confidence score is above the threshold
        if (faceDetail.Confidence >= confidenceThreshold) {
          // Check pose angles to ensure it's fully in front of the camera
          const isFrontalFace =
            Math.abs(faceDetail.Pose.Yaw) < 15 &&
            Math.abs(faceDetail.Pose.Pitch) < 15 &&
            Math.abs(faceDetail.Pose.Roll) < 15;
  
          if (isFrontalFace) {
            console.log(lang)
        socket.current.emit("send",lang)
            // Take further actions if a frontal face is detected.
          }
        }
      
      } else if (response.FaceDetails.length > 1) {
        // More than one face detected, take action as needed
        console.log('More than one face detected:', response.FaceDetails);
        // Take appropriate action when multiple faces are detected.
      } else {
        // No faces detected
        console.log('No faces detected.');
      }
    } catch (error) {
      console.error('Error detecting faces:', error);
    }
  };
  


  return (
    <>
    {isCameraOn&&
    <div className="App">
    
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      
 
      {(
        <div style={{position:"absolute",bottom:"50px"}}>
          <h2>Search Results</h2>
       
        </div>
      )}
    </div>
      }
      </>
  );
};

export default WebcamCapture;