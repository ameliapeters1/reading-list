import BookCard from "./components/BookCard"
import Footer from "./components/Footer"
import Header from "./components/Header"

// const book = {title:"Dune"}

function App(){
  return (
    <div className="page">
      <Header/>
      <div className="book-info">
        <BookCard
          title="The Very Hungry Caterpillar"
          author="Eric Carle"
          genre="Childrens"
          isRead={ true }
        />
        <BookCard
          title="The Very Hungry Butterfly"
          author="Eric Carle"
          genre="Childrens"
          isRead={ false }
        />
        <BookCard
          title="The Very Hungry Maggot"
          author="Eric Carle"
          genre="Horror"
          isRead={ false }
        />
      </div>
      <main tabIndex={2}>
        
      </main>
      <Footer/>
    </div>
      

  )
  

}

export default App