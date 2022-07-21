import React from "react";

const Suggestions = ({ reply, focus, setValue }) => {
  const handleOnMouseEnter = (name, countryCode) => {
    setValue(`${name}, ${countryCode}`);
  };
  if (focus) {
    if (reply !== undefined && reply.length !== 0) {
      return (
        <ul className="suggestion_container">
          {reply.map((city) => {
            return (
              <li
                key={city.id}
                onMouseEnter={() =>
                  handleOnMouseEnter(city.name, city.countryCode)
                }
              >
                {city.name}, <span>{city.countryCode}</span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="suggestion_container">
          <li>Loading...</li>
        </ul>
      );
    }
  }
};

export default Suggestions;
