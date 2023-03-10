import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './pages/routes';

import ThemeConfig from './Theme';
import GlobalStyles from './Theme/globalStyles';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { DeputadosStateProvider } from './contexts/useDeputados';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DeputadosStateProvider>
          <ThemeConfig>
            <GlobalStyles />
            <AllRoutes />
          </ThemeConfig>
          <ReactQueryDevtools initialIsOpen={false} />
      </DeputadosStateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
