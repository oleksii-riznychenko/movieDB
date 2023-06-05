import { useMemo } from 'react';
import { Box } from '@mui/material';
import { IDetailsPosterAndRating } from './DetailsPosterAndRating.types';
import { RatingMovie } from '../../../../design-system';
import IMDB from '../../../../assets/images/imdb.svg';
import Metacritic from '../../../../assets/images/metacritic.svg';
import RottenTomatoes from '../../../../assets/images/rottenTomatoes.png';

export const DetailsPosterAndRating = ({
  image,
  ratings,
  imDbRating,
  metacriticRating,
}: IDetailsPosterAndRating) => {
  const imdbRatings = useMemo(
    () => ratings?.imDb || imDbRating,
    [imDbRating, ratings?.imDb]
  );
  const metacriticRatings = useMemo(
    () => ratings?.metacritic || metacriticRating,
    [metacriticRating, ratings?.metacritic]
  );

  return (
    <Box className="film-details__poster">
      <Box className="film-details__row film-details__poster-image">
        <img src={image} alt="poster" />
      </Box>
      <Box className="film-details__row film-details__rating">
        {!!imdbRatings && (
          <Box className="film-details__row film-details__rating-item">
            <RatingMovie value={+imdbRatings} />
            <img src={IMDB} alt="imdb" />
          </Box>
        )}
        {!!metacriticRatings && (
          <Box className="film-details__row film-details__rating-item">
            <RatingMovie value={+metacriticRatings} />
            <img src={Metacritic} alt="Metacritic" />
          </Box>
        )}
        {!!ratings?.rottenTomatoes && (
          <Box className="film-details__row film-details__rating-item">
            <RatingMovie value={+ratings.rottenTomatoes} />
            <img src={RottenTomatoes} alt="rottenTomatoes" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
