import { Route, Routes } from 'react-router-dom';
import { configLink } from './config';
import {
  NotFound,
  HomePage,
  TopMovies,
  TopSeries,
  Top250Films,
} from '../pages/';

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path={configLink.home} element={<HomePage />} />
      <Route path={configLink.movies} element={<TopMovies />} />
      <Route path={configLink.series} element={<TopSeries />} />
      <Route path={configLink.top250Films} element={<Top250Films />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
