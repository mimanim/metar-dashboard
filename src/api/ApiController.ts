import {
  weatherServiceBaseURL,
  weatherServiceHeaders,
  weatherServiceLocationId,
  weatherServicePageSize,
} from "./apiConfig";
import { buildQueryString } from "./apiHelpers";

import { WeatherServicePaginatedResponse, WeatherStation } from "../types";

class ApiController {
  private fetchStationsOffset = 1;

  private async fetchStationsPage() {
    const response = await fetch(
      `${weatherServiceBaseURL}/stations${buildQueryString([
        ["limit", weatherServicePageSize],
        ["offset", this.fetchStationsOffset],
        ["locationid", weatherServiceLocationId],
      ])}`,
      {
        method: "GET",
        headers: weatherServiceHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const parsedResponse = (await response.json()) as WeatherServicePaginatedResponse<WeatherStation>;
    this.fetchStationsOffset += parsedResponse.results.length;
    return parsedResponse.results;
  }

  public async fetchStations() {
    return this.fetchStationsPage();
  }
}

export default new ApiController();
