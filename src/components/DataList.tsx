import React, {useContext} from 'react';
import styled from 'styled-components';

// Contexts
import StationsContext from '../state/StationsContext'

// Components
import WeatherStationCard from './WeatherStationCard';

const StyledDataList = styled.div`
  height: 100%;
  width: 30%;
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #dee3e1;
`;

const StyledDataListHeader = styled.div`
  height: 40px;
  width: 100%;
  background-color: #3d403f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const StyledDataListContents = styled.div`
  flex: 1;
  overflow: scroll;
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

const renderWeatherStationListElements = (stations: WeatherStation[] ): JSX.Element[] => {
  return stations.map(station => <WeatherStationCard
    elevation={station.elevation}
    latitude={station.latitude}
    longitude={station.longitude}
    id={station.id}
    name={station.name}
  />)
}

const DataList: React.FC = () => {
  const {stations} = useContext(StationsContext);
  return (
    <StyledDataList>
      <StyledDataListHeader>
        Weather Stations
      </StyledDataListHeader>
      <StyledDataListContents>
        {renderWeatherStationListElements(stations)}
      </StyledDataListContents>
    </StyledDataList>
  );
};

export default DataList;