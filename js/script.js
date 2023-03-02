//Setting toggle
const navbarNav = document.querySelector(".navbar-nav");

//Ketika diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar untuk menutup sidebar
const close = document.querySelector("#menu");

document.addEventListener("click", function(e) {
  if (!close.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
  }
});
