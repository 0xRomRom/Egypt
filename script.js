function scrollToBottom() {
  // Select all buttons with class 'contact-us'
  var contactUsButtons = document.querySelectorAll(".contact-us");

  // Add click event listener to each button
  contactUsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
}

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", scrollToBottom);

//Toggle stars

let starRating = 0;

const rateStarsBox = document.querySelector(".rate-stars");
const darkStar1 = document.querySelector(".dark1");
const darkStar2 = document.querySelector(".dark2");
const darkStar3 = document.querySelector(".dark3");
const darkStar4 = document.querySelector(".dark4");
const darkStar5 = document.querySelector(".dark5");

rateStarsBox.addEventListener("click", (e) => {
  const star = e.target.classList[2];
  starRating = +star.slice(-1);

  if(star === "star1") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.add("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "star2") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "star3") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "star4") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "star5") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.remove("hidden");
  }
});

const rateDarkStars = document.querySelector(".rate-stars-dark");
rateDarkStars.addEventListener("click", (e) => {
  const star = e.target.classList[2];
  starRating = +star.slice(-1);

  if(star === "dark1") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.add("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "dark2") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "dark3") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "dark4") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.add("hidden");
  }
  if(star === "dark5") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.remove("hidden");
  }
});

//Close review modal
const reviewModal = document.querySelector('.review-modal');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
  reviewModal.classList.add('hidden');
});

//Open review modal
const openModal = document.querySelector('.plaats-review-cta');

openModal.addEventListener('click', () => {
  reviewModal.classList.remove('hidden');
});


//Submit modal