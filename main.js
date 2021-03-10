var hamburger = $(".fa-bars");

var hamburgerMenu = $(".hamburger-menu")

var menuClose = $(".close");

// VERSIONE 1🐱‍👤
// hamburger.click(function() {
//   hamburgerMenu.toggle("");
// });
//
// menuClose.click(function() {
//   hamburgerMenu.toggle("");
// });

// VERSIONE 2🐱‍👤
hamburger.click(function() {
  hamburgerMenu.toggleClass("active");
});

menuClose.click(function() {
  hamburgerMenu.toggleClass("active");
});
