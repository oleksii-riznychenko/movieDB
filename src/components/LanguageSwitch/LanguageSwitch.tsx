import React, { useState, useMemo } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ILangConfig, LANG } from './LanguageSwitch.types';
import './LanguageSwitch.css';

export const LanguageSwitch = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState<string>(i18n.language);

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang).then();
    localStorage.setItem('i18nextLng', i18n.language);
    setLanguages(i18n.language);
  };

  const config: ILangConfig[] = useMemo(
    () => [
      {
        lang: LANG.UA,
        className: languages === LANG.UA ? 'lang-active' : '',
        handleClick: (): void => changeLanguage(LANG.UA),
      },
      {
        lang: LANG.EN,
        className: languages === LANG.EN ? 'lang-active' : '',
        handleClick: (): void => changeLanguage(LANG.EN),
      },
    ],
    [languages]
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
