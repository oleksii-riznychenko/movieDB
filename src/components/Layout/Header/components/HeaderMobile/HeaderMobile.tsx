import { Menu, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/logos/logo_transparent.png';
import { LanguageSwitch } from '../../../../LanguageSwitch';
import { NavLink } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import { HeaderItem } from '../../Header.types';
import { configLink } from '../../../../../router';
import { useTranslation } from 'react-i18next';
import './HeaderMobile.scss';

export const HeaderMobile = () => {
  const { t } = useTranslation();
  const [itsOpen, setShowMenu] = useState<boolean>(false);

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

  const handleMenuClick = () => setShowMenu(!itsOpen);

  return (
    <>
      <Menu className="header__menu" onClick={handleMenuClick} />
      {itsOpen && (
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
      )}

      <Link to={configLink.home} className="header__logo-mobile">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      <div className="header__right-side">
        <LanguageSwitch />

        <Link to={configLink.searchMobile} className="header__loupe--mobile">
          <SearchIcon className="header__loupe--button" />
        </Link>
      </div>
    </>
  );
};
