import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function NDSummit({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  const [itemC, setItemC] = useState(
    t("pages", {
      returnObjects: true,
    })
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };
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
        <h1 className="nd_topic text-nowrap">{itemC[4]?.main_head}</h1>
        <div className="nd_line"></div>
        <p
          className="nd_paratext"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[4]?.paratext}
        </p>
        <p
          className="nd_sub_head"
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[4]?.sub_head}
        </p>

        <Slider className="people_slider" {...settings}>
          {itemC[4]?.people?.map((peeps, index) => {
            return (
              <div key={index} className="people_card">
                <div className="">
                  <img
                    className="people_photo"
                    src={peeps?.photo}
                    alt="photo"
                  />
                </div>

                <img
                  className="flag_img"
                  src={peeps?.flag_photo}
                  alt="flag_photo"
                />
                <div className="" style={{ marginTop: "28px" }}>
                  <p
                    className="people_name"
                    style={{
                      fontFamily:
                        i18n.language == "en" ? "Montserrat" : "Poppins",
                    }}
                  >
                    {peeps?.country}
                  </p>
                  <p
                    className="people_name"
                    style={{
                      fontFamily:
                        i18n.language == "en" ? "Montserrat" : "Poppins",
                    }}
                  >
                    {peeps?.position}
                  </p>
                  <p
                    className="people_name"
                    style={{
                      fontFamily:
                        i18n.language == "en" ? "Montserrat" : "Poppins",
                    }}
                  >
                    {peeps?.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* <button className="language_btn" onClick={() => setPageIndex(6)}>
          View Next
        </button> */}
      </div>
    </>
  );
}

export default NDSummit;
