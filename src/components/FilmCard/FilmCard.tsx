import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { StarBorder, DateRange } from '@mui/icons-material';
import { configLink } from '../../router';
import { IFilmCard } from './FilmCard.types';
import './FilmCard.scss';

export const FilmCard = ({
  id,
  year,
  title,
  image,
  imDbRating,
  className = '',
}: IFilmCard): JSX.Element => {
  return (
    <Card className={`film-card ${className}`}>
      <CardActionArea
        component={RouterLink}
        to={configLink.film + id}
        className="film-card__action-area"
      >
        <Chip
          size="small"
          color="success"
          label={imDbRating}
          icon={<StarBorder />}
          className="film-card__rate"
        />
        {year && (
          <Chip
            size="small"
            label={year}
            color="primary"
            icon={<DateRange />}
            className="film-card__year"
          />
        )}
        <CardMedia
          alt="poster"
          image={image}
          component="img"
          className="film-card__image"
        />
        <CardContent className="film-card__content">
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
