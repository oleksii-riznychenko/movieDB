import React from 'react';
import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

import './Footer.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <a href="/" className="footer-logo">
        LOGO
      </a>

      <div className="footer-links">
        <Link to={'https://www.instagram.com/'}>
          <InstagramIcon className="footer-link" />
        </Link>
        <Link to={'https://www.facebook.com/'}>
          <FacebookIcon className="footer-link" />
        </Link>
        <Link to={'https://twitter.com/'}>
          <TwitterIcon className="footer-link" />
        </Link>
        <Link to={'https://web.telegram.org/'}>
          <TelegramIcon className="footer-link" />
        </Link>
      </div>

      <div className="footer-rights">
        <div>© 2023</div>
        <div>All rights reserved</div>
      </div>
    </footer>
  );
};
