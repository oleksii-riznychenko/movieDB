import { useGetPopularMoviesQuery } from '../../service/OthersService';
import { FilmCatalog } from '../../components/FilmCatalog';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux';
import { LangEnum } from '../../models';

export const TopMovies = () => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.root.language);

  const { data, isLoading } = useGetPopularMoviesQuery(
    language === LangEnum.UA ? LangEnum.UK : LangEnum.EN
  );

  return (
    <FilmCatalog
      data={data}
      isLoading={isLoading}
      title={t('titles.popularMovies')}
    />
  );
};
