'use client'

import React from 'react'
import { signOut, useSession } from "@/lib/auth-client";

export default function page() {
    const { data: session, isPending } = useSession();
  return (
    <div className='flex flex-col gap-4'>
        <h2>আমার প্রোফাইল</h2>
        <span>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</span>
        <div className='w-full flex items-center justify-between p-6'>
            <div className='flex flex-col'>
                <h3>{session?.user?.name}</h3>
                <span>{session?.user?.email}</span>
            </div>
            <button className='px-4 py-0.5 rounded-2xl border-error text-error' onClick={() => signOut()}>
                ↩ সাইন আউট
            </button>
        </div>
    </div>
  )
}
