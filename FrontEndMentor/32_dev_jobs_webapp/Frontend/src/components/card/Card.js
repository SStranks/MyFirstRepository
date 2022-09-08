import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './_Card.module.scss';

function Card(props) {
  const {
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    company,
    location,
  } = props;

  return (
    <div className={styles.card}>
      <div style={{ backgroundColor: logoBackground }}>
        <img src={logo} alt="company logo" />
      </div>
      <div>
        <p>
          {postedAt}
          <span>.</span>
          {contract}
        </p>
        <Link to="/job" state={props}>
          <h3>{position}</h3>
        </Link>
        <p>{company}</p>
        <h4>{location}</h4>
      </div>
    </div>
  );
}

Card.propTypes = {
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

Card.defaultProps = {
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

export default Card;
