// Complete the function that returns a christmas tree of the given height. The height is passed through to the function and the function should return a list containing each line of the tree.

// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
// XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
// Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.

// Examples
// The final idea is for the tree to look like this if you decide to print each element of the list:

// n = 5 will result in:

// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1      
// ____#____        2 - Trunk/Stem of Tree
// n = 3 will result in:

// __#__                  1
// _###_                  2
// #####          ----->  3 - Height of Tree
// __#__           1
// __#__           2 - Trunk/Stem of Tree


// My Solution
function xMasTree(n){
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(`${"_".repeat(((n * 2 - 1) - (i * 2 - 1)) / 2)}${"#".repeat(i * 2 - 1)}${"_".repeat(((n * 2 - 1) - (i * 2 - 1)) / 2)}`)
  }
  arr.push(`${"_".repeat((n * 2 - 2) / 2)}#${"_".repeat((n * 2 - 2) / 2)}`);
  arr.push(`${"_".repeat((n * 2 - 2) / 2)}#${"_".repeat((n * 2 - 2) / 2)}`);
  return arr
}

// Other Solutions
function xMasTree(n){
  const arr = [];
  let str = '';
   for( let i = n-1; i >= 0; i-- ){
    str = '_'.repeat(i) + '#'.repeat(n-1-i) + '#' + '#'.repeat(n-1-i) + '_'.repeat(i);
    arr.push(str);
    str = ''
   }
    arr.push(arr[0], arr[0])
  return arr
}