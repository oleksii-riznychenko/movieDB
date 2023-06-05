import { useGetPopularTVsQuery } from '../../service/OthersService';

import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { LANG } from '../../components';
import i18n from 'i18next';
export const TopSeries = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetPopularTVsQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.popularSeries')}
    />
  );
};
