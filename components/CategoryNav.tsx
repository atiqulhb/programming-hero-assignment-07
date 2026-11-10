'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Category } from '@/lib/types'
import path from 'path'

type CategoryNavProp = {
    categories: Category[]
}

export default function CategoryNav({ categories }: CategoryNavProp) {
    const pathname = usePathname()

    console.log(pathname)
  return (
    <ul className='flex gap-1 py-2'>
        {categories.map(({ id, nameBn, icon, slug }) => (
            <li key={id}>
                <Link href={`/categories/${slug}`}
                    className={`
                        flex gap-px px-3
                        
                        rounded-2xl
                        h-8
                        items-center justify-center
                         text-xs font-semibold
                        ${`/categories/${slug}` === pathname && 'bg-primary text-primary-content'}
                    `}
                >
                    <span>{icon}</span>
                    <span>{nameBn}</span>
                </Link>
            </li>
        ))}
    </ul>
  )
}
