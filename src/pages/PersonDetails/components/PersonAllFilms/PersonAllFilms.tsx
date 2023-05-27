import './PersonAllFilms.scss';
import React from 'react';
import { IPersonAllFilms } from '../../../../models';
import { Link } from 'react-router-dom';
export const PersonAllFilms = ({
  castMovies,
}: IPersonAllFilms): JSX.Element => {
  return (
    <div className="actor-details__list">
      {castMovies.slice(0, 15).map((movie) => (
        <Link to={`/film/${movie.id}`} key={movie.id}>
          <li className="name"> {movie.title}</li>
        </Link>
      ))}
    </div>
  );
};
