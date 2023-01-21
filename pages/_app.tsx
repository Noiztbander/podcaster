import type { AppProps } from 'next/app';
import 'src/ui/sass/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
