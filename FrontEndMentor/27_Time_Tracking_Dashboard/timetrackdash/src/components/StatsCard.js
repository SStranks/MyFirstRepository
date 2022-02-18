import React from 'react';
import PropTypes from 'prop-types';

const StatsCard = (props) => {
  const { title, activePeriod, timeFrames, icon } = props;
  const id = `${title.replace(' ', '-').toLowerCase()}`;

  let currentPeriod;
  let previousPeriod;
  switch (true) {
    case activePeriod === 'day':
      currentPeriod = timeFrames.daily.current;
      previousPeriod = timeFrames.daily.previous;
      break;
    case activePeriod === 'week':
      currentPeriod = timeFrames.weekly.current;
      previousPeriod = timeFrames.weekly.previous;
      break;
    case activePeriod === 'month':
      currentPeriod = timeFrames.monthly.current;
      previousPeriod = timeFrames.monthly.previous;
      break;
    default:
  }

  return (
    <div className="card stats">
      <div
        className="stats__bar"
        id={id}
        // style={{ backgroundImage: `url(${icon})` }}
      >
        <img className="work-icon" src={icon} alt="work type" />
      </div>
      <div className="stats__data">
        <div className="data__header">
          <h3 className="data__title">{title}</h3>
          <img
            className="data__ellipsis"
            src="data/images/icon-ellipsis.svg"
            alt="stats menu"
          />
        </div>
        <div>
          <span className="data__number">{currentPeriod}hrs</span>
          <span className="data__last-period">
            Last Week - {previousPeriod}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  activePeriod: PropTypes.string,
  timeFrames: PropTypes.objectOf(PropTypes.object),
  icon: PropTypes.string,
};

StatsCard.defaultProps = {
  title: null,
  activePeriod: null,
  timeFrames: null,
  icon: null,
};

export default StatsCard;
