import React from 'react';
import { Divider, Pagination } from '@mui/material';
import { IPagePagination } from './PagePagination.types';
import './PagePagination.css';

export const PagePagination = ({
  page,
  totalPages,
  handleChange,
}: IPagePagination) => {
  return (
    <>
      <Divider light />
      <Pagination
        page={page}
        count={totalPages}
        onChange={handleChange}
        className="page-pagination"
      />
    </>
  );
};
