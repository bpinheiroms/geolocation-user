import { MapPinIcon } from '@heroicons/react/24/solid';
import SpinnerAnimated from '../SpinnerAnimated';

interface IProps {
  isLoading: boolean;
  data: WeatherResponse | undefined;
}

const LocalizationCard: React.FC<IProps> = ({ data, isLoading }) => {
  return (
    <div className="flex-1 p-5 min-w-[400px] rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500  h-auto text-white">
      {isLoading ? (
        <SpinnerAnimated />
      ) : (
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col">
            <h2 className="text-4xl mb-5 mt-12">{`${data?.name}, ${data?.sys.country}`}</h2>
            <p>Latitude: {data?.coord.lat}</p>
            <p>Longitude: {data?.coord.lon}</p>
          </div>
          <div className="w-28 flex justify-center items-start">
            <MapPinIcon className="mt-10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalizationCard;
