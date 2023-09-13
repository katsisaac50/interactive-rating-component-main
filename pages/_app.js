import { RatingProvider } from './ratingContext';
import '../styles/globals.css'; // Adjust the path to your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <RatingProvider>
      <Component {...pageProps} />
    </RatingProvider>
  );
}

export default MyApp;