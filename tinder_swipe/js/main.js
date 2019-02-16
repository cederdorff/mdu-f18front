"use strict";

//make sure that the DOM is loaded and ready
document.addEventListener("DOMContentLoaded", function() {
  fetchArtists();
});

function like(element) {
  $(element).addClass('rotate-left').delay(700).fadeOut(1);
  $('.card').find('.status').remove();
  $(element).removeClass('active');
  $(element).append('<div class="status like">Like!</div>');
  if ($(element).is(':last-child')) {
    $('.card:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
    $('.card:nth-child(1)').addClass('active');
  } else {
    $(element).next().removeClass('rotate-left rotate-right').fadeIn(400);
    $(element).next().addClass('active');
  }
}

function dislike(element) {
  $(element).addClass('rotate-right').delay(700).fadeOut(1);
  $('.card').find('.status').remove();
  $(element).removeClass('active');
  $(element).append('<div class="status dislike">Dislike!</div>');
  if ($(element).is(':last-child')) {
    $('.card:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
    $('.card:nth-child(1)').addClass('active');
    alert('OUPS');
  } else {
    $(element).next().removeClass('rotate-left rotate-right').fadeIn(400);
    $(element).next().addClass('active');
  }
}

function likeButtonEvent() {
  like($('.card.active'));
}

function dislikeButtonEvent() {
  dislike($('.card.active'));
}

function addSwipeEffect() {
  $(".card").on("swiperight", function() {
    like(this);
  });

  $(".card").on("swipeleft", function() {
    dislike(this);
  });
}

function fetchArtists() {
  fetch("json/artists.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      appendArtists(json.artists);
    });
}

function appendArtists(artists) {
  let htmlTemplate = "";
  for (let i = 0; i < artists.length; i++) {
    let artist = artists[i];
    console.log(artist);
    if (i === 0) {
      htmlTemplate += `
      <div class="card active" style="display: block;">
        <div class="avatar" style="display: block; background-image: url(${artist.imgurl})"></div>
      </div>
      `;
    } else {
      htmlTemplate += `
      <div class="card">
        <div class="avatar" style="display: block; background-image: url(${artist.imgurl})"></div>
      </div>
      `;
    }
  }
  document.querySelector('#swipeContainer').innerHTML = htmlTemplate;
  // add swipe effect after content added
  addSwipeEffect();
}