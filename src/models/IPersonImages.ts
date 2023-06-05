import { IPersonImagesItems } from './IPersonImagesItems';

export interface IPersonImages {
  imdbId: string;
  tittle: string;
  fullTitle: string;
  type: string;
  year: string;
  items: IPersonImagesItems[];
}
