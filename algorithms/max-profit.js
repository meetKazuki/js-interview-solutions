/**
 * @description Given an array of stock prices, find the minimum buy price
 * and the maximum sell price that produce the greatest profit prices
 *
 * @param {number} prices
 */
function _maxProfit(prices) {
  let minBuyPrice = (maxSellPrice = prices[0]);
  let maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    const sellPrice = prices[index];
    minBuyPrice = Math.min(minBuyPrice, sellPrice);

    const profit = sellPrice - minBuyPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
      maxSellPrice = sellPrice;
    }
  }
  return [minBuyPrice, maxSellPrice];
}

const maxProfit = prices => {
  let minBuyPrice = prices[0], maxSellPrice = prices[1];
  let maxProfit = maxSellPrice - minBuyPrice;
  let changeBuyPrice = false;

  prices.forEach((price, index) => {
    if (changeBuyPrice) minBuyPrice = price;
    const sellPrice = prices[index + 1];
    if (minBuyPrice > sellPrice) changeBuyPrice = true;
    else {
      changeBuyPrice = false;
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfit) (maxProfit = profit), (maxSellPrice = sellPrice);
    }
  });

  return [minBuyPrice, maxSellPrice];
};

mocha.setup("bdd");

const { assert } = chai;

describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(maxProfit([1, 3, 2, 5, 4]), [1, 5]);
    assert.deepEqual(_maxProfit([1, 2, 3, 4, 5]), [1, 5]);
    assert.deepEqual(_maxProfit([1, 3, 2, 5, 4]), [1, 5]);
  });
});

mocha.run();
