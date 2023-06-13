import { useGetBoxOfficeAllTimeQuery } from '../../service/OthersService';

import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { LANG } from '../../components';
import i18n from 'i18next';

export const BoxOfficeAllTime = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useGetBoxOfficeAllTimeQuery(i18n.language);

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.boxOfficeAllTime')}
    />
  );
};
