// import React from 'react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './_Card.module.scss';

function Card(props) {
  const {
    id,
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    company,
    location,
    timeStamp,
  } = props;

  const nodeRef = useRef();

  return (
    <CSSTransition
      key={`${id}${timeStamp}`}
      in
      appear
      classNames={styles}
      timeout={1000}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div
        className={`${styles.card} ${styles.noHover}`}
        ref={nodeRef}
        key={`${id}${timeStamp}`}
      >
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
    </CSSTransition>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  timeStamp: PropTypes.number,
};

Card.defaultProps = {
  id: PropTypes.number,
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  timeStamp: null,
};

export default Card;
