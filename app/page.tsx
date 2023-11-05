import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-40">
      <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
        <Image src="/images/dmc12.webp" alt="DMC-12" width={480} height={320} />
      </div>
      <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start time traveling
        </button>
      </div>
      <Image src="/images/city.webp" alt="City background" layout='fill' objectFit='cover' className="absolute z-0" />
    </main>
  )
}
