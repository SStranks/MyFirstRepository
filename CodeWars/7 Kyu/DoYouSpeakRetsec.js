// Do you speak retsec?
// You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

// retsec examples

// That way, you'll be able to exchange your messages in private.

// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

// Examples
// reverseByCenter("secret")  == "retsec" // no center character
// reverseByCenter("agent")   == "nteag"  // center character is "e"

// My Solution
function reverseByCenter(s) {
  return `${s.slice(Math.ceil(s.length / 2))}${
    s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : ''
  }${s.slice(0, s.length / 2)}`;
}

// Other Solutions
const reverseByCenter = (s) =>
  ((val) => s.replace(new RegExp(`(.{${val}})(.?)(.{${val}})`), `$3$2$1`))((s.length / 2) ^ 0);

function reverseByCenter(s) {
  var n = s.length / 2;
  return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n));
}
