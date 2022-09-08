import RefreshButton from '../Refresh';

interface IProps {
  value: string;
  hideButton?: boolean;
}

const Header: React.FC<IProps> = ({ value, hideButton }) => {
  return (
    <div className="w-full pb-6 flex justify-between">
      <h1 className="text-3xl">{value}</h1>
      {!hideButton && <RefreshButton value="Recarregar os dados" />}
    </div>
  );
};

export default Header;
