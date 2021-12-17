// In this kata, you will take the keys and values of an object and swap them around.

// You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

// For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

// you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

// Notes:
// The dictionary given will only contain strings
// The dictionary given will not be empty
// You do not have to sort the items in the lists


// My Solution
function switchDict(dic) {
  let newDic = {};
  Object.entries(dic).forEach(([key, value]) => newDic[value] ? newDic[value].push(key) : newDic[value] = [key])
  return newDic
}

// Other Solutions
const switchDict = dic =>
  Object.entries(dic).reduce((pre, [key, val]) => (pre[val] = [...pre[val] || [], key], pre), {});