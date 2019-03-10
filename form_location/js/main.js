"use strict";
let users = [];

console.log(document);
console.log(window);
console.log(navigator);

// navigator.geolocation.getCurrentPosition(position => {
//   console.log('latitude:', position.coords.latitude);
//   console.log('longitude:', position.coords.longitude);
// });

fetch('http://ip-api.com/json').then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
});

// fetch('http://ip-api.com/json').then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
// });

document.querySelector('#createUserBtn').addEventListener("click", function() {
  createUser();
});

function createUser() {
  // declaring input field variables
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');

  let newUser = {
    name: nameInput.value,
    email: emailInput.value
  };

  users.push(newUser);
  console.log(users);

  // reset input fields
  nameInput.value = "";
  emailInput.value = "";
}