let getdiv = document.querySelector("#div1");
console.dir(getdiv.innerText);


let getlist = document.querySelector("#ordered-list");

// this is used for the HTML or the ode to chnage the code dynamic
// getlist.innerHTML = "<i>hello sir ji kaise ho</i>";
// calling many divs with queryselector

// in this we are calling all divs with class .manyDivs and sorting in AllDivs variable.
let AllDivs = document.querySelectorAll(".manyDivs");
let idx =0;
for(divs of AllDivs){
    divs.innerText = `${idx} Div`;
    idx++;
}

