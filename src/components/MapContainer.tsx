import { GeoJsonLayer } from "@deck.gl/layers";
import DeckGLController from "@deck.gl/react";
import React from "react";
import { StaticMap } from "react-map-gl";

import StationsContext from "../state/StationsContext";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const MapContainer: React.FC = () => {
  const { stations } = React.useContext(StationsContext);

  const weatherStationLayer = new GeoJsonLayer({
    id: "weather-stations",
    data: stations.map((station) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [station.longitude, station.latitude, station.elevation],
      },
      properties: station,
    })),
    pickable: true,
    stroked: false,
    filled: true,
    extruded: false,
    getFillColor: [0, 0, 255, 255 / 2],
    getRadius: 32,
    getElevation: (d) => d.properties.elevation,
    pointRadiusMinPixels: 16,
  });

  return (
    <DeckGLController
      initialViewState={INITIAL_VIEW_STATE}
      controller
      getTooltip={(d) => {
        if (!d.object || !(d.object as any).properties) return null;

        return JSON.stringify((d.object as any).properties);
      }}
      layers={[weatherStationLayer]}
      width="66.66%"
    >
      <StaticMap
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGLController>
  );
};

export default MapContainer;
