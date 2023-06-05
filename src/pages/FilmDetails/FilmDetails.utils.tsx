import { ReactNode } from 'react';
import { ICompanyShort, IKeyValueItem, IStarShort } from '../../models';
import { LANG } from '../../components';
import { TagsMovie } from '../../design-system';
import { Link } from 'react-router-dom';
import { configLink } from '../../router';

export const getTagsByKeyValue = (
  list: IKeyValueItem[],
  lang: string,
  link: string
): string | ReactNode => {
  return list?.length > 0
    ? list.map(({ key, value }) => {
        const validVal = lang === LANG.UA ? value : key;

        return (
          <Link key={key} className="film-details__link" to={link + key}>
            <TagsMovie label={validVal} />
          </Link>
        );
      })
    : '';
};

export const getTagsCompany = (list: ICompanyShort[]): string | ReactNode => {
  return list?.length > 0
    ? list.map(({ id, name }) => (
        <Link
          key={id}
          to={configLink.company + id}
          className="film-details__link"
        >
          <TagsMovie label={name} />
        </Link>
      ))
    : '';
};

export const getTagsStar = (list: IStarShort[]): string | ReactNode => {
  return list?.length > 0
    ? list.map(({ id, name }) => (
        <Link
          key={id}
          to={configLink.director + id}
          className="film-details__link"
        >
          <TagsMovie key={id} label={name} />
        </Link>
      ))
    : '';
};

export const getRuntime = (runtimeMins: string, lang: string): string => {
  const hours = Math.floor(+runtimeMins / 60);
  const remainingMinutes = +runtimeMins % 60;

  return lang === LANG.UA
    ? `${hours}г ${remainingMinutes}хв`
    : `${hours}h ${remainingMinutes}min`;
};

export const getValidReleaseDate = (date: string, lang: string): string => {
  return new Date(date)?.toLocaleDateString(lang) || '';
};

export const getValidBudget = (
  budget: string,
  cumulativeWorldwideGross: string
): string => {
  if (budget && budget.includes(' ')) {
    budget = budget.slice(0, budget.indexOf(' '));
  }

  return `${budget} / ${cumulativeWorldwideGross}`;
};
