const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

gallery.addEventListener("click",(e) => {
  if(e.target.nodeName === "IMG"){
    e.preventDefault();
    const dataSource = e.target.dataset.source;
    lightboxImage.setAttribute("src", dataSource);
    lightbox.classList.add("is-open");
  }
});

lightbox.addEventListener("click", function () {
    lightbox.classList.remove("is-open");
});
