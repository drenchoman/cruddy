export default function ProductsGrid({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.title}</h1>
        </li>
      ))}
    </ul>
  );
}
