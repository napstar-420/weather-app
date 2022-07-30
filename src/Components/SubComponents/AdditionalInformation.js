import React from "react";
import { RiCelsiusLine } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BiWind } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { BsClouds } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow, FaMercury } from "react-icons/fa";

const AdditionalInformation = ({ weather }) => {
  return (
    <div className="additional_information">
      <div className="additional_information_subContainer">
        <h3>
          <FaTemperatureLow className="weather-icon" />
          Min Temp:
          <span>
            {weather.data[0].min_temp} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          <FaTemperatureHigh className="weather-icon" />
          Max Temp:
          <span>
            {weather.data[0].max_temp} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          <FaMercury className="weather-icon" />
          Pressure:
          <span> {weather.data[0].pres}mb</span>
        </h3>
        <h3>
          <MdOutlineWaterDrop className="weather-icon" />
          humidity:
          <span> {weather.data[0].rh}%</span>
        </h3>
        <h3>
          <BiWind className="weather-icon" />
          Wind Speed:
          <span> {weather.data[0].wind_spd}m/s</span>
        </h3>
        <h3>
          <MdVisibility className="weather-icon" />
          Visibility:
          <span> {weather.data[0].vis}km</span>
        </h3>
        <h3>
          <BsClouds className="weather-icon" />
          Cloudiness:
          <span>{weather.data[0].clouds}%</span>
        </h3>
      </div>
    </div>
  );
};

export default AdditionalInformation;
