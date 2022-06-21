import React from 'react';
import { useSelector } from 'react-redux';
import Sport from './Sport';
import Header from './Header';
import styles from './styles/Leagues.module.css';

const Sports = () => {
  const sports = useSelector((state) => state.sports);
  const sportElements = sports.map((sport) => (
    sport.attributes.icon !== null && (
      <Sport
        key={sport.attributes.decathlon_id}
        id={sport.attributes.decathlon_id}
        img={sport.attributes.icon}
        title={sport.attributes.name}
        games={sport.relationships.tags.data}
      />
    )
  ));
  const sportsAvailable = sports.filter((sport) => sport.attributes.icon !== null);
  return (
    <>
      <Header heading="Sports" />
      <div className={styles.mainDiv}>
        <div className={styles.showcaseDiv}>
          <div className={styles.showcaseImg}>
            <img src="https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/224/224.svg" alt="showcase" />
          </div>
          <div className={styles.showcaseDetails}>
            <p>SPORTS</p>
            <span>
              {sportsAvailable.length}
              &nbsp;
              games
            </span>
          </div>
        </div>
        <p className={styles.heading}>SPORTS BY GROUP</p>
        <div className={styles.leaguesDiv}>
          { sportElements }
        </div>
      </div>
    </>
  );
};

export default Sports;
