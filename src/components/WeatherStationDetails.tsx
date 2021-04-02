import React from "react";
import styled from "styled-components";

const StyledWeatherStationCard = styled.div`
  width: 100%;
  flex: 1
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledStationName = styled.h4``;

const StyledDataElement = styled.span``;

// todo remove this and use the selection context instead 
interface InterfaceDataListProps {
  elevation: number;
  latitude: number;
  name: string;
  id: string;
  longitude: number;
  mindate: string;
  maxdate: string;
  datacoverage: number;
}

const WeatherStationDetails: React.FC<InterfaceDataListProps> = ({
  elevation,
  latitude,
  longitude,
  name,
  id,
  mindate,
  maxdate,
  datacoverage
}) => {
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
