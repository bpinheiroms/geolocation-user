interface IProps {
  isFirst?: boolean;
  icon?: string;
}

const HourlyCard: React.FC<IProps> = ({ isFirst, icon }) => {
  return (
    <>
      {!isFirst && <div className="bg-gray-400 w-[1px] h-auto" />}
      <div className="flex flex-col w-20  justify-center items-center">
        <p className="text-sm">20:30</p>
        <div className="flex flex-1">
          <img
            className="w-[80px] h-[80px]"
            src={`/images/weather-icons/${icon ?? '01d'}.png`}
          />
        </div>
        <p className="text-sm">23°c</p>
      </div>
    </>
  );
};

export default HourlyCard;
