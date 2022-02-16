import React from 'react';
import PropTypes from 'prop-types';
import StatSelector from './StatSelector';

const UserCard = (props) => {
  const { img, name } = props;
  const timeSelector = {};

  return (
    <div>
      <div>
        <div>
          <img src={img} alt="user avatar" />
        </div>
        <h2>Report for</h2>
        <span>{name}</span>
      </div>
      <StatSelector>{timeSelector}</StatSelector>
    </div>
  );
};

UserCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

UserCard.defaultProps = {
  img: null,
  name: 'Jeremy Robson',
};

export default UserCard;
