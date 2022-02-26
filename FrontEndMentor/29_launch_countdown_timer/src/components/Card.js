import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { period, time } = props;

  return (
    <div>
      <div className="card">
        <div>
          <span>{time}</span>
        </div>
        {/* <div>
            <span>{time}</span>
          </div> */}
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
