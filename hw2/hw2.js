// завдання 1
const image = document.querySelector(".slider__image");
const input = document.querySelector(".slider__input");

input.addEventListener(
  "input",
  _.debounce((e) => {
    const size = e.target.value / 50;
    image.style.transform = `scale(${size})`;
  }, 50)
);

// завдання 2

const box = document.getElementById("box");

document.addEventListener("mousemove", _.debounce((e) => {
    box.style.position = "absolute";
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
}, 100));

        