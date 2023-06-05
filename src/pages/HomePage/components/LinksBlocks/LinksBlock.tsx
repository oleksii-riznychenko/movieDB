import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetTop250MoviesQuery,
  useGetTop250TVsQuery,
  useGetPopularMoviesQuery,
  useGetPopularTVsQuery,
  useGetInTheatersQuery,
  useGetComingSoonQuery,
} from '../../../../service/OthersService';
import i18n from 'i18next';
import { configLink } from '../../../../router';
import { LinksBlockList } from './components/LinksBlockList';

const sliceData = (data: any) => {
  if (Array.isArray(data?.items)) {
    return data?.items.slice(0, 28);
  }
  return [];
};

export const LinksBlock = () => {
  const { t } = useTranslation();

  const { data: moviesData } = useGetTop250MoviesQuery(i18n.language);
  const { data: TVsData } = useGetTop250TVsQuery(i18n.language);
  const { data: popularMoviesData } = useGetPopularMoviesQuery(i18n.language);
  const { data: popularTVsData } = useGetPopularTVsQuery(i18n.language);
  const { data: inTheatersData } = useGetInTheatersQuery(i18n.language);
  const { data: comingSoonData } = useGetComingSoonQuery(i18n.language);

  const slicedMoviesData = useMemo(() => sliceData(moviesData), [moviesData]);
  const slicedTVsData = useMemo(() => sliceData(TVsData), [TVsData]);
  const slicedPopularMoviesData = useMemo(
    () => sliceData(popularMoviesData),
    [popularMoviesData]
  );
  const slicedPopularTVsData = useMemo(
    () => sliceData(popularTVsData),
    [popularTVsData]
  );
  const slicedInTheatersData = useMemo(
    () => sliceData(inTheatersData),
    [inTheatersData]
  );
  const slicedComingSoonData = useMemo(
    () => sliceData(comingSoonData),
    [comingSoonData]
  );

  const linkData = [
    {
      link: configLink.movies,
      title: t('titles.popularMovies'),
      data: slicedPopularMoviesData,
    },
    {
      link: configLink.series,
      title: t('titles.popularSeries'),
      data: slicedPopularTVsData,
    },
    {
      link: configLink.inTheaters,
      title: t('titles.inTheaters'),
      data: slicedInTheatersData,
    },
    {
      link: configLink.comingSoon,
      title: t('titles.comingSoon'),
      data: slicedComingSoonData,
    },
    {
      link: configLink.top250Films,
      title: t('titles.top250Movies'),
      data: slicedMoviesData,
    },
    {
      link: configLink.top250TVs,
      title: t('titles.top250TVs'),
      data: slicedTVsData,
    },
  ];

  return (
    <>
      {linkData.map(({ link, title, data }) => (
        <LinksBlockList link={link} title={title} data={data} key={link} />
      ))}
    </>
  );
};
