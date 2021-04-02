import React from "react";

import { WeatherStation } from "../types";

const StationsContext = React.createContext({
  stations: new Array<WeatherStation>(),
  synchronizing: false,
});

export default StationsContext;
