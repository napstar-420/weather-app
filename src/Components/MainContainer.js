import React from "react";
import Header from "./Header.js";
import SubContainer from "./SubContainer";

const MainContainer = ({
  value,
  setValue,
  reply,
  setReply,
  handleSearch,
  weather,
}) => {
  const underlineStyle = {
    width: "100%",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    margin: "1em auto",
  };

  return (
    <div className="main_container">
      <Header
        value={value}
        setValue={setValue}
        reply={reply}
        setReply={setReply}
        handleSearch={handleSearch}
      />
      <div className="underline" style={underlineStyle} />
      <SubContainer weather={weather} />
    </div>
  );
};

export default MainContainer;
