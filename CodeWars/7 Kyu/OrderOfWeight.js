// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.


// My Solution
function arrange(arr){
  return arr.sort(function(a, b){
    if (a.match(/(G|KG|T)/)[0] > b.match(/(G|KG|T)/)[0]) return 1
    if (b.match(/(G|KG|T)/)[0] > a.match(/(G|KG|T)/)[0]) return -1
    if (a.match(/(G|KG|T)/)[0] === b.match(/(G|KG|T)/)[0]){
      if (parseInt(a) > parseInt(b)) return 1
      if (parseInt(a) < parseInt(b)) return -1
    }
  })
}

// Other Solutions
const arrange = arr =>
  (val => arr.sort((a, b) => val(a) - val(b)))
  (val => parseInt(val) * {G: 1, KG: 1000, T: 1000000}[val.replace(/\d/g, ``)]);

  