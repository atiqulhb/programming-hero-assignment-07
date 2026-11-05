import ProductDetails from '@/components/ProductDetails'
import { Suspense } from 'react'

type PageProps = {
    params: Promise<{ id: string}>
}

export default async function Product({ params }: PageProps) {

  return (
    <Suspense fallback={<></>}>
        <ProductDetails params={params}/>
    </Suspense>
  )
}
