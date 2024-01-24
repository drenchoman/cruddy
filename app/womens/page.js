import { getWomensProducts } from '@/lib/products';
import ProductsGrid from '@/components/products-grid';

async function Products() {
  let products = await getWomensProducts();
  return <ProductsGrid products={products} />;
}

export default function WomensProducts() {
  return (
    <>
      <Products />
    </>
  );
}
