const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

const openPic = function (e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
    const dataSource = e.target.dataset.source;
    lightboxImage.setAttribute("src", dataSource);
    lightbox.classList.add("is-open");
  }
};

const closePic = function () {
  lightbox.classList.remove("is-open");
};

gallery.addEventListener("click", openPic);
lightbox.addEventListener("click", closePic);
window.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    closePic();
  }
});
