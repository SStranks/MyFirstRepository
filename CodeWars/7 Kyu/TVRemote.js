// Background
// My TV remote control has arrow buttons and an OK button.

// I can use these to move a "cursor" on a logical screen keyboard to type "words"...

// The screen "keyboard" layout looks like this

// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// Kata task
// How many button presses on my remote are required to type a given word?

// Notes
// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
// Example
// word = codewars

// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36


// My Solution
const tvRemote = function(word) {
  const keypad = {
    0: ["a", "b", "c", "d", "e", "1", "2", "3"],
    1: ["f", "g", "h", "i", "j", "4", "5", "6"],
    2: ["k", "l", "m", "n", "o", "7", "8", "9"],
    3: ["p", "q", "r", "s", "t", ".", "@", "0"],
    4: ["u", "v", "w", "x", "y", "z", "_", "/"]
  };
  let cur = [0, 0];
  let pos = [];
  
  return word.split("").map(function(el) {
    for (const [row, value] of Object.entries(keypad)) {
      if (value.includes(el)) {
        pos = [Number(row), value.indexOf(el)];
        break;
      }
    }
    let result = Math.abs(cur[0] - pos[0]) + Math.abs(cur[1] - pos[1]) + 1;
    cur = pos;
    return result
  }).reduce((cur, acc) => cur + acc, 0);
}

