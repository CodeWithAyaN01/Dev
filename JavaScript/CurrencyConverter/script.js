// Corrected and Improved script.js

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency options
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        // FIX 1: Changed 'option' to 'newOption'
        newOption.innerText = `${countryList[currCode].country} (${currCode})`;
        newOption.value = currCode; // Use uppercase to match countryList keys

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update the flag image
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode].code;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Function to update the exchange rate
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // FIX 2: Made the API URL dynamic
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    
    msg.innerText = "Getting exchange rate...";
    let response = await fetch(URL);
    let data = await response.json();
    
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amtVal * rate).toFixed(2);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

// Event listener for the button
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// FIX 3: Set initial flags and rate on page load
window.addEventListener("load", () => {
    updateFlag(fromCurr);
    updateFlag(toCurr);
    updateExchangeRate();
});
