import Image from 'next/image'
import Link from 'next/link'
import AuthInNav from '@/components/AuthInNav'
import type { Category } from '@/lib/types'

async function getCategories(): Promise<Category[]> {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        cache: 'default'
    })
    const data = await res.json()

    return data
}

export default async function Nav() {

    const categories = await getCategories()
    console.log(categories)

    console.log('it is nav')

    const todaysDate = new Date()
    const todaysDateInBengali = todaysDate.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    

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
                        <span>{todaysDateInBengali}</span>
                    </div>
                </Link>

                <AuthInNav/>

            
            </div>
        </div>
        <div className='w-full border-b border-gray-300'>
            <div className='w-[80%] mx-auto'>
                <ul className='flex gap-1 py-2'>
                    {categories.map(({ id, nameBn, icon, slug }) => (
                        <li key={id}>
                            <Link href={`/categories/${slug}`} className='flex gap-px px-3'>
                                <span>{icon}</span>
                                <span>{nameBn}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </nav>
  )
}
