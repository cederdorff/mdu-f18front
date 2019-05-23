"use strict";
// Below function Executes on click of login button.
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "admin" && password == "admin#123") {
    window.location = "success.html"; // Redirecting to other page.
    return false;
  } else if (username == "") {
    alert("Please enter a valid user name");
  } else if (password == "") {
    alert("Please enter a valid password");
  } else {
    alert("Please enter a valid user name and password");
  }
}