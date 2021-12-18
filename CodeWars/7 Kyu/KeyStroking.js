// Ever wonder how many keystrokes any given string takes to type? No? Most normal people don't...but we're not normal! :D

// Program a num_key_strokes (string) function that takes a string and returns a count of the number of keystrokes that it took to type that string.

// For example, Hello, world! takes 15 key strokes to type.

// This kata is expecting an EN-US keyboard mapping, specifically using the QWERTY layout.

// Rules
// This kata assumes that the string was only typed using the main keyboard and NOT a number-pad.
// We also assume that the user does not hold down the Shift key and thus has to press it once every time it's needed. In addition, the CAPS LOCK key is not used.
// Every character in the input string requires either 1 or 2 keystrokes. Your goal is to figure out which ones belong in which group and count the total number of keystrokes.


// My Solutions
function numKeyStrokes(text) {
  let num1 = text.match(/[a-z0-9\[\]\-\=\;\'\,\.\/\s\\`]/g) || 0;
  let num2 = text.match(/[A-Z\!"£\$%\^&\*\(\)_\+\|\{\}\?\<\>~@#:¬]/g) || 0;
  return (num1.length || 0) + (num2.length || 0) * 2;
}

// Other Solutions
function numKeyStrokes(text) {
  let shift = "~!@#$%^&*()_+{}|:\"<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return text.length + [...text].filter(c=>shift.includes(c)).length;
}