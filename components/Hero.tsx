import Image from 'next/image'

export default function Hero() {
   const todaysDate = new Date()
    const todaysDateInBengali = todaysDate.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })
  return (
    <div className='w-[80vw] mx-auto flex px-4 py-10 rounded-3xl border border-base-300 bg-base-100 my-10'>
        <div className='flex-2'>
          <span className='px-3 py-1 text-primary bg-primary/10 rounded-full'>{todaysDateInBengali}</span>
          <h1 className='text-base-content'>আজকের বাজারের দাম এক নজরে</h1>
          <p className='text-base-content/70'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
          <button className='px-5 py-2.5 rounded-lg bg-primary text-primary-content'>সব পণ্য দেখুন</button>
        </div>
        <div className='flex-1 relative'>
            <Image src="/bazar-hero.png" fill className='object-contain' alt="hero image"/>
        </div>
    </div>
  )
}
