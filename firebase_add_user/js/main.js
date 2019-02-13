"use strict";
const doc = document;
const config = {
  apiKey: "AIzaSyAZS2e34mzXk0owl6G6JmavaupSY_h3dEI",
  authDomain: "mdu-f18front.firebaseapp.com",
  databaseURL: "https://mdu-f18front.firebaseio.com",
  projectId: "mdu-f18front",
  storageBucket: "mdu-f18front.appspot.com",
  messagingSenderId: "343131301914"
};

firebase.initializeApp(config);
const database = firebase.database();

let title = document.querySelector("#title");
let dbRef = database.ref().child("title");
dbRef.on('value', function(snap) {
  title.innerHTML = snap.val();
});

let subTitle = document.querySelector("#subTitle");
let dbRef2 = database.ref().child("subTitle");
dbRef2.on('value', function(snap) {
  subTitle.innerHTML = snap.val()
});

firebase.database().ref('users').on('value', function(snapshots) {
  let htmlTemplate = "";
  snapshots.forEach(function(userSnapshot) {
    let key = userSnapshot.key; // saves the key value in the variable key
    let user = userSnapshot.val(); // saves the data in the variable user
    user.key = key; // addes the key to my user object
    console.log(user);
    htmlTemplate += `
      <article class="grid-item">
        <h4>${user.name}</h4>
        <a href="mailto:${user.email}">${user.email}</a>
      </article>
      `;
  });
  doc.querySelector("#gridPersons").innerHTML = htmlTemplate;
});

function addUser() {
  let name = doc.querySelector("#userForm [name=name]").value;
  let email = doc.querySelector("#userForm [name=email]").value;

  firebase.database().ref('users').push({
    name: name,
    email: email
  });

  doc.querySelector("#userForm [name=name]").value = "";
  doc.querySelector("#userForm [name=email]").value = "";
}