import PropTypes from 'prop-types';
import { useState } from 'react';
import IconArrowUp from '../../../assets/svg/shared/icon-arrow-up.svg';
import styles from './_Upvote.module.scss';

function Upvote(props) {
  const [voted, setVoted] = useState(false);
  const { upvotes } = props;

  const clickHandler = () => {
    if (!voted) setVoted(true);
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`${styles.upvote} ${voted ? styles.voted : ''}`}>
      <img src={IconArrowUp} alt="" />
      <span>{upvotes}</span>
    </button>
  );
}

Upvote.propTypes = {
  upvotes: PropTypes.number,
};

Upvote.defaultProps = {
  upvotes: 27,
};

export default Upvote;
