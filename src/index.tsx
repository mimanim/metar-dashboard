import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import HoverProvider from "./state/hover/HoverProvider";
import SelectionProvider from "./state/selection/SelectionProvider";
import StationsProvider from "./state/stations/StationsProvider";

ReactDOM.render(
  <React.StrictMode>
    <HoverProvider>
      <SelectionProvider>
        <StationsProvider>
          <App />
        </StationsProvider>
      </SelectionProvider>
    </HoverProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
