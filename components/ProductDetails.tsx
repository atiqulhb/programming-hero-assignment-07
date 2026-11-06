import { Suspense } from 'react'
import type { Product } from '@/lib/types'
import { cacheLife } from "next/cache";

type ComponentProps = {
    params: Promise<{ id: string }>
}

async function getProductInfo(id: string): Promise<Product> {
    "use cache";
    
    cacheLife("hours");
        
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return await res.json()
}

function priceCompare(today: number, yesterday: number) {
    if (today === yesterday) {
        return 'অপরিবর্তিত'
    } else if (today > yesterday) {
        return `বেড়েছে · ${(today - yesterday).toLocaleString('bn-BD')} টাকা`
    } else if (today < yesterday) {
        return `কমেছে · ${(yesterday - today).toLocaleString('bn-BD')} টাকা`
    }
}

export default async function ProductDetails({ params }: ComponentProps) {
    const { id } = await params

    const product = await getProductInfo(id)

    const minPrice = Math.min(...product.markets.map((market) => market.min))
    const maxPrice = Math.max(...product.markets.map((market) => market.max))
    const averagePrice = product.markets.reduce((sum, market) => sum + (market.min + market.max)/2, 0) / product.markets.length
  
    return (
    <div className='px-4 py-6 flex flex-col gap-6'>
        <div className='flex items-center justify-between rounded-2xl border border-base-300 bg-base-100 p-5'>
            <div className='flex gap-2'>
                <div className='flex items-center justify-center'>
                    <span className='w-10 h-10 flex items-center justify-center rounded-2xl bg-base-200'>{product.image}</span>
                </div>
                <div className='flex flex-col'>
                    <h2>{product.nameBn}</h2>
                    <span>প্রতি {product.unit} · {product.categoryNameBn}</span>
                    <span>গতকালের তুলনায় আজ দাম {priceCompare(product.today, product.yesterday)}</span>
                </div>
            </div>
            <div className='flex flex-col items-center rounded-2xl bg-base-200 px-5 py-4'>
                <span>আজকের দাম</span>
                <h3 className='font-bold text-3xl text-base-content'>{product.today.toLocaleString('bn-BD')}</h3>
                <span>টাকা / {product.unit}</span>
                <span>{product.change.pct.toLocaleString('bn-BD')}%</span>
            </div>
        </div>
        <div className="p-5 rounded-2xl bg-base-100 flex flex-col gap-6">
            <div>
                <h3 className='font-extrabold mb-3'>দামের সারসংক্ষেপ</h3>
                <div className='flex gap-3'>
                    <div className='flex-1 px-5 py-4 rounded-2xl border border-base-300 bg-base-100'>
                        <span>সর্বনিম্ন দাম</span>
                        <h3 className='text-primary'>
                            <span className='font-bold'>
                                {minPrice.toLocaleString('bn-BD')}
                            </span>
                             <span> টাকা</span>
                        </h3>
                        <span>সবচেয়ে কম দামের বাজার</span>
                    </div>
                     <div className='flex-1 px-5 py-4 rounded-2xl border border-base-300 bg-base-100'>
                        <span>সর্বাধিক দাম</span>
                        <h3 className='text-error'>
                            <span className='font-bold'>
                                {maxPrice.toLocaleString('bn-BD')}
                            </span>
                            <span> টাকা</span>
                        </h3>
                        <span>সবচেয়ে বেশি দামের বাজার</span>
                    </div>
                     <div className='flex-1 px-5 py-4 rounded-2xl border border-base-300 bg-base-100'>
                        <span>গড় দাম</span>
                        <h3 className='text-primary'>
                            <span className='font-bold'>
                                {averagePrice.toLocaleString('bn-BD')}
                            </span>
                            <span> টাকা</span>
                        </h3>
                        <span>প্রতি কেজি-এর হিসাবে</span>
                    </div>
                </div>
            </div>
            <div>
                <table className='w-full rounded-2xl border border-base-300 border-separate border-spacing-0'>
                    <caption className='text-left mb-3 font-semibold'>বাজারভিত্তিক আজকের দাম</caption>
                    <thead className='border-b border-base-200 text-left'>
                        <tr>
                        <th className='px-4 py-3'>বাজার</th>
                        <th className='px-4 py-3'>বিভাগ</th>
                        <th className='px-4 py-3'>সর্বনিম্ন</th>
                        <th className='px-4 py-3'>সর্বাধিক</th>
                        <th className='px-4 py-3'>গড়</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y divide-base-content'>
                    {product.markets.map((market) => (
                        <tr className='even:bg-base-200'>
                            <td className='px-4 py-3'>{market.market}</td>
                            <td className='px-4 py-3'>{market.division}</td>
                            <td className='px-4 py-3'>{market.min.toLocaleString('bn-BD')} টাকা</td>
                            <td className='px-4 py-3'>{market.max.toLocaleString('bn-BD')} টাকা</td>
                            <td className='px-4 py-3'>{((market.min + market.max)/2).toLocaleString('bn-BD')} টাকা</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
