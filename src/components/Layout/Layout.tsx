import React from 'react';
import { ILayout } from './Layout.types';
import { Box } from '@mui/material';
import { Footer } from './Footer';
import { Header } from './Header';
import './Layout.css';

export const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Box className="layout">
        <Header />
        <main className="main">
          <Box className="main-container">{children}</Box>
        </main>
        <Footer />
      </Box>
    </>
  );
};
