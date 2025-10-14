console.log("JS loaded");

function buttonAnimation() {
    const btn = document.querySelector("#Hover_btn");
    btn.style.backgroudColor = "Green"
    btn.style.width = "200px";
    btn.style.height = "70px";
    btn.style.fontSize = "24px";
    console.log("The button size was chnaged");
}

function buttonReset() {
    const btn = document.querySelector("#Hover_btn");
    btn.style.width = "120px";
    btn.style.height = "40px";
    btn.style.fontSize = "16px";
}