import type { Book, StatusFilter } from "../types";

interface FilterOptions {
  books: Book[]
  filter: StatusFilter
  search: string
  genre: string
  pagesOnly: boolean
}

export function filterBooks({books,filter,search,genre,pagesOnly}: FilterOptions) {
  return books.filter((book) => {
    const trimmedSearch = search.trim().toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(trimmedSearch) ||
      book.author.toLowerCase().includes(trimmedSearch);

    const matchesReadStatus =
      filter === "all" ||
      (filter === "read" && book.is_read) ||
      (filter === "unread" && !book.is_read);

    const matchesGenre =
      genre === "All genres" || book.genre === genre;

    const matchesPages =
      !pagesOnly || book.pages != null;

    return (
      matchesSearch &&
      matchesReadStatus &&
      matchesGenre &&
      matchesPages
    );
  });
}
