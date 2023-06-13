import { IFullCastData } from '../../../../models';
import { FullCastCard } from '../FullCastCard';
import './FullCastCatalog.scss';

export const FullCastCatalog = ({ ...data }: IFullCastData) => {
  return (
    <div className="full-cast">
      {data.actors.map((actor) => (
        <FullCastCard key={actor.id} {...actor} />
      ))}
    </div>
  );
};
