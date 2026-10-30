import { renderBooks, updateForm, resetForm } from "./ui.js";
import { addBook, getBooks, getBookById, updateBook } from "./state.js";
import { searchBooks } from "./utils.js";

const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const searchFieldInput = document.querySelector("#search-field");
const booksList = document.querySelector("#books-list");

let editingBookId = null;

function updateBooksList() {
    const matchingBooks = searchBooks(
        searchInput.value,
        getBooks(),
        searchFieldInput.value
    );

    renderBooks(matchingBooks);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const book = {
        id: editingBookId || crypto.randomUUID(),
        title: formData.get("titre").trim(),
        author: formData.get("autheur").trim(),
        year: formData.get("annee"),
        genre: formData.get("genre").trim(),
        status: formData.get("statut"),
        description: formData.get("description").trim()
    };

    if (editingBookId) {
        updateBook(book);
        editingBookId = null;
    } else {
        addBook(book);
    }

    resetForm(form);
    updateBooksList();
});

booksList.addEventListener("click", (event) => {
    const editButton = event.target.closest('[data-action="edit"]');

    if (!editButton) {
        return;
    }

    const row = editButton.closest("[data-book-id]");
    const book = getBookById(row.dataset.bookId);

    if (!book) {
        return;
    }

    editingBookId = book.id;
    updateForm(form, book);
    form.scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", updateBooksList);
searchFieldInput.addEventListener("change", updateBooksList);

updateBooksList();
