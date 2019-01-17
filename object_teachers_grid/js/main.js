"use strict";

// appends a string to the DOM
document.querySelector("#page-content").innerHTML = "Hi Frontenders!";

// declaring techer objects

let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "72286316",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/CropUp/headshot/media/1524902/birgitte-kirk-iversen.jpg"
};

let teacher2 = {

};

let teacher3 = {

};

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// append data fromn the objects to the document
// teacher1
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "<article>";

//teacher2  

//teacher3