import React from 'react'

async function getProductInfo(id: string) {
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)
    return await res.json()
}

type PageProps = {
    params: Promise<{ id: string}>
}

export default async function Product({ params }: PageProps) {
    const { id } = await params

    const product = await getProductInfo(id)

    console.log(product)

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
