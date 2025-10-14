console.log("Js Working.....");

// async function is used to change any function to return a promise 
// await is used inside a 

function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Getting data: ",dataId);
            resolve(200); //200 is a success code
        },2000);
    });
}

// create a async function to get output like callback hells and promices

async function getAlldata() {
    for(let i=1;i<=5;i++)
    {
        await getData(i);
    }
    // await getData(1);
    // await getData(2);
}

// getAlldata();

// Advance Java Script ->  if we do not want to call a funcion like async function we use IFEE function 
// (() => {})(); or (function () {})();

(async () => { // do not need to be called
    for(let i=1;i<=5;i++)
    {
        await getData(i);
    }
})();