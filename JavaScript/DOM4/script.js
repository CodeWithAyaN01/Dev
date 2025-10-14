console.log("JS loaded!");

let changeDiv = document.querySelector("#redBox");


// here we can use this .style command to change all style of any tag
console.log("the background color is changed by the java script");
changeDiv.style.backgroundColor = "yellow";
changeDiv.style.color = "black";
changeDiv.style.fontSize = "26px";


// creating a button to change the size of the div #red dox

function changeSize()
{
    console.log("The size is changed by the button");
    changeDiv.style.height = "200px";
    changeDiv.style.width = "200px";
}

let ele = document.querySelector(".box");
function chnagesize()
{
    ele.innerHTML = "<h1> hello lund</h1>";
}

