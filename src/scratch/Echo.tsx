import { useState, type ChangeEvent } from "react";


export default function Echo() {
    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value.toUpperCase())
    }

    function handlePageChange(event: ChangeEvent<HTMLInputElement>) {
        setPages(event.target.value);
    }

    const [text, setText] = useState("");
    const [pages, setPages] = useState("");

    return (
        <div>
        <label htmlFor="echo">Say something</label>
        <input id="echo" 
        type="text"
        value = {text}
        onChange={handleChange}
         />
        <select>
            <option value="scifi">scifi</option>
            <option value="fantasy">fantasy</option>
            <option value="childrens">childrens</option>
        </select>
        <input id="pages"
        type="number"
        value= {pages}
        onChange={handlePageChange}/>
        <p>Current page: {Number(pages)}</p>
        <p>You typed {text.length} characters.</p>
        </div>
    );
}