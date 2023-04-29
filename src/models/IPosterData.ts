import { IPosterDataItem } from './IPosterDataItem';

export interface IPosterData {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  posters: IPosterDataItem[];
  backdrops: IPosterDataItem[];
  errorMessage: string;
}
