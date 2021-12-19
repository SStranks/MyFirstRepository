// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// My solution
function reverseWords(str) {
  return str.replace(/\S+/g, function(el){
    return el.split("").reverse().join("")
  })
}

// Other Solutions
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}