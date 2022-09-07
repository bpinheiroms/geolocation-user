import { Axios } from './axios';

export const httpApi = Axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
