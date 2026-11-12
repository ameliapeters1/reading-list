interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBox({value, onChange}: SearchBoxProps) {
    return(
        <>
            <label htmlFor="search-id">
                Search for books
            </label>
            <input 
            id="search-id"
            type="text"
            placeholder="search here"
            value={value}
            onChange={(event)=>onChange(event.target.value)}
            >
            </input>
            {value.length >0 && (<button type="button" onClick={() => onChange("")}>Clear</button>)}
        </>
    )
}

export default SearchBox