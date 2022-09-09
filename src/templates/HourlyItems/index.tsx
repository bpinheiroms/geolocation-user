import HourlyCard from '../../components/HourlyCard';
import SpinnerAnimated from '../../components/SpinnerAnimated';
import { useGetWeatherHourly } from '../../services/useGetWeatherHourly';

interface IParams {
  data: Coordinates;
}

const HourlyItemsTemplate: React.FC<IParams> = ({ data }) => {
  const hourlyData = useGetWeatherHourly(data);

  return (
    <div className="text-gray-700 bg-gradient-to-r from-white-400 via-gray-400 to-white-400 rounded-3xl p-5 mt-5 h-auto">
      <h3 className=" text-lg mb-5 ml-4">Visão Geral:</h3>

      {hourlyData.isLoading && <SpinnerAnimated theme="dark" />}
      {hourlyData.isSuccess && (
        <div
          className="grid grid-cols-6 gap-4"
          data-testid="hourly-card-container">
          {hourlyData.data?.list.slice(0, 6).map((item) => (
            <HourlyCard data={item} key={item.dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HourlyItemsTemplate;
