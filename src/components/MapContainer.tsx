import DeckGLController from '@deck.gl/react';
import React from 'react';
import {StaticMap} from 'react-map-gl';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const MapContainer: React.FC = () => {
  return (
    <DeckGLController
      initialViewState={INITIAL_VIEW_STATE}
      controller
      layers={[]}
      width='66.66%'
    >
      <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />
    </DeckGLController>
  );
};

export default MapContainer;