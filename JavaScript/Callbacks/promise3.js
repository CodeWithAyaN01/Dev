function asyncFunction1 () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Got -> Data1");
            resolve("Success");
        },5000);
    });
}

function asyncFunction2 () {  // async function for Data 2
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Got -> Data2");
            resolve("Success");
        },6000);
    });
}

console.log("Fetching Data1");

let p1 = asyncFunction1();

p1.then((res) => { // Executes when promise-1 is resolved
    //console.log(res); // res = resolve(success)

    console.log("Fetching Data2"); // this is called chaining of the .then block
    let p2 = asyncFunction2();
    p2.then((res) => {
        //console.log(res); // res = resolve(success)
    });

});


