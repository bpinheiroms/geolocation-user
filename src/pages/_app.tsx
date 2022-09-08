import '../styles/globals.css';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { queryClient } from '../config/react-query';

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default MyApp;
