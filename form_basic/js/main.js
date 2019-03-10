"use strict";
// array of users
let users = [];
// declaring input field variables
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

console.log(document);

function createUser() {
  if (validateForm()) {
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
}

function validateForm() {
  let valid = true;

  if (!nameInput.value) {
    valid = false;
    nameInput.style.background = "red";
  }

  if (!emailInput.value) {
    valid = false;
    emailInput.style.background = "red";
  }

  return valid;
}