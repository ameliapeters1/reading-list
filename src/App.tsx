import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ReadCounter from "./components/ReadCounter"
import { BOOKS } from "./data/books"
import type { Book, StatusFilter } from "./types"
import { useState } from "react"
import FilterBar from "./components/FilterBar"
import SearchBox from "./components/SearchBox"
import GenreSelect from "./components/GenreSelect"
import PagesOnlyToggle from "./components/PagesOnlyToggle"


function App(){
  const [books, setBooks] = useState<Book[]>(BOOKS);
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState<string>("")
  const [genre, setGenre]= useState<string>("All genres")
  const [pagesOnly, setPagesOnly] = useState<boolean>(false)


  const visibleBooks = books.filter((book) => {
    const trimmedSearch = search.trim().toLowerCase()

    const matchesSearch =
        book.title.toLowerCase().includes(trimmedSearch) ||
        book.author.toLowerCase().includes(trimmedSearch)

    const matchesReadStatus =
        filter === "all" ||
        (filter === "read" && book.is_read) ||
        (filter === "unread" && !book.is_read)

    const matchesGenre =
        genre === "All genres" || book.genre === genre

    const matchesPages =
      !pagesOnly || book.pages != null

    return matchesSearch && matchesReadStatus && matchesGenre && matchesPages
  })


  const toggleRead = (id: number) => {
    setBooks((currBooks) => currBooks.map((book) => book.id === id? {...book, is_read: !book.is_read }: book))};

  const deleteBook = (id: number) => {setBooks((currBooks) => currBooks.filter((book) => book.id !== id))};

  const resetBooks = () => {setBooks(BOOKS)}

  const readCount = books.filter((book) => book.is_read).length;

  return (
    <div className="page">
      <Header/>
      <GenreSelect 
      genre = {genre}
      setGenre={setGenre}/>
      <SearchBox 
        value={search} 
        onChange={(value)=>setSearch(value)}
      />
      <PagesOnlyToggle
      checked = {pagesOnly}
      onChange={setPagesOnly}/>
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