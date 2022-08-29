import React from "react";
import weather_bg from "../Images/weather_bg.png";
import { RiCelsiusLine } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BiWind } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import { BsClouds } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow, FaMercury } from "react-icons/fa";
import Header from "./Header";

const Weather = ({ weather }) => {
  const { city_name, country_code, data } = weather;
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
    <div
      className="min-h-screen w-screen lg:py-4 lg:pb-20 relative"
      style={{
        backgroundImage: `url(${weather_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="text-white pt-10 lg:pt-20 sm:px-10 flex flex-col items-center lg:grid grid-cols-2 max-w-[1200px] mx-auto">
        {/*  CURRENT WEATHER CONDITION   */}
        <div className="flex items-center flex-col lg:block">
          <h2 className="text-xl font-bold text-center lg:text-left">
            {city_name}, {country_code}
          </h2>
          <div className="flex items-center">
            <img
              className=""
              src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}
              width="100px"
              alt=""
            />
            <h1 className="flex text-5xl font-thin">
              {data[0].temp} <RiCelsiusLine className="ml-2" />
            </h1>
          </div>
          <h3 className="text-2xl relative bottom-4 capitalize font-thin">
            {data[0].weather.description}
          </h3>
          <h4 className="text-xl capitalize relative bottom-4 flex items-center font-thin">
            Feels like: &nbsp;
            <span className="font-normal">{data[0].app_max_temp}</span>{" "}
            <RiCelsiusLine className="ml-2" />
          </h4>
        </div>
        {/*  ADDITIONAL INFORMATION   */}
        <div className="flex items-center flex-col lg:block">
          <h1 className="text-xl font-bold">Additional Information</h1>
          <div className="mt-4 flex items-center flex-col lg:block">
            <h3 className="additional_info">
              <FaTemperatureLow className="weather_icon" />
              Min Temp:
              <span>
                {data[0].min_temp} <RiCelsiusLine className="ml-1" />
              </span>
            </h3>
            <h3 className="additional_info">
              <FaTemperatureHigh className="weather_icon" />
              Max Temp:
              <span>
                {data[0].max_temp} <RiCelsiusLine className="ml-1" />
              </span>
            </h3>
            <h3 className="additional_info">
              <FaMercury className="weather_icon" />
              Pressure:
              <span> {data[0].pres} mb</span>
            </h3>
            <h3 className="additional_info">
              <MdOutlineWaterDrop className="weather_icon" />
              humidity:
              <span> {data[0].rh} %</span>
            </h3>
            <h3 className="additional_info">
              <BiWind className="weather_icon" />
              Wind Speed:
              <span> {data[0].wind_spd} m/s</span>
            </h3>
            <h3 className="additional_info">
              <MdVisibility className="weather_icon" />
              Visibility:
              <span> {data[0].vis} km</span>
            </h3>
            <h3 className="additional_info">
              <BsClouds className="weather_icon" />
              Cloudiness:
              <span>{data[0].clouds} %</span>
            </h3>
          </div>
        </div>
        {/*   FORECAST CONTAINER   */}
        <div className="col-start-2 col-end-3 row-start-1 row-end-3 mt-4 lg:mt-0">
          <h2 className="text-xl font-bold text-center lg:text-left">Daily Forecast</h2>
          <div className="flex flex-col lg:w-max w-[100%] mt-4 flex-wrap">
            {data.map((forecast, index) => {
              if (index > 0 && index < 8) {
                return (
                  <div className="flex items-center justify-between border-b-2 border-b-white px-4 py-1" key={index}>
                    <p>{getDateAndMonth(forecast.valid_date)}</p>
                    <img
                      src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`}
                      alt="weather-icon"
                      className="w-[50px] mx-2"
                    />
                    <h2 className="flex items-center mr-2 text-xl">
                      {forecast.temp} <RiCelsiusLine className="ml-1"/>
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
      </div>
      <p className='text-white lg:absolute mt-10 lg:bottom-3 text-center w-screen text-sm tracking-widest'>&copy; Copyright | Napstar 2022</p>
    </div>
  );
};

export default Weather;
