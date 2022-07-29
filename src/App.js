import React, { useState } from "react";
import MainContainer from "./Components/MainContainer";
import "./CSS/main.css";
import "./CSS/sub_container.css";
import { API_KEY } from "./API/fetchWeather";

function App() {
  const [value, setValue] = useState("Tokyo, JP");
  const [reply, setReply] = useState([]);
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    let searchValue = value;
    if (searchValue.trim() !== "") {
      searchValue = searchValue.replace(" ", "");
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchValue}&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((response) => setWeather(response))
        .catch((err) => console.log(err));
    } else {
      alert("You think i am a fool");
    }
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
