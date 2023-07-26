import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function LogoTheme({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  const [itemC, setItemC] = useState(
    t("pages", {
      returnObjects: true,
    })
  );

  useEffect(() => {
    setItemC(
      t("pages", {
        returnObjects: true,
      })
    );
  }, [i18n.language]);
  return (
    <>
      <div className="animate">
        <h1
          className="logoTheme_head"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[3]?.main_head}
        </h1>
        <div className="logo_line"></div>
        <video
          className="logo_reveal"
          autoPlay
          //   muted
          loop={true}
          src="./assets/LogoReveal.mp4"
          poster=""
          playsInline
          width="auto"
        ></video>
        <img className="g20_full" src="./assets/g20logo_full.png" alt="G20" />
        <p
          className="logoTheme_para"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[3]?.paratext}
        </p>

        {/* <button className="language_btn" onClick={() => setPageIndex(5)}>
          View Next
        </button> */}
      </div>
    </>
  );
}

export default LogoTheme;
