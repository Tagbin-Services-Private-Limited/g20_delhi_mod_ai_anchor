/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LeaderboardIcon from "../../Assets/img/sidebar/leaderboard.svg";
import DiscoverIcon from "../../Assets/img/sidebar/explore.svg";
import DashboardIcon from "../../Assets/img/sidebar/dashboard.svg";
import DiscoverIconColored from "../../Assets/img/sidebar/explore-colored.svg";
import DashboardIconColored from "../../Assets/img/sidebar/dashboard-colored.svg";
import LeaderboardIconColored from "../../Assets/img/sidebar/leaderboard-colored.svg";
import Vectormapsearch from "../../Assets/img/sidebar/Vectormapsearch.svg";
import Vectortintedmapsearch from "../../Assets/img/sidebar/VectortintedMapSearch.svg";
import Headerlogo from "../../Assets/img/Artist/Headerlogo.svg";
import Headerlogocolor from "../../Assets/img/Artist/Headerlogocolor.svg";

let FooterData = [
  {
    id: 0,
    text: "Explore",
    icon: DiscoverIcon,
    iconActive: DiscoverIconColored,
    to: "/explore",
  },
  {
    id: 1,
    text: "Leaderboard",
    icon: LeaderboardIcon,
    iconActive: LeaderboardIconColored,
    to: "/leaderboard",
  },
  {
    id: 5,
    text: "Search",
    icon: Vectormapsearch,
    iconActive: Vectortintedmapsearch,
    to: "/searchonmap",
  },
  {
    id: 2,
    text: "Dashboard",
    icon: DashboardIcon,
    iconActive: DashboardIconColored,
    to: "/home",
  },

  {
    id: 6,
    text: "Artist",
    icon: Headerlogo,
    iconActive: Headerlogocolor,
    to: "/artist-explore",
  },
  {
    id: 8,
    text: "Art Gallery",
    icon: Headerlogo,
    iconActive: Headerlogocolor,
    to: "/art-gallery",
  },

  {
    id: 9,
    text: "Video Gallery",
    icon: Headerlogo,
    iconActive: Headerlogocolor,
    to: "/video-gallery",
  },
];

const Footer = () => {
  const [currentTab, setCurrentTab] = useState(2);

  useEffect(() => {
    if (
      window.location.pathname.includes("/explore") ||
      window.location.pathname.includes("/village-details")
    ) {
      setCurrentTab(0);
    } else if (window.location.pathname.includes("/leaderboard")) {
      setCurrentTab(1);
    } else if (window.location.pathname.includes("/home")) {
      setCurrentTab(2);
    } else if (
      window.location.pathname.includes("/profile") ||
      window.location.pathname.includes("/artist-profile")
    ) {
      setCurrentTab(4);
    } else if (window.location.pathname.includes("/searchonmap")) {
      setCurrentTab(5);
    } else if (
      window.location.pathname.includes("/artist-explore") ||
      window.location.pathname.includes("/view-profile")
    ) {
      setCurrentTab(6);
    } else if (window.location.pathname.includes("/art-gallery")) {
      setCurrentTab(8);
    } else if (window.location.pathname.includes("/video-gallery")) {
      setCurrentTab(9);
    }
  }, [currentTab]);

  return (
    <>
      <React.Fragment>
        <div className="w-100 fixed-bottom container-fluid th-footer">
          <div className="row py-2">
            {FooterData.map((item, index) => (
              <>
                {localStorage.getItem("user") ? (
                  <div className="col" key={index}>
                    <Link
                      to={
                        item.id === 4
                          ? localStorage.getItem("user")
                            ? "/profile"
                            : "/login"
                          : item.id === 1
                          ? localStorage.getItem("user")
                            ? "/leaderboard"
                            : "/login"
                          : item.id === 2
                          ? localStorage.getItem("user")
                            ? "/home"
                            : "/login"
                          : item.to
                      }
                    >
                      <div className="th-pointer text-center">
                        {item?.id == 9 ? (
                          currentTab !== item.id ? (
                            <svg
                              style={{
                                width: "35px",
                                height: "31px",
                                fill: "#c4c4c4",
                                outline: "none",
                              }}
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="YouTubeIcon"
                              tabindex="-1"
                              title="YouTube"
                            >
                              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                            </svg>
                          ) : (
                            <svg
                              style={{
                                width: "35px",
                                height: "31px",
                                fill: "#75cf8f",
                                outline: "none",
                              }}
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="YouTubeIcon"
                              tabindex="-1"
                              title="YouTube"
                            >
                              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                            </svg>
                          )
                        ) : (
                          <img
                            className="img-fluid"
                            src={
                              currentTab === item.id
                                ? item.iconActive
                                : item.icon
                            }
                            height="25px"
                          />
                        )}
                        <div
                          className={
                            "th-12  " +
                            (currentTab === item.id
                              ? " th-primary"
                              : item.id == 5
                              ? " th-grey-3 pt-1"
                              : item.id == 6 // this is for aligning artist icon
                              ? " th-grey-3 "
                              : " th-grey-3")
                          }
                        >
                          {item.text}
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : item.id != 4 && item.id != 2 ? (
                  <div className="col" key={index}>
                    <Link
                      to={
                        item.id === 1
                          ? localStorage.getItem("user")
                            ? "/leaderboard"
                            : "/login"
                          : item.id === 6
                          ? localStorage.getItem("user")
                            ? "/artist-explore"
                            : "/login"
                          : item.to
                      }
                    >
                      <div className="th-pointer text-center">
                        <img
                          className="img-fluid"
                          src={
                            currentTab === item.id ? item.iconActive : item.icon
                          }
                          height={"25px"}
                        />
                        <div
                          className={
                            "th-12  " +
                            (currentTab === item.id
                              ? " th-primary"
                              : item.id == 5
                              ? " th-grey-3 pt-1"
                              : item.id == 6 // this is for aligning artist icon
                              ? " th-grey-3 "
                              : " th-grey-3")
                          }
                        >
                          <p
                            className={
                              item.id == 5 ? "custom-padding-for-search" : ""
                            }
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Footer;
