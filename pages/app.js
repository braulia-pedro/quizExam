
import '../styles/globals.css';
import Header from '../app/components/Header.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
