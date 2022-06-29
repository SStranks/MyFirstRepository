// My Solution
function dative(word) {
  const dict = {
    e: 'nek',
    é: 'nek',
    i: 'nek',
    í: 'nek',
    ö: 'nek',
    ő: 'nek',
    ü: 'nek',
    ű: 'nek',
    a: 'nak',
    á: 'nak',
    o: 'nak',
    ó: 'nak',
    u: 'nak',
    ú: 'nak',
  };
  const matches = word.match(/[eéiíöőüűaáoóuú]/g);
  return `${word}${dict[matches[matches.length - 1]]}`;
}

// Other Solutions
const dative = (word) => `${word}n${/[eéiíöőüű][^eéiíöőüűaáoóuú]*$/.test(word) ? `e` : `a`}k`;
