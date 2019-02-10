"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");
  getPersons();
});

/*
Fetches post data from my headless cms
*/
function getPersons() {
  fetch('http://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=3')
    .then(function(response) {
      return response.json();
    })
    .then(function(persons) {
      appendPersons(persons);
    });
}
/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
  for (let person of persons) {
    console.log();
    htmlTemplate += `
    <div class="card mb-4">
      <div class="view overlay">
        <img class="card-img-top" src="${getFeaturedImageUrl(person)}" alt="Card image cap">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body">

        <!--Title-->
        <h4 class="card-title">${person.title.rendered}</h4>
        <!--Text-->
        <p class="card-text">${person.acf.age} years old.<br>Hair color: ${person.acf.hairColor}<br>Relation: ${person.acf.relation}</p>
        <a href="mailto:${person.acf.age}" class="btn btn-primary btn-light-blue btn-md" role="button">Mail</a>
      </div>
    </div>
    `;
  }
  document.querySelector("#family-members").innerHTML += htmlTemplate;
}
// returns the source url of the featured image of given post or page
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}