document.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  // url: http://api.apixu.com/v1/current.json?key=19474b792e92493e809105720180110&q=Aarhus

  const url = 'http://api.apixu.com/v1/current.json';
  const key = '19474b792e92493e809105720180110';
  let query = 'Aarhus';

  fetch(`${url}?key=${key}&q=${query}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    });

});
