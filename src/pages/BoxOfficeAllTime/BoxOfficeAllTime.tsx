import { useGetBoxOfficeAllTimeQuery } from '../../service/OthersService';
import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { useAppSelector } from '../../hooks/redux';
import { LangEnum } from '../../models';

export const BoxOfficeAllTime = () => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.root.language);

  const { data, isLoading } = useGetBoxOfficeAllTimeQuery(
    language === LangEnum.UA ? LangEnum.UK : LangEnum.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.boxOfficeAllTime')}
    />
  );
};
