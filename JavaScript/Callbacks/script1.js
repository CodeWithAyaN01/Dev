function hello() {
    console.log("Hello bro at a timer");
}


// setTimeout(hello,4000) // function hello() @ 4 seconds
 
// or we can do it in a arrow function

setTimeout(()=>{

    console.log("Arrow Function is here")
},3000)

hello(); //  this executes at first and then the timer one
hello();