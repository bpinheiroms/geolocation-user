import { useMemo } from 'react';
import SpinnerAnimated from '../SpinnerAnimated';

interface IProps {
  isLoading: boolean;
  data: WeatherResponse | undefined;
}

const WeatherCard: React.FC<IProps> = ({ isLoading, data }) => {
  const tempMemo = useMemo(() => {
    if (!data) return data;

    return {
      temp: data.main.temp | 0,
      feels_like: data.main.feels_like | 0,
      temp_min: data.main.temp_min | 0,
      temp_max: data.main.temp_max | 0,
    };
  }, [data]);

  return (
    <div className="w-96 p-5 h-auto  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl ">
      {isLoading ? (
        <SpinnerAnimated />
      ) : (
        <div className="flex flex-col gap-2 relative">
          <div className="flex flex-1 justify-between  ">
            <p className="text-9xl text-white">
              {tempMemo?.temp}
              <span className="text-4xl">°c</span>
            </p>
            <img
              className="absolute right-0"
              src="/images/weather-icons/02d.png"
            />
          </div>
          <div className="w-full text-gray-200">
            <p>Sensação Térmica: {tempMemo?.feels_like}°c</p>
            <p>
              Min. {tempMemo?.temp_min}°c / Máx. {tempMemo?.temp_max}°c
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
