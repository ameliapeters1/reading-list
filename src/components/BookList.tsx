import type { Book } from "../types"
import BookCard from "./BookCard"
import ResultCount from "./ResultCount";
 
interface BookListProps {
  books: Book[];
  heading?: string;
}

function BookList({books, heading}:BookListProps){
    let content;

    if (books.length ===0){
        content = <li className="empty-state"> No books to show </li>
    } else {
        content = books.map((book) => {
            return <BookCard 
                    key={book.id} 
                    isRead={book.is_read} 
                    title={book.title} 
                    author={book.author} 
                    genre={book.genre}
                    pages={book.pages}
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