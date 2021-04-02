import React from "react";
import styled from "styled-components";

// Contexts
// selection context

const StyledWeatherStationCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 0px 4px;
  border-radius: 4px;
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const StyledStationName = styled.h4``;

const StyledDataElement = styled.span``;

interface InterfaceDataListProps {
  elevation: number;
  latitude: number;
  name: string;
  id: string;
  longitude: number;
}

const WeatherStationCard: React.FC<InterfaceDataListProps> = ({
  elevation,
  latitude,
  longitude,
  name,
  id,
}) => {
  return (
    <StyledWeatherStationCard key={id}>
      <StyledWeatherStationCardContents>
        <StyledStationName>{name}</StyledStationName>
        <StyledDataElement>{elevation}</StyledDataElement>
        <StyledDataElement>{latitude}</StyledDataElement>
        <StyledDataElement>{longitude}</StyledDataElement>
      </StyledWeatherStationCardContents>
    </StyledWeatherStationCard>
  );
};

export default WeatherStationCard;
