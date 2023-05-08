import { IRatingData } from '../../../../models';

export interface IDetailsPosterAndRating {
  image: string;
  ratings: IRatingData;
  imDbRating: string;
  metacriticRating: string;
}
