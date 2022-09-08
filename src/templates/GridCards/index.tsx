import Header from '../../components/Header';

import WeatherItemsTemplate from '../WeatherItems';

const GridCardsTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 ">
      <div className="w-[900px] p-4">
        <Header value="Olá, seja bem vindo!" />
        <WeatherItemsTemplate />
        <div className="bg-red-400 rounded-3xl p-5 mt-5 h-48">Hourly Card</div>
      </div>
    </div>
  );
};

export default GridCardsTemplate;
