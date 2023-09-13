import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Interactive Rating',
  description: 'Challenge from Frontend Mentor',
};

export default function Home() {
  const router = useRouter();
  const [rating, setRating] = useState('');
  const ratings = [1, 2, 3, 4, 5]; // Define an array of ratings

  const handleInputChange = (e) => {
    setRating(e.target.value);
  };

  function onSubmit(event) {
    event.preventDefault();
    router.push(`/dialog/checkout?rating=${rating}`);
  }

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
          <div className="relative w-9 h-9 bg-gray-700 rounded-full flex justify-center items-center  p-5 shadow-xl">
            {/* Your SVG code */}
          </div>
          <h1 className="text-3xl font-bold pt-5 text-white sm:text-2xl">How did we do?</h1>
          <br />
          <p className="text-lg leading-8 text-gray-300 text-sm md:text-base">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our
            offering!
          </p>
          <form onSubmit={onSubmit}>
            <div className="py-8 flex items-center justify-center space-x-7">
              {/* Map over the ratings array to generate radio buttons and labels */}
              {ratings.map((rate) => (
                <div key={rate}>
                  <input
                    value={rate.toString()}
                    onChange={handleInputChange}
                    id={`rate${rate}`}
                    className="peer/draft hidden"
                    type="radio"
                    name="status"
                    checked={rating === rate.toString()} // Check the radio button if rating matches
                  />
                  <label
                    htmlFor={`rate${rate}`}
                    className={`cursor-pointer relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl ${
                      rating === rate.toString() && 'hover:bg-orange-600'
                    }`}
                  >
                    {rate}
                  </label>
                </div>
              ))}
            </div>
            <button
              disabled={!rating}
              className={`pt-1 pb-1 w-80 max-h-fit ${rating && 'hover:bg-gray-100'} hover:text-orange-400 max-w-screen-2xl bg-orange-400 text-white  rounded-full ...`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
