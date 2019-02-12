const doc = document;
const config = {
  apiKey: "AIzaSyBRd9Z3o8LPOKdB0wOyAASTx4Kvsh5j8So",
  authDomain: "eaaa-front-fall-18.firebaseapp.com",
  databaseURL: "https://eaaa-front-fall-18.firebaseio.com",
  projectId: "eaaa-front-fall-18",
  storageBucket: "eaaa-front-fall-18.appspot.com",
  messagingSenderId: "174496885587"
};

firebase.initializeApp(config);
const database = firebase.database();

let title = doc.querySelector("#title");
let dbRef = database.ref().child("title");
dbRef.on('value', snap => title.innerHTML = snap.val());

let subTitle = doc.querySelector("#subTitle");
let dbRef2 = database.ref().child("subTitle");
dbRef2.on('value', snap => subTitle.innerHTML = snap.val());

firebase.database().ref('users').on('value', snapshots => {
  let htmlTemplate = "";
  snapshots.forEach(snapshot => {
    let key = snapshot.key; // saves the key value in the variable key
    let user = snapshot.val(); // saves the data in the variable user
    user.key = key; // addes the key to my user object
    console.log(user);
    htmlTemplate += `
      <article class="gridItem">
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

// function updateUser() {
//   let key = ""; // get the key of the object you want to delete
//   let name = ""; // get the new name
//   let email = ""; // get the new email
//
//   firebase.database().ref(`users/${key}`).update({
//     name: name,
//     email: email
//   });
//
// }
//
// function deleteUser() {
//   let key = ""; // get the key of the object you want to delete
//
//   firebase.database().ref(`users/${key}`).remove();
//
// }