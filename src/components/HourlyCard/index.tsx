import { useMemo } from 'react';

interface IProps {
  isFirst?: boolean;
  data: HourlyItem;
}

const HourlyCard: React.FC<IProps> = ({ isFirst, data }) => {
  const hourlyMemo = useMemo(() => {
    const hourSplit = data.dt_txt.split(' ')[1].split(':');
    const dateSplit = data.dt_txt.split(' ')[0].split('-');

    return {
      icon: data.weather[0].icon,
      temp: data.main.temp | 0,
      hour: `${hourSplit[0]}:${hourSplit[1]}`,
      date: `${dateSplit[2]}/${dateSplit[1]}`,
    };
  }, [data]);

  return (
    <>
      {!isFirst && <div className="bg-gray-400 w-[1px] h-auto" />}
      <div className="flex flex-col w-20  justify-center items-center">
        <p className="text-sm mb-2"><strong>{hourlyMemo.date}</strong></p>
        <p className="text-sm">{hourlyMemo.hour}</p>
        <div className="flex flex-1">
          <img
            className="w-[80px] h-[80px]"
            src={`/images/weather-icons/${hourlyMemo.icon}.png`}
          />
        </div>
        <p className="text-sm">{hourlyMemo.temp}°c</p>
      </div>
    </>
  );
};

export default HourlyCard;
