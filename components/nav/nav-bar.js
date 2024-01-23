import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/shop.svg';
import NavLink from './nav-link';
import styles from './nav-bar.module.css';
export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logo} priority alt="A shop front" />
        Fake Store
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href={'/about'}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
