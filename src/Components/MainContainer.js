import React from "react";
import Header from "./Header.js";
import SubContainer from "./SubContainer.js";

const MainContainer = () => {
  const underlineStyle = {
    width: "100%",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    margin: "1em auto",
  };

  return (
    <div className="main_container">
      <Header />
      <div className="underline" style={underlineStyle} />
      <SubContainer />
    </div>
  );
};

export default MainContainer;
