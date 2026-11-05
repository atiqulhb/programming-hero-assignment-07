import React from 'react'
import { cacheLife } from "next/cache";
import ProductGrid from './ProductGridForCategories';

import type { Category } from '@/lib/types'

type Props = {
    params: Promise<{
        slug: string;
    }>
}

async function getCategoryInformation(category: string) {
    "use cache";

    cacheLife("hours");

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${category}`)

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return await res.json()
}

async function getProductOfCertainCategory(category: string) {
    "use cache";

    cacheLife("hours");

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${category}`)

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return await res.json()
}



export default async function CategoryDetails({ params }: Props) {
     const { slug } = await params
    const categoryInfo = await getCategoryInformation(slug)
    const products = await getProductOfCertainCategory(slug)
  return (
     <section className='px-4 py-6 flex flex-col gap-6'>
            <div className='p-5 rounded-2xl bg-base-100 border border-base-300'>
                <div className='flex gap-12'>
                    <span className='text-4xl'>{categoryInfo.icon}</span>
                    <div className='flex flex-col'>
                        <h2 className="text-base-content">{categoryInfo.nameBn}</h2>
                        <p className="text-sm text-base-content/70">{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </div>
            <ProductGrid products={products}/>
        </section>
  )
}
