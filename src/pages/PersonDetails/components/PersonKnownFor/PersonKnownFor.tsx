import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FilmCard } from '../../../../components';
import { useTranslation } from 'react-i18next';
import { IPersonKnownFor } from '../../../../models';
import './PersonKnownFor.scss';

export const PersonKnownFor = ({ knownFor }: IPersonKnownFor): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Box className="film-details__row">
        <Typography variant="h6" className="film-details__title">
          <span>{t('actorDetails.knownFor')}</span>
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 1 }} className="w">
        {knownFor.map((movie) => (
          <Grid item xs={12} sm={4} md={3} lg={1.5} key={movie.id}>
            <FilmCard className="film-card--small" {...movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
