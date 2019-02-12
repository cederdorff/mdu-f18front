const doc = document;

let selectedUserKey;

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
      <article class="gridItem" id="${user.key}">
        <h4 class="name">${user.name}</h4>
        <a class="email" href="mailto:${user.email}">${user.email}</a>
        <br>
        <button type="button" name="button" onclick="setSelectedUser('${user.key}')">update</button>
        <button type="button" name="button" onclick="deleteUser('${user.key}')">delete</button>
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

function setSelectedUser(key) {
  selectedUserKey = key;

  let name = doc.querySelector(`#${key} .name`).innerHTML;
  let email = doc.querySelector(`#${key} .email`).innerHTML;

  doc.querySelector("#userUpdateForm [name=name]").value = name;
  doc.querySelector("#userUpdateForm [name=email]").value = email;
}

function updateUser() {
  if(selectedUserKey){
    let newName = doc.querySelector("#userUpdateForm [name=name]").value;
    let newEmail = doc.querySelector("#userUpdateForm [name=email]").value;

    firebase.database().ref(`users/${selectedUserKey}`).update({
      name: newName,
      email: newEmail
    });
  }
}

function deleteUser(key) {
  console.log(key);
  firebase.database().ref(`users/${key}`).remove();
}
