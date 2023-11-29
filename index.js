// on cible le btn pour la fermeture de la nav
const btnClose = document.querySelector(".close");
// cibler le button pour afficher le menu
const btnOpen = document.querySelector(".open");
// cibler la nav
const navMobile = document.querySelector(".nav-mobile");

// ecouter l'event click
btnClose.addEventListener("click", () => {
  navMobile.style.left = "-300rem";
});

// ecouter l'event click
btnOpen.addEventListener("click", () => {
  console.log("click");
  navMobile.style.left = "0";
});