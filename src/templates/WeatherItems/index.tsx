import WeatherCard from "../../components/WeatherCard";

const WeatherItemsTemplate = () => {
  return (
    <div className="flex gap-5 mt-5">
      <WeatherCard />
      <div className="flex-1 p-5 rounded-3xl bg-green-600 h-auto">
        Localization Card
      </div>
    </div>
  );
};


export default WeatherItemsTemplate
