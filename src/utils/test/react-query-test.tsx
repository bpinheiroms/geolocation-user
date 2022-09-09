import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../config/react-query';

export function renderWithClient(ui: React.ReactElement) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: () =>
      rerender(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
      ),
  };
}
