"use strict";

// ---------- default SPA Web App setup ---------- //

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
}

// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

setDefaultPage();

// ---------- Fetch data from data sources ---------- //

/*
Fetches json data from the file persons.json
*/
fetch('json/persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendPersons(json);
  });

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
  for (let person of persons) {
    htmlTemplate += `
      <article>
        <img src="img/${person.img}">
        <h4>${person.name}</h4>
        <p>${person.age} years old</p>
        <p>Hair color: ${person.hairColor}</p>
        <p>Relation: ${person.relation}</p>
      </article>
    `;
  }
  document.querySelector("#my-family").innerHTML = htmlTemplate;
}

/*
Fetches json data from my headless cms
*/
fetch("http://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}

function appendPosts(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += `
    <article>
      <img src="${getFeaturedImageUrl(post)}">
      <h3>${post.title.rendered}</h3>
      <p>${post.content.rendered}</p>
    </article>
     `;
  }
  document.querySelector("#my-teachers").innerHTML = htmlTemplate;
}