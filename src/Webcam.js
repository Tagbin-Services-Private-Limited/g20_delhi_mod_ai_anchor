
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
  const startCapture = () => {
    setCaptureMode(true);
  
      if (webcamRef.current) {
        const screenshot = webcamRef.current.getScreenshot();
        setCaptureImage(screenshot);
        setCaptureMode(false);
        searchImage(screenshot);
      }
 
  };
  useEffect(() => {
    socket.current = io.connect('localhost:8000');
    socket.current.emit('camera', true);
        socket.current.on('cam', (msg) => {
            console.log(msg)
    setIsCameraOn(msg);
        });
    
    const interval = setInterval(() => {
        if(isCameraOn){
      startCapture();
        } 
    }, 2000); // Capture image every 5 seconds
    const sendSocketMessage = () => {
        socket.current.emit('camera', false);
      };
  
      // Attach the event listener to the 'beforeunload' event
      window.addEventListener('beforeunload', sendSocketMessage);
    return () =>{ clearInterval(interval);       window.removeEventListener('beforeunload', sendSocketMessage); socket.current.disconnect();  }// Clean up the interval on component unmount
  }, []);
  const searchImage = async (imageData) => {
 
    try {
      const params = {
        CollectionId: 'g20', // Change to your collection name
        Image: {
          Bytes: Buffer.from(imageData.split(",")[1], 'base64'),
        },
        MaxFaces: 10,
        FaceMatchThreshold: 90,
      };

      const searchResponse = await rekognition.searchFacesByImage(params).promise();

      if (searchResponse.FaceMatches && searchResponse.FaceMatches.length > 0) {
        const results = searchResponse.FaceMatches.map(match => ({
          similarity: match.Similarity.toFixed(2),
          imageId: match.Face.ExternalImageId,
        }));
       
        setSearchResults(results);
        if(name!==results[0]?.imageId?.split(".")[0]){
        socket.current.emit('send', results[0]?.imageId?.split(".")[0]);
        setName(results[0]?.imageId)
        }
      } else {
        setSearchResults([]);
        socket.current.emit('send', 'default');
        setName('No one at the screen from our db !')
      }
    } catch (error) {
      console.error('Error searching for image:', error);
      setSearchResults([]);
      socket.current.emit('send', 'default');
      setName('No one at the screen from our db !')
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
           Hi {name.split('.')[0]}
        </div>
      )}
    </div>
      }
      </>
  );
};

export default WebcamCapture;