interface CustomError extends Error {
  response: any;
}

type Coordinates = {
  latitude: string;
  longitude: string;
} | null;

type CoordinatesStatusRequest = 'loading' | 'success' | 'error';
type MessageStatus = 'loading' | 'error';

type CoordinatesErrorData = {
  code: number;
  message: string;
} | null;

type WeatherResponse = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  rain: {
    [key: string]: number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
};

type WeatherHourlyResponse = {
  cod: number;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
      sea_level: number;
      grnd_level: number;
      temp_kf: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    rain: {
      [key: string]: number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
};
