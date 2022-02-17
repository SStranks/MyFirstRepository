import React from 'react';
import PropTypes from 'prop-types';
import StatSelector from './StatSelector';

const UserCard = (props) => {
  const { img, name, activePeriod, timePeriods, click } = props;

  const periodSelector = timePeriods.map((item) => (
    <StatSelector
      key={item.title}
      txt={item.txt}
      id={item.title}
      click={click}
      active={item.title === activePeriod}
    />
  ));

  return (
    <div className="card">
      <div>
        <div>
          <img src={img} alt="user avatar" />
        </div>
        <h2>Report for</h2>
        <span>{name}</span>
      </div>
      {periodSelector}
    </div>
  );
};

UserCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  timePeriods: PropTypes.arrayOf(PropTypes.object),
  click: PropTypes.func,
  activePeriod: PropTypes.string,
};

UserCard.defaultProps = {
  img: null,
  name: 'Jeremy Robson',
  timePeriods: null,
  click: null,
  activePeriod: null,
};

export default UserCard;
