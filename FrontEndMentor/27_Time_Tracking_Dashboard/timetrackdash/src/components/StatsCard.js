import React from 'react';
import PropTypes from 'prop-types';

const StatsCard = (props) => {
  const { title, activeTime, timeFrame } = props;

  let currentPeriod;
  let previousPeriod;
  switch (true) {
    case activeTime === 'day':
      currentPeriod = timeFrame.daily.current;
      previousPeriod = timeFrame.daily.previous;
      break;
    case activeTime === 'week':
      currentPeriod = timeFrame.daily.current;
      previousPeriod = timeFrame.daily.previous;
      break;
    case activeTime === 'month':
      currentPeriod = timeFrame.daily.current;
      previousPeriod = timeFrame.daily.previous;
      break;
    default:
  }

  return (
    <div className="card">
      <div />
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <span>{currentPeriod}hrs</span>
        <span>Last Week - {previousPeriod}hrs</span>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  activeTime: PropTypes.string,
  timeFrame: PropTypes.string,
};

StatsCard.defaultProps = {
  title: null,
  activeTime: null,
  timeFrame: null,
};

export default StatsCard;
