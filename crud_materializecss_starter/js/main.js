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


function init() {
  // modal
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);

  readPosts();
}

// ------ CRUD operations ------ //

function createPost() {

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
          <a class="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#actionModal"><i class="material-icons">more_horiz</i></a>
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

function updatePost() {}

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