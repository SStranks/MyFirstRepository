/* eslint-disable react/prop-types */
import { useState } from 'react';
import IconArrowUp from '../../../assets/svg/shared/icon-arrow-up.svg';
import { useUser } from '../../../context/UserContext';
import ApiClient from '../../../services/ApiHttp';
import styles from './_Upvote.module.scss';

const API = new ApiClient();

function Upvote(props) {
  const { upvotes: upvotesNum, requestId } = props;
  const [voted, setVoted] = useState(false);
  const [upvotes, setUpvotes] = useState(upvotesNum);
  const userId = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.patch(
        `/requests/${requestId}/upvote?userId=${userId}`
      );
      const { data } = res;

      if (data) {
        setUpvotes(data.request.upvotes);
        setVoted(true);
      } else {
        setVoted(true);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <input type="hidden" value="test" />
      <button
        type="submit"
        className={`${styles.upvote} ${voted ? styles.voted : ''}`}>
        <img src={IconArrowUp} alt="" />
        <span>{upvotes}</span>
      </button>
    </form>
  );
}

export default Upvote;
