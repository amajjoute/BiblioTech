import { renderBooks } from "./ui.js";
import { addBook, getBooks } from "./state.js";
import { searchBooks } from "./utils.js";

const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const searchFieldInput = document.querySelector("#search-field");

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
        id: crypto.randomUUID(),
        title: formData.get("titre").trim(),
        author: formData.get("autheur").trim(),
        year: formData.get("annee"),
        genre: formData.get("genre").trim(),
        status: formData.get("statut"),
        description: formData.get("description").trim()
    };

    addBook(book);
    updateBooksList();
    form.reset();
});

searchInput.addEventListener("input", updateBooksList);
searchFieldInput.addEventListener("change", updateBooksList);

updateBooksList();
