import React from 'react';
import { Pagination } from '@mui/material';
import { IPagePagination } from './PagePagination.types';
import './PagePagination.css';

export const PagePagination = ({
  page,
  totalPages,
  handleChange,
}: IPagePagination) => {
  return (
    <>
      <Pagination
        page={page}
        count={totalPages}
        onChange={handleChange}
        className="page-pagination"
      />
    </>
  );
};
