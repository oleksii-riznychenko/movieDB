import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FilmCard } from '../../../../components';
import { IDetailsSimilars } from './DetailsSimilars.types';
import { useTranslation } from 'react-i18next';

export const DetailsSimilars = ({
  similars,
}: IDetailsSimilars): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Box className="film-details__row">
        <Typography variant="h6" className="film-details__title">
          {t('filmDetails.similarMovies')}
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ md: 12, lg: 12 }}>
        {similars.slice(0, 8).map((movie) => (
          <Grid item xs={12} sm={4} md={3} lg={1.5} key={movie.id}>
            <FilmCard className="film-card--small" {...movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
