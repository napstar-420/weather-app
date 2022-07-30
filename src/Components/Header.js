import React, { useState } from "react";
import Suggestions from "./SubComponents/Suggestions.js";
import { BsGlobe } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { options, geoDB_URL } from "../API/fetchCities.js";

/* Destructure props */
const Header = ({ value, setValue, reply, setReply, handleSearch }) => {
  const [focus, setFocus] =
    useState(
      false
    ); /* Focus state will be used to check if input tag is focused */

  /* When user type something in the input call a function handleChange
   * FIRST use setValue function to store the typed value in state Value hook
   * SECOND Check if typed value is less than 3
   * If yes Reply State will be empty that is no Suggestions will be shown just loading
   * If no make an Api call use value state to fetch related cities
   * Store Api response to reply State
   * use Array.map Method on Reply to show suggested cities to user
   */
  const handleChange = (e) => {
    setValue(e.target.value); /* Store user typed value */
    if (value < 3) {
      /* Check is its less than 3 */
      setReply([]);
    } else {
      /* If no make Api  call */
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
              setFocus(
                !focus
              ); /* When input is focused focus state is set to true */
            }}
            onBlur={() => {
              setFocus(!focus); /* Otherwise False */
            }}
            onChange={
              handleChange
            } /* Call handle Change function when input value changes */
          />
          <button className="search_btn" onClick={handleSearch}>
            {" "}
            {/* call handle search when user clicks search btn*/}
            <IoSearch />
          </button>
        </div>
        <Suggestions focus={focus} reply={reply} setValue={setValue} />{" "}
        {/* pass props */}
      </div>
    </div>
  );
};

export default Header;
