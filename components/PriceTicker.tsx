import React from 'react'
import type { Product } from '@/lib/types'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
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