const foodItems = ["Pizza", "Burger", "Pasta", "Samosa", "Chowmein", "Biryani", "Salad", "Idli"];

foodItems.push("Latring");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);

foodItems.unshift("Latring2"); // adds element at the start of the array
foodItems.push("LatringLast");
console.log(foodItems);

// unlike pop the shift removes the first element from the array;

foodItems.shift();
console.log(foodItems); //  removed latring2

