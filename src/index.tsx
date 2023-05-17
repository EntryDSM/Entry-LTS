import CreateDOM from 'react-dom/client';
import { GlobalStyle } from './style/globalStyle.style';
import App from './App';
import { StyledProvider } from '@team-entry/design_system';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = CreateDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

root.render(
  <>
    <StyledProvider>
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyle} />
        <App />
      </QueryClientProvider>
    </StyledProvider>
  </>,
);
