console.log("Js loaded");

let btn1 = document.querySelector("#btn1");

// this is event handling in JS itself
// btn1.onclick = () => {
//     console.log("Button size was changed");
//     btn1.style.width = "40px";
//     btn1.style.height = "40px";
// }

btn1.addEventListener("click", () => {
    console.log("Button was clicked through Event Listener");
    window.location.href = "file:///D:/# C Drive/_Coding/Java_Script/RockPaparGame/main.html";

    
})