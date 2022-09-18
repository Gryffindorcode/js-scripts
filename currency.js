document.addEventListener('DOMContentLoaded', function(){

  fetch('https://api.exchangeratesapi.io/latest?base=USD')
  .then(response => response.json())
  .then(data => {
       const rate = data.rates.EUR;
       document.querySelector('body').innerHTML = rate;
  })
})

// var requestURL = "https://api.exchangerate.host/latest";
// var request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   var response = request.response;
//   console.log(response);
// };