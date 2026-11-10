//import BookCard from "./components/BookCard"
import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ResultCount from "./components/ResultCount"
import { BOOKS } from "./data/books"


function App(){
  const readBooks = BOOKS.filter(book => book.is_read);
  const unreadBooks = BOOKS.filter(book => !book.is_read);

  return (
    <div className="page">
      <Header/>
      <div className="book-info">
      </div>
      <main tabIndex={2}>
        <ResultCount count={BOOKS.length}/>
        <BookList books={readBooks} heading="Read:"/>
        <BookList books={unreadBooks} heading="Unread:"/>
      </main>
      <Footer/>
    </div>
      

  )
}

export default App