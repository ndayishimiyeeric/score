/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable newline-per-chained-call */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/sportsSlice/sportsSlice';
import Sport from './Sport';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Leagues.module.css';

const Sports = () => {
  const [formData, setFormData] = useState({
    textValue: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.textValue.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        textValue: '',
      }));
    }
  };

  const sports = useSelector((state) => state.sports);
  const changer = (str) =>
    str.toString().split('').join('').toUpperCase().replace(/\s/g, '');
  const NewsportElements = sports.filter((item) =>
    changer(item.name).includes(changer(formData.textValue))
  );

  const sportElements = NewsportElements.map((sport) => (
    <Sport
      key={sport.id}
      id={sport.id}
      img={sport.icon}
      title={sport.name}
      games={sport.tags}
    />
  ));
  const sportsAvailable = sports.filter((sport) => sport.icon !== null);

  return (
    <>
      <Header heading="Sports" />
      <div className={styles.mainDiv}>
        <div className={styles.showcaseDiv}>
          <div className={styles.showcaseImg}>
            <img
              src="https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/224/224.svg"
              alt="showcase"
            />
          </div>
          <div className={styles.showcaseDetails}>
            <p>SPORTS</p>
            <span>
              {sportsAvailable.length}
              &nbsp; games
            </span>
          </div>
        </div>
        <p className={styles.heading}>SPORTS BY GROUP</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            name="textValue"
            value={formData.textValue}
            className={styles.formInput}
          />
        </form>
        {NewsportElements.length > 0 ? (
          <div className={styles.leaguesDiv}>{sportElements}</div>
        ) : (
          <div className={styles.missing}>
            <p>No such game available</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Sports;
