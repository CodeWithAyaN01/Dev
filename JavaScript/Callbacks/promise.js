let promise = new Promise((resolve , reject) => {
    console.log("Hello how are you!");
    resolve("sucess");
    // reject("Error");
})

// when we fetch a data using a API calls
// it returns a promise with the API calls it code goes like 

function getData(dataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("The data is fetched");
            resolve("sucess");
            // reject("An error occured");
        },2000);
    });
}

let pro = getData(123);
console.log(pro);