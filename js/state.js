const STORAGE_KEY = "books";

let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function addBook(book) {
    books.push(book);
    saveBooks();
}

function getBooks() {
    return books;
}

function getBookById(id) {
    return books.find((book) => book.id === id);
}

function updateBook(updatedBook) {
    books = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
    );

    saveBooks();
}

function saveBooks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export {addBook, getBooks, getBookById, updateBook};
