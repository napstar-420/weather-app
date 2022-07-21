import React, { useState } from "react";
import Suggestions from "./SubComponents/Suggestions.js";
import { BsGlobe } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { options, geoDB_URL } from "../API/fetchCities.js";

const Header = ({ value, setValue, reply, setReply, handleSearch }) => {
  const [focus, setFocus] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value < 3) {
      setReply([]);
    } else {
      fetch(`${geoDB_URL}${value}`, options)
        .then((response) => response.json())
        .then((response) => setReply(response.data))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="header">
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <BsGlobe style={{ marginRight: "0.3rem" }} /> Geo Weather
      </h2>
      <div className="search_container">
        <div className="search_subContainer">
          <input
            className="searchCity"
            type="text"
            value={value}
            placeholder="Search city..."
            onFocus={() => {
              setFocus(!focus);
            }}
            onBlur={() => {
              setFocus(!focus);
            }}
            onChange={handleChange}
          />
          <button className="search_btn" onClick={handleSearch}>
            <IoSearch />
          </button>
        </div>
        <Suggestions focus={focus} reply={reply} setValue={setValue} />
      </div>
    </div>
  );
};

export default Header;
