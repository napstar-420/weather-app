import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const WeatherCondition = ({ weather }) => {
  return (
    <div className="weather_condition">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="current_img"
          src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}
          width="150px"
          alt=""
        />
        <div>
          <h2>
            {weather.data[0].temp} <RiCelsiusLine />
          </h2>
          <h2>{weather.data[0].weather.description}</h2>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>
          Feels like:&nbsp;
          <span>
            {weather.data[0].app_max_temp} <RiCelsiusLine />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default WeatherCondition;
