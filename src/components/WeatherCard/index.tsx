import SpinnerAnimated from '../SpinnerAnimated';

interface IProps {
  isLoading: boolean;
  data: WeatherResponse | undefined;
}

const WeatherCard: React.FC<IProps> = ({ isLoading, data }) => {
  return (
    <div className="w-72 p-5 h-auto  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl ">
      {isLoading ? (
        <SpinnerAnimated/>
      ) : (
        <div className="flex flex-col gap-2 relative">
          <div className="flex flex-1 justify-between  ">
            <p className="text-9xl text-white">
              20
              <span className="text-4xl">°c</span>
            </p>
            <img
              className="absolute right-0"
              src="/images/weather-icons/02d.png"
            />
          </div>
          <div className="w-full text-gray-200">
            <p>Sensação Térmica: 20°c</p>
          </div>
          <div className="w-full flex justify-between text-gray-200">
            <div>Min. 20°c</div>
            <div>|</div>
            <div>Máx. 20°c</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
