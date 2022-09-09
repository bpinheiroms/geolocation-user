import { MapPinIcon } from '@heroicons/react/24/solid';
import SpinnerAnimated from '../SpinnerAnimated';

interface IProps {
  isLoading: boolean;
  data: WeatherResponse | undefined;
}

const LocalizationCard: React.FC<IProps> = ({ data, isLoading }) => {
  return (
    <div className="flex-1 p-5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500  h-auto text-white">
      {isLoading ? (
        <SpinnerAnimated />
      ) : (
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col">
            <h2 className="text-4xl mb-5 mt-10">Tatuape, BR</h2>
            <p>Latitude/Longitude: -23.123 / -46.123 </p>
            <p>Nascer do Sol: 06:00</p>
            <p>Por do Sol: 18:00</p>
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
