import { useGetTop250TVsQuery } from '../../service/OthersService';
import { useTranslation } from 'react-i18next';
import { FilmCatalog } from '../../components/FilmCatalog';
import { useAppSelector } from '../../hooks/redux';
import { LangEnum } from '../../models';

export const Top250TVs = () => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.root.language);

  const { data, isLoading } = useGetTop250TVsQuery(
    language === LangEnum.UA ? LangEnum.UK : LangEnum.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.top250TVs')}
    />
  );
};
