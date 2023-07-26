import React, { useState } from "react";

const Form = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    // geolocation: "", // You might want to handle this separately with a geolocation API
    state: "",
    district: "",
    email: "",
  });

  const indiaStates = ["state1", "state2", "state3"]; // Fill this array with the actual states
  const indiaDistricts = ["district1", "district2", "district3"]; // Fill this array with the actual districts

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    // Here you can handle what happens with the formInput object
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleInputChange} />
      <input name="age" placeholder="Age" onChange={handleInputChange} />
      {/* <input
        name="geolocation"
        placeholder="Geolocation"
        onChange={handleInputChange}
      /> */}
      <select name="state" onChange={handleInputChange}>
        {indiaStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select name="district" onChange={handleInputChange}>
        {indiaDistricts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
