// Description
// John's each hand has five fingers(If you are surprised, please tell me how many fingers you have ;-) Even more amazing is that when he was a child, he already had 5 fingers(one hand). At that time, he often to count the number by using his fingers.

// He is counting this way:

// a - Thumb
// b - Index finger
// c - Middle finger
// d - Ring finger
// e - Little finger

//  a  b  c  d  e
// --------------
//  1  2  3  4  5
//  9  8  7  6
//    10 11 12 13
// 17 16 15 14
//    18 19 20 21
// .. .. .. ..
//    .. .. .. ..
// So the question is: when John counting to number n, which is the corresponding finger?

// Task
// Complete the function which accepts an integer, and returns the name of the finger on which the counting will end: "Thumb", "Index finger", "Middle finger", "Ring finger", or "Little finger".

// Examples
// 10     =>  "Index finger"
// 20     =>  "Ring finger"
// 30     =>  "Ring finger"
// 50     =>  "Index finger"
// 100    =>  "Ring finger"
// 1000   =>  "Index finger"
// 10000  =>  "Index finger"

// My Solution
function whichFinger(n) {
  const dict = {
    a: 'Thumb',
    b: 'Index finger',
    c: 'Middle finger',
    d: 'Ring finger',
    e: 'Little finger',
  };
  return dict['abcdedcba'[(n % 8 || 2) - 1]];
}
