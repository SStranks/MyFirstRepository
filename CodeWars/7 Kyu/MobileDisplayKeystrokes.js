// Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
// Well, here you have to calculate how much keystrokes you have to do for a specific word.

// This is the layout:

// Return the amount of keystrokes of input str (! only letters, digits and special characters in lowercase included in layout without whitespaces !)

// Examples
// mobileKeyboard("*#") => 2 (1+1)
// mobileKeyboard("123") => 3 (1+1+1)
// mobileKeyboard("abc") => 9 (2+3+4)
// mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)

// My Solution
function mobileKeyboard(str, count = 0) {
  const dict = {
    a: 2,
    b: 3,
    c: 4,
    d: 2,
    e: 3,
    f: 4,
    g: 2,
    h: 3,
    i: 4,
    j: 2,
    k: 3,
    l: 4,
    m: 2,
    n: 3,
    o: 4,
    p: 2,
    q: 3,
    r: 4,
    s: 5,
    t: 2,
    u: 3,
    v: 4,
    w: 2,
    x: 3,
    y: 4,
    z: 5,
  };
  for (const c of str) {
    /\d|[*#]/.test(c) ? count++ : (count += dict[c]);
  }
  return count;
}
