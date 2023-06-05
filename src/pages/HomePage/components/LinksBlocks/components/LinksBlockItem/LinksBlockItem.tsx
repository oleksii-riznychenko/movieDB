import { IMoviesDataDetail } from '../../../../../../models';
import React from 'react';
import { Link } from 'react-router-dom';
import { configLink } from '../../../../../../router';
import './LinksBlockItem.scss';

export const LinksBlockItem = ({ id, title, image }: IMoviesDataDetail) => {
  return (
    <div className="films-block">
      <Link
        to={configLink.film + id}
        style={{ backgroundImage: `url(${image})` }}
        className="films-block__image"
      ></Link>
      <div className="films-block__title">{title}</div>
    </div>
  );
};
