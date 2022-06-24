// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

// My Solution
function getStrings(city) {
  const newCity = city.toLowerCase().replace(/\s/g, '');
  let newStr = [];
  for (let i = 0; i < newCity.length; i++) {
    const count = newCity.match(new RegExp(`${newCity[i]}`, 'g'));
    if (count.length === 1) {
      newStr.push(`${newCity[i]}:*`);
      continue;
    }
    if (newCity.indexOf(newCity[i]) === i) newStr.push(`${newCity[i]}:${'*'.repeat(count.length)}`);
  }
  return newStr.join(',');
}
