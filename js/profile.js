function logout() {
  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const ratingElements = document.getElementsByName("rating");
  const savedRatingElement = document.getElementById("saved-rating");
  const username = localStorage.getItem("loggedInUser"); //retrieve the logged in user

  if (username) {
    const savedRating = localStorage.getItem(`${username}_rating`);
    if (savedRating) {
      ratingElements.forEach((radio) => {
        if (radio.value === savedRating) {
          radio.checked = true;
        }
      });
      savedRatingElement.textContent = savedRating;
    } else {
      savedRatingElement.textContent = " ";
    }

    ratingElements.forEach((radio) => {
      radio.addEventListener("click", function () {
        if (
          this.checked &&
          localStorage.getItem(`${username}_rating`) === this.value
        ) {
          this.checked = false;
          localStorage.removeItem(`${username}_rating`);
          savedRatingElement.textContent = " ";
          ratingElements.forEach((star) => {
            star.checked = false;
          });
        } else {
          const selectedRating = this.value;
          localStorage.setItem(`${username}_rating`, selectedRating);
          savedRatingElement.textContent = selectedRating;
        }
      });
    });
  }

  const currentYear = new Date().getFullYear();
  document.getElementById(
    "copyright"
  ).innerHTML = `&copy; ${currentYear} RMAGALLANEZ. All rights reserved.`;
});
