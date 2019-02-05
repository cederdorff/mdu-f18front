"use strict";

fetch("http://headlesscms.cederdorff.com/wp-json/wp/v2/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendPosts(json);
  });

function appendPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    console.log(post);
    document.querySelector("#grid-posts").innerHTML += `
    <article class = "grid-item">
      <h3>${post.title.rendered}</h3>
      <p>${post.content.rendered}</p>
    </article>
    `;
  }
}