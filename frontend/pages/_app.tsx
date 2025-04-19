import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;