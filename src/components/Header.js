import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardVoice } from 'react-icons/md';
import { TbSettings } from 'react-icons/tb';
import styles from './styles/Header.module.css';

const Header = (props) => {
  const { heading } = props;
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <MdKeyboardArrowLeft
          className={styles.arrowBack}
        />
      </Link>
      <p className={styles.headerHeading}>{heading}</p>
      <div className={styles.headerSide}>
        <MdKeyboardVoice
          className={styles.sideIcon}
        />
        <TbSettings
          className={styles.sideIcon}
        />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string,
};

Header.defaultProps = {
  heading: 'header Heading',
};
