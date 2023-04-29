import { Route, Routes } from 'react-router-dom';
import { FilmDetails, Top250Films } from '../pages';
import { configLink } from './config';
import { Layout } from '../components';

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path={configLink.top250Films} element={<Top250Films />} />
      <Route path={`${configLink.film}:id`} element={<FilmDetails />} />
      <Route path="*" element={<Layout>404</Layout>} />
    </Routes>
  );
};
