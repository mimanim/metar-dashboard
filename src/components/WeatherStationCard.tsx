import React from "react";
import styled from "styled-components";

// Contexts
// selection context

const StyledWeatherStationCard = styled.div`
  width: 100%;
  margin: 8px 4px;
  box-sizing: border-box;
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: #5e5e5c;
  border-radius: 4px;
`;

const StyledCardLine = styled.div`
  display: flex;
  width: 100%;
`;

const StyledWeatherStationTitle = styled(StyledCardLine)`
  padding-bottom: 4px;
  justify-content: space-between;
`;

const StyledStationName = styled.h4`
  margin: 0;
`;

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
        <StyledWeatherStationTitle>
          <StyledStationName>{name}</StyledStationName>
          <StyledDataElement>{`Elevation: ${elevation} meters`}</StyledDataElement>
        </StyledWeatherStationTitle>
        <StyledCardLine>
          <StyledDataElement>{`Lat: ${latitude.toFixed(5)}`}</StyledDataElement>
          <StyledDataElement>{`Lon: ${longitude.toFixed(5)}`}</StyledDataElement>
        </StyledCardLine>
      </StyledWeatherStationCardContents>
    </StyledWeatherStationCard>
  );
};

export default WeatherStationCard;
