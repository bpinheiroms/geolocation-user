import Header from '../../components/Header';
import HourlyItemsTemplate from '../HourlyItems';

import WeatherItemsTemplate from '../WeatherItems';

const GridCardsTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 ">
      <div className="w-[900px] p-4">
        <Header value="Olá, seja bem vindo!" />
        <WeatherItemsTemplate />
        <HourlyItemsTemplate />
      </div>
    </div>
  );
};

export default GridCardsTemplate;
