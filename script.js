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

  if (star === "star1") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.add("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "star2") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "star3") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "star4") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "star5") {
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

  if (star === "dark1") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.add("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "dark2") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.add("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "dark3") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.add("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "dark4") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.add("hidden");
  }
  if (star === "dark5") {
    darkStar1.classList.remove("hidden");
    darkStar2.classList.remove("hidden");
    darkStar3.classList.remove("hidden");
    darkStar4.classList.remove("hidden");
    darkStar5.classList.remove("hidden");
  }
});

//Close review modal
const reviewModal = document.querySelector(".review-modal");
const closeModal = document.querySelector(".close-modal");

closeModal.addEventListener("click", () => {
  reviewModal.classList.add("hidden");
});

//Open review modal
const openModal = document.querySelector(".plaats-review-cta");

openModal.addEventListener("click", () => {
  reviewModal.classList.remove("hidden");
});

let reviewResult = {
  name: "",
  date: "",
  story: "",
  stars: 0,
};

//Submit modal

const submitReview = async () => {
  await fetch(
    "https://cleopat-ac91a-default-rtdb.europe-west1.firebasedatabase.app/reviews.json",
    {
      method: "POST",
      body: JSON.stringify(reviewResult),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

let submitted = false;

const submitForm = document.querySelector(".submit-form");
submitForm.addEventListener("click", () => {
  const nameInput = document.querySelector(".name-input").value; // Replace with the actual ID of your name input field
  const textareaInput = document.querySelector(".story-input").value; // Replace with the actual ID of your textarea input field
  const dateInput = document.querySelector(".date-input").value; // Replace with the actual ID of your textarea input field
  const inputModal = document.querySelector(".review-center-modal"); // Replace with the actual ID of your textarea input field
  const submitConnfirmedText = document.querySelector(".submit-confirmed"); // Replace with the actual ID of your textarea input field

  const nameRegex = /^[a-zA-Z\- ]{2,50}$/;
  const textareaRegex = /^[\s\S]{1,400}$/;

  const isNameValid = nameRegex.test(nameInput);
  const isTextareaValid = textareaRegex.test(textareaInput);

  if (
    !isNameValid ||
    !isTextareaValid ||
    starRating === 0 ||
    dateInput === ""
  ) {
    alert("Complete form before submission");
    return;
  }

  reviewResult.name = nameInput;
  reviewResult.date = dateInput;
  reviewResult.story = textareaInput;
  reviewResult.stars = starRating;
  inputModal.classList.add("hidden");
  submitConnfirmedText.classList.remove("hidden");

  setTimeout(() => {
    reviewModal.classList.add("hidden");
    submitted = true;
    openModal.disabled = true;
    openModal.textContent = "Already Reviewed";
  }, 4000);

  submitReview();
});
