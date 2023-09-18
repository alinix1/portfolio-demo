import '../styles/globals.css';
import Navbar from '../components/Navbar';

function myApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default myApp;
