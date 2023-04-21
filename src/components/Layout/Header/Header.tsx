import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/SentimentNeutral';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Header.css';

const headerList = [
  { title: 'Movies', id: 'Movies', link: '/movies' },
  { title: 'Series', id: 'Series', link: '/series' },
  { title: 'Cartoons', id: 'Cartoons', link: '/cartoons' },
  { title: 'Anime', id: 'Anime', link: '/anime' },
  { title: 'TV Shows', id: 'TV Shows', link: '/tv-shows' },
];

interface HeaderItem {
  title: string;
  id: string;
  link: string;
}

export const Header = (): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const [itsOpen, setShowMenu] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const toggleLogIn = () => {
    setLogIn(!logIn);
  };

  const handleMenuClick = () => {
    setShowMenu(!itsOpen);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  return (
    <div className="header">
      {window.innerWidth >= 730 ? (
        <>
          <a href="/" className="header-logo">
            LOGO
          </a>
          <div className="header-center-item">
            <div className="header-info">
              <ul className="header-links">
                {headerList.map((item: HeaderItem) => (
                  <li className="header-li" key={item.id}>
                    <NavLink className="header-link" to={item.link}>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <Link to={'/search'} className="header-search">
              <SearchIcon className="header-search-button" />
            </Link>
          </div>

          <Link className="header-profile" to={'/'} onClick={toggleLogIn}>
            {!logIn ? <LoginIcon /> : <FaceIcon />}
          </Link>
        </>
      ) : (
        <div className="header">
          <MenuIcon className="header-menu" onClick={handleMenuClick} />
          {itsOpen ? (
            <ul className="header-links-mobile">
              {headerList.map((item: HeaderItem) => (
                <li className="header-li-mobile" key={item.id}>
                  <NavLink className="header-link-mobile" to={item.link}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <a className="header-profile-mobile" href="/">
                Profile
              </a>
            </ul>
          ) : null}

          <a href="/" className="header-logo-mobile">
            LOGO
          </a>

          <Link to={'/search'} className="header-search-mobile">
            <SearchIcon className="header-search-button" />
          </Link>
        </div>
      )}
    </div>
  );
};
