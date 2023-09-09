import Image from 'next/image'

export default function CheckOut() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-9 rounded-3xl bg-gray-800 max-w-[390px] mx-auto">
      <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
    </main>
  )
}