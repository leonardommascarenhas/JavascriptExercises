let form = document.querySelector("form");
let addBtn = document.querySelector("#addBtn");
const bookName = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}
function createCard() {
  let container = document.querySelector(".container");
  let cardContainer = document.createElement("div");
  let bookName = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  cardContainer.classList.add("cardContainer");
  for (let i = 0; i < myLibrary.length; i++) {
    bookName.innerHTML = `Book Name: ${myLibrary[i].name}`;
    bookAuthor.innerHTML = `Author: ${myLibrary[i].author}`;
    bookPages.innerHTML = `Pages: ${myLibrary[i].pages}`;
    cardContainer.appendChild(bookName);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(removeBtn);
    container.appendChild(cardContainer);
  }
  removeBtn.addEventListener("click", removeBookFromLibrary);
}

function removeBookFromLibrary(e) {
  e.preventDefault();
  let cardContainer = e.target.parentElement;
  cardContainer.remove();
  removeFromArray(e);
  console.log(myLibrary);
}
function removeFromArray(e) {
  index = myLibrary.indexOf(e);
  myLibrary.splice(index, 1);
}
function popUp() {
  let modal = document.querySelector(".popUp");
  modal.style.display = "block";
}

function addBookToLibrary(name, author, pages) {
  let book = new Book(name, author, pages);
  myLibrary.push(book);
  createCard();
  form.reset();
  console.log(myLibrary);
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.remove("sucess");
  inputControl.classList.add("error");
};
const setSucess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("sucess");
};
const validateInputs = () => {
  const bookValue = bookName.value;
  const authorValue = author.value;
  const pagesValue = pages.value;

  if (bookValue === "") {
    setError(bookName, "Your book has no name");
  } else {
    setSucess(bookName);
  }
  if (authorValue === "") {
    setError(author, "Your author has no name");
  } else {
    setSucess(author);
  }
  if (pagesValue === "") {
    setError(pages, "Your book has no pages");
  } else {
    setSucess(pages);
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
addBtn.addEventListener("click", () => {
  if (
    bookName.parentElement.classList.contains("sucess") &&
    author.parentElement.classList.contains("sucess") &&
    pages.parentElement.classList.contains("sucess")
  ) {
    let book = new Book(bookName.value, author.value, pages.value);
    myLibrary.push(book);
    createCard();
    console.log(myLibrary);
  }
});
