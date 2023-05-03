import './FilmBanner.css';
import { IMoviesDataDetail } from '../../models';
import { Link } from 'react-router-dom';
export const FilmBanner = ({
  id,
  year,
  title,
  image,
  imDbRating,
}: IMoviesDataDetail): JSX.Element => {
  return (
    //   <div className="film-banner" style={{ backgroundImage: `url(${image})` }}>
    //     <Link to={`/${id}`}>
    //       <div className="film-banner-details">
    //         {/*<div className="film-bannerrating">*/}
    //         {/*  {imDbRating.length > 0 ? imDbRating : 'Unrated'}*/}
    //         {/*</div>*/}
    //         <div className="film-banner-year">{year}</div>
    //       </div>
    //       <span className="film-banner-title">{title}</span>
    //     </Link>
    //   </div>
    <Link className="product-card" to={`/${id}`}>
      <img className="product-card__image" src={image} />
      <span className="product-card__brand">{title}</span>
      <span className="product-card__description">{year}</span>
      <span className="product-card__price">{imDbRating}</span>
    </Link>
  );
};
