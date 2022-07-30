import React from "react";
import WeatherCondition from "./SubComponents/WeatherCondition";
import AdditionalInformation from "./SubComponents/AdditionalInformation";
import HourlyForecast from "./SubComponents/HourlyForecast";

const SubContainer = ({ weather }) => {
  /* Check if Weather is empty if yes show default text else show show weather */
  if (Object.keys(weather).length === 0) {
    return (
      <h1 className="no_weather_heading">
        Type name of your City <i>(Tokyo, JP)</i>
      </h1>
    );
  }

  if (Object.keys(weather).length !== 0) {
    return (
      <div className="sub_container">
        <h1>
          {weather.city_name}, {weather.country_code}
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
        <i>(Oops, Something went wrong)</i>
      </h1>
    );
  }
};

export default SubContainer;
