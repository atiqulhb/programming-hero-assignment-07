import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="border border-base-300 rounded-2xl p-4 flex flex-col gap-3">
        <div className="flex gap-3">
        <span className="w-12 h-12 flex items-center justify-center bg-base-200 rounded-xl">{product.image}</span>
        <div>
            <h3 className="text-base-content">{product.nameBn}</h3>
            <span className="text-base-content">প্রতি {product.unit}</span>
        </div>
        </div>
        <div className="flex items-baseline justify-between">
        <div className="flex flex-col">
            <span>আজকের দাম</span>
            <span>{product.today} টাকা</span>
        </div>
        <span className={`px-2 py-1 rounded-xl bg-base-200 ${product.change.dir === 'up' ? 'text-error' : product.change.dir === 'down' ? 'text-success' : 'text-base-content'}`}>{product.change.dir === 'up' ? '▲' : product.change.dir === 'down' ? '▼' : '-'}{product.change.pct}%</span>
        </div>
    </div>
  )
}
