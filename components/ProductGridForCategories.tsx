'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/types'

type Props = {
    products: Product[]
}

type SortProductsBy = {
    'ডিফল্ট': Product[],
        'দাম: কম থেকে বেশি': Product[],
        'দাম: বেশি থেকে কম': Product[]
}

type SortBy = keyof SortProductsBy

export default function ProductGridForCategories({ products }: Props) {
    const [sortBy, setSortBy] = useState<SortBy>('ডিফল্ট')

    const sortProductsBy: SortProductsBy = {
        'ডিফল্ট': products,
        'দাম: কম থেকে বেশি': [...products].sort((a,b) => a.today - b.today),
        'দাম: বেশি থেকে কম': [...products].sort((a,b) => b.today - a.today)
    }

  return (
    <div className='flex flex-col gap-4'>
        <div className='w-full p-4 flex items-center justify-end gap-2 bg-base-100 border rounded-3xl border-base-300'>
            <span>সাজান</span>
            <select defaultValue="ডিফল্ট" className="select " onChange={(e) => setSortBy(e.target.value as SortBy)}>
                <option>ডিফল্ট</option>
                <option>দাম: কম থেকে বেশি</option>
                <option>দাম: বেশি থেকে কম</option>
            </select>
        </div>
        <span>মোট {products.length}টি পণ্য দেখানো হচ্ছে</span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
            {sortProductsBy[sortBy].map((product: Product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}
