import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { configLink } from './config';

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path={configLink.home} element={<Home />} />
    </Routes>
  );
};
