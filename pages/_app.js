import { RatingProvider } from '../components/ratingContext';
import '../styles/globals.css'; // Adjust the path to your global CSS file
import { metadata } from '../components/metadata';

function MyApp({ Component, pageProps }) {
  
  pageProps.metadata = metadata;

  return (
    <RatingProvider>
      <Component {...pageProps} />
    </RatingProvider>
  );
}

export default MyApp;