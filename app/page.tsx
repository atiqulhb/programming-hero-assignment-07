import Hero from "@/components/Hero"
import ProductCard from '@/components/ProductCard'

async function getProducts() {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
  return await res.json()
}

export default async function Home() {
  const allProducts = await getProducts()
  const sixOfPriceRisenProducts = allProducts.filter((product) => product.change.dir === "up").slice(0, 6)
  const sixOfPriceDroppedProducts = allProducts.filter((product) => product.change.dir === "down").slice(0, 6)
  

  return (
    <div>
      <Hero/>
      <section className="w-[80vw] mx-auto">
        <h2>▲ আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
          {sixOfPriceRisenProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </section>
      <section className="w-[80vw] mx-auto">
        <h2>▼ আজ দাম কমেছে</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
          {sixOfPriceDroppedProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </section>
    </div>
  );
}
