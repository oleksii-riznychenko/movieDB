import React from 'react';
import { GlobalLoader, Layout } from '../../components/';
import { HomePageBanner } from './components/HomePageBanner';
import { useGetPopularMoviesQuery } from '../../service/OthersService';
import { LinksBlock } from './components/LinksBlocks';
import { useAppSelector } from '../../hooks/redux';
import { LangEnum } from '../../models';
import './HomePage.scss';

export const HomePage = (): JSX.Element => {
  const language = useAppSelector((state) => state.root.language);
  const { data, isLoading } = useGetPopularMoviesQuery(
    language === LangEnum.UA ? LangEnum.UK : LangEnum.EN
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
