import type { Book } from "../types"
import BookCard from "./BookCard"
import ResultCount from "./ResultCount";


interface BookListProps {
  books: Book[];
  heading?: string;
  toggleRead: (id: number) => void;
  deleteBook: (id: number) => void;
}

function BookList({books, heading, toggleRead, deleteBook}:BookListProps){
    let content;

    if (books.length ===0){
        content = <li className="empty-state"> No books to show </li>
    } else {
        content = books.map((book) => {
            return <BookCard 
                    key={book.id} 
                    book={book}
                    toggleRead={toggleRead}
                    deleteBook={deleteBook}
                    />
            }
        )   
    }

    // If there's no heading then skip it, also show the count for each book group (read/unread)
    return(
    <>
        {heading && <h2 className="list-heading">{heading}</h2>}
        <ResultCount count={books.length} label={books.length === 1 ? "book" : "books"} />
        <ul className="book-list"> 
            {content}
        </ul>
    </>
    )
}


export default BookList