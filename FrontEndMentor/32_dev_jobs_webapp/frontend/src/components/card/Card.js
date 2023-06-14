import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
      mountOnEnter
      in
      appear
      classNames={styles}
      timeout={1000}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <Link to="/job" state={props}>
        <div className={`${styles.card} ${styles.noHover}`} ref={nodeRef}>
          <div
            className={styles.card__logo}
            style={{ backgroundColor: logoBackground }}
          >
            <img src={logo} alt="company logo" />
          </div>
          <div className={styles.card__info}>
            <p>
              {postedAt}
              <span>.</span>
              {contract}
            </p>
            <h3 className={styles.card__info__position}>{position}</h3>
            <p>{company}</p>
            <h4>{location}</h4>
          </div>
        </div>
      </Link>
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
