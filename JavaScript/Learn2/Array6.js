// taking out subarray from the main array usind slice(Start,ExclusiveEnd)
let fruits = ['🍎', '🍌', '🍊', '🍇', '🍓'];

let someFruits = fruits.slice(1, 3); // here we need to make a seperate Array

console.log(someFruits); // Output: ['🍌', '🍊']
console.log(fruits);     // Output: ['🍎', '🍌', '🍊', '🍇', '🍓'] (The original is safe! ✨)

// for splice
//The splice(). It changes the original array by removing, replacing, or adding elements

let food = ['🍕', '🍔', '🍟', '🌭', '🌮', '🌯'];
// Start at index 2 ('🍟') and remove 3 items
food.splice(2, 3); // removes the element including the 1st element.

console.log(food); // Output: ['🍕', '🍔', '🌯']


 // one more example
let fruits = ['🍎', '🍌', '🍊', '🍇', '🍓'];

// At index 2, remove 1 element, and add '🥝'
fruits.splice(2, 2, '🥝', '🌮');
