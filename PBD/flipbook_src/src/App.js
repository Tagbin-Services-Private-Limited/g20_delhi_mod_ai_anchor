import { useState, useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import MyFlipBook from "./Component/MyFlipbook";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [showHome, setShowHome] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [selectedBook, setSelectedBook] = useState(1);

  var timer = null;
  useEffect(() => {
    if (openLang) {
      timer = setTimeout(() => {
        setOpenLang(false);
      }, 5000);
      return () => {
        // clean up
        clearTimeout(timer);
      };
    }
  }, [openLang]);

  const handleClick = ({ book }) => {
    setSelectedBook(book);
    setShowHome(false);
  };
  return (
    <div
      className="img-fluid main-cont"
      style={{
        backgroundPosition: "top",
        backgroundImage: `url(${"./assets/plain_bg.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflowY: "hidden",
        height: "100vh ",
        position: "relative",
      }}
    >
      {showHome ? (
        <div>
          <p className="head_eng text-nowrap">Archival Collection</p>
          <p className="head_hin text-nowrap">अभिलेखीय संग्रह</p>
          <div className="container main_box  justify-content-center align-items-center">
            {/* <div className="row d-flex justify-content-center align-items-center"> */}
            <div
              onClick={() => {
                setSelectedBook(1);
                setShowHome(false);
              }}
            >
              <img className="box1" src="./assets/book_cover/1.png" alt="1" />
            </div>
            {/* <div
              onClick={() => {
                setSelectedBook(2);
                setShowHome(false);
              }}
            >
              <img className="box2" src="./assets/book_cover/2.png" alt="1" />
            </div>
            <div
              onClick={() => {
                setSelectedBook(3);
                setShowHome(false);
              }}
            >
              <img className="box3" src="./assets/book_cover/3.png" alt="1" />
            </div>
            <div
              onClick={() => {
                setSelectedBook(4);
                setShowHome(false);
              }}
            >
              <img className="box4" src="./assets/book_cover/4.png" alt="1" />
            </div>
            <div
              onClick={() => {
                setSelectedBook(5);
                setShowHome(false);
              }}
            >
              <img className="box5" src="./assets/book_cover/5.png" alt="1" />
            </div> */}
            {/* </div> */}
          </div>

          <p onClick={() => setShowHome(false)}>
            <span className="explore">Click to Explore</span>
            <img className="touch" src="./Click_to_Touch.gif" alt="" />
            <span className="explore_hin">
              एक्सप्लोर करने के लिए क्लिक करें
            </span>
          </p>
        </div>
      ) : (
        <MyFlipBook
          setShowHome={setShowHome}
          setSelectedBook={setSelectedBook}
          selectedBook={selectedBook}
        />
      )}
      <>
        <div
          className="home_div"
          onClick={() => {
            setShowHome(true);
          }}
        >
          <img src="./assets/home.svg" alt="home" />
        </div>
        {/* Language Selection */}
        {openLang ? (
          <div className="open_lang">
            <div className="language_option">
              <div className="row">
                <div
                  className="col-6 lang_en cursor-pointer"
                  onClick={() => {
                    changeLanguage("en");
                    setOpenLang(false);
                  }}
                >
                  English
                </div>
                <span className="line"></span>
                <div
                  className="col-6 lang_hin cursor-pointer"
                  onClick={() => {
                    changeLanguage("hin");
                    setOpenLang(false);
                  }}
                >
                  हिन्दी
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="close_lang">
            <img
              src="./assets/lang.png"
              alt="language"
              onClick={() => {
                setOpenLang(true);
              }}
            />
          </div>
        )}
      </>
    </div>
  );
}

export default App;
