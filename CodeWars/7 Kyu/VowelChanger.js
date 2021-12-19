// Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

// For Example (input1, vowel) => output:

// ("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i') => 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
// ('adira wants to go to the park', 'o') =>'odoro wonts to go to tho pork'
// There will never be an uppercase letter as an input.


// My solution
function vowelChange(str, vow) {
  return str.replace(/[aeiou]/g, vow)
}