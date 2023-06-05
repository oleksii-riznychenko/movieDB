import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { IMoviesDataDetail } from '../../models';
import axios from 'axios';
import { APIKEY, baseUrl } from '../../service/API';
import { useParams } from 'react-router-dom';
import { FilmCard, GlobalLoader, Layout } from '../../components';
import { useTranslation } from 'react-i18next';
import './SearchPage.scss';

export const SearchPage = (): JSX.Element => {
  const { t } = useTranslation();
  const params = useParams();
  const [movies, setMovies] = useState<IMoviesDataDetail[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);

      try {
        const response = await axios.get<{ results: IMoviesDataDetail[] }>(
          `${baseUrl}/en/API/Search/${APIKEY}/${params.id}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error occurred:', error);
      }

      setLoading(false);
    };

    handleSearch();
  }, [params]);

  return (
    <Layout>
      <div className="search-page">
        {loading ? (
          <GlobalLoader />
        ) : movies.length > 0 ? (
          <>
            <div className="search-page__title">
              {t('search.searchTitle')}: {params.id}
            </div>
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
          </>
        ) : (
          <div>error</div>
        )}
      </div>
    </Layout>
  );
};
