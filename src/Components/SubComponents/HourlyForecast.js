import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const HourlyForecast = ({ weather }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getDateAndMonth(string) {
    let result = string.substr(8, 2) + " ";
    return result.concat(month[parseInt(string.substr(5, 2)) - 1]);
  }

  return (
    <div className="hourly_forecast_container">
      <h2>Daily Forecast</h2>
      <div className="hourly_forecast_subContainer">
        {weather.data.map((forecast, index) => {
          if (index > 0 && index < 8) {
            return (
              <div className="hourly_forecast_item" key={index}>
                <p>{getDateAndMonth(forecast.valid_date)}</p>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`}
                  alt="weather-icon"
                />
                <h2>
                  {forecast.temp} <RiCelsiusLine />
                </h2>
                <h3>{forecast.weather.description}</h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
