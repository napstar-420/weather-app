import React from "react";

/* Destructre Props */
const Suggestions = ({ reply, focus, setValue }) => {
  /* Value state is used to store the input tag value so when user hover over the suggestion we will set that suggestion to the input value 
    !!! Why on hover and not onClick because suggestions will only show when input tag is focused when the user will click the suggestion input tag will no longer be focused and suggestions will hide, it will look like that after clicking, suggestion has been selected but you and i know we're just faking it
  */
  const handleOnMouseEnter = (name, countryCode) => {
    setValue(`${name}, ${countryCode}`);
  };

  /* Check if input is focused then show suggestions */
  if (focus) {
    /* If reply State is not false show suggestions using map method else show loading */
    if (reply !== undefined && reply.length !== 0) {
      return (
        <ul className="suggestion_container">
          {reply.map((city) => {
            return (
              <li
                key={city.id}
                /* When user Hover over the suggestion call below function with arguments */
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
