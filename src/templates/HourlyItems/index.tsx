import HourlyCard from '../../components/HourlyCard';
import SpinnerAnimated from '../../components/SpinnerAnimated';
import { useGetWeatherHourly } from '../../services/useGetWeatherHourly';

interface IParams {
  data: Coordinates;
}

const HourlyItemsTemplate: React.FC<IParams> = ({ data }) => {
  const hourlyData = useGetWeatherHourly(data);

  const isLoading = hourlyData.isLoading;
  const isSuccess = hourlyData.isSuccess;

  return (
    <div className="text-gray-700 bg-gradient-to-r from-white-400 via-gray-400 to-white-400 rounded-3xl p-5 mt-5 h-auto">
      <h3 className=" text-lg mb-5 ml-4">Visão Geral:</h3>

      <div className="flex gap-5">
        {isLoading && <SpinnerAnimated theme="dark" />}
        {isSuccess &&
          hourlyData.data?.list
            .slice(0, 6)
            .map((item, index) => (
              <HourlyCard data={item} key={item.dt} isFirst={index === 0} />
            ))}
      </div>
    </div>
  );
};

export default HourlyItemsTemplate;
