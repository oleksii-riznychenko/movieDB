import React, { useState, useEffect } from 'react';
import { Login, Face } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { LanguageSwitch } from '../../LanguageSwitch';
import { configLink } from '../../../router';
import logo from '../../../assets/logos/logo_transparent.png';
import { HeaderMobile, HeaderCentralItem } from '../../';
import './Header.scss';

export const Header = (): JSX.Element => {
  const [windowWidth, setWidth] = useState<number>(window.innerWidth);
  const [logIn, setLogIn] = useState<boolean>(false);

  const toggleLogIn = () => setLogIn(!logIn);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setWidth]);

  return (
    <div className="header">
      {windowWidth >= 830 ? (
        <>
          <Link to={configLink.home}>
            <img src={logo} alt="logo" className="header__logo" />
          </Link>

          <div className="header__center-item">
            <HeaderCentralItem />
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
        <HeaderMobile />
      )}
    </div>
  );
};
