import { Suspense } from 'react'
import type { Product } from '@/lib/types'
import { cacheLife } from "next/cache";

type ComponentProps = {
    params: Promise<{ id: string}>
}

async function getProductInfo(id: string) {
    "use cache";
    
    cacheLife("hours");
        
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return await res.json()
}

export default async function ProductDetails({ params }: ComponentProps) {
    const { id } = await params
     const product = await getProductInfo(id)
  return (
    <div>
        <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
                <span className='p-4 bg-primary-content'>{product.image}</span>
                <div className='flex-flex-col'>
                    <h2>বাটাম সাইজ চাল</h2>
                    <span>্রতি কেজি · চাল</span>
                    <span>গতকালের তুলনায় আজ দাম বেড়েছে · ২ টাকা</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <span>আজকের দাম</span>
                <h3>৬৬</h3>
                <span>টাকা / কেজি</span>
                <span>৩.১%</span>
            </div>
        </div>
    </div>
  )
}
