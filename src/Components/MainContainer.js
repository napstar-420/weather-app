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
  return (
    <div className="main_container">
      <Header
        value={value}
        setValue={setValue}
        reply={reply}
        setReply={setReply}
        handleSearch={handleSearch}
      />
      <SubContainer weather={weather} />
    </div>
  );
};

export default MainContainer;
