"use strict";

fetch("http://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    document.querySelector("#grid-posts").innerHTML += `
    <article class = "grid-item">
      <h3>${post.title.rendered}</h3>
      <p>Email: <a href="mailto:${post.acf.email}">${post.acf.email}</a></p>
      <p>Phone: ${post.acf.phone}</p>
    </article>
    `;
  }
}