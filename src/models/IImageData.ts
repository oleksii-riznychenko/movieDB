import { IImageDataDetail } from './IImageDataDetail';

export interface IImageData {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  items: IImageDataDetail[];
  errorMessage: string;
}
