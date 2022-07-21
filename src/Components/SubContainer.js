import React from "react";
import WeatherCondition from "./SubComponents/WeatherCondition";
import AdditionalInformation from "./SubComponents/AdditionalInformation";
import HourlyForecast from "./SubComponents/HourlyForecast";

const SubContainer = ({ weather }) => {
  if (
    weather !== null &&
    Object.keys(weather).length !== 0 &&
    weather.code !== 429 &&
    weather.code !== 404
  ) {
    return (
      <div className="sub_container">
        <h1>
          {weather.city.name}, {weather.city.country}
        </h1>
        <section>
          <WeatherCondition weather={weather} />
          <AdditionalInformation weather={weather} />
          <HourlyForecast weather={weather} />
        </section>
      </div>
    );
  } else {
    return (
      <h1 className="no_weather_heading">
        Type name of your City <i>(Tokyo, JP)</i>
      </h1>
    );
  }
};

export default SubContainer;
