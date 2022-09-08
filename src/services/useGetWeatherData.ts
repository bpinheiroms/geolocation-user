import { useQuery } from 'react-query';
import { httpApi } from './config/http';

export const WEATHER_DATA_QUERY = 'WEATHER_DATA';

const getData = async (geolocation: Coordinates): Promise<WeatherResponse> => {
  const { data } = await httpApi.get(
    `weather?lat=${geolocation!.latitude}&lon=${geolocation!.longitude}&appid=${
      process.env.NEXT_PUBLIC_OPEN_WEATHER_TOKEN
    }&units=metric&lang=pt_br`,
  );
  return data;
};

export function useGetWeatherData(geolocation: Coordinates) {
  return useQuery<WeatherResponse, CustomError>(
    [WEATHER_DATA_QUERY],
    () => getData(geolocation),
    {
      enabled: !!geolocation,
    },
  );
}
