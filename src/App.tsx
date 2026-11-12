import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ReadCounter from "./components/ReadCounter"
import { BOOKS } from "./data/books"
import type { Book, StatusFilter } from "./types"
import { useState } from "react"
import FilterBar from "./components/FilterBar"
import Echo from "./scratch/Echo"


function App(){
  const [books, setBooks] = useState<Book[]>(BOOKS);
  const [filter, setFilter] = useState<StatusFilter>("all");

  const visibleBooks = books.filter((book) => {
  if (filter === "read") return book.is_read;
  if (filter === "unread") return !book.is_read;
  return true;
});

  const toggleRead = (id: number) => {
    setBooks((currBooks) => currBooks.map((book) => book.id === id? {...book, is_read: !book.is_read }: book))};

  const deleteBook = (id: number) => {setBooks((currBooks) => currBooks.filter((book) => book.id !== id))};

  const resetBooks = () => {setBooks(BOOKS)}

  const readCount = books.filter((book) => book.is_read).length;

  return (
    <div className="page">
      <Header/>
      <div className="book-info">
        <ReadCounter readCount={readCount} total={books.length}/>
      </div>
      <main tabIndex={2}>
        <button onClick={resetBooks}>Reset</button>
        <FilterBar current={filter} onChange={setFilter} />

      <BookList 
        books={visibleBooks} 
        toggleRead={toggleRead} 
        deleteBook={deleteBook}
      />
      </main>
      
      <Footer/>
    </div>
      

  )
}

export default App