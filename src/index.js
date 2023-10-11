//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>This is an example of React DOM</h1>
    <ul>
      <li>Virat Kohli: Highest run getter</li>
      <li>Jasprit Bumrah: Highest wicket taker</li>
      <li>Ravindra Jadeja: Most catches</li>
    </ul>
  </div>,
  document.getElementById("root")
);
