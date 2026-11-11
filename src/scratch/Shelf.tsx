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

// function handleRatingChange(title: string, change: number): void {
//         setFavouritesList((currFavourites) => {

//             return currFavourites.map((fav)=>{return fav.title === title? {...fav, rating: fav.rating + change}: {...fav}    })
        
//         });
//     }

//     return (
//         <section className="card">
//             <h2 className="card-title">These are Tufty's favourite things:</h2>
//             <ul className="favourites">
//                 { favouritesList.map((favourite) => {
//                     return (
//                     <FavouiteThingsCard 
//                     key={ favourite.title } 
//                     favourite={ favourite} 
//                     handleRatingChange={handleRatingChange}
//                     />
//                 );
//                 }) }
//             </ul>
//         </section>
//     )
// }

// export default FavouriteThingsList