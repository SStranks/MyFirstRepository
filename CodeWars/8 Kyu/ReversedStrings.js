function solution(str){
  // TASK: Reverse the input string
  let revStr = [];
  [...str].forEach((el, i) => revStr.unshift(el));
  return revStr.join("");
}