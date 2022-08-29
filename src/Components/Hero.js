import React from "react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { geoDB_URL, options } from "../API/fetchCities";
import { useNavigate } from "react-router-dom";

const Hero = ({ value, setValue, handleSearch, reply, setReply }) => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
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
    <div className="text-white w-screen h-[90vh] lg:h-screen lg:absolute left-0 grid place-items-center">
      <div className=" w-max relative">
        <h1 className="text-2xl sm:text-5xl font-thin">Free Online Weather 24/7</h1>
        <ul className="text-left my-4">
          <li className="text-sm">
            For better experience type 1 character / second{" "}
          </li>
          <li className="text-sm">
            if your searched city is not showing,
            <br /> type your city name with country code
          </li>
          <li className="text-sm">Example (Lahore, PK)</li>
        </ul>
        <form className="bg-gray-500 bg-opacity-70 flex items-center w-[100%] rounded-lg">
          <input
            type="text"
            className="h-8 rounded-l bg-transparent flex-1 py-1 px-2 focus:bg-gray-400 outline-none focus:text-[#303030]"
            placeholder="Search here"
            value={value}
            onChange={(e) => handleChange(e)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <button
            type="submit"
            className="bg-gray-700 h-8 px-2 rounded-r hover:bg-gray-900"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <HiOutlineSearch />
          </button>
        </form>
        <ul
          className={`absolute bg-slate-900 p-2 mt-2 rounded w-[100%] ${
            focus ? "block" : "hidden"
          }`}
        >
          <Suggestions focus={focus} reply={reply} setValue={setValue}/>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

const Suggestions = ({ focus, reply, setValue }) => {
  const handleOnMouseEnter = (name, countryCode) => {
    setValue(`${name}, ${countryCode}`);
  };
  if (reply !== undefined && reply.length !== 0) {
    return (
        reply.map((city) => {
          return (
            <li
              key={city.id}
              onMouseEnter={() => handleOnMouseEnter(city.name, city.countryCode)}
              className="text-sm py-1 px-2 hover:bg-slate-800 rounded cursor-pointer"
            >
              {city.name}, <span>{city.countryCode}</span>
            </li>
          );
        })
    )
  } 
  return <li>Loading...</li>;
};
