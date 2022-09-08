import { message } from './misc';

interface IProps {
  status: 'loading' | 'error';
}

const Message: React.FC<IProps> = ({ status }) => {
  const IconSvg = message[status].Icon;

  return (
    <div className="mt-24 text-gray-500  flex justify-center items-center gap-4">
      <IconSvg className="h-14 w-14" />
      <div>
        <h2>{message[status].title}</h2>
        <p>{message[status]?.description}</p>
      </div>
    </div>
  );
};

export default Message;
