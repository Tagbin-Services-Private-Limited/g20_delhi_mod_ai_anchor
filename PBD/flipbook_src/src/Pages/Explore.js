import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Explore({ setPageIndex }) {
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
        <p
          className="explore_head"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[5]?.main_head}
        </p>
        <div className="explore_line"></div>
        <p
          className="explore_topic1"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[5]?.topic1}
        </p>
        <p
          className="explore_sub_paratext1"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[5]?.sub_paratext1}
        </p>
        <img className="explore1" src="./assets/explore1.png" alt="" />
        <p
          className="explore_topic2"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[5]?.topic2}
        </p>
        <p
          className="explore_sub_paratext2"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[5]?.sub_paratext2}
        </p>
        <img className="explore2" src="./assets/explore2.png" alt="" />
        <p
          className="explore_topic3"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[5]?.topic3}
        </p>
        <p
          className="explore_sub_paratext3"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[5]?.sub_paratext3}
        </p>
        <img className="explore3" src="./assets/explore3.png" alt="" />
        <p
          className="explore_topic4"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[5]?.topic4}
        </p>
        <p
          className="explore_sub_paratext4"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[5]?.sub_paratext4}
        </p>
        <img className="explore4" src="./assets/explore4.png" alt="" />
        {/* <button className="language_btn" onClick={() => setPageIndex(0)}>
          Home
        </button> */}
      </div>
    </>
  );
}

export default Explore;
