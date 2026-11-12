import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ReadCounter from "./components/ReadCounter"
import { BOOKS } from "./data/books"
import type { Book, StatusFilter } from "./types"
import { useState } from "react"
import FilterBar from "./components/FilterBar"
import SearchBox from "./components/SearchBox"


function App(){
  const [books, setBooks] = useState<Book[]>(BOOKS);
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState<string>("")

  const visibleBooks = books.filter((book) => {
  const trimmedSearch = search.trim().toLowerCase()
  if (trimmedSearch === "") {
    if (filter === "all") return true;
    if (filter === "read") return book.is_read;
    if (filter === "unread") return !book.is_read;
  } else {
    if ((book.title.toLowerCase().includes(trimmedSearch) || book.author.toLowerCase().includes(trimmedSearch)) && filter === "all") return true;
    if ((book.title.toLowerCase().includes(trimmedSearch) || book.author.toLowerCase().includes(trimmedSearch)) && filter === "read") return book.is_read;
    if ((book.title.toLowerCase().includes(trimmedSearch) || book.author.toLowerCase().includes(trimmedSearch)) && filter === "unread") return !book.is_read;  
  }
});

  const toggleRead = (id: number) => {
    setBooks((currBooks) => currBooks.map((book) => book.id === id? {...book, is_read: !book.is_read }: book))};

  const deleteBook = (id: number) => {setBooks((currBooks) => currBooks.filter((book) => book.id !== id))};

  const resetBooks = () => {setBooks(BOOKS)}

  const readCount = books.filter((book) => book.is_read).length;

  return (
    <div className="page">
      <Header/>
      <SearchBox 
        value={search} 
        onChange={(value)=>setSearch(value)}
      />
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