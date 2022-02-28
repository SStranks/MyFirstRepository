import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.scss';

const Card = (props) => {
  const { period, time } = props;
  const [test, setTest] = useState({ time, period });

  if (test.time !== time) {
    setTest({ time, period });
    console.log(test);
  }

  return (
    <div>
      <div className="card">
        <div className="card--top">
          <div>
            <span>{time}</span>
          </div>
        </div>
        <div className="card--bottom">
          <div>
            <span>{time}</span>
          </div>
        </div>
        <div className="card--flap">
          <div className="flap-front">
            <span>{time}</span>
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
};

Card.defaultProps = {
  period: null,
  time: null,
};

export default Card;
