import React, { useState } from "react";
import Suggestions from "./Suggestions.js";
import { options, geoDB_URL } from "../API/fetchCities.js";
import { BsGlobe } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [value, setValue] = useState("");
  const [reply, setReply] = useState([]);
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
          <button className="search_btn">
            <IoSearch />
          </button>
        </div>
        <Suggestions focus={focus} reply={reply} />
      </div>
    </div>
  );
};

export default Header;
