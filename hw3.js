const imgs = document.querySelectorAll(".lazy-load");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, options);

imgs.forEach((image) => {
  observer.observe(image);
});

const loadBtn = document.getElementById("load-btn");
loadBtn.addEventListener("click", function () {
  imgs.forEach((image) => {
    image.src = image.dataset.src;
    image.classList.add("loaded");
    observer.unobserve(image);
  });
});
