import { ICastMovies, IKnownFor } from './';

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
  knownFor: IKnownFor;
  castMovies: ICastMovies[];
  errorMassage: string;
}
