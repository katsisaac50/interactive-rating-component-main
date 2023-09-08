import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
      <h1 className="text-white">How did we do?</h1><br></br>

      <p className="text-slate-400">Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!
      </p>
    
      1 2 3 4 5
    
      <br/>
      <button className="pt-1 pb-1 pl-20 pr-20 max-h-fit max-w-screen-2xl bg-orange-400 text-white  rounded-full ...">Submit</button>
      </div>
    </main>
  )
}
