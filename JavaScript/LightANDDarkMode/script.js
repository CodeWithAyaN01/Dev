console.log("JS loaded");

let btn1 = document.querySelector("#btn1");
let body1 = document.querySelector("body");

btn1.addEventListener("click", () => {
    if(body1.style.backgroundColor === "black") {
        body1.style.backgroundColor = "white";
    }else{
        body1.style.backgroundColor = "black"
    }
})
