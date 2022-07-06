const body = document.querySelector('body');
const addCard = document.querySelector('.addCard');
const addButton = document.querySelector('.justAdd');
const closeButton = document.querySelector('.close')
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPage = document.querySelector('#book-page');
const bookRead = document.querySelector('select');
const bookContainer = document.querySelector('.container');


//new value
let new_book;
let new_author;
let new_page;
let new_read = 'yes';
// Buttons functioanlity

function add () { //addBook
    addCard.style.visibility = 'visible';
}

closeButton.addEventListener('click', () => {
    addCard.style.visibility = 'hidden';
})

addButton.addEventListener('click', () => {
    addBookToLibrary();
})

//input change

bookTitle.addEventListener('change', ()=> {
    new_book = bookTitle.value
})

bookAuthor.addEventListener('change', ()=> {
    new_author = bookAuthor.value
})

bookPage.addEventListener('change', ()=> {
    new_page = bookPage.value
})

bookRead.addEventListener('change', ()=> {
    new_read = bookRead.value
})


//Add Book


let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let book = new Book(new_book, new_author, new_page, new_read);
  myLibrary.push(book);

    let books = document.createElement('div');
    books.classList.add('books');
    bookContainer.appendChild(books);

    let addedButton = document.createElement('div');
    addedButton.classList.add('addedButton');

    let booksAdded = document.createElement('div');
    booksAdded.classList.add('bookAdded');

    books.append(addedButton, booksAdded);

    let deleteButton = document.createElement('button');
    addedButton.appendChild(deleteButton);

    let addedTitle = document.createElement('div');
    let addedAuthor = document.createElement('div');
    let addedPages = document.createElement('div');
    let addedRead = document.createElement('div');
    let anotherbutton = document.createElement('button');

    addedTitle.classList.add('addedTitle');
    addedAuthor.classList.add('addedAuthor');
    addedPages.classList.add('addedPages');
    addedRead.classList.add('addedRead');

    booksAdded.append(addedTitle, addedAuthor, addedPages, addedRead);
    addedRead.appendChild(anotherbutton);

    addedTitle.innerText = book.title
    addedAuthor.innerText = book.author
    addedPages.innerText = book.pages
    anotherbutton.innerText = book.read
}
