let currentImg = document.querySelector("#currentImg");
let currentQuote = document.querySelector("#currentQuote");
let pastQuotes = document.querySelector("#pastQuotes")
// let secondBtn = document.querySelector("#secondBtn");
// let pastQuote1 = document.querySelector("#quote1");
// let pastQuote2 = document.querySelector("#quote2");
// let pastQuote3 = document.querySelector("#quote3");
// let pastQuote4 = document.querySelector("#quote4");
// let pastQuote5 = document.querySelector("#quote5");
// let pastQuote6 = document.querySelector("#quote6");
// let pastQuote7 = document.querySelector("#quote7");
// let pastQuote8 = document.querySelector("#quote8");
// let pastQuote9 = document.querySelector("#quote9");
// let pastQuote10 = document.querySelector("#quote10");

let storedMeme = {};
let storedMemeArray = [];

// secondBtn.hidden = true;
// pastQuotes1.hidden = true;
// pastQuotes2.hidden = true;
// pastQuotes3.hidden = true;
// pastQuotes4.hidden = true;
// pastQuotes5.hidden = true;

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

  // pastQuote1.innerText = ;
  // pastQuote2.innerText = ;
  // pastQuote3.innerText = ;
  // pastQuote4.innerText = ;
  // pastQuote5.innerText = ;
  // pastQuote6.innerText = ;
  // pastQuote7.innerText = ;
  // pastQuote8.innerText = ;
  // pastQuote9.innerText = ;
  // pastQuote10.innerText = ;
  // oldMemeBtn.innerText = `${cityReqValue}`;

}


// secondBtn.hidden = false;
// btn.hidden = true;