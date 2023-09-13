import Head from 'next/head';
import { useRating } from './ratingContext';
import { StarSVG } from './images/StarSVG';

export default function Checkout() {
  const { rating } = useRating();

  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <div className="p-4 md:p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
          <div className="relative w-12 h-12 md:w-9 md:h-9 bg-gray-700 rounded-full p-4 md:p-5 shadow-xl">
            <div className="absolute inset-0 flex justify-center items-center">
              <StarSVG />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold pt-4 md:pt-5 text-white sm:text-2xl">
            Thank you!
          </h1>
          <br />
          <label className="bg-slate-300 rounded-full px-4 py-2 ml-4 md:ml-12 text-orange-500">
            You selected {rating ? rating : 0} out of 5
          </label>
          <br />
          <p className="text-base md:text-lg text-gray-400 text-center md:text-left">
            We appreciate you taking time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </main>
    </>
  );
}
