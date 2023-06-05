import { useGetTop250TVsQuery } from '../../service/OthersService';

import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { LANG } from '../../components';
import i18n from 'i18next';

export const Top250TVs = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetTop250TVsQuery(
    i18n.language === LANG.UA ? 'uk' : LANG.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.top250TVs')}
    />
  );
};
