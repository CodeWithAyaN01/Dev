console.log("Working...")
function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Got Data",dataId);
            resolve("Success");
        },4000);
    });
}

// A better way to do promise chaining 

getData(1)
    .then((res) => {
        return getData(2)
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log("Completed");
    });