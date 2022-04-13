let currentImg = document.querySelector("#currentImg");
let currentQuote = document.querySelector("#currentQuote");
// quote generator fetch

fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then((response) => response.json())
  .then((data) => (currentQuote.innerHTML = data));
// let container = document.querySelector("#container")

fetch(`https://api.thecatapi.com/v1/images/search`, {})
  .then(function (response) {
    // console.log()
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    currentImg.setAttribute("src", data[0].url);
    // container.innerHTML = data.
  });
  