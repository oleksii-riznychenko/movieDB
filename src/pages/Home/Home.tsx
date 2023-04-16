import React, { useState, ChangeEvent, useEffect } from 'react';
import {
  Layout,
  FilmCard,
  PageTitle,
  GlobalLoader,
  PagePagination,
} from '../../components';
import { Grid, Stack } from '@mui/material';
import { ITop250DataDetail } from '../../models';
import { useGetTop250MoviesQuery } from '../../service/OthersService';

const itemsPerPage = 12;

export const Home = (): JSX.Element => {
  const { data, isLoading } = useGetTop250MoviesQuery('en');
  const [page, setPage] = useState<number>(1);
  const [fullFilmData, setFullFilmData] = useState<ITop250DataDetail[]>([]);
  const [itemsForPage, setItemsForPage] = useState<ITop250DataDetail[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    const startIndex = (value - 1) * itemsPerPage;
    const endIndex = value * itemsPerPage;

    setPage(value);
    setItemsForPage(fullFilmData.slice(startIndex, endIndex));
  };

  useEffect(() => {
    if (data && Array.isArray(data?.items)) {
      const validData = data.items.map((film: ITop250DataDetail) => ({
        ...film,
        image: film?.image?.slice(0, film.image.indexOf('_UX')),
      }));

      setPage(1);
      setFullFilmData(validData);
      setTotalPages(Math.ceil(data.items.length / itemsPerPage));
      setItemsForPage(validData.slice(0, itemsPerPage));
    }
  }, [data]);

  return (
    <Layout>
      <PageTitle title="Top 250 Movies" />
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
