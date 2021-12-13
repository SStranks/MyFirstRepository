// A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

// That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

// The word will always be a string consisting of only ascii letters from a to z.



// To avoid problems with image availability, here's the lists of letters for each hand:

// Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Right: y, u, i, o, p, h, j, k, l, n, m
// Examples
// "yams"  -->  true
// "test"  -->  false


// My Solution
const comfortableWord = word => {
  const left = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"];
  const right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
  let initial = left.includes(word[0]) ? "left" : "right";
  
  for (let i = 1; i < word.length; i++) {
    if (initial === "left") {
      if (!right.includes(word[i])) return false;
      initial = "right";
    } else if (initial === "right"){
      if (!left.includes(word[i])) return false;
      initial = "left";
    }
  }
  return true;
};

// Other Solutions
const comfortable_word = word => {
  const LEFT = '[qwertasdfgzxcvb]';
  const RIGHT = '[yuiophjklnm]';
  
  var alternating = `^${LEFT}?(${RIGHT}${LEFT})*${RIGHT}?$`;
  
  return RegExp(alternating).test(word);
};