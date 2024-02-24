import { Suspense } from 'react';
import { getProducts, getTopThreeProducts } from '@/lib/products';
import Carousel from '@/components/carousel/carousel';
import ProductsGrid from '@/components/products-grid';

async function Products() {
  const products = await getProducts();
  return <ProductsGrid products={products} />;
}

async function TopThreeProducts() {
  const products = await getTopThreeProducts();
  return <Carousel images={products} />;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Fetching products</p>}>
        <Products />
        <TopThreeProducts />
      </Suspense>
    </>
  );
}
