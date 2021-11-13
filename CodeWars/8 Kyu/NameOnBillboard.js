// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).


// My Solution
function billboard(name, price = 30){
  let cost = 0;
  [...name].forEach(() => cost += price);
  return cost;
} 

// Other Solutions
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}