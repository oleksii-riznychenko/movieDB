import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { RouterList } from './router';
import { setupStore } from './store';
import './languages/i18n';
import './index.css';

const store = setupStore();

const darkTheme = createTheme({
  typography: {
    fontFamily: ['-apple-system', 'Roboto', '"Open Sans"', '"Noto Sans"'].join(
      ','
    ),
  },
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <RouterList />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
