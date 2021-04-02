import React from "react";

import { defaultStations } from "./stationsConfig";
import StationsContext from "./StationsContext";

const StationsProvider: React.FC = ({ children }) => {
  const [stations] = React.useState(defaultStations);
  const [synchronizing] = React.useState(false);

  return (
    <StationsContext.Provider value={{ stations, synchronizing }}>
      {children}
    </StationsContext.Provider>
  );
};

export default StationsProvider;
