import { renderBooks } from "./ui.js";
import { addBook, getBooks } from "./state.js";

const form = document.querySelector("#form");

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
    renderBooks(getBooks());
    form.reset();
});