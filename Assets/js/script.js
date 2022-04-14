let currentImg = document.querySelector("#currentImg");
let currentQuote = document.querySelector("#currentQuote");
let pastQuotes = document.querySelector("#pastQuotes")


let storedMeme = {};
let storedMemeArray = [];


if (localStorage.storedMemes !== undefined) {
  storedMemeArray = JSON.parse(localStorage.storedMemes)
  console.log(storedMemeArray)
}

// quote generator fetch
fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then(response => response.json())
  .then(data => {
    currentQuote.innerHTML = data[0];
    storedMeme.quote = data[0];
    return fetch("https://api.thecatapi.com/v1/images/search");
  })
  .then(response => response.json())
  .then(data => {
    currentImg.setAttribute("src", data[0].url);
    storedMeme.img = data[0].url;
    storedMemeArray.push(storedMeme);
    localStorage.setItem("storedMemes", JSON.stringify(storedMemeArray));
    pastMemes();
  });


function pastMemes() {
  // let oldMemeBtn = document.createElement("button");
  // oldMemesBtn.classList.add()
  for (let i = 0; i < storedMemeArray.length; i++) {
    let oldMemeBtn = document.createElement("button");
    // oldMemesBtn.classList.add()
    oldMemeBtn.innerText = storedMemeArray[i].quote;
    pastQuotes.append(oldMemeBtn);
  }
}

// secondBtn.hidden = false;
// btn.hidden = true;