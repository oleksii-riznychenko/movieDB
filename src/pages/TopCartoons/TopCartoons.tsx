import { useGetPopularMoviesQuery } from '../../service/OthersService';
import { FilmCatalog } from '../../components/FilmCatalog';

import { useTranslation } from 'react-i18next';
import { LANG } from '../../components';
import i18n from 'i18next';

export const TopCartoons = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetPopularMoviesQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.popularCartoons')}
    />
  );
};
