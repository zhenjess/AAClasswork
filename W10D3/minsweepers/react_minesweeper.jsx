import React from "react";
import ReactDOM from "react-dom";
import Game from "./component/game";

document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.getElementById("root");
  ReactDOM.render(<Game/>, rootDiv);
});

