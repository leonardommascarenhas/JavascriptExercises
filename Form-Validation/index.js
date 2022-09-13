const form = document.getElementById("form");
const userName = document.getElementById("name");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("small");

  errorDisplay.innerText = message;
  inputControl.className = "form-control error";
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  inputControl.className = "form-control success";
};

const containsNumber = (str) => {
  return /[^a-zA-Z]/.test(str);
};

const containsLetter = (str) => {
  return /^[0-9]+$/.test(str);
};

const validateInputs = () => {
  const nameValue = userName.value;
  const zipCodeValue = zipCode.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (nameValue == "") {
    setError(userName, "O nome está em branco");
  } else if (containsNumber(nameValue)) {
    setError(userName, "O nome deve apenas conter letras");
  } else if (nameValue.length <= 1) {
    setError(userName, "O nome é muito curto");
  } else {
    setSuccess(userName);
  }

  if (zipCodeValue <= 0) {
    setError(zipCode, "O campo de CEP não poderá ficar vazio");
  } else if (zipCodeValue.length !== 8) {
    setError(zipCode, "O CEP deve conter 8 digitos");
  } else {
    setSuccess(zipCode);
  }

  if (passwordValue.length < 8) {
    setError(password, "Sua senha deverá conter pelo menos 8 caracteres");
  } else {
    setSuccess(password);
  }

  if (passwordConfirmationValue === passwordValue && passwordValue.length > 8) {
    setSuccess(passwordConfirmation);
  } else {
    setError(passwordConfirmation, "Suas senhas não coincidem");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
