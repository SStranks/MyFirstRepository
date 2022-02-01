// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"


// My Solution
function absentVowel(x){
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < 5; i++){
    if (!(RegExp(`${vowels[i]}`, "i").test(x))) return i;
  }
}

// Other Solutions
function absentVowel(x) {
  var vowels = 'aeiou';
  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}

const absentVowel = string =>
  [...'aeiou'].findIndex(letter => !string.includes(letter))