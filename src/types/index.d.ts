interface CustomError extends Error {
  response: any;
}

type Coordinates = {
  latitude: string;
  longitude: string;
} | null;

type CoordinatesStatusRequest = 'idle' | 'loading' | 'success' | 'error';

type CoordinatesErrorData = {
  code: number;
  message: string;
} | null;

