import { useState } from "react";

export default function Shelf(){
    const [items, setItems] = useState<string[]>([]);
    
    
    const addItem = () => {setItems(
        (curr) => [...curr, `item ${curr.length + 1}`])
    };

    const removeItem = () => {setItems(
        (curr) => curr.slice(0,-1)
    )}

    const replaceItem = () => {setItems(
        (curr) => curr.map((item, index) =>
            index === 0 ? item.toUpperCase() : item
    ))}

    const sortItems = () => {setItems(
        (curr) => [...curr].sort()
    )}

   const resetItems = () => {setItems([])}

   const [genre, setGenre] = useState({ genre: "all", sort: "title" })

   const changeGenre = () => {setGenre(
        (curr) => ({...curr, genre:"children's"})
    )}

    console.log(items.length)
    

    return(
        <div>
            <button type="button" onClick={() => addItem()}>
            Add
            </button>
            <button type="button" onClick={() => removeItem()}>
            Remove
            </button>
            <button type="button" onClick={() => replaceItem()}>
            Replace
            </button>
            <button type="button" onClick={() => sortItems()}>
            sort
            </button>
            <button type="button" onClick={() => resetItems()}>
            reset
            </button>
            <button type="button" onClick={() => changeGenre()}>
            change Genre
            </button>
            <p>
                {items}
            </p>
        </div> 
    )
}