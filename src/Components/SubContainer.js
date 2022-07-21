import React from "react";
import HourlyForecast from "./HourlyForecast.js";
import { RiCelsiusLine } from "react-icons/ri";
import { BsSunrise, BsSunset } from "react-icons/bs";

const SubContainer = () => {
  let unixTime = 1658235757;
  let newDate = new Date(unixTime * 1000);
  let hours = "0" + newDate.getHours();
  let mins = "0" + newDate.getMinutes();
  console.log(
    `${hours.substring(hours.length - 2)}:${mins.substring(mins.length - 2)}`
  );
  return (
    <div className="sub_container">
      <h1>San Francisco, US</h1>
      <div className="weather_condition">
        <img
          className="current_img"
          src="http://openweathermap.org/img/wn/02d@2x.png"
          width="150px"
          alt=""
        />
        <div>
          <h2>Cloudy</h2>
          <h3>Scattered Clouds</h3>
        </div>
      </div>
      <div className="current_temp">
        <h2>
          12.55 <RiCelsiusLine />
        </h2>
        <h3>
          Feels Like{" "}
          <span>
            12.18 <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Min Temp:{" "}
          <span>
            12.55 <RiCelsiusLine />
          </span>
        </h3>
        <h3>
          Max Temp:{" "}
          <span>
            13.26 <RiCelsiusLine />
          </span>
        </h3>
      </div>
      <div className="additional_information">
        <h2>Additional Information</h2>
        <div className="additional_information_subContainer">
          <h3>
            Pressure: &nbsp;<span> 1017 hPa</span>
          </h3>
          <h3>
            Humidity: &nbsp;<span> 76%</span>
          </h3>
          <h3>
            Wind Speed: &nbsp;<span> 5.16 m/s</span>
          </h3>
          <h3>
            Visibility: &nbsp;<span> 5.16km</span>
          </h3>
          <h3>
            Cloudiness: &nbsp;<span> 70%</span>
          </h3>
          <div className="sunset" style={{ width: "100%" }}>
            <div>
              <BsSunrise
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "4rem",
                }}
              />
              <h3>
                Sunrise: &nbsp;<span> 06:02</span>
              </h3>
            </div>
            <div>
              <BsSunset
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "4rem",
                }}
              />
              <h3>
                Sunset: &nbsp;<span>20:28</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <HourlyForecast />
    </div>
  );
};

export default SubContainer;
