import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Layout,
  FilmCard,
  PageTitle,
  GlobalLoader,
  PagePagination,
} from '../index';
import { Grid, Stack } from '@mui/material';
import { IMoviesDataDetail } from '../../models';
import { FilmsPerPage } from '../../utils/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import { IServerData } from '../../models';

export const FilmCatalog = ({
  title,
  data,
  isLoading,
}: IServerData): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState<number>(1);
  const [fullFilmData, setFullFilmData] = useState<IMoviesDataDetail[]>([]);
  const [itemsForPage, setItemsForPage] = useState<IMoviesDataDetail[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const getCurrentPageFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = parseInt(searchParams.get('page') as string);

    return !isNaN(pageParam) ? pageParam : 1;
  };

  const handleLoadNewPage = (value: number): void => {
    const startIndex = (value - 1) * FilmsPerPage;
    const endIndex = value * FilmsPerPage;

    setPage(value);
    navigate(`?page=${value}`);
    setItemsForPage(fullFilmData.slice(startIndex, endIndex));
  };

  const handleChange = (event: ChangeEvent<unknown>, value: number) =>
    handleLoadNewPage(value);

  useEffect(() => {
    if (data && Array.isArray(data?.items)) {
      const validData = data.items.map((film: IMoviesDataDetail) => ({
        ...film,
        image: film?.image?.slice(0, film.image.indexOf('_UX')),
      }));

      setFullFilmData(validData);
      setPage(getCurrentPageFromURL());
      setTotalPages(Math.ceil(data.items.length / FilmsPerPage));
    }
  }, [data]);
  useEffect(() => handleLoadNewPage(getCurrentPageFromURL()), [fullFilmData]);

  return (
    <Layout>
      <PageTitle title={title} />
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <Stack spacing={2}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          >
            {Array.isArray(itemsForPage) &&
              itemsForPage.map((movie) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={movie.id}>
                  <FilmCard {...movie} />
                </Grid>
              ))}
          </Grid>
          {totalPages > 1 && (
            <PagePagination
              page={page}
              totalPages={totalPages}
              handleChange={handleChange}
            />
          )}
        </Stack>
      )}
    </Layout>
  );
};
