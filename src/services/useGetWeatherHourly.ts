import { useQuery } from 'react-query';
import { httpApi } from './config/http';

export const WEATHER_HOURLY_QUERY = 'WEATHER_HOURLY';

const getData = async (
  geolocation: Coordinates,
): Promise<WeatherHourlyResponse> => {
  const { data } = await httpApi.get(
    `forecast?lat=${geolocation!.latitude}&lon=${
      geolocation!.longitude
    }&appid=${
      process.env.NEXT_PUBLIC_OPEN_WEATHER_TOKEN
    }&units=metric&lang=pt_br`,
  );
  return data;
};

export function useGetWeatherHourly(geolocation: Coordinates) {
  return useQuery<WeatherHourlyResponse, CustomError>(
    [WEATHER_HOURLY_QUERY],
    () => getData(geolocation),
    {
      enabled: !!geolocation,
    },
  );
}
