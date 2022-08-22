/* eslint-disable radix */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../redux/detailSlice/detailSlice';
import { getData } from '../redux/sportsSlice/sportsSlice';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Detail.module.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getDetails());
  }, []);

  const details = useSelector((state) => state.detail);

  const sportDetail = details.filter((sport) => sport.id === parseInt(id));
  const sport = sportDetail[0];

  const num = sport.relationships.tags.data.length;
  const tags = sport.relationships.tags.data;
  const tagElement = tags.map((tag) => (
    <li key={tag} className={styles.tag}>
      {tag}
    </li>
  ));

  const { related } = sportDetail[0].relationships;
  const relatedSports = [];
  for (let i = 0; i < related.length; i += 1) {
    details.forEach((sport) => {
      if (sport.id === related[i].data.id) {
        relatedSports.push(sport);
      }
    });
  }
  const relatedItem = relatedSports.map(
    (sport) =>
      sport.attributes.icon !== null && (
        <div key={sport.id} className={styles.relatedCard}>
          <img src={sport.attributes.icon} alt="" />
          <p>{sport.attributes.name}</p>
        </div>
      )
  );
  return (
    <div>
      <Header heading={sportDetail[0].attributes.name} />
      <div className={styles.showcaseDiv}>
        <div className={styles.showcaseImg}>
          <img
            src={sportDetail[0].attributes.icon}
            alt={sportDetail[0].attributes.name}
          />
        </div>
        <div className={styles.showcaseDetails}>
          <p>{sportDetail[0].attributes.name.toUpperCase()}</p>
          {num > 0 ? (
            <span>
              {num}
              &nbsp; tags
            </span>
          ) : (
            <span>no tag</span>
          )}
        </div>
      </div>
      <p className={styles.heading}>
        {sportDetail[0].attributes.name.toUpperCase()}
        &nbsp; DETAILS
      </p>
      <div className={styles.description}>
        <span>description</span>
        {num > 0 ? (
          <p>{sportDetail[0].attributes.description}</p>
        ) : (
          <p>No accurate description</p>
        )}
      </div>
      {num > 0 ? (
        <div className={styles.tagsDiv}>
          <p>Tags</p>
          <ul className={styles.tags}>{tagElement}</ul>
        </div>
      ) : (
        <div className={styles.tagsDiv}>
          <p>Tags</p>
          <span>No Tags available</span>
        </div>
      )}
      <div className={styles.relatedDiv}>
        <p className={styles.relatedTitle}>
          {sportDetail[0].attributes.name}
          &nbsp; related sports
        </p>
        {relatedSports.length > 0 ? (
          <div className={styles.related}>{relatedItem}</div>
        ) : (
          <p className={styles.relatedNot}>No related sports available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
