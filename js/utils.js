function searchBooks(search, books, field) {
    const searchText = search.trim().toLowerCase();

    return books.filter((book) =>
        String(book[field] ?? "").toLowerCase().includes(searchText)
    );
}

export {searchBooks};
