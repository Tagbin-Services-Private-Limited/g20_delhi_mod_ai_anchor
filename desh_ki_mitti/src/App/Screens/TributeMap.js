import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import BallonAnimation from "./BallonAnimation";

const TributeMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [zoom, setZoom] = useState(12);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  const handleTributeButtonClick = () => {
    setShowAnimation(true);
    setZoom(5);
  };

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };
  const mapLoaded = (map) => {
    // Do any additional map setup or operations here
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }} // Adjust the size as needed
        center={userLocation}
        zoom={zoom}
        onLoad={mapLoaded}
      >
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>

      <button className="tribute_map" onClick={handleTributeButtonClick}>
        Pay Tribute
      </button>

      {showAnimation && (
        <BallonAnimation
          userLocation={userLocation}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </div>
  );
};

export default TributeMap;
