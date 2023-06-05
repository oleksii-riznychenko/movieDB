import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalLoader, LANG, Layout } from '../../components/';
import { HomePageBanner } from './components/HomePageBanner';
import { useGetPopularMoviesQuery } from '../../service/OthersService';
import i18n from 'i18next';
import './HomePage.scss';
import { useTranslation } from 'react-i18next';
import { LinksBlock } from './components/LinksBlocks';

export const HomePage = (): JSX.Element => {
  const { data, isLoading } = useGetPopularMoviesQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  return (
    <Layout>
      {isLoading ? (
        <GlobalLoader />
      ) : data ? (
        <>
          <HomePageBanner data={data} isLoading={isLoading} title={''} />
          <LinksBlock />
        </>
      ) : (
        <h1>error</h1>
      )}
    </Layout>
  );
};
