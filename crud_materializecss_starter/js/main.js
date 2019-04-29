"use strict";

document.addEventListener('DOMContentLoaded', function() {
  init();
});

let posts = [{
  key: 0,
  title: "Hola",
  content: "This is my awesome content",
  image: "http://cederdorff.com/img/cphcloud_web.jpg"
}];

let selectedPostKey;


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
  let newKey = 0;
  if (posts.length > 0) {
    newKey = posts[posts.length - 1].key + 1; // don't do this in IRL
  }
  let newPost = {
    title: titleInput.value,
    content: contentInput.value,
    image: imageInput.src,
    key: newKey
  };
  posts.push(newPost);
  readPosts();
}

function readPosts() {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += `
    <div class="col s12 m6">
      <article class="card">
        <div class="card-image">
          <img src="${post.image}">
          <span class="card-title">${post.title}</span>
          <a onclick="setSelectedPost(${post.key})" class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#actionModal"><i class="material-icons">more_horiz</i></a>
        </div>
        <div class="card-content">
          <p>${post.content}</p>
        </div>
      </article>
    </div>
    `;
  }
  document.querySelector('#postFeed').innerHTML = htmlTemplate;
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

  console.log(titleInput.value);
  console.log(contentInput.value);
  console.log(imageInput.src);


  for (let post of posts) {
    if (post.key === selectedPostKey) {
      console.log(post);
      post.title = titleInput.value;
      post.content = contentInput.value;
      post.image = imageInput.src;
      readPosts();
    }
  }
}

function deletePost() {}

// ------ Prieview image function ------ //
function previewImage(file, previewId) {
  if (file) {
    let reader = new FileReader();
    reader.onload = function(event) {
      document.querySelector('#' + previewId).setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file);
  }
}