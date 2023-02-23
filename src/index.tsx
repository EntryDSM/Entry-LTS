import CreateDOM from 'react-dom/client';
import { GlobalStyle } from './style/globalStyle.style';

import App from './App';
import { StyledProvider } from '@team-entry/design_system';
import { Global } from '@emotion/react';

const root = CreateDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <StyledProvider>
      <Global styles={GlobalStyle} />
      <App />
    </StyledProvider>
  </>,
);
