// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// My Solution
function removeUrlAnchor(url){
  return url.replace(/(#).+/, "")
}

// Other Solutions
function removeUrlAnchor(url){
  return url.split('#')[0];
}