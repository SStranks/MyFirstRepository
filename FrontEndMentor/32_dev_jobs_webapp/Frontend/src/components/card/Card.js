import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Card.module.scss';

function Card(props) {
  const { logo, details, title, company, location } = props;

  return (
    <div className={styles.card}>
      <div>
        <img src={logo} alt="company logo" />
      </div>
      <p>{details}</p>
      <h3>{title}</h3>
      <p>{company}</p>
      <h4>{location}</h4>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string,
  details: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

Card.defaultProps = {
  logo: PropTypes.string,
  details: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

export default Card;
