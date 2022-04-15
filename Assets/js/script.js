// global variables
let currentImg = document.querySelector(".randomCatImg");
let currentQuote = document.querySelector(".currentQuoteBox");
let memeButton = document.querySelector(".getMeme");
let nextButton = document.querySelector(".nextButton");
let pageFlexbox = document.querySelector(".page-flexbox");
let pastQuotes = document.querySelector(".quotes-container");

// event listeners
memeButton.addEventListener("click", getMeme);
nextButton.addEventListener("click", getMeme);

// iterates over past quotes and replaces current quote/img
pastQuotes.addEventListener("click", function (event) {
  let selectedQuote = event.target;
  for (let i = 0; i < storedMemeArray.length; i++) {
    if (parseInt(selectedQuote.dataset.index) === i) {
      currentQuote.innerText = selectedQuote.innerText;
      currentImg.setAttribute("src", storedMemeArray[i].img);
    }
  }
});

// hide next button from start
pageFlexbox.hidden = true;
// initializing stored memes for local storage
let storedMemeArray = [];
// pulls memes from local storage
if (localStorage.storedMemes !== undefined) {
  storedMemeArray = JSON.parse(localStorage.storedMemes);
}

// fetch api to get quotes and images - stores in local storage
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
      localStorage.setItem("storedMemes", JSON.stringify(storedMemeArray));
      pastMemes();
      // unhiding main content of page and hides initial start button
      memeButton.hidden = true;
      pageFlexbox.hidden = false;
    });
}

// creates buttons for past memes
function pastMemes() {
  pastQuotes.innerHTML = "";
  for (let i = 0; i < storedMemeArray.length; i++) {
    let oldMemeBtn = document.createElement("button");
    oldMemeBtn.innerText = storedMemeArray[i].quote;
    oldMemeBtn.setAttribute("data-index", i);
    oldMemeBtn.classList.add("col-3", "border", "rounded", "border-dark", "histBtnBack", "m-1")
    pastQuotes.append(oldMemeBtn);
  }
}
