// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

// My Solution
function swap(str) {
  return str.replace(/[a-zA-Z]/g, (el) =>
    el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
  );
}
