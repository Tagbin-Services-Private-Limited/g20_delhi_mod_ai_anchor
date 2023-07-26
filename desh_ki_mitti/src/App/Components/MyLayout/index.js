import { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLaytout";
import MobileLayout from "./MobileLayout";
import { Link } from "react-router-dom";

export const MyLayout = (props) => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  let [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions < 768 ? (
    <MobileLayout
      footer={props.footer}
      bg_m={props.bg_m}
      transparent={props.transparent}
      loading={props.loading}
    >
      {props.children}

    </MobileLayout>
  ) : (
    <DesktopLayout
      header={props.header}
      sideheader={props.sideheader}
      bg={props.bg}
      transparent={props.transparent}
      loading={props.loading}
      hideScroll={props?.hideScroll}
    >
      {props.children}
    </DesktopLayout>

  );
};

export default MyLayout;
