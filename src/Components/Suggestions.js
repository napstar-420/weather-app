import React from "react";

const Suggestions = ({ reply, focus }) => {
  if (focus) {
    if (reply !== undefined && reply.length !== 0) {
      console.log(reply);
      return (
        <ul className="suggesstion_container">
          {reply.map((city) => {
            return (
              <li key={city.id}>
                {city.name}, <span>{city.countryCode}</span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="suggesstion_container">
          <li>Loading...</li>
        </ul>
      );
    }
  }
};

export default Suggestions;
