const STORAGE_KEY = "books";

let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function addBook(book) {
    books.push(book);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function getBooks() {
    return books;
}


export {addBook, getBooks};