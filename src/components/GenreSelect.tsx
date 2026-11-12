import { BOOKS } from "../data/books"

interface GenreSelectProps {
    genre: string;
    setGenre: (genre: string) => void;
}

function GenreSelect({genre, setGenre}:GenreSelectProps){
    const genres:string[] = []
    BOOKS.forEach((book) => {
        if (!genres.includes(book.genre)) 
            { genres.push(book.genre)}
    })

    const options:React.ReactNode[] = []
    genres.sort().forEach(
        (genre)=>options.push(<option value = {genre}> {genre} </option>))

    return (
        <>
        <label> Choose a genre: </label>
        <select 
        value={genre}
        onChange={(event)=> setGenre(event.target.value)}>
            <option value = "All genres">All genres</option>
            {options}
        </select>
        </>
    )
}

export default GenreSelect