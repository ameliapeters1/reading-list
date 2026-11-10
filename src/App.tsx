//import BookCard from "./components/BookCard"
import BookList from "./components/BookList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ResultCount from "./components/ResultCount"
import { BOOKS } from "./data/books"


function App(){
  return (
    <div className="page">
      <Header/>
      <div className="book-info">
      </div>
      <main tabIndex={2}>
        <ResultCount count={BOOKS.length}/>
        <BookList books={BOOKS}/>
      </main>
      <Footer/>
    </div>
      

  )
}

export default App