const book = {title:"Dune"}

function App(){
  return (
    <div className="page">
      <header>
        <h1>My Reading List</h1>
        <p> {book.title} </p>
      </header>
      <main tabIndex={2}>
        
      </main>
      <footer>
        <p> footer text </p>
      </footer>
    </div>
      

  )
  

}

export default App