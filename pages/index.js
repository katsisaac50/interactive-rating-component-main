import { useRouter } from 'next/router';
import Head from 'next/head';
import { useRating } from './ratingContext';
import {StarSVG} from './images/StarSVG';

export const metadata = {
  title: 'Interactive Rating',
  description: 'Challenge from Frontend Mentor',
};

export default function Home() {
  const { rating, setRating } = useRating();

  const router = useRouter();

  const handleInputChange = (e) => {
    setRating(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    // Pass the inputValue as a query parameter
    router.push({
      pathname: '/dialog/checkout',
      query: { rating: rating },
    });
  };

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
        <div className="relative w-9 h-9 bg-gray-700 rounded-full flex justify-center items-center  p-5 shadow-xl">
        <StarSVG />
      </div>
      <h1 className="text-3xl font-bold pt-5 text-white sm:text-2xl">How did we do?
      </h1>
      <br/>
      <p className="text-lg leading-8 text-gray-300 text-sm md:text-base">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <form onSubmit={onSubmit}>
          <div className="py-8 flex items-center justify-center space-x-7">
          <input value="1" onClick={handleInputChange} id="rate1" className="peer/draft hidden" type="radio" name="status" checked />
          <label htmlFor="rate1" className="cursor-pointer relative w-7 text-gray-300 h-7 bg-gray-700 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:bg-orange-600">1</label>
          <input value="2" onClick={handleInputChange} id="rate2" className="peer/draft hidden" type="radio" name="status" />
          <label htmlFor="rate2" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">2</label>
          <input value="3" onClick={handleInputChange} id="rate3" className="peer/draft hidden" type="radio" name="status" />
          <label htmlFor="rate3" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">3</label>
          <input value="4" onClick={handleInputChange} id="rate4" className="peer/draft hidden" type="radio" name="status" />
          <label htmlFor="rate4" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">4</label>
          <input value="5" onClick={handleInputChange} id="rate5" className="peer/draft hidden" type="radio" name="status" />
          <label htmlFor="rate5" className="cursor-pointer  relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl hover:bg-orange-600 focus:border-blue-400 ...">5</label>
        </div>
            <button
              disabled={!rating}
              className={`pt-1 pb-1 w-80 max-h-fit ${rating && 'hover:bg-gray-100'} hover:text-orange-400 max-w-screen-2xl bg-orange-400 text-white rounded-full ...`}
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
