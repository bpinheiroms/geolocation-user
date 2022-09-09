import { useEffect, useState } from 'react';

const useGetCurrentLocation = () => {
  const [data, setData] = useState<Coordinates>(null);
  const [status, setStatus] = useState<CoordinatesStatusRequest>('loading');
  const [errorData, setErrorData] = useState<CoordinatesErrorData>(null);

  useEffect(() => {
    setStatus('loading');

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setData({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
        setStatus('success');
      },
      (error: GeolocationPositionError) => {
        setErrorData(error);
        setStatus('error');
      },
    );
  }, []);

  return { data, status, errorData };
};

export { useGetCurrentLocation };
