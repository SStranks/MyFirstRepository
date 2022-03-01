import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.scss';

const Card = (props) => {
  const { period, time, prevTime } = props;
  const prevTimeRef = useRef(time);

  if (prevTimeRef.current !== time) {
    const elemCard = document.querySelector(`[data-period=${period}]`);
    const elemFlap = elemCard.children[2];
    elemFlap.classList.toggle('rotate-active');
    elemFlap.classList.toggle('rotate-active-copy');
    prevTimeRef.current = time;
  }

  return (
    <div>
      <div className="card" data-period={period}>
        <div className="card--top">
          <div>
            <span>{time}</span>
          </div>
        </div>
        <div className="card--bottom">
          <div>
            <span>{prevTime}</span>
          </div>
        </div>
        <div className="card--flap rotate-active">
          <div className="flap-front">
            <span>{prevTime}</span>
          </div>
          <div className="flap-back">
            <span>{time}</span>
          </div>
        </div>
      </div>
      <h3>{period}</h3>
    </div>
  );
};

Card.propTypes = {
  period: PropTypes.string,
  time: PropTypes.string,
  prevTime: PropTypes.string,
};

Card.defaultProps = {
  period: null,
  time: null,
  prevTime: PropTypes.string,
};

export default Card;
