console.log("js Working....");

// API -> Application Programing Interface
// Fetch API provides an interface for fetching Resources usesrequest and responce objects

// syntax 
// let promise = fetch(URL, [options]); 
// the fetch function uses the URL and returns a promise object

// const URL = "https://dogapi.dog/api/v2/breeds" // endpoints
const URL = "https://official-joke-api.appspot.com/random_joke" // endpoints

let promise = fetch(URL); // using GET request 

let jokeBtn = document.querySelector("#Fetch-jokes");
let setup = document.querySelector(".setup");
let punchline = document.querySelector(".punchline");

const getFacts = async () => {
    console.log("Getting Data from the URL");
    let response = await fetch(URL); // need to be refreshed everytime 
            // let response = await fetch(URL + "?t=" + new Date().getTime());
            // let response = await fetch(URL, { cache: "no-store" });
    console.log(response); // no a useable format 
    
    // to get a useable format we do

    let data = await response.json();
    console.log(data); // this is useable data

    // to get more into the data we can watch for the feilds for data;
    // for jokes API we have .setup(); .punchline() to give all the info

    console.log(data.setup); // can be seen in console only
    console.log(data.punchline);

    setup.innerText = data.setup;
    punchline.innerText = data.punchline;
}

jokeBtn.addEventListener("click", getFacts);

