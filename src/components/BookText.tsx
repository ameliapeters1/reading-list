const book = {title: "The Very Hungry Caterpillar", author: "Eric Carle", genre: "Childrens"}

interface BookTextProps {
  title: string;
  author: string;
  genre: string;
}


function BookText({title, author, genre}: BookTextProps) {
    return (
    <>
        <p>{title}</p>
        <p>{author}</p>
        <p>{genre}</p>
    </>
    )
}

export default BookText



// List File (Book text)

// const favourites = [{title: "Smackos", rating: 10}, {title: "Football", rating: 7}, {title: "Dave", rating: 4}]

// function FavouriteThingsList() {
//     return (
//         <section>
//             <h2>These are Tufty's favourite things:</h2>
//             <ul>
//                 { favourites.map((favourite) => {
//                     return <FavouiteThingsCard key={ favourite.title } favourite={ favourite }/>
//                 }) }
//             </ul>
//         </section>
//     )
// }

// export default FavouriteThingsList