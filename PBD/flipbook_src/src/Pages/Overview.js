import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

function Overview({ setPageIndex }) {
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
        <img className="overview_img" src="./assets/flags.png" alt="flags" />
        <p
          className="overview_mainhead text-nowrap"
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[0]?.page_topic}
        </p>
        <div className="about_line"></div>
        <p
          className="overview_paratext"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[0]?.main_paratext}
        </p>
        <div
          className={i18n.language == "en" ? "overview2" : "overview2_hin"}
        ></div>
        <p
          className={
            i18n.language == "en"
              ? "overview_sub_topic1"
              : "overview_sub_topic1_hin"
          }
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[0]?.sub_topic2}
        </p>
        <p className={i18n.language == "en" ? "year_1999" : "year_1999_hin"}>
          1999
        </p>

        <p
          className="overview_sub_paratext1"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[0]?.sub_paratext2}
        </p>
        <div
          className={i18n.language == "en" ? "overview1" : "overview1_hin"}
        ></div>
        <p
          className={
            i18n.language == "en"
              ? "overview_sub_topic2"
              : "overview_sub_topic2_hin"
          }
          style={{ fontFamily: i18n.language == "en" ? "Concept" : "Arya" }}
        >
          {itemC[0]?.sub_topic1}
        </p>
        <p className={i18n.language == "en" ? "year_2008" : "year_2008_hin"}>
          2008
        </p>
        <p
          className="overview_sub_paratext2"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[0]?.sub_paratext1}
        </p>
        {/* <button className="language_btn" onClick={() => setPageIndex(2)}>
        View Next
      </button> */}
        <Footer />
      </div>
    </>
  );
}

export default Overview;
