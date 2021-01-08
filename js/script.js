$(document).ready(function () {
  var feu = $(".feu1");
  var feu2 = $(".feu2");
  var feu3 = $(".feu3");
  var etoile = $(".etoile1");
  var etoile2 = $(".etoile2");
  var etoile3 = $(".etoile3");
  function runIt() {
    feu.animate({ opacity: "+=1" }, 1000);
    feu.animate({ opacity: "-=1" }, 1000, runIt);
    feu2.animate({ opacity: "+=1" }, 3000);
    feu2.animate({ opacity: "-=1" }, 2000, runIt);
    feu3.animate({ opacity: "+=1" }, 1500);
    feu3.animate({ opacity: "-=1" }, 1600, runIt);
    etoile.animate({ opacity: "+=1" }, 400);
    etoile.animate({ opacity: "-=1" }, 400, runIt);
    etoile2.animate({ opacity: "+=1" }, 600);
    etoile2.animate({ opacity: "-=1" }, 500, runIt);
    etoile3.animate({ opacity: "+=1" }, 350);
    etoile3.animate({ opacity: "-=1" }, 360, runIt);
  }
  runIt();
});
