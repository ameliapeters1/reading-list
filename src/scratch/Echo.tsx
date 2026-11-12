import { useState, type ChangeEvent } from "react";


export default function Echo() {
    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value.toUpperCase())
    }

    const [text, setText] = useState("");
    return (
        <div>
        <label htmlFor="echo">Say something</label>
        <input id="echo" 
        type="text"
        value = {text}
        onChange={handleChange}
         />
        <p>You typed {text.length} characters.</p>
        </div>
    );
}