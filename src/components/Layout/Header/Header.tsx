import { useState, useEffect, useMemo } from 'react';
import { Search, Login, Face, Menu } from '@mui/icons-material';
import { NavLink, Link } from 'react-router-dom';
import { HeaderItem } from './Header.types';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../../LanguageSwitch';
import { configLink } from '../../../router';
import classNames from 'classnames';
import './Header.scss';

export const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const [, setWidth] = useState<number>(window.innerWidth);
  const [itsOpen, setShowMenu] = useState<boolean>(false);
  const [logIn, setLogIn] = useState<boolean>(false);

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

  const toggleLogIn = () => setLogIn(!logIn);
  const handleMenuClick = () => setShowMenu(!itsOpen);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth]);

  return (
    <div className="header">
      {window.innerWidth >= 730 ? (
        <>
          <Link to={configLink.home} className="header__logo">
            {t('logo')}
          </Link>

          <div className="header__center-item">
            <div className="header__info">
              <ul className="header__links">
                {config.map(({ id, link, title }) => (
                  <li className="header__li" key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        classNames('header__link', { 'is-active': isActive })
                      }
                      to={link}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <Link to={configLink.search} className="header__search">
              <Search className="header__search-button" />
            </Link>
          </div>

          <div className="header__right-side">
            <LanguageSwitch />
            <Link
              to={configLink.home}
              onClick={toggleLogIn}
              className="header__profile"
            >
              {!logIn ? <Login /> : <Face />}
            </Link>
          </div>
        </>
      ) : (
        <>
          <Menu className="header__menu" onClick={handleMenuClick} />
          {itsOpen ? (
            <>
              <div className="header__open">
                <ul className="header__links-mobile">
                  {config.map(({ id, link, title }) => (
                    <li className="header__li-mobile" key={id}>
                      <NavLink className="header__link-mobile" to={link}>
                        {title}
                      </NavLink>
                    </li>
                  ))}
                  <Link to={configLink.home} className="header__profile-mobile">
                    {t('header.profile')}
                  </Link>
                </ul>
              </div>
            </>
          ) : null}

          <Link to={configLink.home} className="header__logo-mobile">
            {t('logo')}
          </Link>

          <div className="header__right-side">
            <LanguageSwitch />

            <Link to={configLink.search} className="header__search-mobile">
              <Search className="header__search-button" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
