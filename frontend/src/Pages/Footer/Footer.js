import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer  className={styles.footer}>
      <div className={styles.footerContainer}>
        <div><h2>My Exchange Platform</h2>
          <p>THE WAY TO SUCCESS</p></div>
      <hr></hr>
      <p>@2024 <a href="#">My Exchange Platform</a> | <a href="#">News</a> | <a href="#">Blog</a> | <a href="#">Currency converter</a> | <a href="#">Help center</a> | <a href="#">Sitemap</a></p>
      </div>
    </footer>
  );
};

export default Footer;
