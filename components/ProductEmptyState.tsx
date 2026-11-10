import Link from 'next/link'
import React from 'react'

export default function ProductEmptyState() {
  return (
    <div className="w-[80%] mx-auto my-6 p-10 bg-base-100 border rounded-4xl border-base-300 flex flex-col items-center gap-4">
        <h2 className='text-center font-bold text-2xl text-base-content'>আপনি সম্ভবত /product/ -এর পর ভুল প্রোডাক্ট আইডি যোগ করেছেন। এই আইডি -তে আমাদের কোন পণ্য নেই।</h2>
        <Link href="/" className='px-6 py-4 rounded-2xl bg-primary text-primary-content'>হোম পেইজে চলে যান</Link>
    </div>
  )
}
