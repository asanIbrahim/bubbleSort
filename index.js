// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [7, 1, 5, 3, 6, 4];

let prices2 = [7, 6, 4, 3, 1];

function maxProfitOfStock(price) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < price.length) {
    if (price[left] < price[right]) {
      let profit = price[right] - price[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

console.log(maxProfitOfStock(prices));
console.log(maxProfitOfStock(prices2));

//output 5
//output 0
