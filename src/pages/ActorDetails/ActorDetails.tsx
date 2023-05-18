import React, { useMemo } from 'react';
import { GlobalLoader, Layout } from '../../components';
import { useGetActorInformationQuery } from '../../service/TitleService';
import { useParams } from 'react-router-dom';
import './ActorDetails.scss';
import { useTranslation } from 'react-i18next';

export const ActorDetails = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const { data, isLoading } = useGetActorInformationQuery(String(params.id));
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
      .replace(/&quot;/g, '"');
  }

  return (
    <Layout>
      {isLoading ? (
        <GlobalLoader />
      ) : data ? (
        <div className="actor-details">
          <span className="actor-details__title">{data.name}</span>
          <div className="actor-details__info">
            <img
              src={data.image}
              alt="poster"
              className="actor-details__image"
            />

            <div className="actor-details__about">
              <span>
                {t('actorDetails.birthDate')}: {data.birthDate}
              </span>
              {data.deathDate ? (
                <span>
                  {t('actorDetails.deathDate')}: {data.deathDate}
                </span>
              ) : null}
              <span>
                {t('actorDetails.credits')}: {data.role}
              </span>
              <span>
                {t('actorDetails.height')}: {data.height}
              </span>
              <span>
                {t('actorDetails.awards')}: {data.awards}
              </span>
              <span>
                {t('actorDetails.biography')}: {biography}
              </span>
            </div>
          </div>
          {/*{Array.isArray(data.knownFor) && (*/}
          {/*  <ActorFamousFilms knownFor={data.knownFor} />*/}
          {/*)}*/}
        </div>
      ) : null}
    </Layout>
  );
};
