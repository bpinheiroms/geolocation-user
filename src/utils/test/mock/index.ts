export const weatherMock = {
  base: 'stations',
  clouds: {
    all: 100,
  },
  cod: 200,
  coord: {
    lat: -23.529,
    lon: -46.565,
  },
  dt: 1662559985,
  id: 3453732,
  main: {
    feels_like: 15.11,
    humidity: 90,
    pressure: 1025,
    temp: 15.19,
    temp_max: 18.38,
    temp_min: 14.28,
  },
  name: 'Pinheiros',
  rain: {
    '1h': 0.19,
  },
  sys: {
    country: 'BR',
    id: 2033898,
    sunrise: 1662541885,
    sunset: 1662584255,
    type: 2,
  },
  timezone: -10800,
  visibility: 10000,
  weather: [
    {
      description: 'chuva leve',
      icon: '10d',
      id: 500,
      main: 'Rain',
    },
  ],
  wind: {
    deg: 40,
    speed: 4.63,
  },
};

export const coordinatesMock = {
  latitude: '-23.1234',
  longitude: '-24.1234',
};

export const useGetWeatherHourlyMock = {
  isSuccess: false,
  isLoading: false,
  error: null,
  status: 'idle',
};

export const hourlyItems = [
  {
    clouds: { all: 14 },
    dt: 1662703200,
    dt_txt: '2022-09-09 06:00:00',
    main: {
      feels_like: 20.69,
      grnd_level: 931,
      humidity: 55,
      pressure: 1016,
      sea_level: 1016,
      temp: 21.09,
      temp_kf: -0.08,
      temp_max: 21.17,
      temp_min: 21.09,
    },
    pop: 0,
    sys: { pod: 'n' },
    visibility: 10000,
    weather: [
      { description: 'algumas nuvens', icon: '02n', id: 801, main: 'Clouds' },
    ],
    wind: { speed: 1.58, deg: 5, gust: 1.8 },
  },
  {
    clouds: { all: 14 },
    dt: 16627032001,
    dt_txt: '2022-09-09 06:00:00',
    main: {
      feels_like: 20.69,
      grnd_level: 931,
      humidity: 55,
      pressure: 1016,
      sea_level: 1016,
      temp: 21.09,
      temp_kf: -0.08,
      temp_max: 21.17,
      temp_min: 21.09,
    },
    pop: 0,
    sys: { pod: 'n' },
    visibility: 10000,
    weather: [
      { description: 'algumas nuvens', icon: '02n', id: 801, main: 'Clouds' },
    ],
    wind: { speed: 1.58, deg: 5, gust: 1.8 },
  },
];
