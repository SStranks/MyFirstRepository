// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// My Solution
function initializeNames(name) {
  const arr = name.split(' ');
  return arr.length > 2
    ? `${arr[0]} ${arr
        .slice(1, arr.length - 1)
        .map((el) => `${el[0]}.`)
        .join(' ')} ${arr[arr.length - 1]}`
    : name;
}

// Other Solutions
const initializeNames = (name) => name.replace(/ (\w)\w*(?= )/g, ' $1.');

function initializeNames(name) {
  return name
    .split(' ')
    .map((e, i, a) => (i == 0 || i == a.length - 1 ? e : e[0] + '.'))
    .join(' ');
}
