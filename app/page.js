import Image from 'next/image';
import Api from '@/api/api';
import Button from '@/api/button';
import Stopwatch from '@/api/stopwatch';

import { Suspense } from 'react';
import { getProducts } from '@/lib/products';
import ProductsGrid from '@/components/products-grid';

async function Products() {
  const products = await getProducts();
  return <ProductsGrid products={products} />;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Fetching products</p>}>
        <Products />
      </Suspense>
    </>
  );
}
