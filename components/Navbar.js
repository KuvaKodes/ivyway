// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo / Brand */}
      <div className={styles.logo}>
        <Link href="/">
            <Image
              src="/images/ivyway_logo.png" // in public folder
              alt="IvyWay Logo"
              width={275}
              // make height proportional to width
              height={275 * (1.0/3.2)}
            />
        </Link>
      </div>

      {/* Nav Links */}
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/join">
          <button className={styles.joinBtn}>Join</button>
        </Link>
      </div>
    </nav>
  );
}
