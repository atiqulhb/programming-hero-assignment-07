import React from 'react'
import { cacheLife } from "next/cache";
import type { Product } from '@/lib/types'

async function getProducts(): Promise<Product[]> {
  "use cache";

    cacheLife("hours");

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')

  if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

  return await res.json()
}

export default async function PriceTicker() {
  const allProducts = await getProducts()
  // const  = 
  return (
    <div className='w-full border-b border-gray-300 overflow-hidden bg-primary-content'>
      <ul className='flex animate-marquee'>
        {allProducts.map(({ id, nameBn, image, today, unit, change }) => (
          <li key={id} className='whitespace-nowrap px-4 py-2'>{image} {nameBn} {today}/{unit} <span className={change.dir === 'up' ? 'text-success' : 'text-error'}>{change.dir === 'up' ? '▼' : '▲'}{change.pct}%</span></li>
        ))}
      </ul>
    </div>
  )
}