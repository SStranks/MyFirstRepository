// Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null/None and can hold any type of value.

// My Solution
function lastIndexOf(head, value) {
  let idx = 0;
  let lastIdx = -1;
  while (head !== null) {
    if (head.data === value) lastIdx = idx;
    head = head.next;
    idx++;
  }
  return lastIdx;
}

// Other Solutions
function lastIndexOf(head, value) {
  let found = -1;
  for (let i = 0, node = head; node; i++, node = node.next) {
    if (node.data === value) {
      found = i;
    }
  }
  return found;
}

// Not sure about this one!
function lastIndexOf(head, value) {
  const list = (node) => (node ? [node.data, ...list(node.next)] : []);
  return list(head).lastIndexOf(value);
}
