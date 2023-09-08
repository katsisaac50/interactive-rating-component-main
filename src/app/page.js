import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-9 rounded-md bg-red-400 max-w-[390px] mx-auto">
      <div className="relative w-12 h-12 bg-white-200 rounded-full flex justify-center items-center  p-5 shadow-xl">
      <svg class="absolute w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
      </div>
      <h1 className="text-3xl font-bold  text-white sm:text-2xl">How did we do?</h1><br/>
      <p className="text-lg leading-8 text-gray-300 text-sm md:text-base">Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!
      </p>
      <div class="py-24 flex items-center justify-center space-x-8">
      <div class="relative w-7 h-7 bg-purple-200 rounded-full flex justify-center items-center text-center p-3 shadow-xl">
      1
   </div>
   <div class="relative w-7 h-7 bg-purple-200 rounded-full flex justify-center items-center text-center p-3 shadow-xl">
      2
   </div>
   <div class="relative w-7 h-7 bg-purple-200 rounded-full flex justify-center items-center text-center p-3 shadow-xl">
      3
   </div>
   <div class="relative w-7 h-7 bg-purple-200 rounded-full flex justify-center items-center text-center p-3 shadow-xl">
      4
   </div>
   <div class="relative w-7 h-7 bg-purple-200 rounded-full flex justify-center items-center text-center p-3 shadow-xl">
      5
   </div>
   </div>
    
      <br/>
      <button className="pt-1 pb-1 w-80 max-h-fit hover:bg-gray-100 max-w-screen-2xl bg-orange-400 text-white  rounded-full ...">Submit</button>
      </div>
    </main>
  )
}
