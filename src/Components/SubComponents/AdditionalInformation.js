import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const AdditionalInformation = ({ weather }) => {
  return (
    <div className="additional_information">
      <h2>Details</h2>
      <div className="additional_information_subContainer">
        <h3>
          Min Temp
          <span>
            {weather.data[0].min_temp} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Max Temp
          <span>
            {weather.data[0].max_temp} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Pressure
          <span> {weather.data[0].pres}mb</span>
        </h3>
        <h3>
          humidity
          <span> {weather.data[0].rh}%</span>
        </h3>
        <h3>
          Wind Speed
          <span> {weather.data[0].wind_spd}m/s</span>
        </h3>
        <h3>
          Visibility
          <span> {weather.data[0].vis}km</span>
        </h3>
        <h3>
          Cloudiness
          <span>{weather.data[0].clouds}%</span>
        </h3>
      </div>
    </div>
  );
};

export default AdditionalInformation;
