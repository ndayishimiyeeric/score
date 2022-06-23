import React from 'react';
import styles from './styles/Footer.module.css';

function Footer() {
  return (
    <footer>
      <p className={styles.footerP}>
        &copy;
        decathlon.com
      </p>
    </footer>
  );
}

export default Footer;
