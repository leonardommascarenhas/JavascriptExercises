const form = document.getElementById("form");
const name = document.getElementById("name");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
