import LocalizationCard from '../../components/LocalizationCard';
import WeatherCard from '../../components/WeatherCard';
import { useGetWeatherData } from '../../services/useGetWeatherData';

interface IParams {
  data: Coordinates;
}

const WeatherItemsTemplate: React.FC<IParams> = ({ data }) => {
  const weatherData = useGetWeatherData(data);

  return (
    <div className="flex gap-5 mt-5">
      <WeatherCard isLoading={weatherData.isLoading} data={weatherData.data} />
      <LocalizationCard
        isLoading={weatherData.isLoading}
        data={weatherData.data}
      />
    </div>
  );
};

export default WeatherItemsTemplate;
