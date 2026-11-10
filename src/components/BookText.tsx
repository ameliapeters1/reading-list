interface BookTextProps {
  title: string;
  author: string;
  genre: string;
  pages?: number;
}


function BookText({title, author, genre, pages}: BookTextProps) {
    // Check if the book has a valid pages number, 
    // if it does then allow it to be used, if not then leave it empty
    const pageString = pages !== undefined ? `${pages} pages` : '';

    return (
    <>
        <p>{ title }</p>
        <p>{ author }</p>
        <p>{ genre }</p>
        <p>{ pageString }</p>
    </>
    )
}

export default BookText
