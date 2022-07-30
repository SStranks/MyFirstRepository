// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

// My Solution
function likeOrDislike(buttons) {
  let count = buttons[buttons.length - 1] || 'Nothing';
  for (let i = buttons.length - 1; i >= 0; i--) {
    if (buttons[i] !== buttons[i - 1]) return count;
    count === 'Nothing' ? (count = buttons[i]) : (count = 'Nothing');
  }
  return count;
}
