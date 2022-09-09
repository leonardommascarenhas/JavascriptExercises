const form = document.getElementById("form");
const userName = document.getElementById("name");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("sucess");
};
const setSucess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("sucess");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = userName.value;
  const zipCodeValue = zipCode.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  //começar daqui, aprender sobre regex;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
