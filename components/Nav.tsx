

import Image from 'next/image'
import { Suspense } from 'react'
import Link from 'next/link'
import CategoryNav from '@/components/CategoryNav'
import AuthInNav from '@/components/AuthInNav'
import TodayDate from './TodayDate'
import { getCategories } from '@/lib/data'



export default async function Nav() {

    const categories = await getCategories()

    console.log('it is nav')


    

  return (
    <nav className='flex flex-col bg-primary-content'>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto flex items-center justify-between'>
                <Link href="/" className='flex gap-2'>
                    <div className='w-10 h-10 bg-primary rounded-xl relative'>
                        <Image src="/logo-icon.png" fill className="object-contain" alt="logo icon"/>
                    </div>
                    <div className='flex flex-col items-start justify-between'>
                        <h3>বাজারদর</h3>
                        <Suspense fallback={<span></span>}>
                            <TodayDate/>
                        </Suspense>
                    </div>
                </Link>
                <Suspense fallback={<span></span>}>
                    <AuthInNav/>
                </Suspense>
            </div>
        </div>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto'>
                <Suspense fallback={<></>}>
                    <CategoryNav categories={categories}/>
                </Suspense>
            </div>
        </div>
        
    </nav>
  )
}
