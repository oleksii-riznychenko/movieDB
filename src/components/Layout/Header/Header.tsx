import React from 'react';
import { AppBar, Box } from '@mui/material';
import './Header.css';

export const Header = (): JSX.Element => {
  return (
    <AppBar className="header">
      <Box className="header__row">header</Box>
    </AppBar>
  );
};
