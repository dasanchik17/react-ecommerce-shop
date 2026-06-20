import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <span className={styles.logo}>Lizzane Machado</span>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className={styles.presentation}>
        <div className={styles.presentationContent}></div>
      </div>
    </header>
  );
}
