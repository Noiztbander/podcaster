import { handleRouteChange, handleRouteComplete } from '@/ui/utils/router.utils';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'src/ui/sass/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
