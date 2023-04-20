export const LANG: { UA: string; EN: string } = {
  UA: 'ua',
  EN: 'en',
};

export interface ILangConfig {
  lang: typeof LANG.UA | typeof LANG.EN;
  className: string;
  handleClick: () => void;
}
