import { useMemo } from 'react';

interface IProps {
  data: HourlyItem;
}

const HourlyCard: React.FC<IProps> = ({ data }) => {
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
    <div className="flex flex-col w-20 justify-center items-center">
      <p className="text-sm mb-2">
        <strong>{hourlyMemo.date}</strong>
      </p>
      <p className="text-sm">{hourlyMemo.hour}</p>
      <div className="flex flex-1">
        <img
          className="w-[80px] h-[80px]"
          src={`/images/weather-icons/${hourlyMemo.icon}.png`}
        />
      </div>
      <p className="text-sm">{hourlyMemo.temp}°c</p>
    </div>
  );
};

export default HourlyCard;
