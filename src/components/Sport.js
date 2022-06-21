import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { getDetails } from '../redux/detailSlice/detailSlice';
import styles from './styles/League.module.css';

const Sport = (props) => {
  const {
    img, title, games, id,
  } = props;

  const dispatch = useDispatch();
  const handleIconClick = ({ id }) => {
    dispatch(getDetails({ id }));
  };

  const num = games.length;
  return (
    <div className={styles.sport}>
      <div className={styles.image}>
        <img src={img} alt={title} />
        <Link to="/detail" className={styles.link}>
          <BiRightArrowCircle
            className={styles.openIcon}
            onClick={() => handleIconClick({ id })}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {games.length > 0
          ? (
            <p className={styles.numberGroup}>
              {num}
              &nbsp;
              tags
            </p>
          )
          : <p className={styles.numberGroup}>no tag</p>}
      </div>
    </div>
  );
};

export default Sport;

Sport.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired, //eslint-disable-line
};
