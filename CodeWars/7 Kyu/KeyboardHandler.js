// Overview
// Have you ever wondered how a user interface handles key presses?

// So today you have the opportunity to create it.

// Task:
// The keyboard handler is a function which receives three parameters as input:

// Key - the entered character on the keyboard.

// isCaps (or is_caps) - boolean variable responsible for the enabled 'Caps Lock'. (by default false)

// isShift (or is_shift) - boolean variable which is responsible for whether 'Shift' is pressed. (by default false)

// Your task to write a function that returns the entered character.

// Requirements for obtaining the 'key' variable:
// Alphabetical characters must be a lowercase (e.x. 'a', not 'A')
// It must be a character (e.x '2', not 2 or not [1,2,3])
// It must be of unit length (e.x. 'a', not 'abc')
// If the value does not satisfy the condition, return 'KeyError'

// My Solution
function handler(key, isCaps = false, isShift = false) {
  if (key.length !== 1 || !/[a-z0-9`\-=\[\];'#,\.\/\\]/.test(key)) return 'KeyError';
  if (!isCaps && !isShift) return key;
  if (isCaps && !isShift) return /[a-z]/.test(key) ? key.toUpperCase() : key;

  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+{}|:"<>?';
  const lowC = "abcdefghijklmnopqrstuvwxyz`1234567890-=[]\\;',./";
  if (isCaps && isShift) return /[a-z]/.test(key) ? key : caps[lowC.indexOf(key)];

  return caps[lowC.indexOf(key)];
}
