// import React from 'react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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

  // const [disabledHover, setDisabledHover] = useState(true);
  const nodeRef = useRef(null);
  // const hoverHandler = () => {
  //   console.log(nodeRef);
  //   nodeRef.current.classList.add(styles.hoverEnable);
  // };

  return (
    <CSSTransition in appear classNames={styles} timeout={1000}>
      <div className={`${styles.card} ${styles.noHover}`} ref={nodeRef}>
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
