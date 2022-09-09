import { useMemo } from 'react';
import SpinnerAnimated from '../SpinnerAnimated';

interface IProps {
  isLoading: boolean;
  data: WeatherResponse | undefined;
}

const WeatherCard: React.FC<IProps> = ({ isLoading, data }) => {
  const tempMemo = useMemo(() => {
    if (!data) return data;

    const description = data?.weather[0].description
    return {
      temp: data.main.temp | 0,
      feels_like: data.main.feels_like | 0,
      temp_min: data.main.temp_min | 0,
      temp_max: data.main.temp_max | 0,
      description: description.charAt(0).toUpperCase() + description.slice(1)
    };
  }, [data]);

  return (
    <div className="min-w-[320px] p-5 h-auto bg-gradient-to-r from-blue-500 to-cyan-500 md:from-cyan-500 md:to-blue-500 rounded-3xl ">
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
              src={`/images/weather-icons/${data?.weather[0].icon}.png`}
            />
          </div>
          <div className="w-full text-gray-200">
            <p>Sensação Térmica: {tempMemo?.feels_like}°c</p>
            <p>
              Min. {tempMemo?.temp_min}°c / Máx. {tempMemo?.temp_max}°c
            </p>
            <p>{tempMemo?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
