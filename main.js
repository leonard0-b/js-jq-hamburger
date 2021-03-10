// mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// individuo la variabile di cosa deve essere cliccato🐱‍👤
var hamburger = $(".fa-bars");

// creo variabili di cosa deve essere modificato🐱‍👤
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
// al click su ".fa-bars" il ".hamburger-menu" diventa "active" (vedi css)🐱‍👤
hamburger.click(function() {
  // ".hamburger-menu" col toggle diventa active e quindi si mostra🐱‍👤
  hamburgerMenu.toggleClass("active");
});

// al secondo click con toggle la classe "active" si rimuove🐱‍👤
menuClose.click(function() {
  hamburgerMenu.toggleClass("active");
});

// grazie a toggleClass("active") ad ogni click la classe active viene inserita e si rimuove🐱‍👤
