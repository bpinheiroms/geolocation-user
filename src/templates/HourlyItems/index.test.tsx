import { renderWithClient } from '../../utils/test/react-query-test';
import { waitFor } from '@testing-library/dom';
import { useGetWeatherHourly } from '../../services/useGetWeatherHourly';
import HourlyItemsTemplate from '.';
import {
  coordinatesMock,
  hourlyItems,
  useGetWeatherHourlyMock,
} from '../../utils/test/mock';

jest.mock('../../services/useGetWeatherHourly', () => ({
  useGetWeatherHourly: jest.fn(() => {
    return {
      isSuccess: false,
      isLoading: false,
      error: null,
      status: 'idle',
      mutate: jest.fn(),
    };
  }),
}));

const mockedUseGetWeatherHourly = useGetWeatherHourly as jest.MockedFunction<
  typeof useGetWeatherHourly
>;

describe('[Component] - HourlyItems Template', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should call hook to make api request with lat and long', async () => {
    mockedUseGetWeatherHourly.mockReturnValue({
      ...useGetWeatherHourlyMock,
      mutate: jest.fn(),
    } as any);

    renderWithClient(<HourlyItemsTemplate data={coordinatesMock} />);

    await waitFor(() => {
      expect(mockedUseGetWeatherHourly).toHaveBeenCalledWith(coordinatesMock);
    });
  });

  it('should show spinner animated when is loading', async () => {
    mockedUseGetWeatherHourly.mockReturnValue({
      ...useGetWeatherHourlyMock,
      status: 'loading',
      isLoading: true,
      mutate: jest.fn(),
    } as any);

    const { queryByTestId } = renderWithClient(
      <HourlyItemsTemplate data={coordinatesMock} />,
    );

    await waitFor(() => {
      expect(queryByTestId('spinner-animated')).not.toBe(null);
    });
  });

  it('should show hourly card when is success', async () => {
    mockedUseGetWeatherHourly.mockReturnValue({
      ...useGetWeatherHourlyMock,
      status: 'success',
      isSuccess: true,
      mutate: jest.fn(),
      data: {
        list: hourlyItems,
      },
    } as any);

    const { queryByTestId } = renderWithClient(
      <HourlyItemsTemplate data={coordinatesMock} />,
    );

    await waitFor(() => {
      expect(queryByTestId('hourly-card-container')).not.toBe(null);
    });
  });
});
