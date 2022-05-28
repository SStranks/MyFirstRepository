// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// My Solution
function outed(meet, boss) {
  const bossScore = meet[boss];
  delete meet[boss];
  const values = Object.values(meet);
  const people = values.length + 1;
  return (values.reduce((acc, cur) => acc + cur, 0) + bossScore * 2) / people <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!';
}

// Other Solutions
function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
