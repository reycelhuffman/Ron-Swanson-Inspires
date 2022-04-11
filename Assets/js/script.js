let apiKey = "CnqqSdG2uxdCENbjxSli1crCs7uCHZTyWNXmPpXy"

let container = document.querySelector("#container")

fetch('https://api.nasa.gov/planetary?api_key=CnqqSdG2uxdCENbjxSli1crCs7uCHZTyWNXmPpXy', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // container.innerHTML = data.
  });
