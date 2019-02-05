'use strict';
$(document).ready(function() {

  // ---------- typed.s ---------- //
  var typed = $(".typed");
  $(function() {
    typed.typed({
      strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
      typeSpeed: 100,
      loop: true,
    });
  });

  // ---------- smooth scroll ---------- //

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
      }
    }
  });

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("scrollTop").style.display = "block";
    } else {
      document.getElementById("scrollTop").style.display = "none";
    }
  }

});
