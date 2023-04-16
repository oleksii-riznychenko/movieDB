import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';
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
  return (
    <div className="header">
      <div className="header-logo">LOGO</div>

      <div className="header-center-item">
        <div className="header-info">
          <ul className="header-links">
            {headerList.map((item: HeaderItem) => (
              <li className="header-li" key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    classNames('header-link', { 'is-active': isActive })
                  }
                  to={item.link}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to={'/'}>
          <SearchIcon className="header-search" />
        </Link>
      </div>

      <div className="header-profile">Profile</div>
    </div>
  );
};
