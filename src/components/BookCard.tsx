import BookText from "./BookText";

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
  pages?: number;
}

function BookCard (props: BookCardProps) {
    const {title, author, genre, isRead, pages} = props

    return (
        <li className="book-card">
            <div className="book-info">
                <BookText
                    title={ title }
                    author={ author }
                    genre={ genre }
                    pages={ pages}
                />
                { isRead && <span className="badge">Read</span> }
            </div>  
            <div>
                <button type="button" aria-label={ `Mark ${title} as ${isRead ? "Mark unread": "Mark read"}` } className="btn toggle-btn">{ isRead ? "Mark unread": "Mark read"}</button>
                <button type="button" aria-label={ `delete ${title}` } className="btn delete-btn">Delete</button>
            </div>
        </li>
    )
}

export default BookCard