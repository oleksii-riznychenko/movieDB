import { IKeyValueItem } from './IKeyValueItem';
import { INowInTheatersStars } from './INowInTheatersStars';

export interface INowInTheatersDetails {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  releaseState: string;
  image: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  contentRating: string;
  imDbRating: string;
  imDbRatingCount: string;
  metacriticRating: string;
  genres: string;
  ganreList: IKeyValueItem;
  directors: string;
  directorList: string;
  stars: string;
  starsList: INowInTheatersStars;
}
