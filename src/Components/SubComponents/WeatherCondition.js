import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const WeatherCondition = ({ weather }) => {
  return (
    <div className="weather_condition">
      <img
        className="current_img"
        src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
        width="150px"
        alt=""
      />
      <div>
        <h2>
          {weather.list[0].main.temp} <RiCelsiusLine />
        </h2>
        <h2>{weather.list[0].weather[0].main}</h2>
        <div style={{ display: "flex" }}>
          <h3>{weather.list[0].weather[0].description}</h3>
          <h3>
            Feels like:{" "}
            <span>
              {weather.list[0].main.feels_like} <RiCelsiusLine />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCondition;
