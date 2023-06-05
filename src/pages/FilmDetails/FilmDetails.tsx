import React from 'react';
import { GlobalLoader, Layout } from '../../components';
import { Stack, Container } from '@mui/material';
import {
  DetailsCast,
  DetailsContent,
  DetailsPosterAndRating,
} from './components';
import { useGetMoviesOrSeriesTVInformationQuery } from '../../service/TitleService';
import { useParams } from 'react-router-dom';
import { DetailsSimilars } from './components/DetailsSimilars';
import './FilmDetails.scss';

export const FilmDetails = (): JSX.Element => {
  const params = useParams();
  const { data, isLoading } = useGetMoviesOrSeriesTVInformationQuery(
    String(params.id)
  );

  return (
    <Layout>
      <Container maxWidth="xl" className="film-details">
        {isLoading ? (
          <GlobalLoader />
        ) : data && !data?.errorMessage ? (
          <Stack spacing={2}>
            <Stack
              spacing={4}
              className="film-details__stack"
              direction={{ xs: 'column', sm: 'row' }}
            >
              <DetailsPosterAndRating
                image={data.image}
                ratings={data.ratings}
                imDbRating={data.imDbRating}
                metacriticRating={data.metacriticRating}
              />
              <DetailsContent data={data} />
              <DetailsCast filmId={data.id} actorList={data.actorList} />
            </Stack>
            {Array.isArray(data.similars) && (
              <DetailsSimilars similars={data.similars} />
            )}
          </Stack>
        ) : null}
      </Container>
    </Layout>
  );
};
