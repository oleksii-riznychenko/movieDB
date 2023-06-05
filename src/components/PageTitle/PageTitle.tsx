import React from 'react';
import { Typography } from '@mui/material';
import { IPageTitle } from './PageTitle.types';
import './PageTitle.scss';

export const PageTitle = ({ title }: IPageTitle): JSX.Element => {
  return (
    <Typography className="page-title" variant="h5">
      {title}
    </Typography>
  );
};
