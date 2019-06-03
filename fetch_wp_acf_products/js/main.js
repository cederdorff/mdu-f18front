"use strict";

fetch("http://product-api.cederdorff.com/wp-json/wp/v2/posts?_embed")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendProducts(json);
  });

function appendProducts(products) {
  for (let product of products) {
    console.log(product);
    document.querySelector("#grid-products").innerHTML += `
    <article class = "grid-item">
      <h3>${product.title.rendered}</h3>
      <img src="${getFeaturedImageUrl(product)}">
      <p>Description: ${product.acf.description}</p>
      <p>Specifications: ${product.acf.specification}</p>
      <p>Price: <strong>${product.acf.price}</strong></p>
    </article>
    `;
  }
}

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}