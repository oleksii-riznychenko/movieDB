import { IMoviesDataDetail } from '../../models';
import { Link } from 'react-router-dom';
import { configLink } from '../../router';
import '../../assets/styles/variables/variables.scss';
import './HomePageFilmCard.scss';

export const HomePageFilmCard = ({
  id,
  year,
  title,
  image,
  imDbRating,
}: IMoviesDataDetail): JSX.Element => {
  return (
    <div className="home-film-card">
      <Link to={configLink.film + id}>
        <div
          className="home-film-card-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="home-film-card-details">
            <div className="home-film-card-rating">
              {imDbRating.length > 0 ? imDbRating : 'Unrated'}
            </div>
            <div className="home-film-card-year">{year}</div>
          </div>
        </div>
        <span className="home-film-card-title">{title}</span>
      </Link>
    </div>
  );
};
