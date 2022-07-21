import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { RiCelsiusLine } from "react-icons/ri";

const AdditionalInformation = ({ weather }) => {
  function unixToLocal(time) {
    let unixTime = time;
    let newDate = new Date(unixTime * 1000);
    let hours = "0" + newDate.getHours();
    let mins = "0" + newDate.getMinutes();
    return `${hours.substring(hours.length - 2)}:${mins.substring(
      mins.length - 2
    )}`;
  }

  return (
    <div className="additional_information">
      <h2>Additional Information</h2>
      <div className="additional_information_subContainer">
        <h3>
          Pressure:&nbsp;<span> {weather.list[0].main.pressure}hPa</span>
        </h3>
        <h3>
          Humidity:&nbsp;<span> {weather.list[0].main.humidity}%</span>
        </h3>
        <h3>
          Wind Speed:&nbsp;<span> {weather.list[0].wind.speed}m/s</span>
        </h3>
        <h3>
          Visibility:&nbsp;<span> {weather.list[0].visibility}km</span>
        </h3>
        <h3>
          Cloudiness:&nbsp;<span>{weather.list[0].clouds.all}%</span>
        </h3>
        <h3>
          Min Temp:&nbsp;
          <span>
            {weather.list[0].main.temp_min} <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Max Temp:&nbsp;
          <span>
            {weather.list[0].main.temp_max} <RiCelsiusLine />
          </span>
        </h3>
      </div>
      <div className="sunset" style={{ width: "100%" }}>
        <div className="sunset_subContainer">
          <BsSunrise
            style={{
              textAlign: "center",
              width: "100%",
              fontSize: "4rem",
            }}
          />
          <h3>
            Sunrise: &nbsp;
            <span> {unixToLocal(weather.city.sunrise)}</span>
          </h3>
        </div>
        <div className="sunset_subContainer">
          <BsSunset
            style={{
              textAlign: "center",
              width: "100%",
              fontSize: "4rem",
            }}
          />
          <h3>
            Sunset: &nbsp;
            <span>{unixToLocal(weather.city.sunset)}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
