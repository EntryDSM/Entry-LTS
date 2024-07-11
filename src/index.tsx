import CreateDOM from 'react-dom/client';
import { GlobalStyle } from './style/globalStyle.style';
import App from './App';
import { CustomToastContainer, StyledProvider } from '@team-entry/design_system';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

ChannelService.loadScript();

ChannelService.boot({
  pluginKey: `${process.env.CHANNEL_TALK_PLUGIN_KEY}`,
});

const root = CreateDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
      retry: 1,
    },
  },
});

root.render(
  <>
    <StyledProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <CustomToastContainer />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </StyledProvider>
  </>,
);
