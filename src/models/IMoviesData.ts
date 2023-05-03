import { IMoviesDataDetail } from './IMoviesDataDetail';

export interface IMoviesData {
  items: IMoviesDataDetail[];
  errorMessage: string;
}
