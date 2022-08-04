// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// My Solution
function add(num1, num2) {
  const arr1 = Math.max(num1, num2).toString().split('');
  const arr2 = Math.min(num1, num2).toString().padStart(arr1.length, '0').split('');

  return Number(
    arr1
      .reduce((acc, cur, i) => {
        return acc.push(Number(cur) + (Number(arr2[i]) || 0)) && acc;
      }, [])
      .join('')
  );
}

// Other Solutions
function add(a, b) {
  let s = '';

  while (a + b) {
    s = (a % 10) + (b % 10) + s;
    a = (a / 10) | 0;
    b = (b / 10) | 0;
  }

  return +s;
}
