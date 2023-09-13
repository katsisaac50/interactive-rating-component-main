
import Image from 'next/image';
import { useRating } from '../ratingContext';
import './layout.module.css';
import Layout from '../../components/layout';
import { HeartSVG } from '../images/StarSVG';


export default function Checkout(props) {
  const { rating, setRating } = useRating();

  // const router = useRouter();
  // console.log(router.query)
  // const rating = router.query.rating;

  // Use optional chaining to safely access the query parameter
  // const ratingValue = rating?.toString() || 'No Rating Provided';
  return (
    <Layout>
      <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
      <div className="items-center">
      <HeartSVG />
      
      </div>
      {/* <Image
      src="../images/illustration-thank-you.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
    <br/>
    <label className='bg-slate-300 rounded-full px-5 py-2 ml-12 text-orange-500'>
    You selected {rating?rating:0} out of 5
    </label>
    <br/>
    <h2 className="text-white font-bold text-center mt-5 mb-5">Thank you ! </h2>
    <p className="text-gray-400 text-center">We appreciate you taking time to give a rating. if you ever need more support, don't hestate to get in touch!</p>
      </div>
    </Layout>
    
  )
}