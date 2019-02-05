"use strict";
const doc = document;
doc.addEventListener("DOMContentLoaded", function() {
  // const postFetchUrl = "http://api.cederdorff.com/wp-json/wp/v2/posts?_embed";
  const postFetchUrl = "http://api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2";

  fetch(postFetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      console.log(posts);
      appendClients(posts);
    });

  function appendClients(clients) {
    let html = "";
    for (let i = 0; i < clients.length; i++) {
      let client = clients[i];
      console.log(client);
      if (i % 2 === 0) { // index is even
        html += `
        <article class="client">
          <div class="col-left even">
            <img src="${getFeaturedImageUrl(client)}" alt="${client.title.rendered}">
          </div>
          <div class="col-right even">
            <div class="container">
              <div class="center">
                <h3>${client.title.rendered}</h3>
                <h4>${client.meta.sub_title[0]}</h4>
                ${client.content.rendered}
                <div class="client-links">
                  <a href="${client.meta.link_url[0]}" target="_blank">${client.meta.link_text[0]} <i class="ion-ios-arrow-forward"></i><i class="ion-ios-arrow-forward"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        `;
      } else { // index is odd
        html += `
          <article class="client">
            <div class="col-right">
              <img src="${getFeaturedImageUrl(client)}" alt="${client.title.rendered}">
            </div>
            <div class="col-left">
              <div class="container">
                <div class="center">
                  <h3>${client.title.rendered}</h3>
                  <h4>${client.meta.sub_title[0]}</h4>
                  ${client.content.rendered}
                  <div class="client-links">
                    <a href="${client.meta.link_url[0]}" target="_blank">${client.meta.link_text[0]} <i class="ion-ios-arrow-forward"></i><i class="ion-ios-arrow-forward"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          `;
      }
    }

    doc.querySelector("#clients").innerHTML += html;
  }

  function getFeaturedImageUrl(client) {
    let imageUrl = "";
    if (client._embedded['wp:featuredmedia']) {
      imageUrl = client._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
  }

});