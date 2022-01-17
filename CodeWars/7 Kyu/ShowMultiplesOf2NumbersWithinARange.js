// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

// Python, Javascript, Java, Ruby versions: return results in a list/array

// NOTICE:

// Do NOT worry about checking zeros or negative values.
// To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation


// My Solution
function multiples(s1,s2,s3){
  const max = Math.max(s1, s2);
  const min = Math.min(s1, s2);
  let newMax = max;
  while (newMax % min !== 0){
    newMax += max
  }
  let length;
  s3 % newMax === 0 ? length = s3 / newMax - 1 : length = Math.floor(s3 / newMax)
  return Array.from({length: length}, (_, i) => newMax * (i + 1))
}

// Other Solutions
function multiples(s1,s2,s3){
  const arr = []
  for (let i = s1; i < s3; i++){
    if( i % s1 === 0 && i % s2 === 0 ){
      arr.push(i)
    }
  }
  return arr
}

const multiples = (s1, s2, s3) =>
  [...Array(s3 - s1)].map((_, idx) => idx + s1).filter(val => !(val % s1 || val % s2));