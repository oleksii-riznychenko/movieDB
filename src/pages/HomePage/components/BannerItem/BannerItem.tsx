import { IMoviesDataDetail } from '../../../../models';
import { useGetImageQuery } from '../../../../service/TitleService';
import { Link } from 'react-router-dom';
import { configLink } from '../../../../router';
import { GlobalLoader } from '../../../../components';
import { Chip } from '@mui/material';
import { DateRange, StarBorder } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import './BannerItem.scss';

export const BannerItem = ({
  id,
  title,
  year,
  imDbRating,
  crew,
}: IMoviesDataDetail): JSX.Element => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetImageQuery(id);
  const director = crew.split(' ').slice(0, 2).join(' ');

  return (
    <>
      {isLoading ? (
        <GlobalLoader />
      ) : data ? (
        <div
          className="banner-item"
          style={{ backgroundImage: `url(${data.items[0].image})` }}
        >
          <div className="banner-item__info">
            <Chip
              size="small"
              color="success"
              label={imDbRating || 'Unrated'}
              icon={<StarBorder />}
              className="banner-item__rating"
            />
            {year && (
              <Chip
                size="small"
                label={year}
                color="primary"
                icon={<DateRange />}
                className="banner-item__year"
              />
            )}
          </div>
          <span className="banner-item__title">{title}</span>
          <span className="banner-item__director">
            {t('home-page.banner.from')}
            <span className="banner-item__director--name">{director}</span>
          </span>
          <Link to={configLink.film + id} className="banner-item__button">
            {t('home-page.banner.watch')}
          </Link>
        </div>
      ) : null}
    </>
  );
};
