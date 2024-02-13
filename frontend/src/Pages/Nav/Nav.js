import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/why">Why client Pilot?</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/registration">Registration</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
