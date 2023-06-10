import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { HeaderItem } from '../../Header.types';
import { configLink } from '../../../../../router';
import { useTranslation } from 'react-i18next';
import './HeaderList.scss';

export const HeaderList = () => {
  const { t } = useTranslation();

  const config: HeaderItem[] = useMemo(
    () => [
      {
        title: t('header.menu.home'),
        id: 'Home',
        link: configLink.home,
      },
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
    ],
    [t]
  );

  return (
    <div className="header__list">
      <ul className="header__links">
        {config.map(({ id, link, title }) => (
          <li className="header__link" key={id}>
            <NavLink
              className={({ isActive }) =>
                classNames('header__link--item', {
                  'header__link--active': isActive,
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
