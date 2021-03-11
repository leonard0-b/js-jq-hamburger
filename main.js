// mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// individuo la variabile di cosa deve essere cliccato🐱‍👤
var hamburger = $(".fa-bars");

// creo variabili di cosa deve essere modificato🐱‍👤
var hamburgerMenu = $(".hamburger-menu")
var menuClose = $(".close");

// // VERSIONE 1🐱‍👤
//   // secondo la funzione del toggle (display e hide) al click il menu diventa display "block"🐱‍👤
// hamburger.click(function() {
//   hamburgerMenu.toggle(600);
// });
// // al secondo click il menu diventa display "none"🐱‍👤
// menuClose.click(function() {
//   hamburgerMenu.toggle(600);
// });

// // VERSIONE 2🐱‍👤
// al click su ".fa-bars" il ".hamburger-menu" diventa "active" (vedi css)🐱‍👤
// hamburger.click(function() {
//   // ".hamburger-menu" col toggle diventa active e quindi si mostra🐱‍👤
//   hamburgerMenu.toggleClass("active");
// });
//
// // al secondo click con toggle la classe "active" si rimuove🐱‍👤
// menuClose.click(function() {
//   hamburgerMenu.toggleClass("active");
// });

// // grazie a toggleClass("active") ad ogni click la classe active viene inserita e si rimuove🐱‍👤


// VERSIONE 3🐱‍👤
// al click parte il fadein di 700ms, e la classe active viene aggiunta al menu🐱‍👤
// hamburger.click(function() {
//   hamburgerMenu.fadeIn(700, function(){
//     hamburgerMenu.addClass('active');
//    });
// });
//
// // al click parte il fadeout di 700ms, e al menu viene rimossa la classe active🐱‍👤
// menuClose.click(function() {
//   hamburgerMenu.fadeOut(700, function() {
//     hamburgerMenu.removeClass('active');
//   });
// });

// VERSIONE 3🐱‍👤
  // secondo la funzione del toggle al click il menu fa fadeIn🐱‍👤
hamburger.click(function() {
  hamburgerMenu.fadeToggle(600);
});
// al secondo click il menu fa fadeOut🐱‍👤
menuClose.click(function() {
  hamburgerMenu.fadeToggle(600);
});
