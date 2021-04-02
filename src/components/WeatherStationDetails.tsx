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

export default WeatherStationDetails;
