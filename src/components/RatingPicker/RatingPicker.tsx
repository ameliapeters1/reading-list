interface RatingPickerProps {
    value: number|null
    onChange: (rating:number)=>void
}

function RatingPicker({value, onChange}:RatingPickerProps){
    const ratings = [1,2,3,4,5]

    return(
        <fieldset className="filter-bar">
            <legend>Your rating</legend>
        {
            ratings.map((rating)=>
            <label>
            <input
                type="radio"
                name="rating"
                value={rating}
                checked={value ===rating}
                onChange={() => onChange(rating)}
            />
            {rating} {rating===1 ? "star":"stars"}
            </label>)
        }
        </fieldset>
    )
}

export default RatingPicker