let form = document.querySelector("#form");
let addBtn = document.querySelector("#addBtn");
let myLibrary = [];

class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
  }
  addBookToLibrary(e) {
    e.preventDefault();
    let book = new Book(form.name.value, form.author.value, form.pages.value);
    myLibrary.push(book);
    createCard();
    form.reset();
    console.log(myLibrary);
  }
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

addBtn.addEventListener("click", new Book().addBookToLibrary);
