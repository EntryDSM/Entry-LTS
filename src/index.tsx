import React from 'react';
import ReactDOM from 'react-dom';
import CreateDOM from 'react-dom/client';
import { GlobalStyle } from './style/globalStyle.style';
import { baseTheme } from './style/globalTheme.style';
import { ThemeProvider } from 'styled-components';

import App from './App';

const root = CreateDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
);
