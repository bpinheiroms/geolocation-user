import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

export const message = {
  loading: {
    title: 'Solicitando permissão para acessar sua localização ...',
    Icon: Cog6ToothIcon,
    description: '',
  },
  error: {
    title: 'Não foi possível ter acesso à sua localização.',
    Icon: XMarkIcon,
    description: 'Por favor, acesse as configurações do navegador, de permissão e recarregue novamente.',
  },
};
