export type WeatherServicePaginatedResponse<
  R extends Record<string, string | number>
> = {
  metadata: {
    resultset: {
      offset: number;
      count: number;
      limit: number;
    };
  };
  results: R[];
};

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
