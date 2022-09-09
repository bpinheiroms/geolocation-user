import { renderWithClient } from '../../utils/test/react-query-test';
import { waitFor } from '@testing-library/dom';
import WeatherItemsTemplate from '.';
import {
  coordinatesMock,
  hourlyItems,
  useGetWeatherHourlyMock,
  weatherMock,
} from '../../utils/test/mock';
import { useGetWeatherData } from '../../services/useGetWeatherData';

jest.mock('../../services/useGetWeatherData', () => ({
  useGetWeatherData: jest.fn(() => {
    return {
      isSuccess: false,
      isLoading: false,
      error: null,
      status: 'idle',
      mutate: jest.fn(),
    };
  }),
}));

const mockedUseGetWeatherData = useGetWeatherData as jest.MockedFunction<
  typeof useGetWeatherData
>;

describe('[Component] - WeatherItems Template', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('should call hook to make api request with lat and long', async () => {
    mockedUseGetWeatherData.mockReturnValue({
      ...useGetWeatherHourlyMock,
      mutate: jest.fn(),
      data: weatherMock,
      isSuccess: true,
    } as any);

    renderWithClient(<WeatherItemsTemplate data={coordinatesMock} />);

    await waitFor(() => {
      expect(mockedUseGetWeatherData).toHaveBeenCalledWith(coordinatesMock);
    });
  });
});
