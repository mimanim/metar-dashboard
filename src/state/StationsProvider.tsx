import React from "react";

import apiController from "../api/ApiController";
import StationsContext from "./StationsContext";

import { WeatherStation } from "../types";

const StationsProvider: React.FC = ({ children }) => {
  const [stations, setStations] = React.useState(new Array<WeatherStation>());
  const [synchronizing, setSynchronizing] = React.useState(false);

  React.useEffect(() => {
    let stale = false;

    setSynchronizing(true);
    apiController
      .fetchStations()
      .then((nextStations) => {
        if (stale) return;

        setStations(nextStations);
      })
      .finally(() => {
        setSynchronizing(false);
      });

    return () => {
      stale = true;
    };
  }, []);

  return (
    <StationsContext.Provider value={{ stations, synchronizing }}>
      {children}
    </StationsContext.Provider>
  );
};

export default StationsProvider;
