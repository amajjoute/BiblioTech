const booksList = document.querySelector("#books-list");
const rowTemplate = document.querySelector("#desktop-mobile-book-row-template");

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

export {renderBooks}