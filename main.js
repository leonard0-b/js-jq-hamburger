var hamburger = $(".fa-bars");

var hamburgerMenu = $(".hamburger-menu")

var menuClose = $(".close");

hamburger.click(function() {
  hamburgerMenu.toggle("");
});

menuClose.click(function() {
  hamburgerMenu.toggle("");
});
