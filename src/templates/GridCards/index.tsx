import Header from '../../components/Header';
import Message from '../../components/Message';
import useGetCurrentLocation from '../../hooks/useGetCurrentLocation';
import HourlyItemsTemplate from '../HourlyItems';
import WeatherItemsTemplate from '../WeatherItems';

const GridCardsTemplate = () => {
  const { data, status } = useGetCurrentLocation();
  const lockFeatures = status === 'loading' || status === 'error';

  return (
    <div className="flex flex-col justify-center items-center mt-0 md:mt-16 ">
      <div className="p-4">
        <Header hideButton={lockFeatures} value="Olá, seja bem vindo!" />

        {lockFeatures ? (
          <Message status={status} />
        ) : (
          <>
            <WeatherItemsTemplate data={data} />
            <HourlyItemsTemplate data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default GridCardsTemplate;
