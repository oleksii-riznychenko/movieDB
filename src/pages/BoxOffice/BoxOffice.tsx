import { useGetBoxOfficeQuery } from '../../service/OthersService';

import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { LANG } from '../../components';
import i18n from 'i18next';

export const BoxOffice = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetBoxOfficeQuery(i18n.language);

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.boxOffice')}
    />
  );
};
