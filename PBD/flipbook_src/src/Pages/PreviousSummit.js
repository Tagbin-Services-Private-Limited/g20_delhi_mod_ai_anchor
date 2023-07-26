import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function PreviousSummit({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  const [itemC, setItemC] = useState(
    t("pages", {
      returnObjects: true,
    })
  );
  const [indexO, setIndexO] = useState(0);
  const [year, setYear] = useState("2022");
  const [maxLen, setMaxLen] = useState(2);
  const [showSummary, setShowSummary] = useState(false);
  useEffect(() => {
    setItemC(
      t("pages", {
        returnObjects: true,
      })
    );
  }, [i18n.language]);
  const handleSelect = (selectedIndex, e) => {
    setIndexO(selectedIndex);
  };
  const nextImg = () => {
    if (indexO < maxLen - 1) {
      setIndexO(indexO + 1);
    }
  };
  const prevImg = () => {
    if (indexO > 0) {
      setIndexO(indexO - 1);
    }
  };
  const loadImage = (year) => {
    setYear(year);
  };
  return (
    <>
      <div className="animate">
        <h1
          className="previous_summit_main_topic"
          style={{
            fontFamily: i18n.language == "en" ? "Concept" : "Arya",
          }}
        >
          {itemC[2]?.main_head}
        </h1>
        <div className="prev_head_line"></div>
        <span
          className="year_list"
          style={{
            padding: "5px",
            display: "flex",
            flexWrap: "no-wrap",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {itemC[2]?.year_summit?.map((years, index) => {
            return (
              <>
                <span style={{ marginRight: "8px" }}>
                  <button
                    className={
                      year == years.year ? "selected_year" : "not_selected_year"
                    }
                    style={{ width: "140px" }}
                    onClick={() => {
                      loadImage(years.year);
                      setIndexO(0);
                      setMaxLen(years?.total_img);
                    }}
                  >
                    {years.year}
                  </button>
                  <span>&nbsp;</span>
                </span>
              </>
            );
          })}
        </span>

        {itemC[2]?.year_summit?.map((years, index) => {
          if (years.year == year) {
            return showSummary ? (
              <div className="animate">
                <img className="logo" src={years?.logo} alt="logo" />
                <p
                  className="summary_head"
                  style={{
                    fontFamily: i18n.language == "en" ? "Concept" : "Arya",
                  }}
                >
                  {years.summit_head}
                </p>
                <div className="summary_info">
                  <p
                    style={{
                      fontFamily:
                        i18n.language == "en" ? "Montserrat" : "Poppins",
                    }}
                  >
                    {years.summit_info}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <img className="logo" src={years?.logo} alt="logo" />
                <span className="carausel-section" key={index}>
                  <Carousel
                    interval={3000000}
                    style={{
                      transition: "all .2s",
                      borderRadius: "5px",
                    }}
                    fade
                    key={index}
                    activeIndex={indexO}
                    className="imgSlider animate"
                    onSelect={handleSelect}
                    wrap={false}
                  >
                    {years?.images?.map((item, indx) => {
                      return (
                        <Carousel.Item key={indx}>
                          <img
                            className="d-block w-100 gradient"
                            src={item?.pic}
                            alt="1"
                          />
                          <img
                            className="gradient_img"
                            src="./assets/rect.png"
                            alt=""
                          />
                          <img
                            className="gradient_img"
                            src="./assets/rect.png"
                            alt=""
                          />
                          <Carousel.Caption>
                            <p
                              style={{
                                fontFamily:
                                  i18n.language == "en"
                                    ? "Montserrat"
                                    : "Poppins",
                              }}
                            >
                              {item?.caption}
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                  <img
                    onClick={() => prevImg()}
                    className="prev_arr"
                    src="./assets/prev_arr.svg"
                    alt="<"
                  />
                  <img
                    onClick={() => nextImg()}
                    className="next_arr"
                    src="./assets/next_arr.svg"
                    alt=">"
                  />
                </span>
              </>
            );
          }
        })}
        <button
          className="green_button"
          onClick={() => {
            setShowSummary(false);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[2]?.gallery}
        </button>

        <button
          className="red_button"
          onClick={() => {
            setShowSummary(true);
          }}
          style={{
            fontFamily: i18n.language == "en" ? "Montserrat" : "Poppins",
          }}
        >
          {itemC[2]?.summit_info_btn}
        </button>
        {/* <button className="language_btn" onClick={() => setPageIndex(4)}>
          View Next
        </button> */}
      </div>
    </>
  );
}

export default PreviousSummit;
