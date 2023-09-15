import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useRating } from './ratingContext';
import { StarSVG } from './images/StarSVG';

export default function Home() {
  const { rating, setRating } = useRating();
  const router = useRouter();

  const handleInputChange = (e) => {
    setRating(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    router.push('/dialog/checkout', undefined, { shallow: true });
  };

  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>First Post</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <div className="p-4 md:p-9 rounded-3xl bg-gray-800 max-w-xs md:max-w-[390px] mx-auto mt-20 md:mt-6">
          <div className="relative w-12 h-12 md:w-9 md:h-9 bg-gray-700 rounded-full p-2 md:p-3 shadow-xl">
            <div className="absolute inset-0 flex justify-center items-center">
              <StarSVG />
            </div>
          </div>
          <h1 className="text-xl md:text-3xl font-bold pt-2 md:pt-3 text-white">
            How did we do?
          </h1>
          <p className="text-base md:text-lg leading-7 text-gray-300 text-sm md:text-base mt-2 md:mt-3">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form onSubmit={onSubmit} className="mt-4 md:mt-6">
  <div className="py-2 md:py-4 flex justify-center space-x-3 md:space-x-7">
    {ratingOptions.map((option) => (
      <div key={option} className="flex items-center space-x-1">
        <input
          value={option}
          onChange={handleInputChange}
          id={`rate${option}`}
          className="peer/draft hidden"
          type="radio"
          name="status"
          checked={option === Number(rating)}
        />
        <label
          htmlFor={`rate${option}`}
          className={`cursor-pointer relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-2 md:p-3 shadow-xl ${
            option === Number(rating)
              ? 'hover:bg-orange-600'
              : 'hover:bg-orange-600'
          }`}
        >
          {option}
        </label>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-4 md:mt-6">
    <button
      disabled={!rating}
      className={`pt-2 pb-2 w-3/4 md:w-80 max-h-fit ${
        rating ? 'hover:bg-gray-100 hover:text-orange-400' : ''
      } max-w-screen-2xl bg-orange-400 text-white rounded-full ...`}
      type="submit"
    >
      Submit
    </button>
  </div>
</form>

        </div>
      </main>
    </>
  );
}
