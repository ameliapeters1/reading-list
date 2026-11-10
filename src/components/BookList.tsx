import type { Book } from "../types"
import BookCard from "./BookCard"
 
interface BookListProps {
  books: Book[];
}

function BookList({books}:BookListProps){
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
                    />
            }
        )   
    }

    return(<ul className="book-list"> 
    {content}
    </ul>)
}


export default BookList