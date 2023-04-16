import { ChangeEvent } from 'react';

export interface IPagePagination {
  page: number;
  totalPages: number;
  handleChange: (e: ChangeEvent<unknown>, value: number) => void;
}
