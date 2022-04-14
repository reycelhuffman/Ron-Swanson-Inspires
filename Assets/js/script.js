// global variables
let currentImg = document.querySelector("#currentImg");
let currentQuote = document.querySelector("#currentQuote");
let memeButton = document.querySelector("#getMeme");
let nextButton = document.querySelector("#nextButton");
// event listeners
memeButton.addEventListener("click", getMeme);
nextButton.addEventListener("click", getMeme);
// hide next button from start
nextButton.hidden = true;

let pastQuotes = document.querySelector("#pastQuotes");

let storedMemeArray = [];

if (localStorage.storedMemes !== undefined) {
  storedMemeArray = JSON.parse(localStorage.storedMemes);
  console.log(storedMemeArray);
}

function getMeme() {
  let storedMeme = {};
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
    .then((data) => {
      currentQuote.innerHTML = data[0];
      storedMeme.quote = data[0];
      return fetch("https://api.thecatapi.com/v1/images/search");
    })
    .then((response) => response.json())
    .then((data) => {
      currentImg.setAttribute("src", data[0].url);
      storedMeme.img = data[0].url;
      storedMemeArray.push(storedMeme);
      console.log(storedMemeArray);
      localStorage.setItem("storedMemes", JSON.stringify(storedMemeArray));
      pastMemes();
    });
  memeButton.hidden = true;
  nextButton.hidden = false;
}

function pastMemes() {
  pastQuotes.innerHTML = "";
  for (let i = 0; i < storedMemeArray.length; i++) {
    let oldMemeBtn = document.createElement("button");
    oldMemeBtn.innerText = storedMemeArray[i].quote;
    pastQuotes.append(oldMemeBtn);
    // oldMemeBtn.addEventListener("click", displayOldMeme);
  }
}
// function displayOldMeme() {}
