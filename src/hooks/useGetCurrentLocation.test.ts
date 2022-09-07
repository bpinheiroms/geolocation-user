import { renderHook } from '@testing-library/react-hooks';
import { mockNavigatorGeolocation } from '../utils/test';

import useGetCurrentLocation from './useGetCurrentLocation';

describe('[hook] - useGetCurrentLocation', () => {
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    getCurrentPositionMock.mockClear();
  });

  it('should call getCurrentPosition method to get geolocation when hook is initialized', async () => {
    getCurrentPositionMock.mockImplementation();

    renderHook(() => useGetCurrentLocation());
    expect(getCurrentPositionMock).toHaveBeenCalled();
  });

  it('should change to loading status when is called first time', async () => {
    getCurrentPositionMock.mockImplementation();

    const { result } = renderHook(() => useGetCurrentLocation());
    expect(result.current.status).toEqual('loading');
  });

  it('should return error data and change status when coordinates is blocked', async () => {
    const errorData = {
      code: 1,
      message: 'User denied Geolocation',
    };

    getCurrentPositionMock.mockImplementation((_, rejected) =>
      rejected(errorData),
    );

    const { result } = renderHook(() => useGetCurrentLocation());
    expect(result.current.status).toEqual('error');
    expect(result.current.errorData).toEqual(errorData);
  });

  it('should return success data and change status when coordinates is available', async () => {
    const coords = {
      latitude: '10.1234567',
      longitude: '-10.1234567',
    };

    const successData = {
      coords,
    };

    getCurrentPositionMock.mockImplementation((success, _) =>
      success(successData),
    );

    const { result } = renderHook(() => useGetCurrentLocation());
    expect(result.current.status).toEqual('success');
    expect(result.current.data).toEqual(coords);
  });
});
