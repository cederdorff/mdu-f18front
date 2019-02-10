"use strict";
const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('json/persons.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      console.log(json);
      appendPersons(json);
    });

  function appendPersons(persons) {
    for (var i = 0; i < persons.length; i++) {
      var person = persons[i];
      console.log(person);
      doc.getElementById('personGrid').innerHTML += `
      <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${person.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted"><small>Age:</small> ${person.age}</h6>
          <p class="card-text"><small>Hair color:</small> ${person.hairColor} <br><small>Relation:</small> ${person.relation}</p>
        </div>
      </div>
      </div>
      `;
    }
  }


  // DOMContentLoaded event listener end //
});