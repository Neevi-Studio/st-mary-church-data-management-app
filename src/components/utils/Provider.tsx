'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Toaster } from 'react-hot-toast';
import { NextUIProvider } from '@nextui-org/react';
import AuthContext from '../context/AuthContext';
import SideBarContextContext from '../context/SideBarContextContext';

function Providers({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      <ProgressBar
        height="8px"
        color="#0000FF"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <NextUIProvider>
        <AuthContext>
          <Toaster />
          <SideBarContextContext>{children}</SideBarContextContext>
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthContext>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default Providers;
