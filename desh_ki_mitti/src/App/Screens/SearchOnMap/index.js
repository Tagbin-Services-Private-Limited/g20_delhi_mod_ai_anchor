import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlaceholder from "react-placeholder";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import firebase from "../../../firebase";
import MyLayout from "../../Components/MyLayout";

import Default from "../../Assets/img/General/default.png";
import "react-placeholder/lib/reactPlaceholder.css";
import "./index.css";
import { distanceBetween, geohashQueryBounds } from "geofire-common";

const VillageImage = ({ image_id }) => {
  const [imgUrl, setImgUrl] = useState("");

  const getData = async () => {
    const url = `https://asia-south1-mgmd-356213.cloudfunctions.net/getSignedUrl?foo=thumbnail/${image_id}.jpg`;
    let data = "";
    await axios.get(url).then(function (response) {
      if (response) {
        data = response.data;
      }
    });
    return data;
  };

  useEffect(() => {
    if (image_id) {
      getData().then((dd) => setImgUrl(dd));
    } else {
      setImgUrl(Default);
    }
  }, [image_id]);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ cursor: "pointer" }}
      >
        {
          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src={imgUrl}
            alt="..."
          />
        }
      </div>
    </>
  );
};

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: 22.677933,
  lng: 80.461648,
};
function Index() {
  const [selected, setSelected] = React.useState(0);
  const [fireData, setFireData] = React.useState([]);
  const [isItemDetail, setIsItemDetail] = React.useState();
  const [isItemDetailImg, setIsItemDetailImg] = React.useState();

  const hasWindow = typeof window !== "undefined";

  const history = useHistory();

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const getData = async (id) => {
    const url = `https://asia-south1-mgmd-356213.cloudfunctions.net/getSignedUrl?${id}.jpg`;
    let data = "";
    await axios.get(url).then(function (response) {
      data = response.data;
    });
    setIsItemDetailImg(data);
  };

  let [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const chipStyle = {
    backgroundColor: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "15px",
    cursor: "pointer",
  };
  const selectedChipStyle = {
    backgroundColor: "#75CF8F",
    color: "white",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "15px",
    cursor: "pointer",
  };

  const [topicsData, setTopicData] = useState([]);
  const [clickItem, setClickItem] = useState();

  const [map, setMap] = useState(null);
  const [viewport, setViewport] = useState({});
  const [foodData, setFoodData] = useState([]);
  const [dressData, setDressData] = useState([]);
  const [festivalData, setFestivalData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [ornamentData, setornamentData] = useState([]);
  const [libraries] = useState(["geometry", "drawing"]);

  //To Laod and set map refrence in state.

  const handleLoad = (map) => {
    setMap(map);
  };

  //To get Bounds and coordinates of center  when drag or zoom.

  function handleBounds() {
    if (map) {
      // Get the bounds of the current viewport
      const bounds = map.getBounds();

      // Get the center point of the bounds
      const center = bounds?.getCenter();

      // Reverse geocode the center point to get the state name or coordinate
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: center }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // Parse the state name or coordinate from the geocoding result
            const addressComponents = results[0]?.address_components;
            const stateName = addressComponents?.find((component) =>
              component.types.includes("administrative_area_level_1")
            )?.long_name;
            const coordinate = center.toJSON();

            // Update the viewport state with the state name or coordinate
            setViewport({
              stateName,
              coordinate,
            });
          }
        }
      });
    }
  }

  useEffect(() => {
    if (topicsData) {
      if (selected == 0) {
        setClickItem(topicsData["traditional_food"]);
      } else if (selected == 1) {
        setClickItem(topicsData["festivals"]);
      } else if (selected == 2) {
        setClickItem(topicsData["heritage_places"]);
      } else if (selected == 3) {
        setClickItem(topicsData["famous_personalities"]);
      } else if (selected == 4) {
        setClickItem(topicsData["ornaments"]);
      } else if (selected == 5) {
        setClickItem(topicsData["traditional_dress"]);
      }
    }
  }, [topicsData]);

  //fetching data when user clicks.

  const fetchData = (key) => {
    let db = firebase.firestore();
    let docRef = db.collection("large_village_detail");
    docRef
      .doc(key)
      .get()
      .then((docc) => {
        setTopicData(docc?.data()?.data);
      });
  };

  const ImageClick = (s_item) => {
    if (s_item) {
      setIsItemDetail(s_item);
      getData(s_item.id);
      fetchData(s_item.key);
    }
  };

  const [currentZoom, setCurrentZoom] = useState(5); //default
  function handleZoomChanged() {
    setCurrentZoom(this.getZoom());
  }

  useEffect(() => {
    if (viewport.coordinate) {
      geoPoint(viewport.coordinate);
    }
  }, [viewport]);

  //Geopoint

  function geoPoint(coord) {
    let sel;
    switch (selected) {
      case 0:
        sel = "food";
        break;
      case 1:
        sel = "festivals";
        break;
      case 2:
        sel = "heritage_places";
        break;
      case 3:
        sel = "famous_personalities";
        break;
      case 4:
        sel = "ornaments";
        break;
      case 5:
        sel = "traditional_dress";
        break;
      default:
        sel = "food";
        break;
    }
    const center = [parseFloat(coord.lat), parseFloat(coord.lng)];
    const radiusInM = 200 * 1000;

    // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
    // a separate query for each pair. There can be up to 9 pairs of bounds
    // depending on overlap, but in most cases there are 4.
    const bounds = geohashQueryBounds(center, radiusInM);
    const promises = [];
    let db = firebase.firestore();
    for (const b of bounds) {
      const q = db
        .collection("large_village_metadata2")
        .orderBy("geohash")
        .orderBy(sel)
        .startAt(b[0])
        .endAt(b[1]);

      promises.push(q.get());
    }

    // Collect all the query results together into a single list
    Promise.all(promises)
      .then((snapshots) => {
        const matchingDocs = [];

        for (const snap of snapshots) {
          for (const doc of snap.docs) {
            const lat = parseFloat(doc.get("lat"));
            const lng = parseFloat(doc.get("long"));

            // We have to filter out a few false positives due to GeoHash
            // accuracy, but most will match
            const distanceInKm = distanceBetween([lat, lng], center);
            const distanceInM = distanceInKm * 1000;
            if (distanceInM <= radiusInM) {
              matchingDocs.push(doc);
            }
          }
        }

        return matchingDocs;
      })
      .then((matchingDocs) => {
        let list = [];
        matchingDocs.forEach((e) => {
          let data = e.data();
          if (Object.keys(data).includes(sel)) {
            let object = {
              position: {
                lat: parseFloat(data?.lat),
                lng: parseFloat(data?.long),
              },
              name: data?.[sel]?.[0]?.name,
              media: data?.[sel]?.[0]?.media_id,
              village_name: data.village_name,
              state_name: data.state_name,
              key: data.key,
              id: data?.[sel]?.[0]?.media_id,
            };
            if (sel == "food") {
              const result = foodData.some((obj) => obj.key === object.key);
              if (!result) {
                list.push(object);
              }
            }

            if (sel == "festivals") {
              const result = festivalData.some((obj) => obj.key === object.key);
              if (!result) {
                list.push(object);
              }
            }

            if (sel == "heritage_places") {
              const result = placeData.some((obj) => obj.key === object.key);
              if (!result) {
                list.push(object);
              }
            }

            if (sel == "ornaments") {
              const result = ornamentData.some((obj) => obj.key === object.key);
              if (!result) {
                list.push(object);
              }
            }

            if (sel == "traditional_dress") {
              const result = dressData.some((obj) => obj.key === object.key);
              if (!result) {
                list.push(object);
              }
            }
          }
          if (sel == "food") {
            setFoodData([...foodData, ...list]);
          }

          if (sel == "festivals") {
            setFestivalData([...festivalData, ...list]);
          }

          if (sel == "heritage_places") {
            setPlaceData([...placeData, ...list]);
          }

          if (sel == "ornaments") {
            setornamentData([...ornamentData, ...list]);
          }

          if (sel == "traditional_dress") {
            setDressData([...dressData, ...list]);
          }
        });
      });
  }

  useEffect(() => {
    let sel;

    switch (selected) {
      case 0:
        sel = "food";

        break;
      case 1:
        sel = "festivals";

        break;
      case 2:
        sel = "heritage_places";

        break;
      case 3:
        sel = "famous_personalities";

        break;
      case 4:
        sel = "ornaments";

        break;
      case 5:
        sel = "traditional_dress";

        break;
      default:
        sel = "food";

        break;
    }
    let db = firebase.firestore();

    let docRef = db.collection("large_village_metadata2").orderBy(sel);

    docRef
      .limit(28)
      .get()
      .then((snapshots) => {
        let list;
        if (sel == "food") {
          list = foodData;
        }

        if (sel == "festivals") {
          list = festivalData;
        }

        if (sel == "heritage_places") {
          list = placeData;
        }

        if (sel == "ornaments") {
          list = ornamentData;
        }

        if (sel == "traditional_dress") {
          list = dressData;
        }

        snapshots.forEach((snapshot) => {
          let data = snapshot.data();

          let object = {
            position: {
              lat: parseFloat(data?.lat),
              lng: parseFloat(data?.long),
            },
            name: data?.[sel]?.[0]?.name,
            media: data?.[sel]?.[0]?.media_id,
            village_name: data.village_name,
            state_name: data.state_name,
            key: data.key,
            id: data?.[sel]?.[0]?.media_id,
          };
          if (sel == "food") {
            const result = list.some((obj) => obj.key === object.key);
            if (!result) {
              list.push(object);
            }
          }

          if (sel == "festivals") {
            const result = list.some((obj) => obj.key === object.key);
            if (!result) {
              list.push(object);
            }
          }

          if (sel == "heritage_places") {
            const result = placeData.some((obj) => obj.key === object.key);
            if (!result) {
              list.push(object);
            }
          }

          if (sel == "ornaments") {
            const result = list.some((obj) => obj.key === object.key);
            if (!result) {
              list.push(object);
            }
          }

          if (sel == "traditional_dress") {
            const result = list.some((obj) => obj.key === object.key);
            if (!result) {
              list.push(object);
            }
          }
        });

        if (sel == "food") {
          setFoodData([...list]);
        }

        if (sel == "festivals") {
          setFestivalData([...list]);
        }

        if (sel == "heritage_places") {
          setPlaceData([...list]);
        }

        if (sel == "ornaments") {
          setornamentData([...list]);
        }

        if (sel == "traditional_dress") {
          setDressData([...list]);
        }
      });
  }, [selected]);

  const awesomePlaceholder = (
    <>
      <div className="recentLoading media">Loading...</div>
    </>
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA93xR8JywwU_tDrKPfpSjqM5TDDQ8i_FE",
    libraries: libraries,
  });

  return (
    <MyLayout>
      <div className="col-md-12 p-3 bg-white">
        <div className="d-flex search_map_functionality justify-content-center">
          {isItemDetail && windowDimensions > 768 ? (
            <div
              className="search_sub_mobile th-br-15"
              style={{
                width: isItemDetail ? "30%" : "0%",
                padding: "0px 20px 0px",
                // overflow: "scroll",
                overflowY: "scroll",
                maxHeight: "800px",
              }}
            >
              <div className="d-flex justify-content-center pb-3">
                <div className="fw-bold">
                  {isItemDetail.village_name} Village
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn th-primary"
                  style={{
                    borderRadius: "5px",
                    padding: "5px 15px",
                    color: "#FFF",
                    background: "#75cf8f",
                  }}
                  onClick={() =>
                    history.push(`/village-details/${isItemDetail.key}`)
                  }
                >
                  Visit Village
                </button>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    padding: "0.5rem 0",
                    borderRadius: "18px",
                    objectFit: "contain",
                  }}
                  src={isItemDetailImg}
                  alt="..."
                />
                <div className="text-capitalize py-3 details-box">
                  <div className="map_image_detail">
                    <strong className="font-weight-bold d-flex justify-content-center">
                      {isItemDetail?.name}
                    </strong>
                  </div>
                  <div className="text-capitalize py-3 details-box">
                    <div className="map_image_detail">
                      {clickItem && clickItem.length > 0
                        ? clickItem?.map((item, index) => {
                            return (
                              <div key={index}>
                                {
                                  <>
                                    <div className="d-flex th-14 th-fw-500 mb-0 text-capitalize px-3">
                                      {item?.title}
                                    </div>
                                    <div className="th-12 py-2 px-3">
                                      {item?.description
                                        ? item?.description
                                        : item?.legend_stories}
                                    </div>
                                    <div>{item?.legend_stories}</div>
                                    <div>{item?.personal_details}</div>
                                  </>
                                }
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : isItemDetail && windowDimensions <= 768 ? (
            <>
              <Modal fullscreen={true} show={isItemDetail}>
                <Modal.Header
                  closeButton
                  onClick={() => setIsItemDetail("")}
                ></Modal.Header>
                <Modal.Body>
                  <div
                    className="search_sub_mobile th-br-15"
                    style={{
                      width: isItemDetail ? "100%" : "0%",
                      padding: "0px 20px 0px",
                    }}
                  >
                    <div className="">
                      <p className="map_item">
                        {isItemDetail.village_name} Village
                      </p>
                    </div>
                    <div className="d-flex align-item-center justify-content-center">
                      <button
                        className="btn th-primary"
                        style={{
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "#FFF",
                          background: "#75cf8f",
                        }}
                        onClick={() =>
                          history.push(`/village-details/${isItemDetail.key}`)
                        }
                      >
                        Visit Village
                      </button>
                    </div>
                    <div>
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          padding: "0.5rem 0",
                          borderRadius: "18px",
                          objectFit: "contain",
                        }}
                        src={isItemDetailImg}
                        alt="..."
                      />
                      <div className="text-capitalize py-3 details-box">
                        <div className="map_image_detail">
                          <div className="font-weight-bold d-flex justify-content-center">
                            {isItemDetail?.name}
                          </div>

                          {clickItem && clickItem.length > 0
                            ? clickItem?.map((item, index) => {
                                return (
                                  <div key={index}>
                                    {
                                      <>
                                        <div className="d-flex th-14 th-fw-500 mb-0 text-capitalize px-3">
                                          {item?.title}
                                        </div>
                                        <div className="th-12 py-2 px-3">
                                          {item?.description
                                            ? item?.description
                                            : item?.legend_stories}
                                        </div>
                                        <div>{item?.legend_stories}</div>
                                        <div>{item?.personal_details}</div>
                                      </>
                                    }
                                  </div>
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            ""
          )}
          <ReactPlaceholder ready={true} customPlaceholder={awesomePlaceholder}>
            <div
              className="search_sub"
              style={{ width: isItemDetail ? "70%" : "100%" }}
            >
              <div className="d-flex flex-row justify-content-around mx-2 map_search_label">
                <div
                  className="px-3 shadow-lg"
                  style={selected == 0 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(0);
                  }}
                >
                  Food
                </div>
                <div
                  className="px-3 shadow-lg"
                  style={selected == 5 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(5);
                  }}
                >
                  Traditional Dress
                </div>
                <div
                  className="px-3 shadow-lg"
                  style={selected == 4 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(4);
                  }}
                >
                  Ornaments
                </div>

                <div
                  className="px-3 shadow-lg"
                  style={selected == 1 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(1);
                  }}
                >
                  Festivals
                </div>
                <div
                  className="px-3 shadow-lg"
                  style={selected == 2 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(2);
                  }}
                >
                  Heritage Place
                </div>
                {/* <div
                  className="px-3 shadow-lg"
                  style={selected == 3 ? selectedChipStyle : chipStyle}
                  onClick={() => {
                    setIsItemDetail();
                    setSelected(3);
                  }}
                >
                  Famous Personality
                </div> */}
              </div>

              <div className="th-bg-white p-3">
                {isLoaded && (
                  <>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={currentZoom}
                      onLoad={handleLoad}
                      onUnmount={() => setMap(null)}
                      onZoomChanged={handleZoomChanged}
                      onBoundsChanged={handleBounds}
                    >
                      {currentZoom <= 6 ? (
                        <div>
                          {(selected == 0
                            ? foodData
                            : selected == 1
                            ? festivalData
                            : selected == 2
                            ? placeData
                            : selected == 4
                            ? ornamentData
                            : selected == 5
                            ? dressData
                            : foodData
                          )
                            ?.slice(0, 28)
                            .map((item) => {
                              return (
                                <CustomInfoWindow
                                  key={item.key}
                                  item={item}
                                  ImageClick={ImageClick}
                                />
                              );
                            })}
                        </div>
                      ) : (
                        <div>
                          {currentZoom >= 7 ? (
                            <>
                              {(selected == 0
                                ? foodData
                                : selected == 1
                                ? festivalData
                                : selected == 2
                                ? placeData
                                : selected == 4
                                ? ornamentData
                                : selected == 5
                                ? dressData
                                : foodData
                              ).map((item) => {
                                return (
                                  <CustomInfoWindow
                                    key={item.key}
                                    item={item}
                                    ImageClick={ImageClick}
                                  />
                                );
                              })}
                            </>
                          ) : (
                            <>
                              {(selected == 0
                                ? foodData
                                : selected == 1
                                ? festivalData
                                : selected == 2
                                ? placeData
                                : selected == 4
                                ? ornamentData
                                : selected == 5
                                ? dressData
                                : foodData
                              ).map((item) => {
                                return (
                                  <CustomInfoWindow
                                    key={item.key}
                                    item={item}
                                    ImageClick={ImageClick}
                                  />
                                );
                              })}
                            </>
                          )}
                        </div>
                      )}
                    </GoogleMap>
                  </>
                )}
              </div>
            </div>
          </ReactPlaceholder>
        </div>
      </div>
    </MyLayout>
  );
}

export default React.memo(Index);

const CustomInfoWindow = ({ item, ImageClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleImage = (itemV) => {
    ImageClick(itemV);
  };

  // setTimeout(() => { }, 300);
  return (
    <>
      {item.key && item.position && item.position.lat && item.position.lng && (
        <InfoWindow
          key={item?.key}
          options={{ disableAutoPan: true }}
          // position={item.position}
          position={{ lat: item.position.lat, lng: item.position.lng }}
          onDomReady={() => {
            document.getElementsByClassName("gm-ui-hover-effect")[0]?.remove();
          }}
        >
          <div
            className="custom_infowindow"
            onClick={() => handleImage(item)}
            style={{
              width: isHovered ? "200px" : "20px",
              height: "20px",
              zIndex: isHovered ? "10000" : "0",
            }}
          >
            {item?.id && <VillageImage image_id={item?.id} />}
            {isHovered && (
              <div
                className="text-capitalize"
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                <div>
                  <p>{item?.village_name}</p>
                </div>
                <div style={{ wordWrap: "break-word" }}>{item?.name}</div>
              </div>
            )}
          </div>
        </InfoWindow>
      )}
    </>
  );
};
