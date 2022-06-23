import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/detailSlice/detailSlice';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Detail.module.css';

const Details = () => {
  const [localIndex, setLocalIndex] = React.useState(JSON.parse(localStorage.getItem('sport')));
  const dispatch = useDispatch();
  useEffect(() => {
    const index = JSON.parse(localStorage.getItem('sport'));
    if (index) {
      dispatch((getDetails(index)));
      setLocalIndex(index);
    }
  }, []);

  const { index, details } = useSelector((state) => state.detail);
  const newIndex = index !== null ? index : localIndex;

  // const sports = useSelector((state) => state.sports);
  const sportDetail = details.filter((sport) => sport.id === newIndex);

  const num = sportDetail[0].relationships.tags.data.length;
  const tags = sportDetail[0].relationships.tags.data;
  const tagElement = tags.map((tag) => (
    <li
      key={tag}
      className={styles.tag}
    >
      { tag }
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
  const relatedItem = relatedSports.map((sport) => sport.attributes.icon !== null && (
    <div
      key={sport.id}
      className={styles.relatedCard}
    >
      <img src={sport.attributes.icon} alt="" />
      <p>{ sport.attributes.name }</p>
    </div>
  ));
  return (
    <div>
      <Header
        heading={sportDetail[0].attributes.name}
      />
      <div className={styles.showcaseDiv}>
        <div className={styles.showcaseImg}>
          <img src={sportDetail[0].attributes.icon} alt={sportDetail[0].attributes.name} />
        </div>
        <div className={styles.showcaseDetails}>
          <p>{sportDetail[0].attributes.name.toUpperCase()}</p>
          {num > 0
            ? (
              <span>
                {num}
                &nbsp;
                tags
              </span>
            )
            : <span>no tag</span>}
        </div>
      </div>
      <p
        className={styles.heading}
      >
        {sportDetail[0].attributes.name.toUpperCase()}
        &nbsp;
        DETAILS
      </p>
      <div className={styles.description}>
        <span>description</span>
        {num > 0 ? <p>{sportDetail[0].attributes.description}</p> : <p>No accurate description</p>}
      </div>
      {num > 0
        ? (
          <div className={styles.tagsDiv}>
            <p>Tags</p>
            <ul className={styles.tags}>
              {tagElement}
            </ul>
          </div>
        )
        : (
          <div className={styles.tagsDiv}>
            <p>Tags</p>
            <span>No Tags available</span>
          </div>
        )}
      <div className={styles.relatedDiv}>
        <p className={styles.relatedTitle}>
          {sportDetail[0].attributes.name}
          &nbsp;
          related sports
        </p>
        {relatedSports.length > 0
          ? (
            <div className={styles.related}>
              { relatedItem }
            </div>
          )
          : (

            <p className={styles.relatedNot}>No related sports available</p>
          )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
