import Image from 'next/image';
import styles from './product-item.module.css';
export default function ProductItem({
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <article>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={description} fill />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </header>
      <div></div>
    </article>
  );
}
