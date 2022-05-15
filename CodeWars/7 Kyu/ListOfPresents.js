// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// My Solution
function howManyGifts(maxBudget, gifts) {
  const giftList = gifts.slice().sort((a, b) => b - a);

  let total = 0;
  for (let i = giftList.length - 1; i >= 0; i--) {
    if (giftList[i] > maxBudget) break;
    maxBudget -= giftList[i];
    total++;
  }
  return total;
}

// Other Solutions
function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b);
  return gifts.filter((item) => (maxBudget -= item) >= 0).length;
}
