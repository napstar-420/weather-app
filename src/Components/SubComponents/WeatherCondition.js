import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const WeatherCondition = ({ weather }) => {
  return (
    <div className="weather_condition">
      <img
        className="current_img"
        src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}
        width="150px"
        alt=""
      />
      <div className="weather_condition_subContainer">
        <h1>
          {weather.data[0].temp} <RiCelsiusLine />
        </h1>
        <h2>{weather.data[0].weather.description}</h2>
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
