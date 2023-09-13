import Image from 'next/image';
import { useRating } from '../ratingContext';
import './layout.module.css';
import Layout from '../../components/layout';
import { HeartSVG } from '../images/StarSVG';

export default function Checkout(props) {
  const { rating, setRating } = useRating();

  return (
    <Layout>
      <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto text-center">
        <div className="mb-4">
          <HeartSVG className="w-12 h-12 text-orange-300 mx-auto" />
        </div>
        <label className="bg-slate-300 rounded-full px-5 py-2 text-orange-500">
          You selected {rating ? rating : 0} out of 5
        </label>
        <h2 className="text-white font-bold mt-5 mb-5">Thank you!</h2>
        <p className="text-gray-400">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </Layout>
  );
}
