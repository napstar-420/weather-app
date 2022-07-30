import React, { useState } from "react";
import MainContainer from "./Components/MainContainer";
import "./CSS/main.css";
import "./CSS/sub_container.css";
import { API_KEY } from "./API/fetchWeather";

function App() {
  /*A value variable will store the user input*/
  const [value, setValue] = useState("Tokyo, JP");

  /*A variable named reply will store the response when fetch cities from api*/
  const [reply, setReply] = useState([]);

  /*A weather variable will store the response from Api to fetch weather */
  const [weather, setWeather] = useState({});

  /* When user clicks the search button
   * User Input is stored in Variable Value
   * copy the input from value (Variable) to  new variable named searchValue
   * Check if input is empty or not if empty make alert if not then follow
   * remove if there are unwanted white spaces in the input string
   * Remove all white spaces within the string (We need to make Api call
   * the API will work correctly if there are no white spaces between the string)
   * Make Api call store the response in useState hook named Weather
   */
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
      {/* App Will have a sub container name MainContainer Pass props to main container */}
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
