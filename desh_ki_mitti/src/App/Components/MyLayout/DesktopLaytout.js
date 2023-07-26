import React from "react";
import SideHeader from "../SideHeader";
import Header from "../Header";
import VillageBg from "../../Assets/img/General/dashboard.svg";
import { Link } from "react-router-dom";

export const DesktopLayout = (props) => {
  return (
    <React.Fragment>
      <div style={{ Height: "100vh" }}>
        {props.header === false ? (
          ""
        ) : (
          <Header transparent={props.transparent}></Header>
        )}
        <div
          className="th-90-height-scroll"
          style={{
            paddingTop: `${props.header === false ? "" : "60px"}`,
            backgroundColor: "#F7F7F7",
            backgroundImage: `url(${props.bg ? props.bg : ''})`,
            height: "calc(100vh)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            transition: "all 1s ease-in-out",
            overflowY: `${props?.hideScroll ? '' : 'scroll'}`,
            overflowX: "none",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div className="container-fluid pt-3 pb-4">
            {props.sideheader === false ? (
              <div className="row">{props.children}</div>
            ) : (
              <div className="container-fluid">
                <div
                  className="row d-flex justify-content-center" >
                  <SideHeader />
                </div>
                <div className="container-fluid" style={{ marginTop: "2%" }}>
                  <div className="row d-flex justify-content-center">
                    {props.loading ? (
                      <div className="th-ht-100 col-12 d-flex justify-content-center align-items-center">
                        <div
                          className=" spinner-grow th-primary text"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      props.children
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {window.location.pathname == "/" || window.location.pathname == "/login" || window.location.pathname == "/signup" ?
            "" :
            <div className="privacyDesk d-flex justify-content-center">
              <span > <Link to="/terms"> Terms and Conditions</Link></span>  &nbsp; | &nbsp; <span><Link to="/privacy"> Privacy Policy </Link></span>
            </div>
          }
        </div>
      </div>
    </React.Fragment >
  );
};

export default DesktopLayout;
