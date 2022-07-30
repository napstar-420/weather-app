import React from "react";
import WeatherCondition from "./SubComponents/WeatherCondition";
import AdditionalInformation from "./SubComponents/AdditionalInformation";
import HourlyForecast from "./SubComponents/HourlyForecast";

const SubContainer = ({ weather }) => {
  /* Check if Weather is empty if yes show default text else show show weather */
  if (Object.keys(weather).length === 0) {
    return (
      <div className="no_weather_container">
        <h2>For Better User Experience</h2>
        <ul>
          <li>Geo weather is using free Api's</li>
          <li>Type only one character per second</li>
          <li>If your searched city is not showing up</li>
          <li>
            Try deleting one alphabet or adding one alphabet to your search
          </li>
          <li>Or type your city name with country code</li>
          <li>For Example: Lahore, PK</li>
          <li>Having issues feel free to get in touch</li>
          <li>
            <a href="mailto:zohaibkhan1162002@gmail.com">Send Mail</a>
          </li>
        </ul>
      </div>
    );
  }

  if (Object.keys(weather).length !== 0) {
    return (
      <div className="sub_container">
        <h1>
          {weather.city_name}, {weather.country_code}
        </h1>
        <section>
          <div className="main_top_container">
            <WeatherCondition weather={weather} />
            <AdditionalInformation weather={weather} />
          </div>
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
