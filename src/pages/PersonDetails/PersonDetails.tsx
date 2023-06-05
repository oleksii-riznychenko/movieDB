import React, { useMemo } from 'react';
import { GlobalLoader, Layout } from '../../components';
import { useGetPersonInformationQuery } from '../../service/OthersService';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PersonKnownFor } from './components/PersonKnownFor';
import './PersonDetails.scss';
import { PersonAllFilms } from './components/PersonAllFilms';

export const PersonDetails = (): JSX.Element => {
  const { t } = useTranslation();
  const params = useParams();
  const { data, isLoading } = useGetPersonInformationQuery(String(params.id));
  let biography;

  // let information;

  // if (data) {
  //   information = useMemo(
  //     () => [
  //       {
  //         title: t('actorDetails.birthData'),
  //         value: (
  //           data.height
  //         ),
  //       },
  //       {
  //         title: t('actorDetails.birthData'),
  //         value: (
  //           data.height
  //         ),
  //       },
  //       {
  //         title: t('actorDetails.birthData'),
  //         value: (
  //           data.height
  //         ),
  //       },
  //       {
  //         title: t('actorDetails.birthData'),
  //         value: (
  //           data.height
  //         ),
  //       },
  //     ], [t]
  //   );
  // }

  if (data) {
    biography = data.summary
      .split('. ')
      .slice(2)
      .join('. ')
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&');
  }

  return (
    <Layout>
      {isLoading ? (
        <GlobalLoader />
      ) : data ? (
        <>
          <span className="actor-details__title">{data.name}</span>
          <div className="actor-details">
            <div className="actor-details__block">
              <div className="actor-details__info">
                <img
                  src={data.image}
                  alt="poster"
                  className="actor-details__image"
                />

                <div className="actor-details__about">
                  <span className="actor-details__about--list">
                    {t('actorDetails.birthDate')}: {data.birthDate}
                  </span>
                  {data.deathDate && (
                    <span className="actor-details__about--list">
                      {t('actorDetails.deathDate')}: {data.deathDate}
                    </span>
                  )}
                  <span className="actor-details__about--list">
                    {t('actorDetails.credits')}: {data.role}
                  </span>
                  <span className="actor-details__about--list">
                    {t('actorDetails.height')}: {data.height}
                  </span>
                  <span className="actor-details__about--list">
                    {t('actorDetails.awards')}: {data.awards}
                  </span>
                  <span className="actor-details__about--list">
                    {t('actorDetails.biography')}: {biography}
                  </span>
                </div>
              </div>
              <div className="actor-details__known-for">
                {Array.isArray(data.knownFor) && (
                  <PersonKnownFor knownFor={data.knownFor} />
                )}
              </div>
            </div>
            <div className="actor-details__all-films">
              <div className="actor-details__all-films--title">
                {t('actorDetails.allFilms')}
              </div>
              <ul>
                {Array.isArray(data.castMovies) && (
                  <PersonAllFilms castMovies={data.castMovies} />
                )}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </Layout>
  );
};
