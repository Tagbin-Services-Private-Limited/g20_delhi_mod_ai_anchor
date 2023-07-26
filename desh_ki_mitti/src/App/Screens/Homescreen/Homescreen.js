import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import soil_in_hand from "./../../Assets/img/homepage/soil_in_hand.png";
import map from "./../../Assets/img/homepage/map.jpg";
import Header from "./../../Components/Header";
import "./index.css";

export default function Homescreen() {
  let history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    geolocation: "",
    state: "",
    district: "",
    email: "",
  });

  const indiaStates = ["state1", "state2", "state3"];
  const indiaDistricts = ["district1", "district2", "district3"];

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    setShowForm(false); // hide form after submit
    history.push("/map");
  };

  const closeModal = () => {
    setShowForm(false);
  };
  return (
    <>
      <div
        className=""
        style={{
          backgroundSize: "cover",
          backgroundColor: "#00234a",
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          boxShadow: " 1px 15px 5px #B6965C",
          // height: "100vh",
          color: "#fff",
        }}
      >
        <Header />
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-6 d-flex align-items-center">
            <div className="soil_in_hand">
              <img
                className="hand img-fluid"
                // style={{ height: "800px" }}
                src={soil_in_hand}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="title">DESH KI MITTI</h1>
              <h2 className="subtitle">शहीदों को नमन | मिटटी को अर्पण</h2>
              <button
                className="tribute"
                onClick={() => {
                  // console.log("Paying tribute!");
                  setShowForm(true);
                }}
              >
                Virtual Tribute
              </button>
            </div>
          </div>

          {showForm && (
            <div className="modal">
              <div className="backdrop" onClick={closeModal} />
              <div className="form-container">
                <button className="close-button" onClick={closeModal}>
                  X
                </button>
                <form onSubmit={handleSubmit} className="form-fields">
                  <label>
                    Name:
                    <input
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Age:
                    <input
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                      onChange={handleInputChange}
                    />
                  </label>
                  {/* <label>
                    Geolocation:
                    <input
                      name="geolocation"
                      placeholder="Enter your geolocation"
                      onChange={handleInputChange}
                    />
                  </label> */}
                  <label>
                    State:
                    <select name="state" onChange={handleInputChange}>
                      <option value="">--Please select your State--</option>
                      {indiaStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    District:
                    <select name="district" onChange={handleInputChange}>
                      <option value="">--Please select your District--</option>
                      {indiaDistricts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Email:
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={handleInputChange}
                    />
                  </label>
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
