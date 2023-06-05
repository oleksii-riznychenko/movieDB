import { TableCell, TableRow } from '@mui/material';
import { TableMovie } from '../../../../design-system';
import { ConfigTable } from '../../FilmDetails.types';
import { useMemo } from 'react';
import {
  getRuntime,
  getTagsStar,
  getTagsCompany,
  getValidBudget,
  getTagsByKeyValue,
  getValidReleaseDate,
} from '../../FilmDetails.utils';
import { useTranslation } from 'react-i18next';
import { IDetailsTable } from './DetailsTable.types';
import { configLink } from '../../../../router';

export const DetailsTable = ({ data }: IDetailsTable) => {
  const { t, i18n } = useTranslation();

  const configTable: ConfigTable = useMemo(
    () => [
      {
        key: t('filmDetails.genres'),
        value: getTagsByKeyValue(
          data.genreList,
          i18n.language,
          configLink.genres
        ),
      },
      {
        key: t('filmDetails.countryOfOrigin'),
        value: getTagsByKeyValue(
          data.countryList,
          i18n.language,
          configLink.country
        ),
      },
      {
        key: t('filmDetails.releaseDate'),
        value: getValidReleaseDate(
          data.releaseDate,
          i18n.language === 'ua' ? 'uk' : i18n.language
        ),
      },
      {
        key: t('filmDetails.contentRating'),
        value: data.contentRating,
      },
      {
        key: t('filmDetails.companyList'),
        value: getTagsCompany(data.companyList),
      },
      {
        key: t('filmDetails.director'),
        value: getTagsStar(data.directorList),
      },
      {
        key: t('filmDetails.runtime'),
        value: getRuntime(data.runtimeMins, i18n.language),
      },
      {
        key: `${t('filmDetails.budget')} / ${t(
          'filmDetails.cumulativeWorldwideGross'
        )}`,
        value: getValidBudget(
          data.boxOffice.budget,
          data.boxOffice.cumulativeWorldwideGross
        ),
      },
    ],
    [t, data]
  );

  return (
    <TableMovie
      bodyContent={
        <>
          {configTable.map(({ key, value }) => (
            <TableRow key={key}>
              <TableCell width={150} className="film-details__title-table">
                {key}
              </TableCell>
              <TableCell align="left" className="film-details__table-chips">
                {value}
              </TableCell>
            </TableRow>
          ))}
        </>
      }
    />
  );
};
