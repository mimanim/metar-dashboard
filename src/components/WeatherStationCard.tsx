import React from 'react';
import styled from 'styled-components';


const StyledWeatherStationCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 0px 4px;
  border-radius: 4px;
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

const StyledStationName = styled.h4`

`;

const StyledDataElement = styled.span`

`;

export type WeatherStation = {
  elevation: number;
  mindate: string;
  maxdate: string;
  latitude: number;
  name: string;
  datacoverage: number;
  id: string;
  elevationUnit: "METERS";
  longitude: number;
};


interface InterfaceDataListProps {
  elevation: number;
  latitude: number;
  name: string;
  id: string;
  longitude: number;
}


const DataList: React.FC<InterfaceDataListProps> = ({elevation, latitude, longitude, name, id}) => {
  return (
    <StyledWeatherStationCard key={id}>
      <StyledWeatherStationCardContents>
        <StyledStationName>
          {name}
        </StyledStationName>
        <StyledDataElement>{elevation}</StyledDataElement>
        <StyledDataElement>{latitude}</StyledDataElement>
        <StyledDataElement>{longitude}</StyledDataElement>
      </StyledWeatherStationCardContents>
    </StyledWeatherStationCard>
  );
};

export default DataList;