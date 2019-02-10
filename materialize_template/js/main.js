"use strict";

document.addEventListener('DOMContentLoaded', function() {
  let parallaxElems = document.querySelectorAll('.parallax');
  let parallaxInstances = M.Parallax.init(parallaxElems);

  let sidenavElems = document.querySelectorAll('.sidenav');
  let sidenavInstances = M.Sidenav.init(sidenavElems);
});