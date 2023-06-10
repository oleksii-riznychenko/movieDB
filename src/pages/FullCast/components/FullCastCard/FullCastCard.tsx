import { IActorShort } from '../../../../models';
import { Link } from 'react-router-dom';
import { configLink } from '../../../../router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './FullCastCard.scss';

export const FullCastCard = ({ id, image, name, asCharacter }: IActorShort) => {
  const { t } = useTranslation();

  return (
    <div className="full-cast__card">
      <Link
        to={configLink.person + id}
        style={{ backgroundImage: `url(${image})` }}
        className="full-cast__image"
      ></Link>
      <div className="full-cast__title">
        {name}
        {'\n'}
        {t('filmDetails.as')}
        {'\n'}
        {asCharacter}
      </div>
    </div>
  );
};
