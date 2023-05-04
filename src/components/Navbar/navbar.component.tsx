import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logoWrapper}>
        <h1 className={styles.logo}>QuickCV</h1>
      </Link>
    </header>
  );
};
