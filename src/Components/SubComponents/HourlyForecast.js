import React from "react";
import { RiCelsiusLine } from "react-icons/ri";

const HourlyForecast = ({ weather }) => {
  return (
    <div className="hourly_forecast_container">
      <h2>Hourly Forecast</h2>
      <div className="hourly_forecast_subContainer">
        {weather.list.map((forecast, index) => {
          if (index > 0 && index < 9) {
            return (
              <div className="hourly_forecast_item" key={index}>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                />
                <p>{forecast.dt_txt.substring(10, 16)}</p>
                <h2>
                  {forecast.main.temp} <RiCelsiusLine />
                </h2>
                <h3>{forecast.weather[0].main}</h3>
              </div>
            );
          } else return <></>;
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
