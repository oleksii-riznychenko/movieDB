import { useState, useEffect, useMemo } from 'react';
import { Search, Login, Face, Menu } from '@mui/icons-material';
import { NavLink, Link } from 'react-router-dom';
import { HeaderItem } from './Header.types';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../../LanguageSwitch';
import { configLink } from '../../../router';

import './Header.css';

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
          <div className="header-left-side header-block">
            <Link to={configLink.home} className="header-logo">
              {t('logo')}
            </Link>

            <LanguageSwitch />
          </div>

          <div className="header-center-item header-block">
            <div className="header-info">
              <ul className="header-links">
                {config.map(({ id, link, title }) => (
                  <li className="header-li" key={id}>
                    <NavLink className="header-link" to={link}>
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <Link to={configLink.search} className="header-search">
              <Search className="header-search-button" />
            </Link>
          </div>

          <Link
            to={configLink.home}
            onClick={toggleLogIn}
            className="header-profile"
          >
            {!logIn ? <Login /> : <Face />}
          </Link>
        </>
      ) : (
        <>
          <Menu className="header-menu" onClick={handleMenuClick} />
          {itsOpen ? (
            <>
              <div className="header-open">
                <div className="nn"></div>

                <ul className="header-links-mobile">
                  {config.map(({ id, link, title }) => (
                    <li className="header-li-mobile" key={id}>
                      <NavLink className="header-link-mobile" to={link}>
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <LanguageSwitch />
              <Link to={configLink.home} className="header-profile-mobile">
                Profile
              </Link>
            </>
          ) : null}

          <Link to={configLink.home} className="header-logo-mobile">
            {t('logo')}
          </Link>

          <Link to={configLink.search} className="header-search-mobile">
            <Search className="header-search-button" />
          </Link>
        </>
      )}
    </div>
  );
};
