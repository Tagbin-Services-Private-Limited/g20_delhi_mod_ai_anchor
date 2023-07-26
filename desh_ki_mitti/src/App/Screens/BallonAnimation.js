import React, { useState, useEffect } from "react";
import "./BallonAnimation.css"; // Import the CSS file for the animation

const BallonAnimation = ({ userLocation, onAnimationEnd }) => {
  const [hasReachedTop, setHasReachedTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = document.documentElement.getBoundingClientRect();
      if (top <= 0 && !hasReachedTop) {
        setHasReachedTop(true);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasReachedTop]);

  const handleAnimationEnd = () => {
    onAnimationEnd();
  };

  return (
    <div className={`balloon-container ${hasReachedTop ? "explode" : ""}`}>
      <div
        className={`balloon-animation ${hasReachedTop ? "explode" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      ></div>
    </div>
  );
};

export default BallonAnimation;
