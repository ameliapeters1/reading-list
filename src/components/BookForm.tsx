import { useState, type SubmitEvent, type ChangeEvent} from "react";
import type { FormValues } from "../lib/validate";
import { BOOKS } from "../data/books";

interface BookFormProps {
  onAddBook: (values: FormValues) => void;
}

function BookForm({onAddBook}:BookFormProps){
    const [values, setValues] = useState<FormValues>({ title: "", author: "", genre: "" })

    const handleFieldChange =
        (field: keyof FormValues) =>
        (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setValues((curr) => ({ ...curr, [field]: event.target.value }));
        };

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) { 
    event.preventDefault()

    const bookToAdd: FormValues = {
        title: values.title.trim(),
        author: values.author.trim(),
        genre: values.genre
    }
    onAddBook(bookToAdd)
    setValues({ title: "", author: "", genre: "" })
    }

    
    const genres: string[] = [];

    BOOKS.forEach((book) => {
    if (!genres.includes(book.genre)) {
        genres.push(book.genre);
    }
    });

    const options: React.ReactNode[] = [];

    genres.sort().forEach((genre) =>
    options.push(<option value={genre}>{genre}</option>)
    );

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title input"> Title </label>
                <input 
                    id="title-input"
                    type="text"
                    placeholder="title..."
                    value={values.title}
                    onChange={handleFieldChange("title")}/> 

                <label htmlFor="author-input">Author</label>
                <input
                    id="author-input"
                    type="text"
                    placeholder="author..."
                    value={values.author}
                    onChange={handleFieldChange("author")}/>

                <label htmlFor="genre-select">Genre</label>
                <select id="genre-select" value={values.genre} onChange={handleFieldChange("genre")}>
                    <option value="">genre...</option>
                    {options}
                </select>

                <button type="submit">Add title</button>
                <button type="button" onClick={() => setValues({ title: "", author: "", genre: "" })}>
                    Clear
                </button>
            </form>
        </>
    )
    

}

export default BookForm