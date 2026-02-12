(function () {
  var gallery = document.querySelector("[data-calendar-gallery]");
  if (!gallery) return;

  var mainImage = gallery.querySelector("[data-calendar-main-image]");
  var mainCaption = gallery.querySelector("[data-calendar-main-caption]");
  if (!mainImage || !mainCaption) return;

  gallery.addEventListener("click", function (event) {
    var button = event.target.closest("[data-calendar-select]");
    if (!button) return;

    var src = button.getAttribute("data-calendar-src");
    var alt = button.getAttribute("data-calendar-alt") || "Calendar image";
    var caption = button.getAttribute("data-calendar-caption") || alt;

    mainImage.src = src;
    mainImage.alt = alt;
    mainCaption.textContent = caption;

    gallery.querySelectorAll("[data-calendar-select]").forEach(function (item) {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
  });
})();
