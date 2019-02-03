"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // accessToken: 'YOUR_ACCESS_TOKEN',
  // userId: 'YOUR_USER_ID',
  let feed = new Instafeed({
    accessToken: '5672009939.1677ed0.0911e5ab253f48ae9240a660a96a776f',
    userId: '5672009939',
    get: 'user',
    limit: 50,
    mock: true,
    success: (response) => {
      console.log(response);
      appendImages(response.data);
    }
  });
  feed.run();

  let appendImages = (images) => {
    for (let image of images) {
      if (image.type === "image") {
        document.querySelector('#myInstagramFeed').innerHTML += `
        <img src="${image.images.standard_resolution.url}">`;
      } else if (image.type === "video") {
        console.log(image);
        document.querySelector('#myInstagramFeed').innerHTML += `
        <video controls>
          <source src="${image.videos.standard_resolution.url}" type="video/mp4">
        </video>
        `;

      }

    }
  }

});