interface IProps {
  theme?: 'dark' | 'light';
}

const SpinnerAnimated: React.FC<IProps> = ({ theme = 'light' }) => {
  const colors = {
    dark: 'border-blue-500',
    light: 'border-gray-100',
  };

  return (
    <div className="w-full h-56 flex items-center justify-center" data-testid="spinner-animated">
      <div
        className={`h-12 w-12 animate-spin rounded-full border-4 border-double ${colors[theme]} border-t-transparent`}></div>
    </div>
  );
};

export default SpinnerAnimated;
