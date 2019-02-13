"use strict";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAZS2e34mzXk0owl6G6JmavaupSY_h3dEI",
  authDomain: "mdu-f18front.firebaseapp.com",
  databaseURL: "https://mdu-f18front.firebaseio.com",
  projectId: "mdu-f18front",
  storageBucket: "mdu-f18front.appspot.com",
  messagingSenderId: "343131301914"
};
firebase.initializeApp(config);
let database = firebase.database();

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

firebase.database().ref('users').on('value', function(snapshot) {
  let users = [];
  snapshot.forEach(function(userSnapshot) {
    var userKey = userSnapshot.key;
    var userData = userSnapshot.val();
    userData.key = userKey;
    users.push(userData)
  });
  console.log(users);
});