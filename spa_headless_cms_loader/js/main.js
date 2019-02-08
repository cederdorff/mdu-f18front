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
function setDefaultPage(defaultPageName) {
  if (location.hash) {
    defaultPageName = location.hash.slice(1);
  }
  showPage(defaultPageName);
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

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

// ---------- Fetch data from data sources ---------- //
/*
Fetches pages json data from my headless cms
*/
fetch("http://headlesscms.cederdorff.com/wp-json/wp/v2/pages?_embed")
  .then(function(response) {
    return response.json();
  })
  .then(function(pages) {
    appendPages(pages);
  });

/*
Appends and generate pages
*/
function appendPages(pages) {
  var menuTemplate = "";
  for (let page of pages) {
    addMenuItem(page);
    addPage(page);
  }
  setDefaultPage(pages[0].slug); // selecting the first page in the array of pages
  getPersons();
  getTeachers();
  setTimeout(function() {
    showLoader(false);
  }, 500);
}

// appends menu item to the nav menu
function addMenuItem(page) {
  document.querySelector("#menu").innerHTML += `
  <a href="#${page.slug}" onclick="showPage('${page.slug}')">${page.title.rendered}</a>
  `;

}

// appends page section to the DOM
function addPage(page) {
  document.querySelector("#pages").innerHTML += `
  <section id="${page.slug}" class="page">
    <header class="topbar">
      <h2>${page.title.rendered}</h2>
    </header>
    ${page.content.rendered}
  </section>
  `;
}

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
      <article>
        <img src="${getFeaturedImageUrl(person)}">
        <h4>${person.title.rendered}</h4>
        <p>${person.acf.age} years old</p>
        <p>Hair color: ${person.acf.hairColor}</p>
        <p>Relation: ${person.acf.relation}</p>
      </article>
    `;
  }
  document.querySelector("#family-members").innerHTML += htmlTemplate;
}

/*
Fetches post data from my headless cms
*/
function getTeachers() {
  fetch("http://headlesscms.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=2")
    .then(function(response) {
      return response.json();
    })
    .then(function(teachers) {
      appendTeachers(teachers);
    });
}

// appends teachers
function appendTeachers(teachers) {
  let htmlTemplate = "";
  for (let teacher of teachers) {
    htmlTemplate += `
    <article>
      <img src="${getFeaturedImageUrl(teacher)}">
      <h3>${teacher.title.rendered}</h3>
      ${teacher.content.rendered}
      <p><a href="mailto:${teacher.acf.email}">${teacher.acf.email}</a></p>
      <p><a href="tel:${teacher.acf.phone}">${teacher.acf.phone}</a></p>
    </article>
     `;
  }
  document.querySelector("#teachers").innerHTML += htmlTemplate;
}

// returns the source url of the featured image of given post or page
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}