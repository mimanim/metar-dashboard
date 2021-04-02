import React from "react";

import "./App.css";
import MapContainer from "./components/MapContainer";
import StationsProvider from "./state/StationsProvider";

const App: React.FC = () => (
  <div className="App">
    <StationsProvider>
      <MapContainer />
    </StationsProvider>
  </div>
);

export default App;
