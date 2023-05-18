import React from 'react';
import { ILayout } from './Layout.types';
import { Box, Container } from '@mui/material';
import { Footer } from './Footer';
import { Header } from './Header';
import './Layout.scss';

export const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Box className="layout">
        <Header />
        <main className="main">
          <Box className="main-container">
            <Container maxWidth="xl">{children}</Container>
          </Box>
        </main>
        <Footer />
      </Box>
    </>
  );
};
