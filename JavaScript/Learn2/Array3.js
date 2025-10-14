//  apply discount

let prices = [100,200,300,400,500,600];
let price1 = prices;
let discount = 10;
for (let i= 0;i<prices.length;i++)
{
    prices[i] = prices[i] - (prices[i]*(10/100))
}
console.log(prices);


