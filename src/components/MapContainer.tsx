import { GeoJsonLayer } from "@deck.gl/layers";
import DeckGLController from "@deck.gl/react";
import React from "react";
import { StaticMap } from "react-map-gl";

import SelectionContext from "../state/selection/SelectionContext";
import StationsContext from "../state/stations/StationsContext";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const MapContainer: React.FC = () => {
  const [selectedObjectId, setSelectedObjectId] = React.useContext(
    SelectionContext
  );
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
    getFillColor: (d) =>
      selectedObjectId === d.properties.id
        ? [255, 0, 0, 127.5]
        : [0, 0, 255, 127.5],
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
      width="calc(100% - 420px)"
      onClick={(pickInfo) => {
        if (!pickInfo.object) {
          setSelectedObjectId(null);
        }
        setSelectedObjectId(
          (pickInfo.object as any).properties.id === selectedObjectId
            ? null
            : (pickInfo.object as any).properties.id
        );
      }}
    >
      <StaticMap
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGLController>
  );
};

export default MapContainer;
