// My Solution
function vowelIndices(word){
  return word.split("").map(function(el, i){
    if (/[aeiouy]/i.test(el)) return el = i + 1
    return ""
  }).filter((el) => el !== "")
}

// Other Solutions
function vowelIndices(word, a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)), a)
}