import React from "react";

import ReportsContext from "./ReportsContext";
import SelectionContext from "../selection/SelectionContext";
import StationsContext from "../stations/StationsContext";

import { fetchStationData } from "../../api/apiEndpoints";

import { DailySummary, WeatherStation } from "../../types";

const ReportsProvider: React.FC = ({ children }) => {
  const [selectedObjectId] = React.useContext(SelectionContext);
  const { stations } = React.useContext(StationsContext);

  const [loading, setLoading] = React.useState(false);
  const [reports, setReports] = React.useState(
    new Map<string, DailySummary[]>()
  );

  const setStationReports = React.useCallback(
    (stationId: string, stationReports: DailySummary[]) => {
      const nextReports = new Map(reports);
      nextReports.set(stationId, stationReports);
      setReports(nextReports);
    },
    [reports]
  );

  const selectedStation = stations.find(
    (station) => station.id === selectedObjectId
  );

  React.useEffect(() => {
    setLoading(selectedStation !== undefined);
  }, [selectedStation]);

  React.useEffect(() => {
    let stale = false;

    if (!loading) return;

    fetchStationData((selectedStation as WeatherStation).id)
      .then((dailySummaries) => {
        if (stale) return;

        setStationReports(
          (selectedStation as WeatherStation).id,
          dailySummaries
        );
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      stale = true;
    };
  }, [loading, setStationReports]);

  return (
    <ReportsContext.Provider value={{ reports, loading }}>
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsProvider;
