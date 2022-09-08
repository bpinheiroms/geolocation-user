import { ArrowPathIcon } from '@heroicons/react/24/solid'

interface IProps {
  value: string;
}

const RefreshButton: React.FC<IProps> = ({ value }) => {
  return (
    <div className="flex justify-center items-center text-gray-500 cursor-pointer gap-2">
      <ArrowPathIcon className="h-6 w-6"/>
      <p className="">{value}</p>
    </div>
  );
};

export default RefreshButton;
