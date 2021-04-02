import React from "react";
import styled from "styled-components";

import SelectionContext from "../state/selection/SelectionContext";
import StationsContext from "../state/stations/StationsContext";

import { WeatherStation } from "../types";

const StyledWeatherStationCard = styled.div`
  width: 100%;
  flex: 1;
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledStationName = styled.h4``;

const StyledDataElement = styled.span``;

const WeatherStationDetails: React.FC = () => {
  const [selectedObjectId] = React.useContext(SelectionContext);
  const { stations } = React.useContext(StationsContext);

  const selectedStation = stations.find(
    (station) => station.id === selectedObjectId
  ) as WeatherStation;
  const {
    elevation,
    latitude,
    longitude,
    name,
    id,
    mindate,
    maxdate,
    datacoverage,
  } = selectedStation;

  return (
    <StyledWeatherStationCard key={id}>
      <StyledWeatherStationCardContents>
        <StyledStationName>{name}</StyledStationName>
        <StyledDataElement>{elevation}</StyledDataElement>
        <StyledDataElement>{latitude}</StyledDataElement>
        <StyledDataElement>{longitude}</StyledDataElement>
        <StyledDataElement>{mindate}</StyledDataElement>
        <StyledDataElement>{maxdate}</StyledDataElement>
        <StyledDataElement>{datacoverage}</StyledDataElement>
      </StyledWeatherStationCardContents>
    </StyledWeatherStationCard>
  );
};

export default WeatherStationDetails;
