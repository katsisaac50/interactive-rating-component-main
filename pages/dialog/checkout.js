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
      router.push('/');
    }
  }, [rating, router]);

  return (
    <Layout>
      <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto text-center">
        <div className="mb-4">
          <HeartSVG className="w-12 h-12 text-orange-300 mx-auto" />
        </div>
        <label className="bg-slate-300 rounded-full px-5 py-2 text-orange-500">
          You selected {rating || 0} out of 5
        </label>
        <h2 className="text-white font-bold mt-5 mb-5">Thank you!</h2>
        <p className="text-gray-400">
          We appreciate your feedback. If you need further assistance, feel free to get in touch with us.
        </p>
      </div>
    </Layout>
  );
}
