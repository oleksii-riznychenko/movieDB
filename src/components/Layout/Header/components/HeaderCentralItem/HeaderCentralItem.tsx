import { Search as SearchIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { configLink } from '../../../../../router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderList } from '../HeaderList';
import './HeaderCentralItem.scss';

export const HeaderCentralItem = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const toggleSearchOpen = () => setSearchOpen(!searchOpen);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(configLink.search + searchMovie);
  };

  return (
    <>
      {!searchOpen ? (
        <>
          <HeaderList />

          <div className="header__loupe" onClick={toggleSearchOpen}>
            <SearchIcon className="header__loupe--button" />
          </div>
        </>
      ) : (
        <form onSubmit={handleSearch} className="header__form">
          <label className="header__search">
            <input
              type="text"
              value={searchMovie}
              onChange={handleInputChange}
              className="header__input"
              placeholder={t('search.placeholder') || ''}
            />
          </label>
          <button
            type="submit"
            className="header__loupe"
            onClick={searchMovie ? undefined : toggleSearchOpen}
          >
            <SearchIcon className="header__loupe--button" />
          </button>
        </form>
      )}
    </>
  );
};
