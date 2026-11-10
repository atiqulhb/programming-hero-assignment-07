import React from 'react'
import {Skeleton} from "@heroui/react";

export default function CategoryDetails() {
  return (
     <section className='px-4 py-6'>
        <div className='p-5 rounded-2xl'>
            <Skeleton className='"h-32 rounded-lg bg-base-100'/>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='w-full p-4 flex items-center justify-end gap-2 '>
                <Skeleton className='"h-32 rounded-lg'/>
            </div>
            <Skeleton className='"h-32 rounded-lg'/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
                <Skeleton className="h rounded-xl" />
            </div>
        </div>

    </section>
  )
}
