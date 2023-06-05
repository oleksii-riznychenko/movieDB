import { Layout } from '../../components';
import { useTranslation } from 'react-i18next';
import { configLink } from '../../router';
import { Link } from 'react-router-dom';

import './NotFound.scss';
export const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="not-found">
        <span className="not-found__number">404</span>
        <span className="not-found__sorry">{t('not-found.sorry')}</span>
        <span className="not-found__try-again">{t('not-found.try-again')}</span>
        <Link to={configLink.home} className="not-found__button">
          {t('not-found.go-home')}
        </Link>
      </div>
    </Layout>
  );
};
