const booksList = document.querySelector("#books-list");
const rowTemplate = document.querySelector("#desktop-mobile-book-row-template");
const formTitle = document.querySelector("#first-section .mb-4 .text-4xl");
const formDescription = document.querySelector("#first-section .mb-4 .text-sm");

function renderBooks(books) {
    booksList.replaceChildren();

    books.forEach((book) => {
        const row = rowTemplate.content.firstElementChild.cloneNode(true);

        row.dataset.bookId = book.id;
        row.querySelector('[data-field="title"]').textContent = book.title;
        row.querySelector('[data-field="author"]').textContent = book.author;
        row.querySelector('[data-field="year"]').textContent = book.year || "-";
        row.querySelector('[data-field="genre"]').textContent = book.genre || "-";
        row.querySelector('[data-field="status"]').textContent = book.status;
        row.querySelector('[data-field="description"]').textContent = book.description || "-";

        booksList.append(row);
    });
}

function updateForm(form, book) {
    formTitle.textContent = "Modifier le livre";
    formDescription.hidden = true;

    form.elements.namedItem("titre").value = book.title;
    form.elements.namedItem("autheur").value = book.author;
    form.elements.namedItem("annee").value = book.year || "";
    form.elements.namedItem("genre").value = book.genre || "";
    form.elements.namedItem("statut").value = book.status;
    form.elements.namedItem("description").value = book.description || "";

    form.querySelector("#ajouter-livre-button").textContent = "Enregistrer les modifications";
}

function resetForm(form) {
    form.reset();
    formTitle.textContent = "Ajouter un livre";
    formDescription.hidden = false;
    form.querySelector("#ajouter-livre-button").textContent = "+ Ajouter le livre";
}

export {renderBooks, updateForm, resetForm};
