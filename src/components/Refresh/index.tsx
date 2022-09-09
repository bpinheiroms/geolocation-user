import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { queryClient } from '../../config/react-query';
import { WEATHER_DATA_QUERY } from '../../services/useGetWeatherData';
import { WEATHER_HOURLY_QUERY } from '../../services/useGetWeatherHourly';

interface IProps {
  value: string;
}

const RefreshButton: React.FC<IProps> = ({ value }) => {
  const onRefresh = () => {
    queryClient.invalidateQueries(WEATHER_DATA_QUERY);
    queryClient.invalidateQueries(WEATHER_HOURLY_QUERY);
  };

  return (
    <div
      className="flex justify-center items-center mt-8 md:mt-0 text-gray-500 cursor-pointer gap-2"
      onClick={onRefresh}>
      <ArrowPathIcon className="h-6 w-6" />
      <p className="">{value}</p>
    </div>
  );
};

export default RefreshButton;
