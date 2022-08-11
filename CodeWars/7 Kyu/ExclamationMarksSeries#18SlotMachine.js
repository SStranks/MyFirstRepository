// Description:
// You are playing a simple slot machine that only contains exclamation marks and question marks. Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus. Give you a string s, return the highest bonus.

// Bouns list:

// Five-of-a-Kind:   ---- 1000
// "!!!!!" or "?????"

// Four-of-a-Kind:    ---- 800
// The string contains a "!!!!" or "????"
// "!!!!?","?!!!!","????!","!????"

// Full House:         ----500
// such as "!!!??" or "???!!"...

// Three-of-a-Kind:    ---- 300
// The string contains a "!!!" or "???"
// such as "!!!?!","!???!"...

// Two pair:           ---- 200
// The string contains two "!!" or "??"
// such as "??!!?","!!?!!"

// A Pair:             ---- 100
// The string contains a "!!" or "??"
// such as "?!??!","!!?!?"

// Others              ---- 0
// such as "?!?!?","!?!?!"
// Examples
// slot("!!!!!") === 1000
// slot("!!!!?") === 800
// slot("!!!??") === 500
// slot("!!!?!") === 300
// slot("!!?!!") === 200
// slot("!!?!?") === 100
// slot("!?!?!") === 0

// My Solution
function slot(s) {
  const match = s.match(/(!|\?)\1+/g) || [''];

  switch (true) {
    case match[0].length === 5:
      return 1000;
    case match[0].length === 4:
      return 800;
    case match.length === 2 && match[0].length + match[1].length === 5:
      return 500;
    case match[0].length === 3:
      return 300;
    case match.length === 2:
      return 200;
    case match[0].length === 2:
      return 100;
    default:
      return 0;
  }
}
