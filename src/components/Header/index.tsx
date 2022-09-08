import RefreshButton from "../Refresh";

interface IProps {
  value: string;
}

const Header: React.FC<IProps> = ({ value }) => {
  return (
    <div className="w-full pb-6 flex justify-between">
      <h1 className="text-3xl">{value}</h1>
      <RefreshButton value="Recarregar os dados"  />
    </div>
  );
};

export default Header;
