const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});
