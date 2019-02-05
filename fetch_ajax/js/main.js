/*
Fetches json person data from the file persons.json
*/
function loadFamilyMembers() {
  fetch('json/persons.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log("Family Members: ");
      console.log(json);
      appendPersons(json, "familyMembers");
    });
}
/*
Fetches json teacher data from the file teachers.json
*/
function loadTeachers() {
  fetch('json/teachers.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log("Teachers: ");
      console.log(json);
      appendPersons(json, "teachers");
    });
}

/*
appends json data to the DOM
*/
function appendPersons(persons, type) {
  let htmlTemplate = "";
  for (let person of persons) {
    htmlTemplate += `
    <article>
      <h4>${person.name}</h4>
      <a href='mailto:${person.mail}'>${person.mail}</a>
    </article>
    `;
  }

  // appends htmlTemplate depending on given type
  if (type === "familyMembers") {
    document.querySelector("#family-members").innerHTML = htmlTemplate;
  } else if (type === "teachers") {
    document.querySelector("#teachers").innerHTML = htmlTemplate;
  }

}

/*
loads and appends json post data to the DOM
*/
function loadPosts() {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      console.log(posts);
      let htmlTemplate = "";
      for (let post of posts) {
        htmlTemplate += `
        <article>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        </article>
        `;
      }
      document.querySelector("#posts").innerHTML = htmlTemplate;
    });
}