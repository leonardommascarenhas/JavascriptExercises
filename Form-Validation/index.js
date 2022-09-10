const form = document.getElementById("form");
const userName = document.getElementById("name");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("small");

  errorDisplay.innerText = message;
  inputControl.className = "input-control error";
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  inputControl.className = "input-control success";
};
function containsNumber(str) {
  return /\d/.test(str);
}

const validateInputs = () => {
  const nameValue = userName.value;
  const zipCodeValue = zipCode.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (nameValue == "") {
    setError(userName, "O nome está em branco");
  } else if (containsNumber(nameValue) === true) {
    setError(userName, "O nome deve apenas conter letras");
  } else {
    setSuccess(userName);
  }
  //começar daqui, aprender sobre regex;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
