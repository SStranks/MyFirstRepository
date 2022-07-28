// You are given an array of documents (strings), a term (string), and two booleans finetuning your indexing operation. Return an array containing the document IDs (1-based indices of documents in the array), where the term occurs, sorted in ascending order.

// Booleans:

// CaseSensitive: test matches test, but not Test
// Not CaseSensitive: test matches both test and Test

// Exact Match: test matches test and .test!, but not attest or test42
// Not Exact Match: test matches both test and attest

// Example:
// buildInvertedIndex(["Sign", "sign", "Signature", "Sign-ature"], "Sign", true, true)

// return [1,4]

// My Solution
function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
  const regex = new RegExp(
    `${exactMatch ? '\\b' : ''}${term}${exactMatch ? '\\b' : ''}`,
    `${caseSensitive ? '' : 'i'}`
  );
  return collection.reduce((acc, cur, i) => {
    return regex.test(cur) ? acc.push(i + 1) : acc, acc;
  }, []);
}

// Other Solutions
const buildInvertedIndex = (collection, term, caseSensitive, exactMatch) =>
  ((reg) => collection.map((val, idx) => (reg.test(val) ? idx + 1 : null)).filter(Boolean))(
    new RegExp(
      `${exactMatch ? `\\b` : ``}${term}${exactMatch ? `\\b` : ``}`,
      `${caseSensitive ? `` : `i`}`
    )
  );
