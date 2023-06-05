import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FACEBOOK,
  INSTAGRAM,
  TELEGRAM,
  TWITTER,
} from '../../../utils/constants';
import { Instagram, Facebook, Twitter, Telegram } from '@mui/icons-material';
import { configLink } from '../../../router';
import { FooterConfig } from './Footer.types';
import logo from '../../../assets/logos/logo_transparent.png';
import './Footer.scss';

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const config: FooterConfig = useMemo(
    () => ({
      links: [
        {
          link: INSTAGRAM,
          Icon: Instagram,
        },
        {
          link: FACEBOOK,
          Icon: Facebook,
        },
        {
          link: TWITTER,
          Icon: Twitter,
        },
        {
          link: TELEGRAM,
          Icon: Telegram,
        },
      ],
      currentYear: new Date().getFullYear(),
    }),
    []
  );

  return (
    <footer className="footer">
      <Link to={configLink.home}>
        <img src={logo} alt="logo" className="footer__logo" />
      </Link>

      <div className="footer__links">
        {config.links.map(({ link, Icon }) => (
          <Link key={link} to={link} className="footer__link">
            <Icon className="footer__link--item" />
          </Link>
        ))}
      </div>

      <div className="footer__rights">
        <div>&copy;&nbsp;{config.currentYear}</div>
        <div>{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};
