import React, { useContext } from "react";
import styled from "styled-components";

// Contexts
import SelectionContext from "../state/selection/SelectionContext";
import StationsContext from "../state/stations/StationsContext";

// Components
import WeatherStationCard from "./WeatherStationCard";

const StyledDataList = styled.div`
  height: 100%;
  width: 420px;
  display: flex;
  flex-direction: column;
  color: #dee3e1;
  box-sizing: border-box;
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
  box-sizing: border-box;
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

const DataList: React.FC = () => {
  const [selectedObjectId, setSelectedObjectId] = useContext(SelectionContext);
  const { stations } = useContext(StationsContext);
  return (
    <StyledDataList>
      <StyledDataListHeader>Weather Stations</StyledDataListHeader>
      <StyledDataListContents>
        {stations.map((station) => (
          <WeatherStationCard
            key={station.id}
            elevation={station.elevation}
            latitude={station.latitude}
            longitude={station.longitude}
            id={station.id}
            name={station.name}
            select={() =>
              setSelectedObjectId(
                selectedObjectId === station.id ? null : station.id
              )
            }
          />
        ))}
      </StyledDataListContents>
    </StyledDataList>
  );
};

export default DataList;
