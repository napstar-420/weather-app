import React, { useState } from "react";
import Suggestions from "./Suggestions.js";
import { BsGlobe } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [value, setValue] = useState("");
  const [reply, setReply] = useState([]);
  const [focus, setFocus] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c33169b7b7mshd4cdd31d9ac58dep1dfd47jsnf4695d416579",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (value < 3) {
      setReply([]);
    } else {
      fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`,
        options
      )
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
