// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]


// My Solution
function replaceAll(seq, find, replace){
  if (typeof seq === "string"){
    const newFind = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reg = new RegExp(`${newFind}`, "g");
    return seq.replace(reg, replace);
  }
  return seq.map((el) => el === find ? replace : el)
}

// Other Solutions
function replaceAll(seq, find, replace) {
  return Array.isArray(seq) ? seq.map(x => x == find ? replace : x) : seq.split(find).join(replace)
}

