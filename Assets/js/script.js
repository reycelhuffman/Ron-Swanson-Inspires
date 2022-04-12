// let container = document.querySelector("#container")

fetch(`https://api.thecatapi.com/v1/images/search`, {
})
  .then(function (response) {
    // console.log()
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    // container.innerHTML = data.
  });
