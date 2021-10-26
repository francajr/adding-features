import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NextNprogress
        color="#FF57B2"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      return <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
