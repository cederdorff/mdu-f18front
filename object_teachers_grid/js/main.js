"use strict";

// declaring techer objects

// Birgitte
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

// Michael
let teacher2 = {
  name: "Michael Hvidtfeldt",
  initials: "mhv",
  mail: "mhv@baaa.dk",
  phone: "72286328",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.eaaa.dk/CropUp/headshot/media/116737/Michael-Hvidtfeldt.jpg"
};

// Rasmus
let teacher3 = {
  name: "Rasmus Cederdorff",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "72286318",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Lecturer",
  department: "Multimediedesigner & Professionsbachelor i digital konceptudvikling",
  img: "http://eaaa.cederdorff.com/mdu-f18front/object_teachers_grid/img/race.jpg"
};

// log objects to the developer console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// Appending objects to the DOM

// teacher1 - Birgitte
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "<article>";

//teacher2 - Michael
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "<article>";

//teacher3 - Rasmus
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher3.img + "'>" +
  "<h3>" + teacher3.name + "</h3>" +
  teacher3.position + "<br>" +
  "<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" +
  "<article>";