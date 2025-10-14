// creating button through JS file.


// this is a button created by JS and can be added in the HTML file.
let btn = document.createElement("button");

// access the div
let div1 = document.querySelector("#div1");
btn.innerText = "Click me!"
div1.append(btn);
// we use append method and we use prepend to get in if we want to get it at he start of the div.
// {
//     node.append( el ) lladds at the end of node (inside)
//
//     . node.prepend( el ) lladds at the start of node (inside)
//
//     . node.before( el ) lladds before the node (outside)
//
//     . node.after( el ) lladds after the node (outside)
// }
