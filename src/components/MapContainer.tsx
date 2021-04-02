import { GeoJsonLayer } from "@deck.gl/layers";
import DeckGLController from "@deck.gl/react";
import React from "react";
import { StaticMap } from "react-map-gl";

import HoverContext from "../state/hover/HoverContext";
import SelectionContext from "../state/selection/SelectionContext";
import StationsContext from "../state/stations/StationsContext";

const INITIAL_VIEW_STATE = {
  longitude: -122.1332,
  latitude: 37.6821,
  zoom: 10,
  pitch: 30,
  bearing: 0,
};

const MapContainer: React.FC = () => {
  const [hoveredObjectId, setHoveredObjectId] = React.useContext(HoverContext);
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
      hoveredObjectId === d.properties.id
        ? [0, 255, 0, 127.5]
        : selectedObjectId === d.properties.id
        ? [255, 0, 0, 127.5]
        : [0, 0, 255, 127.5],
    getRadius: 16,
    getElevation: (d) => d.properties.elevation,
    pointRadiusMinPixels: 16,
  });

  return (
    <DeckGLController
      initialViewState={INITIAL_VIEW_STATE}
      controller
      getTooltip={({ object }) => {
        console.log(object);
        return (
          object && {
            // @ts-ignore: Unreachable code error
            html: `<span>${object.properties.name}</span><div>Elevation: ${object.properties.elevation} meters</div>`,
            style: {
              backgroundColor: "#454543",
              fontSize: "0.8em",
              color: "white",
              borderRadius: "4px",
            },
          }
        );

        // if (!d.object || !(d.object as any).properties) return null;

        // return JSON.stringify((d.object as any).properties);
      }}
      layers={[weatherStationLayer]}
      width="calc(100% - 420px)"
      onClick={(pickInfo) => {
        if (!pickInfo.object) {
          setSelectedObjectId(null);
          return;
        }
        setSelectedObjectId(
          (pickInfo.object as any).properties.id === selectedObjectId
            ? null
            : (pickInfo.object as any).properties.id
        );
      }}
      onHover={(pickInfo) => {
        if (!pickInfo.object) {
          setHoveredObjectId(null);
          return;
        }
        setHoveredObjectId((pickInfo.object as any).properties.id);
      }}
    >
      <StaticMap
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGLController>
  );
};

export default MapContainer;
