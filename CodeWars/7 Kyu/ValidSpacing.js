// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true
// Note - there will be no punctuation or digits in the input string, only letters.


// My Solution
function validSpacing(s){
  if (/[\s]{2,}/.test(s) || /^(\s)/.test(s) || /(\s)$/.test(s)) return false
  return true
}

// Other Solution
function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}

const validSpacing = s => ! /^ |  | $/.test(s) ;