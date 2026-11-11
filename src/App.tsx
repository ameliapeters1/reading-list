import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BOOKS } from "./data/books"
import type { Book } from "./types"
import { useState } from "react"

function App(){
  const [books, setBooks] = useState<Book[]>(BOOKS);

  const readBooks = books.filter(book => book.is_read); 
  const unreadBooks = books.filter(book => !book.is_read);


  const toggleRead = (id: number) => {
    setBooks((currBooks) => currBooks.map((book) => book.id === id? {...book, is_read: !book.is_read }: book))};

  const deleteBook = (id: number) => {setBooks((currBooks) => currBooks.filter((book) => book.id !== id))};

  const resetBooks = () => {setBooks(BOOKS)}

  return (
    <div className="page">
      <Header/>
      <div className="book-info">
      </div>
      <main tabIndex={2}>
        <button onClick={resetBooks}>Reset</button>
        <BookList books={readBooks} toggleRead={toggleRead} deleteBook={deleteBook} heading="Read:"/>
        <BookList books={unreadBooks} toggleRead={toggleRead} deleteBook={deleteBook} heading="Unread:"/>
      </main>
      <Footer/>
    </div>
      

  )
}

export default App