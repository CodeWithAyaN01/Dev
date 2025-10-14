// for each loop
let arr = [2,4,3,6,5,4];
arr.forEach(item => {
    console.log(item)
});
// .map function
console.log("*********************************************");
let arr1 = [3,6,5,7,3,2];
arr1.map(i => {

    console.log(i);
})
let makesNewAraay = arr1.map(i => {
    return i; //  the number returned is gone into the new Array and then it is printed
})

console.log(makesNewAraay);

console.log("*********************************************");
// filter method


let numberList = [12, 45, 7, 89, 34, 21, 56, 78, 9, 100];

let EvenArray = arr.filter(item => {
    return item %2 === 0; // its just like if condition if its correct it will go inside the new array and gets saved;
})
console.log(EvenArray);

// ex2

let places = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Pune", "Jaipur", "Ahmedabad", "Lucknow"];

let cPlace = places.filter(i => {
    return (i === "Delhi");
})
console.log(cPlace);
