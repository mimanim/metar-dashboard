export const weatherServiceBaseURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2";

export const weatherServiceLocationId = "FIPS:6"; // California

const weatherServiceHeaders = new Headers();

export const weatherServicePageSize = 50;

const weatherServiceToken = process.env.REACT_APP_WEATHER_API_TOKEN;

if (weatherServiceToken === undefined) {
  throw new Error("REACT_APP_WEATHER_API_TOKEN must be set");
}
weatherServiceHeaders.append("token", weatherServiceToken);
export { weatherServiceHeaders };
