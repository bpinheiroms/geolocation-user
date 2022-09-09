import GridCardsTemplate from '.';
import { useGetCurrentLocation } from '../../hooks/useGetCurrentLocation';
import { renderWithClient } from '../../utils/test/react-query-test';
import { waitFor } from '@testing-library/dom';

jest.mock('../../hooks/useGetCurrentLocation', () => ({
  useGetCurrentLocation: jest.fn(() => {
    return {
      data: null,
      status: 'loading',
      errorData: null,
    };
  }),
}));

const mockedUseGetCurrentLocation =
  useGetCurrentLocation as jest.MockedFunction<typeof useGetCurrentLocation>;

describe('[Component] - GridCards Template', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should show blocked or advisor message when do not have browser permission yet', async () => {
    mockedUseGetCurrentLocation.mockReturnValue({
      data: null,
      status: 'error',
      errorData: null,
    });

    const { queryByTestId } = renderWithClient(<GridCardsTemplate />);

    await waitFor(() => {
      expect(queryByTestId('message-container')).not.toBe(null);
      expect(queryByTestId('data-container')).toBe(null);
    });
  });

  it('should show components browser giving permission', async () => {
    mockedUseGetCurrentLocation.mockReturnValue({
      data: null,
      status: 'success',
      errorData: null,
    });

    const { queryByTestId } = renderWithClient(<GridCardsTemplate />);

    await waitFor(() => {
      expect(queryByTestId('message-container')).toBe(null);
      expect(queryByTestId('data-container')).not.toBe(null);
    });
  });
});
