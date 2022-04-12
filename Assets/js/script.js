let container = document.querySelector("#container");

// quote generator fetch

fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then((response) => response.json())
  .then((data) => (container.innerHTML = data));
