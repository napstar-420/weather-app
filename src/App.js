import React, { useState } from "react";
import MainContainer from "./Components/MainContainer";
import "./CSS/main.css";
import "./CSS/sub_container.css";
import { options } from "./API/fetchWeather";

function App() {
  const [value, setValue] = useState("");
  const [reply, setReply] = useState([]);
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    console.log("clicked");
    let searchValue = value;
    searchValue = searchValue.replace(",", "%2C").replace(" ", "%20");
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/forecast?q=${searchValue}&units=metric&lang=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <MainContainer
        value={value}
        setValue={setValue}
        reply={reply}
        setReply={setReply}
        handleSearch={handleSearch}
        weather={weather}
      />
    </div>
  );
}

export default App;
