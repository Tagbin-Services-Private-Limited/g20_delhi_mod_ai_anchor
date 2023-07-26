import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import VillageBg from "../../Assets/img/General/dashboard.svg";
import { Link } from "react-router-dom";

export const MobileLayout = (props) => {
  return (
    <React.Fragment>
      <div style={{ height: "100vh" }}>
        {props.header === false ? (
          ""
        ) : (
          <Header transparent={props.transparent}></Header>
        )}
        <div
          className="th-90-height-scroll "
          style={{
            paddingTop: `${props.header === false ? "" : "40px"}`,
            backgroundColor: "#F7F7F7",
            backgroundImage: `url(${props.bg_m ? props.bg_m : ""})`,
            height: "calc(100vh)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            transition: "all 1s ease-in-out",
            overflowY: "scroll",
          }}
        >
          <div className="th-container py-3 ">
            <div className="row">
              {props.loading ? (
                <div className="th-ht-100 col-12 d-flex justify-content-center align-items-center">
                  <div className=" spinner-grow th-primary text" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  {props.children}
                  {window.location.pathname == "/" ||
                  window.location.pathname == "/login" ||
                  window.location.pathname == "/signup" ? (
                    ""
                  ) : (
                    <div className="privacysectionPlace mobile d-flex justify-content-center">
                      <span>
                        {" "}
                        <Link to="/terms"> Terms and Conditions</Link>
                      </span>{" "}
                      &nbsp; | &nbsp;{" "}
                      <span>
                        <Link to="/privacy"> Privacy Policy </Link>
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          {props.footer === false ? "" : <Footer />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileLayout;
