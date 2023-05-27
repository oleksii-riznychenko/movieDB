import axios from 'axios';
import { FilmCard, GlobalLoader, Layout } from '../../components';
import React, { useState } from 'react';
import { APIKEY, baseUrl } from '../../service/API';
import './SearchPageMobile.scss';
import { Grid } from '@mui/material';
import { IMoviesDataDetail } from '../../models';

export const SearchPageMobile = (): JSX.Element => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState<IMoviesDataDetail[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get<{ results: IMoviesDataDetail[] }>(
        `${baseUrl}/en/API/Search/${APIKEY}/${searchMovie}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error occurred:', error);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="search-page">
        <form onSubmit={handleSearch}>
          <label className="search-page__label">
            <span className="search-page__title">Search films and series</span>
            <input
              type="text"
              value={searchMovie}
              onChange={handleInputChange}
              className="search-page__input"
            />
          </label>
          <button type="submit" className="search-page__button">
            Search
          </button>
        </form>
        {loading ? (
          <GlobalLoader />
        ) : (
          <div className="search-page__results">
            <Grid
              container
              spacing={{ xs: 2, md: 1 }}
              columns={{ md: 12, lg: 12 }}
            >
              {movies.slice(0, 24).map((movie) => (
                <Grid item xs={12} sm={4} md={3} lg={1.5} key={movie.id}>
                  <FilmCard className="film-card--small" {...movie} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </Layout>
  );
};
