import React from "react";
import styled from "styled-components";

import ReportsContext from "../state/reports/ReportsContext";
import SelectionContext from "../state/selection/SelectionContext";
import StationsContext from "../state/stations/StationsContext";

import { DailySummary, WeatherStation } from "../types";

const StyledWeatherStationCard = styled.div`
  width: 100%;
  width: 420px;
`;

const StyledWeatherStationCardContents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledCardLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px 20px;
  box-sizing: border-box;
`;

const StyledWeatherStationTitle = styled(StyledCardLine)`
  padding: 8px 20px;
`;

const StyledStationName = styled.h4`
  margin: 0;
`;

const StyledDataElement = styled.span``;

const StyledStationDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  align-items: center;
`;

const StyledDataTitleWrapper = styled.div`
  width: 90%;
  border-bottom: solid 2px #339c3f;
  display: flex;
  justify-content: center;
`;

const WeatherStationDetails: React.FC = () => {
  const { loading, reports } = React.useContext(ReportsContext);
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
  } = selectedStation;

  const stationReports = reports.get(id);

  return (
    <StyledWeatherStationCard key={id}>
      <StyledWeatherStationCardContents>
        <StyledWeatherStationTitle>
          <StyledStationName>{name}</StyledStationName>
        </StyledWeatherStationTitle>
        <StyledCardLine>
          <StyledDataElement>{`Elevation: ${elevation} meters`}</StyledDataElement>
        </StyledCardLine>
        <StyledCardLine>
          <StyledDataElement>{`Lat: ${latitude.toFixed(5)}`}</StyledDataElement>
          <StyledDataElement>{`Lon: ${longitude.toFixed(
            5
          )}`}</StyledDataElement>
        </StyledCardLine>
        <StyledCardLine>
          <StyledDataElement>{`Online: ${
            mindate ? mindate : "-"
          }`}</StyledDataElement>
          <StyledDataElement>{`Offline: ${
            maxdate ? maxdate : "-"
          }`}</StyledDataElement>
        </StyledCardLine>
        <StyledStationDataContainer>
          {loading ? (
            <span>Loading...</span>
          ) : stationReports === undefined ? (
            <span>No reports.</span>
          ) : (
            <StyledDataTitleWrapper>
              <StyledStationName>
                <ul>
                  {(reports.get(id) as DailySummary[]).map((report) => (
                    <li key={`${report.station}:${report.date}`}>
                      {JSON.stringify(report)}
                    </li>
                  ))}
                </ul>
              </StyledStationName>
            </StyledDataTitleWrapper>
          )}
        </StyledStationDataContainer>
      </StyledWeatherStationCardContents>
    </StyledWeatherStationCard>
  );
};

export default WeatherStationDetails;
