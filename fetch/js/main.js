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
appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
  for (person of persons) {
    htmlTemplate += '<article><h4>' + person.name + '</h4><p>' + person.age + ' years old</p></article>';
  }
  gridPersons.innerHTML = htmlTemplate;
}