import React from "react";
import Header from "./Header.js";
import SubContainer from "./SubContainer";
/* Destructure The Props */
const MainContainer = ({
  value,
  setValue,
  reply,
  setReply,
  handleSearch,
  weather,
}) => {
  return (
    <div className="main_container">
      {/* Pass All the input Related Props to Header because header contains the input tag */}
      <Header
        value={value} // Value will store the user input
        setValue={setValue} // setValue function will be used to store the input
        reply={reply} // Reply is a container to store cities from Api
        setReply={setReply} // setReplay function will be used to store the suggested cities
        handleSearch={handleSearch} // Handle search a function to fetch weather
      />
      <SubContainer weather={weather} />{" "}
      {/* Weather is a Container which will store fetched weather */}
    </div>
  );
};

export default MainContainer;
