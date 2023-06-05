import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import UA from './locales/ua.json';
import EN from './locales/en.json';
import { LangEnum } from '../models';
import { persistor, store } from '../store';

const resources = {
  [LangEnum.UA]: {
    translation: UA,
  },
  [LangEnum.EN]: {
    translation: EN,
  },
};

const initializeI18n = (
  initialLanguage: LangEnum.UA | LangEnum.EN = LangEnum.UA
): void => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLanguage,
      interpolation: {
        escapeValue: false,
      },
    })
    .then();
};

persistor.persist();
persistor.subscribe(() => {
  const initialLanguage = store.getState().root.language;

  initializeI18n(initialLanguage || LangEnum.UA);
});

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['ua'];
  }
}

export default i18n;
