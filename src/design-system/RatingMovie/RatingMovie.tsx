import { Box, Typography, CircularProgress } from '@mui/material';
import { IRatingMovie } from './RatingMovie.types';
import './RatingMovie.scss';

export const RatingMovie = ({ value }: IRatingMovie): JSX.Element => {
  return (
    <Box className="rating-movie">
      <CircularProgress
        size={44}
        value={100}
        variant="determinate"
        className="rating-movie__default"
      />
      <Box className="rating-movie__text-container">
        <Typography variant="body1">{value}</Typography>
      </Box>
      <CircularProgress
        size={44}
        variant="determinate"
        className="rating-movie__progress"
        value={value <= 10 ? value * 10 : value}
      />
    </Box>
  );
};
