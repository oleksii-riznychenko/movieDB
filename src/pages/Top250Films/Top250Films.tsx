import { useGetTop250MoviesQuery } from '../../service/OthersService';

import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { LANG } from '../../components';
import i18n from 'i18next';

export const Top250Films = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetTop250MoviesQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.top250Movies')}
    />
  );
};
