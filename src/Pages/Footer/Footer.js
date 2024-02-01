import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer  className={styles.footer}>
      <div className={styles.footerContainer}>
        <div><h2>My Exchange Platform</h2>
          <p>THE WAY TO SUCCESS</p></div>
      <hr></hr>
      <p>@2024 My Exchange Platform ews | Blog | Currency converter | Help center | Russian | Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
