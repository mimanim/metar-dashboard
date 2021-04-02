import dayjs from "dayjs";

import { weatherServiceBaseURL, weatherServiceHeaders } from "./apiConfig";

import { buildQueryString } from "./apiHelpers";

import { DailySummary, WeatherServicePaginatedResponse } from "../types";

export const fetchStationData = async (stationId: string) => {
  const today = dayjs().startOf("day");

  const response = await fetch(
    `${weatherServiceBaseURL}/data${buildQueryString([
      ["datasetid", "GHCND"],
      ["startdate", today.subtract(7, "days").format("YYYY-MM-DD")],
      ["enddate", today.format("YYYY-MM-DD")],
      ["stationid", stationId],
    ])}`,
    {
      method: "GET",
      headers: weatherServiceHeaders,
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const parsedResponse = (await response.json()) as WeatherServicePaginatedResponse<DailySummary>;
  return parsedResponse.results;
};
