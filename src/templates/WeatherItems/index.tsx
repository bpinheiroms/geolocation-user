import LocalizationCard from '../../components/LocalizationCard';
import WeatherCard from '../../components/WeatherCard';

const WeatherItemsTemplate = () => {
  return (
    <div className="flex gap-5 mt-5">
      <WeatherCard />
      <LocalizationCard />
    </div>
  );
};

export default WeatherItemsTemplate;
