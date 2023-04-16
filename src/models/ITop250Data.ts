import { ITop250DataDetail } from './ITop250DataDetail';

export interface ITop250Data {
  items: ITop250DataDetail[];
  errorMessage: string;
}
