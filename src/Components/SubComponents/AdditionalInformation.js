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
            {weather.list[0].main.temp_min} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Max Temp
          <span>
            {weather.list[0].main.temp_max} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Pressure
          <span> {weather.list[0].main.pressure}hPa</span>
        </h3>
        <h3>
          humidity
          <span> {weather.list[0].main.humidity}%</span>
        </h3>
        <h3>
          Wind Speed
          <span> {weather.list[0].wind.speed}m/s</span>
        </h3>
        <h3>
          Visibility
          <span> {weather.list[0].visibility}km</span>
        </h3>
        <h3>
          Cloudiness
          <span>{weather.list[0].clouds.all}%</span>
        </h3>
      </div>
    </div>
  );
};

export default AdditionalInformation;
