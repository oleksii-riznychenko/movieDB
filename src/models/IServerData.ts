import { IMoviesData } from './IMoviesData';
import { TFunction } from 'i18next';

export interface IServerData {
  data: IMoviesData | undefined;
  isLoading?: boolean;
  title: string;
}
