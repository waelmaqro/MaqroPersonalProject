import Image from 'next/image';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className='py-[100px] flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-col flex-grow text-center justify-center items-center gap-4 overflow-hidden'>
        <h1 className='heading text-3xl font-semibold'>
          Porche, full spectrum - full synergy.
        </h1>
        <h1 className=' max-w-[600px]'>
        Experience luxury and performance like never before with Porche's iconic lineup of precision-engineered vehicles.
        </h1>

        <div className='flex justify-center items-center gap-2'>
          <button className='bg-primary px-6 py-2 text-white'>
            Join us now
          </button>
          <button className='px-6 py-2 border-[2px] border-primary text-primary'>
            Request Demo
          </button>
        </div>

        {/* <Image src="/" /> */}
        </div>
      <Footer />
    </main>
  )
}
