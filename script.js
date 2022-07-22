document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    console.log("burger click");
    document.querySelector(".container").classList.toggle("change");
  });

window.onload = function () {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".scroll-btn").addEventListener("click", function () {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
