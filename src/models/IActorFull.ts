import { IKnownForDetails, ICastMoviesDetails } from './';

export interface IActorFull {
  id: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  birthDate: string;
  deathDate: string;
  awards: string;
  height: string;
  knownFor: IKnownForDetails[];
  castMovies: ICastMoviesDetails[];
  errorMassage: string;
}
