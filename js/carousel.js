document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const items = document.querySelectorAll(".sistema-item");

  const itemWidth = items[0].offsetWidth;
  let index = 0;

  function updatePosition() {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
      updatePosition();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updatePosition();
    }
  });
});

    




