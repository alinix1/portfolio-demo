import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

// import '../styles/globals.css';
// import Navbar from '../components/Navbar';

// function myApp({ Component, pageProps }) {
//   return (
//     <>
//       <Navbar />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default myApp;
