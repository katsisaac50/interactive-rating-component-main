'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function Home() {
   const router = useRouter();
   const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
   console.log(e.target.value);
  };

  function onSubmit(event) {
   event.preventDefault()
   localStorage.setItem({value:inputValue},"hello" );
   router.push('/app/checkout');
   console.log(event.target);
 };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
      <div className="relative w-9 h-9 bg-gray-700 rounded-full flex justify-center items-center  p-5 shadow-xl">
      <svg class="absolute w-4 h-4 text-orange-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
      </div>
      <h1 className="text-3xl font-bold pt-5 text-white sm:text-2xl">How did we do?</h1><br/>
      <p className="text-lg leading-8 text-gray-300 text-sm md:text-base">Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!
      </p>
      <form onSubmit={onSubmit}>
      <div className="py-8 flex items-center justify-center space-x-7">
      
      <input value={1} onClick={handleInputChange}id="rate1" class="peer/draft hidden" type="radio" name="status" checked />
      <label for="rate1" className="cursor-pointer relative w-7 text-gray-300 h-7 bg-gray-700 rounded-full flex justify-center items-center text-center p-5 shadow-xl hover:bg-orange-600">
      
      1
   </label>
   <input id="rate2" class="peer/draft hidden" type="radio" name="status" checked />
   <label for="rate2" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">
      2
   </label>
   <input id="rate3" class="peer/draft hidden" type="radio" name="status" checked />
   <label for="rate3" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">
      3
   </label>
   <input id="rate4" class="peer/draft hidden" type="radio" name="status" checked />
   <label for="rate4" className="cursor-pointer hover:bg-orange-600 relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl">
      4
   </label>
   <input id="rate5" class="peer/draft hidden" type="radio" name="status" checked />
   <label for="rate5" className="cursor-pointer  relative w-7 h-7 bg-gray-700 rounded-full flex justify-center items-center text-gray-300 text-center p-5 shadow-xl hover:bg-orange-600 focus:border-blue-400 ...">
      5
   </label>
   </div>
   
      <button className="pt-1 pb-1 w-80 max-h-fit hover:bg-gray-100 hover:text-orange-400 max-w-screen-2xl bg-orange-400 text-white  rounded-full ..." type="submit">Submit</button>
      </form>
      </div>
   
      {/* <Checkout value={inputValue}/> */}
    </main>
  )
}
