import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Members({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  const [showGuest, setShowGuest] = useState(false);
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
          className="members_head text-nowrap"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[1]?.main_head}
        </h1>
        <div className="member_line"></div>
        <p
          className="members_paratext"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[1]?.main_paratext}
        </p>
        {showGuest ? (
          <img className="map_total" src="./assets/guestmap.png" alt="" />
        ) : (
          <img className="map_total" src="./assets/map.png" alt="" />
        )}

        <button
          className="green_button"
          onClick={() => {
            setShowGuest(false);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[1]?.main_head}
        </button>

        <button
          className="red_button"
          onClick={() => {
            setShowGuest(true);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[1]?.guest_country}
        </button>
        {/* <button className="language_btn" onClick={() => setPageIndex(3)}>
          View Next
        </button> */}
      </div>
    </>
  );
}

export default Members;
