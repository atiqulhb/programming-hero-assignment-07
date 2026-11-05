import { Suspense } from 'react'
import ProductGrid from '@/components/ProductGridForCategories'
import ProductCard from "@/components/ProductCard"
import {Label, ListBox, Select} from "@heroui/react"
import CategoryDetails from '@/components/CategoryDetails';


type PageProps = {
    params: Promise<{
        slug: string;
    }>
};

export default async function page({ params }: PageProps) {
   


  return (
   <Suspense fallback={<></>}>
    <CategoryDetails params={params}/>
   </Suspense>
  )
}
