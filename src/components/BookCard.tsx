import BookText from "./BookText";
import type { Book } from "../types";

interface BookCardProps {
  book: Book
  toggleRead: (id: number) => void;
  deleteBook: (id: number) => void;
}

function BookCard (props: BookCardProps) {
    const { book, toggleRead, deleteBook } = props

    return (
        <li className="book-card">
            <div className="book-info">
                <BookText
                    title={ book.title }
                    author={ book.author }
                    genre={ book.genre }
                    pages={ book.pages}
                />
                { book.is_read && <span className="badge">Read</span> }
            </div>  
            <div>
                <button 
                    type="button" 
                    aria-label={ `Mark ${book.title} as ${book.is_read ? "Mark unread": "Mark read"}` } 
                    className="btn toggle-btn" 
                    onClick={()=>{toggleRead(book.id)}}
                >
                    { book.is_read ? "Mark unread": "Mark read"}
                </button>
                <button 
                    type="button" 
                    aria-label={ `delete ${book.title}` } 
                    className="btn delete-btn" 
                    onClick={()=>{deleteBook(book.id)}}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default BookCard