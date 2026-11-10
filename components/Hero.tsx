import Image from 'next/image'
import TodayDate from './TodayDate'
import Link from 'next/link'

export default function Hero() {
   
  return (
    <div className='flex px-4 py-10 rounded-3xl border border-base-300 bg-base-100 my-10'>
        <div className='flex-2'>
          <div className='inline-flex px-3 py-1 text-primary bg-primary/10 rounded-full text-sm font-medium'>
            <TodayDate/>
          </div>
          <h1 className='text-base-content text-4xl font-bold my-2'>আজকের বাজারের দাম এক নজরে</h1>
          <p className='text-base-content/70 text-md my-2 mb-8'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
          <Link href="#all-products" className='px-5 py-2.5 rounded-lg bg-primary text-primary-content text-sm'>সব পণ্য দেখুন</Link>
        </div>
        <div className='flex-1 relative'>
            <Image src="/bazar-hero.png" fill className='object-contain' alt="hero image"/>
        </div>
    </div>
  )
}
