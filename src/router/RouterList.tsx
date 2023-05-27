import { Route, Routes } from 'react-router-dom';
import { configLink } from './config';
import {
  NotFound,
  HomePage,
  TopMovies,
  TopSeries,
  Top250Films,
  FilmDetails,
  PersonDetails,
  SearchPage,
  TopCartoons,
  SearchPageMobile,
} from '../pages';

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path={configLink.home} element={<HomePage />} />
      <Route path={configLink.movies} element={<TopMovies />} />
      <Route path={configLink.series} element={<TopSeries />} />
      <Route path={configLink.cartoons} element={<TopCartoons />} />
      <Route path={configLink.top250Films} element={<Top250Films />} />
      <Route path={`${configLink.film}:id`} element={<FilmDetails />} />
      <Route path={`${configLink.person}:id`} element={<PersonDetails />} />
      <Route path={`${configLink.search}:id`} element={<SearchPage />} />
      <Route path={configLink.searchMobile} element={<SearchPageMobile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
