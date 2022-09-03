import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Card.module.scss';

function Card(props) {
  const { logo, postedAt, contract, position, company, location } = props;

  return (
    <div className={styles.card}>
      <div>
        <img src={logo} alt="company logo" />
      </div>
      <p>
        {postedAt}.{contract}
      </p>
      <h3>{position}</h3>
      <p>{company}</p>
      <h4>{location}</h4>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

Card.defaultProps = {
  logo: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

export default Card;
