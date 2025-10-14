console.log("js Working...");

const URL = "https://official-joke-api.appspot.com/random_joke";
let jokeBtn = document.querySelector("#Fetch-jokes");
let setup = document.querySelector(".setup");
let punchline = document.querySelector(".punchline");

const getJokes = async () => {
    
    let response = await fetch(URL);

    let useData = await response.json();

    console.log(useData.setup);
    console.log(useData.punchline);

    // Changing HTML code
    setup.innerText = useData.setup;
    punchline.innerText = useData.punchline;
}

jokeBtn.addEventListener("click" , getJokes);