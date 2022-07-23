let form = document.querySelector("#form");
let addBtn = document.querySelector("#addBtn");
let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(form.name.value, form.author.value, form.pages.value);
  myLibrary.push(book);
  createCard();
  form.reset();
}

function createCard() {
  let container = document.querySelector(".container");
  let bookName = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  bookName.innerHTML = `Book Name: ${myLibrary[0].name}`;
  bookAuthor.innerHTML = `Author: ${myLibrary[0].author}`;
  bookPages.innerHTML = `Pages: ${myLibrary[0].pages}`;
  container.appendChild(bookName);
  container.appendChild(bookAuthor);
  container.appendChild(bookPages);
}

function popUp() {
  let modal = document.querySelector(".popUp");
  modal.style.display = "block";
}

addBtn.addEventListener("click", addBookToLibrary);
