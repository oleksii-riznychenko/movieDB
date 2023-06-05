import React, { useMemo } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ILangConfig } from './LanguageSwitch.types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LANG, updateLanguage } from '../../slices/rootSlice';
import { LangEnum } from '../../models';
import './LanguageSwitch.scss';

export const LanguageSwitch = (): JSX.Element => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.root.language);

  const changeLanguage = (lang: LANG): void => {
    i18n.changeLanguage(lang).then(() => {
      dispatch(updateLanguage(lang));
    });
  };

  const config: ILangConfig[] = useMemo(
    () => [
      {
        lang: LangEnum.UA,
        className: language === LangEnum.UA ? 'lang-active' : '',
        handleClick: (): void => changeLanguage(LangEnum.UA),
      },
      {
        lang: LangEnum.EN,
        className: language === LangEnum.EN ? 'lang-active' : '',
        handleClick: (): void => changeLanguage(LangEnum.EN),
      },
    ],
    [language]
  );

  return (
    <Box>
      <ButtonGroup size="small" variant="contained" className="button">
        {config.map(({ lang, className, handleClick }) => (
          <Button
            key={lang}
            size="small"
            value={lang}
            onClick={handleClick}
            className={`lang-btn ${className}`}
          >
            {lang}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};
