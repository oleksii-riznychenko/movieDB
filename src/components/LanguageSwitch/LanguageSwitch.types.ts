import { LangEnum } from '../../models';

export interface ILangConfig {
  className: string;
  handleClick: () => void;
  lang: LangEnum.UA | LangEnum.EN;
}
