import { ICastShort } from './ICastShort';
import { IActorShort } from './IActorShort';

export interface IFullCastData {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  directors: ICastShort;
  writers: ICastShort;
  actors: IActorShort[];
  others: ICastShort[];
  errorMessage: string;
}
