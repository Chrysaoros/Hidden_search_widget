// IIFE that removes "outline" for mouse users
// But retains it for keyboard users
(function (document, window) {
  if (!document || !window) {
    return;
  }

  var styleText =
    "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";
  var unfocus_style = document.createElement("STYLE");

  window.unfocus = function () {
    document.getElementsByTagName("HEAD")[0].appendChild(unfocus_style);

    document.addEventListener("mousedown", function () {
      unfocus_style.innerHTML = styleText + "}";
    });
    document.addEventListener("keydown", function () {
      unfocus_style.innerHTML = "";
    });
  };

  unfocus.style = function (style) {
    styleText += style;
  };

  unfocus();
})(document, window);

const searchDiv = document.querySelector(".search-container");
const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  searchDiv.classList.toggle("active");
  searchBar.focus();
});
