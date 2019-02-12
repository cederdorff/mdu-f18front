const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBRd9Z3o8LPOKdB0wOyAASTx4Kvsh5j8So",
    authDomain: "eaaa-front-fall-18.firebaseapp.com",
    databaseURL: "https://eaaa-front-fall-18.firebaseio.com",
    projectId: "eaaa-front-fall-18",
    storageBucket: "eaaa-front-fall-18.appspot.com",
    messagingSenderId: "174496885587"
  };
  firebase.initializeApp(config);
  let database = firebase.database();

  let title = doc.querySelector("#title");
  let dbRef = database.ref().child("title");
  dbRef.on('value', snap => title.innerHTML = snap.val());

  let subTitle = doc.querySelector("#subTitle");
  let dbRef2 = database.ref().child("subTitle");
  dbRef2.on('value', snap => subTitle.innerHTML = snap.val());

  firebase.database().ref('users').on('value', snapshot => {
    let users = [];
    snapshot.forEach(userSnapshot => {
      var userKey = userSnapshot.key;
      var userData = userSnapshot.val();
      userData.key = userKey;
      users.push(userData)
    });
    console.log(users);
  });
});