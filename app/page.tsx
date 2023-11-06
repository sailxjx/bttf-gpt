'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './home.css'

export default function Home() {
  const router = useRouter()
  const [animate, setAnimate] = useState(false)

  const handleClick = () => {
    setAnimate(true)
    setTimeout(() => {
      router.push('/play')
    }, 1000) // Replace 2000 with the duration of your animation in milliseconds
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-20">
      <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
        <h1 className='text-white text-4xl'>Back to the Future as Interpreted by ChatGPT</h1>
      </div>
      <div className={`z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex ${animate ? 'animate-car' : ''}`}>
        <Image src="/images/dmc12.webp" alt="DMC-12" width={480} height={320} />
      </div>
      <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          Start time traveling
        </button>
      </div>
      <Image src="/images/city.webp" alt="City background" width={0}
        height={0} sizes="100vw" className={`absolute z-0 bg-img ${animate ? 'shake' : ''}`} />
    </main>
  )
}
