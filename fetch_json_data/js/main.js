const doc = document;

fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendPersons(json.persons);
    appendPosts(json.posts)
    appendComputers(json.computers);
  });

// Adds persons to the DOM by giving parameter, persons
function appendPersons(persons) {
  for (let person of persons) { // looping trough all persons
    console.log(person);
    //creating person data, HTML tags and adding to the DOM, the element #gridPersons
    gridPersons.innerHTML += `
      <article class="gridItem">
      <h4>${person.name}</h4>
      <p>${person.age} years</p>
      </article>
      `;
  }
}

// Adds posts to the DOM by giving parameter, posts
function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    //creating post data, HTML tags and adding to the DOM, the element #gridPosts
    doc.querySelector("#gridPosts").innerHTML += `
        <article class="gridItem">
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        </article>
        `;
  }
}

// Adds posts to the DOM by giving parameter, posts
function appendComputers(computers) {
  for (let computer of computers) {
    console.log(computer);
    //creating post data, HTML tags and adding to the DOM, the element #gridPosts
    gridComputers.innerHTML += `
        <article class="gridItem">
        <h4>${computer.brand}</h4>
        <p>${computer.model}</p>
        </article>
        `;
  }
}