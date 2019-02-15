"use strict";

function firstTimeUser() {
  let firstTimeUser = localStorage.getItem("firstTimeUser");
  console.log("firstTimeUser", firstTimeUser);
  if (firstTimeUser === null) {
    $("#first-time-user-modal").modal("show");
    localStorage.setItem("firstTimeUser", false);
  }
}

firstTimeUser();

function saveLocalStorage() {
  let email = document.querySelector("#local-storage-email").value;
  console.log(email);
  // store value in local storage
  localStorage.setItem("email", email);
  // call loadFromStorage to update displayed values
  loadFromStorage();
}

function saveSessionStorage() {
  let email = document.querySelector("#session-storage-email").value;
  console.log(email);

  // store value in session storage
  sessionStorage.setItem("email", email);
  // call loadFromStorage to update displayed values
  loadFromStorage();
}

function loadFromStorage() {
  // get data from local storage
  let localStorageEmail = localStorage.getItem("email");
  console.log("localStorageEmail", localStorageEmail);
  // get data from session storage
  let sessionSavedEmail = sessionStorage.getItem("email");
  console.log("sessionSavedEmail", sessionSavedEmail);

  // set input field with email values from storage
  document.querySelector("#local-storage-email").value = localStorageEmail;
  document.querySelector("#session-storage-email").value = sessionSavedEmail;

  // set span tags with email values from storage
  document.querySelector("#local-saved-email").innerHTML = localStorageEmail || "no data";
  document.querySelector("#session-saved-email").innerHTML = sessionSavedEmail || "no data";
}

loadFromStorage();

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}