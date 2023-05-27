import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { HeaderItem } from '../Layout/Header/Header.types';
import { configLink } from '../../router';
import { useTranslation } from 'react-i18next';
import './HeaderList.scss';

export const HeaderList = () => {
  const { t } = useTranslation();

  const config: HeaderItem[] = useMemo(
    () => [
      {
        title: t('header.menu.movies'),
        id: 'Movies',
        link: configLink.movies,
      },
      {
        title: t('header.menu.series'),
        id: 'Series',
        link: configLink.series,
      },
      {
        title: t('header.menu.cartoons'),
        id: 'Cartoons',
        link: configLink.cartoons,
      },
      {
        title: t('header.menu.anime'),
        id: 'Anime',
        link: configLink.anime,
      },
      {
        title: t('header.menu.tvShows'),
        id: 'TV Shows',
        link: configLink.tvShows,
      },
    ],
    [t]
  );

  return (
    <div className="header__info">
      <ul className="header__links">
        {config.map(({ id, link, title }) => (
          <li className="header__li" key={id}>
            <NavLink
              className={({ isActive }) =>
                classNames('header__link', {
                  'is-active': isActive,
                })
              }
              to={link}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
