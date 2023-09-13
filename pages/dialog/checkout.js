import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRating } from '../ratingContext';
import Layout from '../../components/layout';
import { HeartSVG } from '../images/StarSVG';

export default function Checkout() {
  const { rating } = useRating();
  const router = useRouter();

  useEffect(() => {
    // Check if rating is null or undefined, and if so, navigate back to the Home component
    if (rating === null || rating === undefined) {
      router.replace('/'); // Replace with the correct path to the home page
    }
  }, [rating, router]);

  // If rating is null or undefined, don't render anything
  if (rating === null || rating === undefined) {
    return null;
  }

  return (
    <Layout>
      <div className="p-4 md:p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto text-center">
        <div className="mb-4">
          <HeartSVG className="w-16 h-16 text-orange-300 mx-auto" />
        </div>
        <label className="bg-slate-300 rounded-full px-4 py-2 text-orange-500">
          You selected {rating} out of 5
        </label>
        <h2 className="text-white font-bold text-xl mt-4 mb-2">
          Thank you!
        </h2>
        <p className="text-gray-400 text-sm">
          We appreciate your feedback. If you need further assistance, feel free to get in touch with us.
        </p>
      </div>
    </Layout>
  );
}
