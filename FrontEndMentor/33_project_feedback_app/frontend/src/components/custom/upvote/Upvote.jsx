/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import IconArrowUp from '../../../assets/svg/shared/icon-arrow-up.svg';
import { useUser } from '../../../context/UserContext';
import ApiService from '../../../services/Services.js';
import styles from './_Upvote.module.scss';

function Upvote(props) {
  const { upvotes: upvotesNum, requestId } = props;
  const [voted, setVoted] = useState(false);
  const [upvotes, setUpvotes] = useState(upvotesNum);
  const userId = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    const responseData = await ApiService.patchRequestUpvote(requestId, userId);
    if (responseData.upvotes) {
      setUpvotes(responseData.upvotes);
      setVoted(true);
    }
    if (responseData === 'duplicate upvote') {
      toast.error('Already Upvoted!', { duration: 3000 });
      setVoted(true);
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
