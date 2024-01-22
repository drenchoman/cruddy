import styles from './products-grid.module.css';
import ProductItem from './product-item';
export default function ProductsGrid({ products }) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
}
