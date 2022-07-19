import React, { useState } from "react";
import Suggestions from "./Suggestions.js";

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
      <h2>Geo Weather</h2>
      <input
        type="text"
        value={value}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={handleChange}
      />
      <Suggestions focus={focus} reply={reply} />
    </div>
  );
};

export default Header;
