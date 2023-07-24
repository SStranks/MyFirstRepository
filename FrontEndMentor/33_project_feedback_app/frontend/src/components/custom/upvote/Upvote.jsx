/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import IconArrowUp from '../../../assets/svg/shared/icon-arrow-up.svg';
import { useUser } from '../../../context/UserContext';
import ApiService from '../../../services/Services.js';
import styles from './_Upvote.module.scss';

const patchUpvote = async (variables) => {
  const { requestId, userId } = variables;
  try {
    const responseData = await ApiService.patchRequestUpvote(requestId, userId);
    if (responseData === 'duplicate upvote')
      throw new Error('Duplicate upvote');
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

function Upvote(props) {
  const { upvotes: upvotesNum, requestId } = props;
  const [voted, setVoted] = useState(false);
  const [upvotes, setUpvotes] = useState(upvotesNum);
  const userId = useUser();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({ mutationFn: patchUpvote });

  const onSubmit = async (e) => {
    e.preventDefault();
    mutate(
      { requestId, userId },
      {
        onSuccess: (data) => {
          console.log(data);
          setUpvotes(data.upvotes);
          setVoted(true);
          queryClient.invalidateQueries({ queryKey: ['requests'] });
        },
        onError: () => {
          toast.error('Already Upvoted!', { duration: 3000 });
          setVoted(true);
        },
      }
    );
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
