'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGridForCategories({ products }) {
    const [sortBy, setSortBy] = useState('ডিফল্ট')

    const sortProductsBy = {
        'ডিফল্ট': products,
        'দাম: কম থেকে বেশি': products.sort((a,b) => a.today < b.today),
        'দাম: বেশি থেকে কম': products.sort((a,b) => a.today > b.today)
    }

    console.log(`${sortBy} :`, sortProductsBy[sortBy])
  return (
    <div className='flex flex-col gap-4'>
        <div className='w-full p-4 flex items-center justify-end gap-2'>
            <span>সাজান</span>
            <select defaultValue="ডিফল্ট" className="select" onChange={(e) => setSortBy(e.target.value)}>
                <option>ডিফল্ট</option>
                <option>দাম: কম থেকে বেশি</option>
                <option>দাম: বেশি থেকে কম</option>
            </select>
        </div>
        <span>মোট {products.length}টি পণ্য দেখানো হচ্ছে</span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
            {sortProductsBy[sortBy].map((product) => (
                <ProductCard product={product}/>
            ))}
        </div>
    </div>
  )
}
