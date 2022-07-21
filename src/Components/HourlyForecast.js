import React from "react";
import exampleResponse from "../exampleResponse.json";

const HourlyForecast = () => {
  console.log(exampleResponse);
  return (
    <div className="hourly_forecast_container">
      <h2>Hourly Forecast</h2>
      <div className="hourly_forecast_subContainer">
        {exampleResponse.map((forecast, index) => {
          return (
            <div className="hourly_forecast_item" key={index}>
              <p>{forecast.dt_txt.substring(10, 16)}</p>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
              <h2>{forecast.main.temp}</h2>
              <h3>{forecast.weather[0].main}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
