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
    if (rating == null) {
      router.replace('/'); // Replace with the correct path to the home page
    }
  }, [rating, router]);

  // Style for moving content 3cm down
  const contentStyle = {
    marginTop: '3cm', // You can adjust this value as needed
  };

  // Render the content conditionally
  const content = rating != null ? (
    <div class="p-4 md:p-9 rounded-3xl bg-gray-800 mx-auto text-center max-w-xs md:max-w-[390px] mx-auto" style={contentStyle}>
      <div class="mb-4">
        <svg class="mx-auto" width="162" height="108" xmlns="http://www.w3.org/2000/svg">
          <HeartSVG className="w-8 md:w-12 h-8 md:h-12 text-orange-300 mx-auto" />
        </svg>
      </div>
      <label class="bg-slate-300 rounded-full px-3 md:px-5 py-2 text-orange-500">
        You selected {rating} out of 5
      </label>
      <h2 class="text-white font-bold text-xl md:text-2xl mt-4 md:mt-5 mb-4 md:mb-5">Thank you!</h2>
      <p class="text-gray-400 text-sm md:text-base">
        We appreciate your feedback. If you need further assistance, feel free to get in touch with us.
      </p>
    </div>
  ) : null;

  return <Layout>{content}</Layout>;
}

