// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"


// My Solution
function remove(s){
  const exclams = s.match(/[!]/g);
  return `${s.replace(/[!]/g, "")}${exclams ? exclams.join("") : ""}`
}

// Other Solutions
function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}