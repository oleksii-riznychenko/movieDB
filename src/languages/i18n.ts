import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import UA from './locales/ua.json';
import EN from './locales/en.json';

const lang = localStorage.getItem('i18nextLng');

const resources = {
  ua: {
    translation: UA,
  },
  en: {
    translation: EN,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: lang || 'ua',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['ua'];
  }
}

export default i18n;
