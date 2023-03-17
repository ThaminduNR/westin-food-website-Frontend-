// make mobile navigation

const btn = document.querySelector(".btn-nav-nav");
const header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling

const allLinks = document.querySelector("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     console.log(e);
//   });
// });
