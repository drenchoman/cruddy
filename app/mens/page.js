import { getMensProducts } from '@/lib/products';
import ProductsGrid from '@/components/products-grid';

async function Products() {
  let products = await getMensProducts();
  return <ProductsGrid products={products} />;
}

export default async function Mens() {
  return (
    <>
      <Products />
    </>
  );
}
