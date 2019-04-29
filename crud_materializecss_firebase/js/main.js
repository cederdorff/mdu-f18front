"use strict";

document.addEventListener('DOMContentLoaded', function() {
  init();
});

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

let selectedPostKey;
let selectedImgFile;
let posts = [];

function init() {
  // modal
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);

  readPosts();
}

// ------ CRUD operations ------ //

function createPost() {
  let titleInput = document.querySelector('#title');
  let contentInput = document.querySelector('#content');
  let imageInput = document.querySelector('#imagePreview');

  let newPost = {
    title: titleInput.value,
    content: contentInput.value,
    image: imageInput.src
  };

  firebase.database().ref('posts').push(newPost);
}


function readPosts() {
  firebase.database().ref('posts').on('value', function(snapshots) {
    let htmlTemplate = "";
    snapshots.forEach(function(snapshot) {
      let key = snapshot.key; // saves the key value in the variable key
      let post = snapshot.val(); // saves the data in the variable user
      post.key = key; // addes the key to my user object
      posts.push(post);
      htmlTemplate += `
    <div class="col s12 m6">
      <article class="card">
        <div class="card-image">
          <img src="${post.image}">
          <span class="card-title">${post.title}</span>
          <a onclick="setSelectedPost('${post.key}')" class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#actionModal"><i class="material-icons">more_horiz</i></a>
        </div>
        <div class="card-content">
          <p>${post.content}</p>
        </div>
      </article>
    </div>
    `;
    });
    document.querySelector('#postFeed').innerHTML = htmlTemplate;
  });
}

function setSelectedPost(key) {
  console.log(key);
  selectedPostKey = key;

  let titleInput = document.querySelector('#titleUpdate');
  let contentInput = document.querySelector('#contentUpdate');
  let imageInput = document.querySelector('#imagePreviewUpdate');
  // set input fiels with selected post data
  for (let post of posts) {
    if (post.key === selectedPostKey) {
      titleInput.value = post.title;
      contentInput.value = post.content;
      imageInput.src = post.image;
    }
  }
}

function updatePost() {
  let titleInput = document.querySelector('#titleUpdate');
  let contentInput = document.querySelector('#contentUpdate');
  let imageInput = document.querySelector('#imagePreviewUpdate');
  firebase.database().ref(`posts/${selectedPostKey}`).update({
    title: titleInput.value,
    content: contentInput.value,
    image: imageInput.src
  });
}

function deletePost() {
  console.log(selectedPostKey);
  firebase.database().ref(`posts/${selectedPostKey}`).remove();
}

// ------ Prieview image function ------ //
function previewImage(file, previewId) {
  if (file) {
    selectedImgFile = file;
    let reader = new FileReader();
    reader.onload = function(event) {
      document.querySelector('#' + previewId).setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file);
  }
}