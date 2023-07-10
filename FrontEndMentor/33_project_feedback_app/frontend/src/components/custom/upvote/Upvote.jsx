/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import IconArrowUp from '../../../assets/svg/shared/icon-arrow-up.svg';
import { useUser } from '../../../context/UserContext';
import HttpAPI from '../../../services/httpAPI';
import styles from './_Upvote.module.scss';

const API = new HttpAPI();

function Upvote(props) {
  const { upvotes, requestId } = props;
  const [voted, setVoted] = useState(false);
  const userId = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.patch(
        `/requests/${requestId}/upvote?userId=${userId}`
      );

      console.log(res);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const clickHandler = () => {
    // NOTE:  Move into submit handler upon success
    if (!voted) setVoted(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="hidden" value="test" />
      <button
        type="submit"
        onClick={clickHandler}
        className={`${styles.upvote} ${voted ? styles.voted : ''}`}>
        <img src={IconArrowUp} alt="" />
        <span>{upvotes}</span>
      </button>
    </form>
  );
}

export default Upvote;
