import {
  GlobalLoader,
  LANG,
  Layout,
  PagePagination,
  HomePageFilmCard,
  // FilmBanner,
} from '../../components/';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetPopularMoviesQuery } from '../../service/OthersService';
import { IMoviesDataDetail } from '../../models';
import { FilmsOnCarousel } from '../../utils/constants';

import './HomePage.scss';

export const HomePage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading } = useGetPopularMoviesQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  const [page, setPage] = useState<number>(1);
  const [fullFilmData, setFullFilmData] = useState<IMoviesDataDetail[]>([]);
  const [itemsForPage, setItemsForPage] = useState<IMoviesDataDetail[]>([]);

  const getCurrentPageFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = parseInt(searchParams.get('page') as string);

    return !isNaN(pageParam) ? pageParam : 1;
  };
  const handleLoadNewPage = (value: number): void => {
    const startIndex = (value - 1) * FilmsOnCarousel;
    const endIndex = value * FilmsOnCarousel;

    setPage(value);
    navigate(`?page=${value}`);
    setItemsForPage(fullFilmData.slice(startIndex, endIndex));
  };
  const handleChange = (event: ChangeEvent<unknown>, value: number) =>
    handleLoadNewPage(value);

  useEffect(() => {
    if (data && Array.isArray(data?.items)) {
      const validData = data.items.map((film: IMoviesDataDetail) => ({
        ...film,
        image: film?.image?.slice(0, film.image.indexOf('_UX')),
      }));

      setFullFilmData(validData);
      setPage(getCurrentPageFromURL());
    }
  }, [data]);
  useEffect(() => handleLoadNewPage(getCurrentPageFromURL()), [fullFilmData]);

  return (
    <Layout>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <div className="home-page">
          <div>
            <span className="home-page__title">
              {t('titles.popularMovies')}
            </span>
            <div className="home-page__carousel">
              {Array.isArray(itemsForPage) &&
                itemsForPage.map((movie) => (
                  <div key={movie.id}>
                    <HomePageFilmCard {...movie} />
                  </div>
                ))}
            </div>
            <PagePagination
              page={page}
              totalPages={5}
              handleChange={handleChange}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};
