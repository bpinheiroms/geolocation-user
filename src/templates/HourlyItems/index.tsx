import HourlyCard from '../../components/HourlyCard';

const HourlyItemsTemplate = () => {
  return (
    <div className="text-gray-700 bg-gradient-to-r from-white-400 via-gray-400 to-white-400 rounded-3xl p-5 mt-5 h-auto">
      <h3 className=" text-lg mb-5 ml-4">Próximas horas:</h3>

      <div className="flex gap-5">
        <HourlyCard isFirst />
      </div>
    </div>
  );
};

export default HourlyItemsTemplate;
