import React, { useLayoutEffect, useState } from "react";
export const MyMobile = (props) => {
  const [windowSize, setwindowSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setwindowSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <>{windowSize < 768 ? props.children : null}</>;
};

export default MyMobile;
