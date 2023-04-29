import { IWikipediaDataPlot } from './IWikipediaDataPlot';

export interface IWikipediaData {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  language: string;
  titleInLanguage: string;
  url: string;
  plotShort: IWikipediaDataPlot;
  plotFull: IWikipediaDataPlot;
  errorMessage: string;
}
