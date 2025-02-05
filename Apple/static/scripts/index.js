window.addEventListener("scroll", function () {
  const header = document.getElementById("H-MainHeader");
  const topSection = document.getElementById("H-HighBlock");
  const topSectionHeight = topSection.offsetHeight;

  if (window.scrollY >= topSectionHeight) {
    header.classList.add("fixed");
    document.getElementById("WelcomeBanner").style.marginTop = "3.5vw";
  } else {
    header.classList.remove("fixed");
    document.getElementById("WelcomeBanner").style.marginTop = "0vw";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth =
    items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
  let currentIndex = 0;

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      carouselContainer.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      carouselContainer.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  });
});
