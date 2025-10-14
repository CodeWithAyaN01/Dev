const getPromise = () => {
    return new Promise ((resolve,reject) => {
        console.log("This is a Promise");

        // Completed State
        // resolve("Completed");

        // Rejected State with a Error
        // this gets printed when .catch(err) obj is printed
        reject("Network Error");  
    });
    // if not resolve or rejected then it is in Pending State 
}

let promiseObj = getPromise();

promiseObj.then(() => { // this is when promise is fullfiled means when resolve() is executed
    console.log("Promise Fulfilled");
});

promiseObj.catch((error) => { // this is when promise is REJECTED means when reject() is executed
    console.log("A error Occured",error); // also prints the reject() -> value
});