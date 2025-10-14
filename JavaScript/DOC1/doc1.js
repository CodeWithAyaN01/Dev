console.log("JS file loaded successfully");
// this is used to access the html contents with the help of JavaScript
let heading = document.getElementById("a1");

// this innerText function is used to give all the text all under a <tag>;
// console.dir is used to print the object in JS
console.dir(heading);


// for noow we will use "document.querySelector(any thing)"
// and for Array of elements we can do as :  document.quesrySelectorAll(AnyThing);
let element = document.querySelectorAll("p");
console.dir(element);

let element01 = document.querySelectorAll("h2");
console.log(element01);
console.dir(element01);