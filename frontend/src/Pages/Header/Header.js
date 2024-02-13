import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>My Exchange Platform</h1>
      <p>THE WAY TO SUCCESS</p>
      <nav className={styles.navContainer}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/e">TRU</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
