import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/shop.svg';
import NavLink from './nav-link';
import styles from './nav-bar.module.css';
import cart from '@/public/cart.svg';

const links = [
  { id: 1, name: 'Mens', href: '/mens' },
  { id: 2, name: 'Womens', href: '/womens' },
];

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link className={styles.logo} href="/">
        <Image src={logo} priority alt="A shop front" />
        Botiga Falsa
      </Link>

      <nav className={styles.secondaryNav}>
        <NavLink href={'/about'}>
          <Image src={cart} priority alt="Shopping cart" />
          <span>(0)</span>
        </NavLink>
      </nav>
    </header>
  );
}
